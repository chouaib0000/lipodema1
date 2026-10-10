import Parcours from '../../views/Parcours';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/parcours');

export default function Route() {
  return (
    <Page path="/parcours">
      <Parcours />
    </Page>
  );
}
