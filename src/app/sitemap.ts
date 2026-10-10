import type { MetadataRoute } from 'next';
import { ROUTES } from '../seo/routes';
import { GUIDE } from '../content/guide';
import { SITE, pageUrl } from '../config/site';

export const dynamic = 'force-static';

const IMAGES: Record<string, string[]> = {
  '/': ['/og/lipoedeme-maroc-fr.jpg', '/2028/1.jpeg', '/2028/5.jpeg'],
  '/ar': ['/og/lipoedeme-maroc-ar.jpg'],
  '/parcours': ['/2028/5.jpeg'],
  ...Object.fromEntries(GUIDE.filter((a) => a.image).map((a) => [`/guide/${a.slug}`, [a.image as string]])),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: pageUrl(r.path),
    lastModified: r.article ? new Date(r.article.updated) : now,
    changeFrequency: r.changefreq,
    priority: r.priority,
    images: (IMAGES[r.path] ?? []).map((i) => SITE.url + encodeURI(i)),
    alternates: r.alternates
      ? { languages: Object.fromEntries(r.alternates.map((a) => [a.hreflang, pageUrl(a.path)])) }
      : undefined,
  }));
}
