"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

type ParticleFieldProps = {
  count?: number;
  size?: number;
  color?: string;
  areaSize?: number;
  speed?: number;
  position?: [number, number, number];
};

export default function ParticleField({
  count = 300, // Reduced for better performance
  size = 0.02,
  color = '#4f46e5',
  areaSize = 10,
  speed = 0.03, // Reduced for better performance
  position = [0, 0, 0],
}: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null);
  
  // Create particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * areaSize;
      const y = (Math.random() - 0.5) * areaSize;
      const z = (Math.random() - 0.5) * areaSize;
      
      // Add velocity for animation - simplified for Safari
      const vx = (Math.random() - 0.5) * 0.005;
      const vy = (Math.random() - 0.5) * 0.005;
      const vz = (Math.random() - 0.5) * 0.005;
      
      temp.push({ x, y, z, vx, vy, vz });
    }
    return temp;
  }, [count, areaSize]);
  
  // Create positions Float32Array
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = particles[i].x;
      pos[i * 3 + 1] = particles[i].y;
      pos[i * 3 + 2] = particles[i].z;
    }
    return pos;
  }, [count, particles]);
  
  // Simplified animation for Safari
  useFrame(() => {
    if (!points.current) return;
    
    const positionAttribute = points.current.geometry.getAttribute('position') as THREE.BufferAttribute;
    
    // Update only some particles each frame for better performance
    const updateCount = Math.min(count, 100); // Update at most 100 particles per frame
    const startIdx = Math.floor(Math.random() * (count - updateCount));
    
    for (let i = startIdx; i < startIdx + updateCount; i++) {
      const idx = i % count; // Wrap around if needed
      const p = particles[idx];
      
      // Basic movement - simplified
      p.x += p.vx * speed;
      p.y += p.vy * speed;
      p.z += p.vz * speed;
      
      // Boundary check
      const halfSize = areaSize / 2;
      if (Math.abs(p.x) > halfSize) p.vx *= -1;
      if (Math.abs(p.y) > halfSize) p.vy *= -1;
      if (Math.abs(p.z) > halfSize) p.vz *= -1;
      
      // Update position attribute
      positionAttribute.setXYZ(idx, p.x, p.y, p.z);
    }
    
    // Only update the needed vertices
    positionAttribute.needsUpdate = true;
  });
  
  return (
    <group position={position}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          vertexColors={false} // Disable for better Safari compatibility
        />
      </points>
    </group>
  );
}
