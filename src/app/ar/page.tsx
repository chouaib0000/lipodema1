import Arabic from '../../views/Arabic';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/ar');

export default function Route() {
  return (
    <Page path="/ar">
      <Arabic />
    </Page>
  );
}
