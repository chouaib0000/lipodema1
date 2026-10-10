import Temoignages from '../../views/Temoignages';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/temoignages');

export default function Route() {
  return (
    <Page path="/temoignages">
      <Temoignages />
    </Page>
  );
}
