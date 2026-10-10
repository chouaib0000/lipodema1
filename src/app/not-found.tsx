import NotFound from '../views/NotFound';
import { pageMetadata } from '../seo/next';

export const metadata = pageMetadata('/404');

export default function NotFoundPage() {
  return <NotFound />;
}
