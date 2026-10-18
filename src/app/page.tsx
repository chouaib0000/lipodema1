import Home from '../views/Home';
import { preload } from 'react-dom';
import { Page, pageMetadata } from '../seo/next';
import { SITE } from '../config/site';

export const metadata = pageMetadata('/');

export default function Route() {
  // Start downloading the hero portrait right away (Largest Contentful Paint)
  preload(SITE.heroImage, { as: 'image', fetchPriority: 'high', type: 'image/webp' });
  return (
    <Page path="/">
      <Home />
    </Page>
  );
}
