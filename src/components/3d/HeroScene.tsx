"use client";

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  OrbitControls,
  Environment,
  useProgress,
  Html,
  Float
} from '@react-three/drei';
import AIBrain from './AIBrain';
import ParticleField from './ParticleField';

// Safari detection function
const isSafari = () => {
  if (typeof window === 'undefined') return false;
  
  const ua = window.navigator.userAgent;
  return (
    ua.includes('Safari') && 
    !ua.includes('Chrome') && 
    !ua.includes('Firefox') && 
    !ua.includes('Edge')
  );
};

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <span className="loader"></span>
        <p className="mt-4 text-sm font-mono">{progress.toFixed(2)}% loaded</p>
      </div>
    </Html>
  );
}

// Simplified scene for Safari only
function SafariScene() {
  return (
    <div className="w-full h-full absolute inset-0 bg-deep-black">
      <div className="absolute inset-0 opacity-20">
        {/* Static background with animated dots for Safari */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyber-blue animate-pulse"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Central brain visualization */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyber-blue to-light-purple animate-pulse opacity-60"></div>
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 rounded-full bg-neon-green"
            style={{ 
              left: `${50 + Math.cos(i * Math.PI/3) * 100}px`, 
              top: `${50 + Math.sin(i * Math.PI/3) * 100}px`,
              animationDelay: `${i * 0.3}s`,
              animation: 'float 3s ease-in-out infinite'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// Original 3D scene for Chrome and other browsers
function ChromeScene() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#4f46e5" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
        
        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <AIBrain scale={1.2} position={[0, 0, 0]} />
        </Float>
        
        <ParticleField 
          count={500}
          areaSize={10}
          position={[0, 0, 0]}
        />
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}

export default function HeroScene() {
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);
  
  useEffect(() => {
    setIsSafariBrowser(isSafari());
  }, []);
  
  // Use different scenes based on browser
  return (
    <div className="w-full h-[100vh]">
      {isSafariBrowser ? <SafariScene /> : <ChromeScene />}
    </div>
  );
}
