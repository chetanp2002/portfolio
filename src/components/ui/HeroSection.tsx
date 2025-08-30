"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroScene from '../3d/HeroScene';
import { FiArrowDown, FiCode, FiDatabase, FiCpu } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Dynamically import TypeAnimation with no SSR
const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false }
);

// Safari detection
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

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsSafariBrowser(isSafari());
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col h-screen justify-center items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-3xl"
        >
          {/* Greeting */}
          <motion.p 
            className="text-cyber-blue mb-2 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          
          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyber-blue via-light-purple to-neon-green bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            CHETAN PAWAR
          </motion.h1>
          
          {/* Dynamic title - use TypeAnimation for Chrome, static text for Safari */}
          <motion.div 
            className="text-xl md:text-2xl mb-6 text-gray-300 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {mounted && TypeAnimation && !isSafariBrowser ? (
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  1000,
                  'RAG Specialist',
                  1000,
                  'AI/ML Engineer',
                  1000,
                  'GenAI Engineer',
                  1000,
                  'Prompt Engineer',
                  1000
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="font-mono"
              />
            ) : (
              <span className="font-mono">AI Software Engineer</span>
            )}
          </motion.div>
          
          {/* Brief intro */}
          <motion.p 
            className="text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Building intelligent, production-ready AI systems and full-stack applications
            with expertise in LLMs, RAG, and multimodal AI agents.
          </motion.p>
          
          {/* Skill badges - retain animations for Chrome, simpler for Safari */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div 
              className="flex items-center bg-dark-purple/50 border border-light-purple/30 px-4 py-2 rounded-full"
              whileHover={isSafariBrowser ? undefined : { scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
            >
              <FiCpu className="mr-2 text-cyber-blue" />
              <span className="text-sm">Data</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center bg-dark-purple/50 border border-light-purple/30 px-4 py-2 rounded-full"
              whileHover={isSafariBrowser ? undefined : { scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
            >
              <FiCode className="mr-2 text-cyber-blue" />
              <span className="text-sm">AIML</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center bg-dark-purple/50 border border-light-purple/30 px-4 py-2 rounded-full"
              whileHover={isSafariBrowser ? undefined : { scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
            >
              <FiDatabase className="mr-2 text-cyber-blue" />
              <span className="text-sm">GenAI</span>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons - retain animations for Chrome, simpler for Safari */}
          <motion.div 
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a 
              href="#projects"
              className="cyber-button"
              whileHover={isSafariBrowser ? undefined : { scale: 1.05 }}
              whileTap={isSafariBrowser ? undefined : { scale: 0.95 }}
            >
              View Projects
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="px-6 py-3 bg-transparent border border-cyber-blue text-white rounded-md 
                      hover:bg-cyber-blue/20 transition-all duration-300"
              whileHover={isSafariBrowser ? undefined : { scale: 1.05 }}
              whileTap={isSafariBrowser ? undefined : { scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

              <motion.a 
                href="/resume.pdf"
                download
                className="cyber-button"
                whileHover={isSafariBrowser ? undefined : { scale: 1.05 }}
                whileTap={isSafariBrowser ? undefined : { scale: 0.95 }}
              >
                Get Resume
              </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator - simplify animation for Safari */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={isSafariBrowser ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown className="text-cyber-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
