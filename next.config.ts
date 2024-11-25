import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/client/partner",
        destination: "https://dashboard.tokengamingaffiliates.xyz/api/client/partner",
      },
    ];
  },
};

export default nextConfig;
