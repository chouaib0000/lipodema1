/** @type {import('next').NextConfig} */

// Hosted on Vercel. Every page is still pre-rendered at build time (static HTML on Vercel's CDN);
// Vercel also applies the redirects and headers below.
const longCache = 'public, max-age=2592000, stale-while-revalidate=86400'; // 30 days for photos/videos

const nextConfig = {
  // URLs end with a slash: /maladie/ (Vercel redirects /maladie → /maladie/ with a 308).
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,

  async redirects() {
    return [
      // One single domain for Google: www.lipoedem.ma → lipoedem.ma (if www is attached to this Vercel project)
      { source: '/:path*', has: [{ type: 'host', value: 'www.lipoedem.ma' }], destination: 'https://lipoedem.ma/:path*', permanent: true },
      // Old canonical / hreflang URLs that never existed – pass their signals to the real pages
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
      { source: '/en/:path+', destination: '/:path+', permanent: true },
      { source: '/accueil', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/blog', destination: '/actualites/', permanent: true },
      { source: '/blog/:path*', destination: '/actualites/', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
      ...['2026', '2027', '2028', '2030', '2031', 'photo', 'img', 'og', 'video', 'bra2'].map((dir) => ({
        source: `/${dir}/:path*`,
        headers: [{ key: 'Cache-Control', value: longCache }],
      })),
      { source: '/llms.txt', headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }] },
    ];
  },
};

export default nextConfig;
