import Publications from '../../views/Publications';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/publications');

export default function Route() {
  return (
    <Page path="/publications">
      <Publications />
    </Page>
  );
}
