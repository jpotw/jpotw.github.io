/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For GitHub Pages, we need to disable image optimization
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 