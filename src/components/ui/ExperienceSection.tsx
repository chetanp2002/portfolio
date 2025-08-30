"use client";

import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function ExperienceSection() {
  const experience = [
    {
      title: 'Data Analytics and Visualization Job Simulation',
      company: ' Accenture North America',
      location: 'Remote',
      duration: 'Jan 2024 - Feb 2024',
      description: [
         'Conducted a data analysis simulation at Accenture for a social media client, providing insights for strategic recommendations.',
         'Cleaned and analyzed 7 datasets to identify trends, enhancing decision-making.' ,
         'Created a PowerPoint and video presentation viewed by 20+ stakeholders, driving alignment on project priorities.'
      ]
    },
    {
      title: 'Data Analytics Intern',
      company: ' Alfido Tech ',
      location: 'Remote',
      duration: 'Sep 2023 - Oct 2023',
      description: [
        'Analyzed diverse datasets to extract actionable insights.',
        'Improved forecasting accuracy through data trends analysis.',
        'Optimized resource allocation and customer experience using data insights.'
      ]
    }
  ];
  
  const certifications = [
    {
      title: 'Career Essentials in Data Analysis',
      issuer: 'Microsoft & LinkedIn',
      // year: '2023'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Infosys Springboard',
      // year: '2023'
    },
     {
      title: 'Complete Machine Learning, NLP Bootcamp, MLOPS & Deployment',
      issuer: 'Krish Naik, Udemy',
      // year: '2023'
    }
  ];
  
  const leadership = [
    {
      title: 'Corporal, National Cadet Corps',
      achievement: '1st Place in Briefing (2023)',
    },
    {
      title: 'STEM Lead, Chote Scientist',
      achievement: 'Conducted AI/STEM workshops for 60+ underprivileged students',
    },
    {
      title: 'Community Volunteer',
      achievement: 'Organized and led book donation drives for underserved schools',
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-space-gray to-deep-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Experience & Achievements</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glassmorphism p-8">
              <div className="flex items-center mb-6">
                <FiBriefcase className="text-cyber-blue text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="border-l-2 border-light-purple pl-6 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-light-purple"></div>
                    
                    <h4 className="text-xl font-bold text-white">{job.title}</h4>
                    <p className="text-cyber-blue font-medium">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-3 text-sm text-gray-300">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1" />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Certifications & Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div className="glassmorphism p-8">
              <div className="flex items-center mb-6">
                <FiAward className="text-cyber-blue text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="border border-light-purple/30 rounded-lg p-4 hover:border-light-purple transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                    <p className="text-gray-300">{cert.issuer}</p>
                    {/* <p className="text-cyber-blue text-sm">{cert.year}</p> */}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Leadership & Volunteering */}
            <div className="glassmorphism p-8">
              <div className="flex items-center mb-6">
                <FiAward className="text-cyber-blue text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-white">Leadership & Volunteering</h3>
              </div>
              
              <div className="space-y-4">
                {leadership.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="border border-light-purple/30 rounded-lg p-4 hover:border-light-purple transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
