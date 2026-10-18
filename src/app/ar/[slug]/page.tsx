import { notFound } from 'next/navigation';
import ArabicArticle from '../../../views/ArabicArticle';
import { Page, pageMetadata } from '../../../seo/next';
import { AR_GUIDE, getArArticle } from '../../../content/guide-ar';

export const dynamicParams = false;

export function generateStaticParams() {
  return AR_GUIDE.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = pageMetadata(`/ar/${slug}`);
  const a = getArArticle(slug);
  return a
    ? { ...meta, openGraph: { ...meta.openGraph, type: 'article', publishedTime: a.published, modifiedTime: a.updated, authors: ['Dr Tawfik Sefrioui'] } }
    : meta;
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArArticle(slug);
  if (!article) notFound();
  return (
    <Page path={`/ar/${slug}`}>
      <ArabicArticle article={article} />
    </Page>
  );
}
