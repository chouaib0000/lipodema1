// Prerenders every route to static HTML after `vite build`.
// Google, Bing and AI crawlers then receive the full page content, its own <title>,
// meta description, canonical URL and JSON-LD — without having to run JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, ROUTES, NOT_FOUND } = await import(pathToFileURL(ssrEntry).href);

const fill = (url) => {
  const { html, head } = render(url);
  if (!html || html.length < 500) throw new Error(`Prerender of ${url} produced almost no HTML`);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

const fileFor = (p) => (p === '/' ? 'index.html' : `${p.slice(1)}.html`);

for (const r of ROUTES) {
  fs.writeFileSync(path.join(dist, fileFor(r.path)), fill(r.path));
  console.log(`  prerendered ${r.path.padEnd(18)} → ${fileFor(r.path)}`);
}
fs.writeFileSync(path.join(dist, '404.html'), fill(NOT_FOUND.path));
console.log('  prerendered 404.html');

// Sitemap generated from the same route list, so it can never drift again.
const today = new Date().toISOString().slice(0, 10);
const SITE = 'https://lipoedem.ma';
const images = {
  '/': ['/2028/1.jpeg', '/2028/5.jpeg'],
  '/parcours': ['/2028/5.jpeg'],
  '/wal': ['/2028/1.jpeg'],
};
const xmlEsc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const urls = ROUTES.map((r) => {
  const loc = r.path === '/' ? `${SITE}/` : `${SITE}${r.path}`;
  const imgs = (images[r.path] || [])
    .map((i) => `\n    <image:image><image:loc>${xmlEsc(SITE + encodeURI(i))}</image:loc></image:image>`)
    .join('');
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>${imgs}\n  </url>`;
}).join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`
);
console.log(`  sitemap.xml with ${ROUTES.length} URLs`);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
