import Services from '../../views/Services';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/services');

export default function Route() {
  return (
    <Page path="/services">
      <Services />
    </Page>
  );
}
