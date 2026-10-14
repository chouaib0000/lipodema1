import Diagnostic from '../../views/Diagnostic';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/diagnostic');

export default function Route() {
  return (
    <Page path="/diagnostic">
      <Diagnostic />
    </Page>
  );
}
