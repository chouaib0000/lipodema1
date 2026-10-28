import Traitement from '../../views/Traitement';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/traitement');

export default function Route() {
  return (
    <Page path="/traitement">
      <Traitement />
    </Page>
  );
}
