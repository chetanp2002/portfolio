// /** @type {import('next').NextConfig} */
// module.exports = {
//   output: 'export',
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
//   webpack: (config) => {
//     // Add basic fallbacks for Safari
//     config.resolve.fallback = { 
//       ...config.resolve.fallback,
//       fs: false,
//     };
    
//     return config;
//   },
// }
// /** @type {import('next').NextConfig} */
// module.exports = {
//   output: 'export', // needed for static export
  
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    // Add basic fallbacks for Safari
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false,
    };
    
    return config;
  },
}

module.exports = nextConfig;