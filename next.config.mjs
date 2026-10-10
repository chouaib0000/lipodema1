/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML files (one per page) to /dist.
  // Hosting works exactly as before (Netlify / any static host) – no Node server to run.
  output: 'export',
  distDir: 'dist',
  // Pages are written as /maladie/index.html and served at /maladie/ – works on every static host
  // (Netlify, Apache, Nginx, S3, Cloudflare Pages) without special rewrite rules.
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
