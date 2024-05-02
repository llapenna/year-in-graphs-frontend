/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/not-authorized',
        destination: '/',
        permanent: false,
        has: [{ type: 'cookie', key: 'userId' }],
      },
      {
        source: '/',
        destination: '/not-authorized',
        permanent: false,
        missing: [{ type: 'cookie', key: 'userId' }],
      },
    ];
  },
};

export default nextConfig;
