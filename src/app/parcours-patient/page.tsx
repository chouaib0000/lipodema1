import ParcoursPatient from '../../views/ParcoursPatient';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/parcours-patient');

export default function Route() {
  return (
    <Page path="/parcours-patient">
      <ParcoursPatient />
    </Page>
  );
}
