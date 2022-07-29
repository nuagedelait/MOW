/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    SDKEY: process.env.SDKEY
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
