import type { MetadataRoute } from 'next';
import { ROUTES } from '../seo/routes';
import { GUIDE } from '../content/guide';
import { SITE, pageUrl } from '../config/site';
import { VIDEOS, PAGE_VIDEOS } from '../content/videos';

export const dynamic = 'force-static';

const IMAGES: Record<string, string[]> = {
  '/': ['/og/lipoedeme-maroc-fr.jpg', '/2028/1.webp', '/2028/5.webp'],
  '/ar': ['/og/lipoedeme-maroc-ar.jpg'],
  '/parcours': ['/2028/5.webp'],
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
    videos: (PAGE_VIDEOS[r.path] ?? []).map((id) => {
      const v = VIDEOS[id];
      return { title: v.name, description: v.description, thumbnail_loc: SITE.url + v.thumbnailUrl, content_loc: SITE.url + v.contentUrl, publication_date: v.uploadDate };
    }),
    alternates: r.alternates
      ? { languages: Object.fromEntries(r.alternates.map((a) => [a.hreflang, pageUrl(a.path)])) }
      : undefined,
  }));
}
