import { SITE, absUrl } from '../config/site';
import type { RouteMeta } from './routes';
import { buildSchema } from './schema';

export interface HeadTag {
  tag: 'meta' | 'link';
  attrs: Record<string, string>;
}

export function canonicalFor(route: RouteMeta) {
  return route.path === '/' ? `${SITE.url}/` : `${SITE.url}${route.path}`;
}

export function headTags(route: RouteMeta): HeadTag[] {
  const url = canonicalFor(route);
  const image = absUrl(route.image ?? SITE.ogImage);
  const isNotFound = route.path === '/404';
  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: route.description } },
    { tag: 'meta', attrs: { name: 'robots', content: isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' } },
    { tag: 'meta', attrs: { property: 'og:title', content: route.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: route.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: route.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: route.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ];
  if (route.kind === 'home') {
    // Start downloading the hero portrait immediately (Largest Contentful Paint).
    tags.push({ tag: 'link', attrs: { rel: 'preload', as: 'image', href: SITE.heroImage, type: 'image/webp', fetchpriority: 'high' } });
  }
  tags.push({ tag: 'meta', attrs: { property: 'og:locale', content: route.lang === 'ar' ? 'ar_MA' : 'fr_FR' } });
  if (!isNotFound) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
    const alts = route.alternates ?? [{ hreflang: 'fr', path: route.path }];
    for (const a of alts) {
      tags.push({ tag: 'link', attrs: { rel: 'alternate', hreflang: a.hreflang, href: a.path === '/' ? `${SITE.url}/` : `${SITE.url}${a.path}` } });
    }
    const xDefault = alts.find((a) => a.hreflang === 'fr')?.path ?? route.path;
    tags.push({ tag: 'link', attrs: { rel: 'alternate', hreflang: 'x-default', href: xDefault === '/' ? `${SITE.url}/` : `${SITE.url}${xDefault}` } });
  }
  return tags;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Server side: HTML string injected into the prerendered page. */
export function renderHead(route: RouteMeta): string {
  const tags = headTags(route)
    .map((t) => `<${t.tag} ${Object.entries(t.attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ')} data-seo />`)
    .join('\n    ');
  const json = JSON.stringify(buildSchema(route)).replace(/</g, '\\u003c');
  return `<title>${esc(route.title)}</title>\n    ${tags}\n    <script type="application/ld+json" id="ld-graph">${json}</script>`;
}

/** Browser side: keep <head> in sync when navigating client-side. */
export function applyHead(route: RouteMeta) {
  document.title = route.title;
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  for (const t of headTags(route)) {
    const el = document.createElement(t.tag);
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
    el.setAttribute('data-seo', '');
    document.head.appendChild(el);
  }
  let ld = document.getElementById('ld-graph');
  if (!ld) {
    ld = document.createElement('script');
    ld.setAttribute('type', 'application/ld+json');
    ld.id = 'ld-graph';
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(buildSchema(route));
}
