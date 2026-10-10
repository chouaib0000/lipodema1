// Small fix-ups on the static export:
// - the Arabic page gets <html lang="ar-MA"> in its HTML file (one root layout serves both languages)
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const ar = path.join(dist, 'ar', 'index.html');
if (fs.existsSync(ar)) {
  fs.writeFileSync(ar, fs.readFileSync(ar, 'utf8').replace('<html lang="fr-MA"', '<html lang="ar-MA"'));
  console.log('postbuild: ar/index.html → lang="ar-MA"');
}
