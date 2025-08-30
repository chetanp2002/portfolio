"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Check if user has scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const menuVariants = {
    open: {
      clipPath: 'circle(1500px at calc(100% - 40px) 40px)',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: 'circle(30px at calc(100% - 40px) 40px)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
      ? 'py-3 glassmorphism bg-deep-black/60' 
      : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-neon-green bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            CHETAN PAWAR
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link 
                href={link.href}
                className="text-gray-300 hover:text-white hover:text-cyber-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="https://github.com/chetanp2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyber-blue transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FiGithub size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/data-scientist-chetan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyber-blue transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            href="chetanpawar2002official@gmail.com"
            className="text-gray-300 hover:text-cyber-blue transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <FiMail size={20} />
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
        
        {/* Mobile Menu */}
        <motion.div
          className="fixed top-0 right-0 bottom-0 w-full bg-deep-black/95 flex flex-col items-center justify-center md:hidden"
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
        >
          <div className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.1 * index }}
                className="text-2xl font-medium"
              >
                <Link 
                  href={link.href}
                  className="text-white hover:text-cyber-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-6 mt-8">
              <motion.a
                href="https://github.com/chetanp2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyber-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/data-scientist-chetan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyber-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 }}
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:chetanpawar2002official@gmail.com"
                className="text-white hover:text-cyber-blue transition-colors"
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                <FiMail size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
