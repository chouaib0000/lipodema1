// Tells Bing / Yandex / Seznam (IndexNow) that the site changed, right after a
// production deploy on Vercel. Bing's index feeds ChatGPT search and Copilot, so
// new or updated pages get picked up in hours instead of weeks.
// Runs only on Vercel production builds; does nothing locally or on previews.
import { readFileSync } from 'node:fs';

const KEY = 'db9810b88c56460785c5572b93623f99';
const HOST = 'lipoedem.ma';

if (process.env.VERCEL_ENV !== 'production') {
  console.log('[indexnow] skipped (not a production deploy)');
  process.exit(0);
}

try {
  // URLs come from the prerendered sitemap in the build output
  const xml = readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
  const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });
  console.log(`[indexnow] ${urlList.length} URLs submitted → HTTP ${res.status}`);
} catch (e) {
  // Never fail the deploy because of this
  console.log('[indexnow] not sent:', e instanceof Error ? e.message : e);
}
