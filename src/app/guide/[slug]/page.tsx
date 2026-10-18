import { notFound } from 'next/navigation';
import GuideArticle from '../../../views/GuideArticle';
import { Page, pageMetadata } from '../../../seo/next';
import { GUIDE, getArticle } from '../../../content/guide';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = pageMetadata(`/guide/${slug}`);
  const a = getArticle(slug);
  return a
    ? { ...meta, openGraph: { ...meta.openGraph, type: 'article', publishedTime: a.published, modifiedTime: a.updated, authors: ['Dr Tawfik Sefrioui'] } }
    : meta;
}

export default async function Route({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <Page path={`/guide/${slug}`}>
      <GuideArticle article={article} />
    </Page>
  );
}
