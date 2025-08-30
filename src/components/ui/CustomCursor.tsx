"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  // Component code remains the same
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOverLink, setIsOverLink] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };
    
    const handleLinkHover = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        setIsOverLink(true);
      } else {
        setIsOverLink(false);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleLinkHover);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);
  
  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 0.8 : isOverLink ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isOverLink ? '#10b981' : '#4f46e5'
        }}
        transition={{
          type: 'spring',
          damping: 30,
          mass: 0.5,
          stiffness: 300
        }}
      />
      
      {/* Trail effect */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 0.5 : 0.6,
          opacity: isVisible ? 0.3 : 0,
          borderColor: isOverLink ? '#10b981' : '#4f46e5'
        }}
        transition={{
          type: 'spring',
          damping: 40,
          mass: 0.8,
          stiffness: 200,
          delay: 0.05
        }}
      />
    </>
  );
}
