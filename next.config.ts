import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api-staging.devaff.softswiss.net/api/:path*',
      },
    ];
  },
};

export default nextConfig;
