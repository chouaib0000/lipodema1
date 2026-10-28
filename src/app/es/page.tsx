import IntlLanding from '../../views/IntlLanding';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/es');

export default function Route() {
  return (
    <Page path="/es">
      <IntlLanding lang="es" />
    </Page>
  );
}
