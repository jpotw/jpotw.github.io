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
  // If you're using a custom domain or a project repository, uncomment and adjust these
  // basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/blog' : '',
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
}

module.exports = nextConfig 