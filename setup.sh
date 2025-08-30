#!/bin/bash

# Navigate to the project directory
cd /Users/Rahul/Desktop/rahul-portfolio

# Install dependencies
npm install next react react-dom typescript @types/node @types/react @types/react-dom
npm install three @react-three/fiber @react-three/drei
npm install framer-motion
npm install react-icons
npm install react-type-animation
npm install tailwindcss postcss autoprefixer
npm install @react-spring/three
npm install gsap

# Initialize Tailwind CSS
npx tailwindcss init -p

# Start the development server
echo "Setup complete! Run 'npm run dev' to start the development server."
