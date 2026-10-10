import WALResults from '../../views/WALResults';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/wal-results');

export default function Route() {
  return (
    <Page path="/wal-results">
      <WALResults />
    </Page>
  );
}
