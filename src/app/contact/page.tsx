import Contact from '../../views/Contact';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/contact');

export default function Route() {
  return (
    <Page path="/contact">
      <Contact />
    </Page>
  );
}
