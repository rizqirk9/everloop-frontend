/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'dev-fundrising.nashirjamali.com',
        port: '',
        pathname: '/uploads/**'
      }
    ]
  }
};

export default nextConfig;
