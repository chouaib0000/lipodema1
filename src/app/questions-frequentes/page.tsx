import QuestionsReponses from '../../views/QuestionsReponses';
import { Page, pageMetadata } from '../../seo/next';

export const metadata = pageMetadata('/questions-frequentes');

export default function Route() {
  return (
    <Page path="/questions-frequentes">
      <QuestionsReponses />
    </Page>
  );
}
