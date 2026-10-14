import Actualites from '../../views/Actualites';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/actualites');

export default function Route() {
  return (
    <Page path="/actualites">
      <Actualites />
    </Page>
  );
}
