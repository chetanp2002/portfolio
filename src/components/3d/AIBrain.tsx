"use client";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

type AIBrainProps = {
  scale?: number;
  position?: [number, number, number];
  isHovered?: boolean;
  color?: string;
  pulseColor?: string;
};

export default function AIBrain({ 
  scale = 1, 
  position = [0, 0, 0], 
  isHovered = false,
  color = '#4f46e5',
  pulseColor = '#10b981'
}: AIBrainProps) {
  const brainRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  // Create simplified neurons
  const neuronCount = 8; // Reduced count for better performance
  const neurons = Array.from({ length: neuronCount }, () => ({
    position: [
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    ] as [number, number, number],
    scale: 1
  }));
  
  // Spring animation for hover effect - simplified for Safari
  const { scaleSpring } = useSpring({
    scaleSpring: (isHovered || hovered) ? 1.2 : 1,
    config: { tension: 200, friction: 15 } // Adjusted for better Safari performance
  });
  
  // Simplified rotation for better performance
  useFrame((state) => {
    if (brainRef.current) {
      // Simplified rotation logic
      brainRef.current.rotation.y += 0.005;
      brainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <animated.group 
      ref={brainRef} 
      position={position} 
      scale={scaleSpring.to(s => [s * scale, s * scale, s * scale]) as any}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
    >
      {/* Simplified neurons for better Safari compatibility */}
      {neurons.map((neuron, i) => (
        <mesh 
          key={`neuron-${i}`}
          position={neuron.position}
        >
          <sphereGeometry args={[0.05, 8, 8]} /> {/* Lower poly count */}
          <meshStandardMaterial 
            color={color} 
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
      
      {/* Central brain sphere */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color={active || hovered ? pulseColor : color} 
          emissive={active || hovered ? pulseColor : color}
          emissiveIntensity={0.7}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </mesh>
    </animated.group>
  );
}
