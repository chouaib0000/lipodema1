import Clinique from '../../views/Clinique';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/clinique');

export default function Route() {
  return (
    <Page path="/clinique">
      <Clinique />
    </Page>
  );
}
