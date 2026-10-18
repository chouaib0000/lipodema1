import Resultats from '../../views/Resultats';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/resultats');

export default function Route() {
  return (
    <Page path="/resultats">
      <Resultats />
    </Page>
  );
}
