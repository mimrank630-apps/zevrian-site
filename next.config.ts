import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazon.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/Zevrian-Global-Company-Profile.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Zevrian-Global-Company-Profile.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
