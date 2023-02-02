/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return {
      ...(process.env.NODE_ENV === 'development' && {
        fallback: [
          {
            source: '/:path*',
            destination: 'http://127.0.0.1:5173/:path*'
          }
        ]
      })
    }
  }
}

module.exports = nextConfig
