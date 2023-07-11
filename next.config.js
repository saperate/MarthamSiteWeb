/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
      domains: ['images.unsplash.com','localhost'],
  },
}