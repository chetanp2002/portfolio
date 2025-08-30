"use client";

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-deep-black py-12 border-t border-light-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-neon-green bg-clip-text text-transparent">
              CHETAN PAWAR
            </h3>
            <p className="text-gray-400 mt-2">
              Building the future with AI and code
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/chetanp2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/data-scientist-chetan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:chetanpawar2002official@gmail.com"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Chetan Pawar. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Crafted with Next.js, Three.js, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
