import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer: _isServer }) => {
    // Add your custom webpack configuration here
    return config;
  },
  images: {
    remotePatterns: [{ hostname: 'flowbite.s3.amazonaws.com' }, { hostname: 'cdn.sanity.io' }],
  },
};

export default nextConfig;
