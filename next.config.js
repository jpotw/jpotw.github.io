/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For GitHub Pages, we need to disable image optimization
  images: {
    unoptimized: true,
  },
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // For username.github.io repositories, we don't need a basePath
  // basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  
  // For username.github.io repositories, we don't need an assetPrefix
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/blog' : '',
}

module.exports = nextConfig 