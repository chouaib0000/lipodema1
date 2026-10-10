import English from '../../views/English';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/en');

export default function Route() {
  return (
    <Page path="/en">
      <English />
    </Page>
  );
}
