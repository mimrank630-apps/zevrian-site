/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages does not run the Next.js Image Optimization server.
  // Use unoptimized images (or a custom loader) so <Image> works on the edge.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Keep production builds resilient on the Cloudflare CI runner.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
