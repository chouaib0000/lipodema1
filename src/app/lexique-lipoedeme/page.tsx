import Lexique from '../../views/Lexique';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/lexique-lipoedeme');

export default function Route() {
  return (
    <Page path="/lexique-lipoedeme">
      <Lexique />
    </Page>
  );
}
