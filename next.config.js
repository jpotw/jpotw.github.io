/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For GitHub Pages, we need to disable image optimization
  images: {
    unoptimized: true,
  },
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Add basePath for GitHub Pages
  // If your repo name is different, change this to match your repo name
  // If you're using a custom domain or username.github.io repo, you can remove this
  basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  
  // Add assetPrefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/blog' : '',
}

module.exports = nextConfig 