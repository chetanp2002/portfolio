#!/bin/bash

# Navigate to the project directory
cd /Users/sathvik/Desktop/sathvik-portfolio

# Check if the out directory exists
if [ -d "out" ]; then
  echo "Build completed successfully. The 'out' directory is ready for deployment."
  echo "Files to upload to Hostinger:"
  ls -la out/
else
  echo "The 'out' directory was not found. The build might not have completed successfully."
  echo "Please run 'npm run build' again or check for errors."
fi
