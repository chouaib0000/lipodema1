import Maladie from '../../views/Maladie';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/maladie');

export default function Route() {
  return (
    <Page path="/maladie">
      <Maladie />
    </Page>
  );
}
