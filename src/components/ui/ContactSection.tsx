"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_aiczxpm',   // replace with your EmailJS Service ID
      'template_1wprhxa',  // replace with your EmailJS Template ID
      formData,            // { name, email, message }
      'ylBcbVyfHmcv-QsSf'    // replace with your EmailJS Public Key
    )
    .then(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' }); // clear form
    })
    .catch((error: unknown) => {
      console.error('Email send error:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again.');
    });
  };

  

  return (
    <section id="contact" className="py-20 bg-deep-black relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neuralGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4f46e5" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="2" fill="#4f46e5" />
              <circle cx="50" cy="0" r="2" fill="#4f46e5" />
              <circle cx="0" cy="50" r="2" fill="#4f46e5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralGrid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Have a question about my work?
            Feel free to reach out using the form below or connect with me directly.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glassmorphism p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-dark-purple/50 p-3 rounded-full mr-4">
                  <FiMail className="text-cyber-blue text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a 
                    href="mailto:chetanpawar2002official@gmail.com" 
                    className="text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    chetanpawar2002official@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-dark-purple/50 p-3 rounded-full mr-4">
                  <FiPhone className="text-cyber-blue text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <a 
                    href="tel:+919359208098" 
                    className="text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    +91 93592 08098
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-dark-purple/50 p-3 rounded-full mr-4">
                  <FiLinkedin className="text-cyber-blue text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/data-scientist-chetan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyber-blue transition-colors break-words"
                  >
                    https://www.linkedin.com/in/data-scientist-chetan
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-dark-purple/50 p-3 rounded-full mr-4">
                  <FiGithub className="text-cyber-blue text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">GitHub</h4>
                  <a 
                    href="https://github.com/chetanp2002" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    https://github.com/chetanp2002
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Send a Message</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-neon-green/20 border border-neon-green text-white p-4 rounded-lg mb-4"
                >
                  <p className="text-center">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-purple/30 border border-light-purple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-light-purple transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-purple/30 border border-light-purple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-light-purple transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-dark-purple/30 border border-light-purple/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-light-purple transition-colors"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="cyber-button w-full flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loader" style={{ width: '24px', height: '24px' }}></span>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
