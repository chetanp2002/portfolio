"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  
  const featuredProjects = [
    {
      title: 'RepoBot-AI',
      description: 'Repobot AI is a powerful AI-driven web application designed to revolutionize code exploration and understanding. By integrating Flask, Groq AI, and Chroma, it transforms GitHub repositories into interactive knowledge hubs, enabling users to ask questions and gain deep insights from complex codebases. With automated repository ingestion and indexing.',
      technologies: ['Langchain', 'Vectordb', 'Embeddings'],
      category: 'GenAI',
      // thumbnail: '/images/projects/voice-journal.jpg',
      link: 'https://repobot-ai.onrender.com',
      github: 'https://github.com/chetanp2002/RepoBot-AI',
      featured: true
    },
    {
      title: 'Food-Delivery-Prediction',
      description: '"Optimizing Food Delivery with Machine Learning" This project uses machine learning to predict food delivery times by analyzing factors like distance, weather, and traffic. It helps improve delivery efficiency and customer satisfaction, making the food delivery process smarter and faster.',
      technologies: ['EDA', 'xgboost', 'geopy'],
      category: 'ML',
      link: 'https://food-delivery-prediction.onrender.com',
      github: 'https://github.com/chetanp2002/Food-Delivery-Prediction'
    },
    {
      title: 'Airline-Passenger-Referral-Prediction',
      description: 'This project predicts whether airline passengers would recommend an airline to their friends using machine learning techniques. By analyzing customer reviews (2016–2019), it leverages data preprocessing, visualization, and multiple algorithms to derive insights and build a robust predictive model.',
      technologies: ['Python', 'scikit-learn', 'gradio'],
      category: 'ML',
      link: 'https://airline-passenger-referral-prediction.onrender.com',
      github: 'https://github.com/chetanp2002/Airline-Passenger-Referral-Prediction'
    },
    {
      title: 'JobMate',
      description: 'JobMate is an AI-powered tool that helps job seekers optimize their resumes for ATS (Applicant Tracking Systems). By analyzing resumes against specific job descriptions, it identifies missing keywords, evaluates ATS compatibility, and provides actionable suggestions to improve your profile. With detailed customized reports, Smart ATS ensures your',
      technologies: ['Gemini-pro', 'Pypdf2', 'Langchain'],
      category: 'GenAI',
      // thumbnail: '/images/projects/store-assistant.jpg',
      link: 'https://jobmate-clqngceyunn6aee5dfxays.streamlit.app/',
      github: 'https://github.com/chetanp2002/JobMate',
      featured: true
    },
    {
      title: 'finacial-agent-with-phidata',
      description: 'Financial Chatbot built with Streamlit and PHI. It provides real-time stock data using the YFinanceTools API, allowing users to query financial information easily.',
      technologies: ['Python', 'Groq', 'YFinanceTools'],
      category: 'Agentic AI',
      // thumbnail: '/images/projects/equity-research.jpg',
      // link: '',
      github: 'https://github.com/chetanp2002/finacial-agent-with-phidata',
      featured: true
    },
    {
      title: 'Movie-Recommender-System',
      description: 'This Movie Recommender System suggests personalized movie recommendations using Natural Language Processing (NLP), Word2Vec, and Cosine Similarity. Deployed with Streamlit, it offers an interactive and seamless experience for users to discover their next favorite movie effortlessly.',
      technologies: ['Python', 'NLP', 'Word2Vec'],
      category: 'ML',
      // thumbnail: '/images/projects/xencapture.jpg',
      link: 'https://movie-recommender-system-2lex.onrender.com',
      github: 'https://github.com/chetanp2002/Movie-Recommender-System',
      featured: true
    },
   {
      title: 'Student_Performance',
      description: 'A complete end-to-end ML solution to predict student math scores, combining MLflow for experiment tracking, DVC for version control, and Docker for seamless deployment. Scalable, reproducible, and production-ready.',
      technologies: ['Python', 'MLFlow', 'DVC'],
      category: 'ML',
      link: 'https://edupred-student-performance-predictor.onrender.com',
      github: 'https://github.com/chetanp2002/Student_Performance'
    },
    {
      title: 'Suna',
      description: 'Suna - Open Source Generalist AI Agent',
      technologies: ['AI agent', 'Python', 'API'],
      category: 'Open Source',
      link: 'https://www.suna.so',
      github: 'https://github.com/chetanp2002/suna'
    }
  ];
  
  const additionalProjects = [
    
    {
      title: 'AI-CodeMate-using-DeepSeek',
      // description: '', //pending
      technologies: ['Ollama', 'DeepSeek', 'Streamlit'],
      category: 'GenAI',
      // thumbnail: '/images/projects/video-editor.jpg',
      link: 'https://ai-codemate-using-deepseek-kxzgu55tughqghjbbg65ff.streamlit.app/',
      github: 'https://github.com/chetanp2002/AI-CodeMate-using-DeepSeek',
      featured: true
    },
     {
      title: 'Forest-Fire-Prediction',
      // description: '.',  //pending
      technologies: ['pandas', 'scikit-learn', 'flask'],
      category: 'ML',
      // thumbnail: '/images/projects/agent-tools.jpg',
      link: 'https://forest-fire-prediction-km0r.onrender.com',
      github: 'https://https://github.com/chetanp2002/Agent-with-tools',
      featured: true
    },
    
    {
      title: 'customer-churn-prediction',
      // description: '', //pending
      technologies: ['Python', 'tensorflow', 'scikit-learn'],
      category: 'DL',
      link: 'https://customer-churn-prediction-ijrz2zwttocaqgakvc98vw.streamlit.app/',
      github: 'https://github.com/chetanp2002/customer-churn-prediction'
    },
    {
      title: 'Student_performance_analysis',
      description: 'This project delves into the key factors impacting student performance, from demographics to study habits. Leveraging Python for in-depth analysis and visualizations, it reveals actionable insights to enhance academic success and optimize learning outcomes.',
      technologies: ['Python', 'Numpy', 'Pandas'],
      category: 'Data Analysis',
      // link: '',
      github: 'https://github.com/chetanp2002/Student_performance_analysis'
    },
    {
      title: 'Amazon-Prime-Data-Analysis',
      // description: '',
      technologies: ['PowerBI', 'Dashboard', 'Matplotlib'],
      category: 'Data Analysis',
      // link: '',
      github: 'https://github.com/chetanp2002/Amazon-Prime-Data-Analysis'
    },
    {
      title: 'Cricket-World-Cup-data-analytics-Dashboard-',
      // description: '',
      technologies: ['PowerBI', 'Visualization', 'Dashboard'],
      category: 'Data Analysis',
      // link: '',
      github: 'https://github.com/chetanp2002/Cricket-World-Cup-data-analytics-Dashboard-'
    },
    {
      title: 'Covid-19-analysis-dashboard',
      // description: ' ',
      technologies: ['Tableau', 'PowerBI'],
      category: 'Data Analysis',
      // link: '',
      github: 'https://github.com/chetanp2002/Covid-19-analysis-dashboard'
    },
    {
      title: 'Road-Accident-Analysis-Dashboard',
      // description: '  ',
      technologies: ['MS Excel', 'Dashboard', 'Pivot'],
      category: 'Data Analysis',
      // link: '',
      github: 'https://github.com/chetanp2002/Road-Accident-Analysis-Dashboard'
    },
    
  ];
  
  // Filter projects based on selected category and view state
  const displayProjects = showAll ? 
    [...featuredProjects, ...additionalProjects] : 
    featuredProjects;
  
  const filteredProjects = selectedCategory === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-space-gray relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10"
        style={{ backgroundSize: '40px 40px' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">{showAll ? 'All Projects' : 'Featured Projects'}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest work combining AI, machine learning, and full-stack development
            to create innovative solutions.
          </p>
        </motion.div>
        
        {/* Project category filter */}
        <motion.div 
          className="flex justify-center mb-12 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {['All', 'GenAI', 'Agentic AI', 'ML', 'DL', 'Data Analysis', 'Open Source'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-light-purple text-white border-light-purple'
                  : 'bg-transparent text-gray-300 border-gray-700 hover:border-light-purple'
              } transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 6) }} // Limit delay calculation
              className="glassmorphism overflow-hidden group h-full"
            >
              <div className="h-48 bg-gradient-to-br from-dark-purple to-space-gray overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 bg-dark-purple/50 rounded-md text-cyber-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col justify-between flex-grow">
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-end space-x-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                  
                  {project.link && project.link !== project.github && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Toggle Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href={showAll ? "#projects" : "#all-projects"}
            onClick={(e) => {
              e.preventDefault();
              setShowAll(!showAll);
              setSelectedCategory('all');
              // Scroll to projects section when toggling
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cyber-button inline-flex items-center cursor-pointer"
          >
            {showAll ? 'Show Featured Projects' : 'View All Projects'}
            <FiChevronRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
