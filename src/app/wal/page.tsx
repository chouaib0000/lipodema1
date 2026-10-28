import WAL from '../../views/WAL';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/wal');

export default function Route() {
  return (
    <Page path="/wal">
      <WAL />
    </Page>
  );
}
