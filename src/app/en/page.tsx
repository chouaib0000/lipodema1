import IntlLanding from '../../views/IntlLanding';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/en');

export default function Route() {
  return (
    <Page path="/en">
      <IntlLanding lang="en" />
    </Page>
  );
}
