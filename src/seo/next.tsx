import type { Metadata } from 'next';
import { SITE, pageUrl } from '../config/site';
import { getRoute, type RouteMeta } from './routes';
import { buildSchema } from './schema';
import Breadcrumbs from '../components/Breadcrumbs';

const abs = pageUrl;

/** Next.js metadata (title, description, canonical, hreflang, Open Graph) for a route. */
export function pageMetadata(path: string): Metadata {
  const route = getRoute(path);
  const isNotFound = route.path === '/404';
  const image = route.image ?? SITE.ogImage;
  const languages: Record<string, string> = {};
  for (const a of route.alternates ?? [{ hreflang: 'fr', path: route.path }]) languages[a.hreflang] = abs(a.path);
  languages['x-default'] = abs(route.alternates?.find((a) => a.hreflang === 'fr')?.path ?? route.path);

  return {
    title: { absolute: route.title },
    description: route.description,
    alternates: isNotFound ? undefined : { canonical: abs(route.path), languages },
    robots: isNotFound
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: route.lang === 'ar' ? 'ar_MA' : 'fr_FR',
      url: abs(route.path),
      title: route.title,
      description: route.description,
      images: [{ url: image, width: 1200, height: 630, alt: route.title }],
    },
    twitter: { card: 'summary_large_image', title: route.title, description: route.description, images: [image] },
  };
}

/** Structured data for a route, rendered into the static HTML. */
export function JsonLd({ route }: { route: RouteMeta }) {
  const json = JSON.stringify(buildSchema(route)).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Common wrapper for every page: schema + breadcrumb + the page itself. */
export function Page({ path, children }: { path: string; children: React.ReactNode }) {
  const route = getRoute(path);
  const showCrumbs = route.path !== '/' && route.path !== '/ar' && route.path !== '/404';
  return (
    <>
      <JsonLd route={route} />
      {showCrumbs && <Breadcrumbs route={route} />}
      {children}
    </>
  );
}
