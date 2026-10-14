import GuideHub from '../../views/GuideHub';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/guide');

export default function Route() {
  return (
    <Page path="/guide">
      <GuideHub />
    </Page>
  );
}
