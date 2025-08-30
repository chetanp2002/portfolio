"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Text, 
  Float, 
  Html, 
  RoundedBox, 
  Environment,
  useTexture
} from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  thumbnail?: string;
  link?: string;
  position: [number, number, number];
  index: number;
};

function ProjectCard({ 
  title, 
  description, 
  technologies, 
  thumbnail = '', 
  link = '',
  position,
  index
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const mesh = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  
  // Handle texture loading manually to avoid errors
  useEffect(() => {
    if (thumbnail) {
      const loader = new THREE.TextureLoader();
      loader.load(
        thumbnail,
        (loadedTexture) => {
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.error('Error loading texture:', error);
        }
      );
    }
  }, [thumbnail]);
  
  // Spring animations
  const { scale, rotation, positionZ } = useSpring({
    scale: hovered ? 1.1 : 1,
    rotation: active ? [0, Math.PI, 0] : [0, 0, 0],
    positionZ: active ? 0.5 : 0,
    config: { mass: 1, tension: 170, friction: 26 }
  });
  
  // Subtle floating animation
  useFrame((state) => {
    if (mesh.current) {
      const t = state.clock.elapsedTime + index;
      mesh.current.position.y = position[1] + Math.sin(t * 0.5) * 0.05;
    }
    
    if (textRef.current && !active) {
      textRef.current.lookAt(0, 0, 5);
    }
  });
  
  const handleClick = () => {
    setActive(!active);
    if (link && !active) {
      // Open link in new tab after animation completes
      setTimeout(() => {
        window.open(link, '_blank');
      }, 500);
    }
  };
  
  return (
    <animated.group
      position={position}
      rotation={rotation as any}
    >
      <animated.mesh
        ref={mesh}
        scale={scale as any}
        position-z={positionZ}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        {/* Card front */}
        <RoundedBox args={[2, 1.2, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color={hovered ? "#6366f1" : "#4f46e5"} 
            metalness={0.5} 
            roughness={0.2}
          />
        </RoundedBox>
        
        {/* Project title */}
        <Text
          ref={textRef}
          position={[0, 0.35, 0.06]}
          fontSize={0.12}
          maxWidth={1.8}
          lineHeight={1.2}
          letterSpacing={0.02}
          textAlign="center"
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
        
        {/* Thumbnail image if provided and loaded */}
        {thumbnail && texture && (
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[1.8, 0.6]} />
            <meshBasicMaterial map={texture} transparent opacity={0.8} />
          </mesh>
        )}
        
        {/* Technologies */}
        <group position={[0, -0.4, 0.06]}>
          {technologies.slice(0, 3).map((tech, i) => (
            <Text
              key={i}
              position={[(i - 1) * 0.6, 0, 0]}
              fontSize={0.06}
              color="#10b981"
              anchorX="center"
              anchorY="middle"
            >
              {tech}
            </Text>
          ))}
        </group>
      </animated.mesh>
      
      {/* Card back (shown when active) */}
      <animated.mesh
        position={[0, 0, -0.05]}
        rotation={[0, Math.PI, 0]}
        scale={scale as any}
        visible={active}
      >
        <RoundedBox args={[2, 1.2, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color="#1e1b4b" 
            metalness={0.5} 
            roughness={0.2}
          />
        </RoundedBox>
        
        <Text
          position={[0, 0.4, 0.06]}
          fontSize={0.1}
          maxWidth={1.8}
          lineHeight={1.2}
          letterSpacing={0.02}
          textAlign="center"
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
        
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.07}
          maxWidth={1.8}
          lineHeight={1.2}
          letterSpacing={0.02}
          textAlign="center"
          color="#e2e8f0"
          anchorX="center"
          anchorY="middle"
        >
          {description.length > 150 ? description.slice(0, 150) + '...' : description}
        </Text>
        
        <Text
          position={[0, -0.4, 0.06]}
          fontSize={0.08}
          maxWidth={1.8}
          lineHeight={1.2}
          letterSpacing={0.02}
          textAlign="center"
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          {link ? 'Click to view project' : 'Coming soon'}
        </Text>
      </animated.mesh>
    </animated.group>
  );
}

export default function ProjectShowcase({ projects }: { projects: any[] }) {
  return (
    <div className="w-full h-[50vh] md:h-[70vh]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#4f46e5" />
        <pointLight position={[-10, -10, -10]} color="#10b981" />
        
        {projects.map((project, index) => {
          // Calculate position in a grid or circle
          const angle = (index / projects.length) * Math.PI * 2;
          const radius = 3;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          
          return (
            <ProjectCard
              key={index}
              {...project}
              position={[x, 0, z]}
              index={index}
            />
          );
        })}
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
