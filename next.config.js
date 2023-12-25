/** @type {import('next').NextConfig} */
const nextConfig = {

  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'https://dev.api.learn-to-code.io/:path*'
      }
    ]
  }

}

module.exports = nextConfig
