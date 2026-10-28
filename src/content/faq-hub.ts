// /questions-frequentes – every question the site answers, grouped by theme.
// One page, one FAQPage schema: the format answer engines (ChatGPT, Gemini,
// Google AI Overviews, Perplexity) quote most easily. Built from the FAQs already
// on the site plus questions seen in Google Search Console.
import { homeFaq, maladieFaq, type FaqItem } from '../seo/faq';
import { getArticle } from './guide';

const fromGuide = (...slugs: string[]): FaqItem[] => slugs.flatMap((s) => getArticle(s)?.faq ?? []);
const pick = (list: FaqItem[], ...qs: string[]) => list.filter((f) => qs.some((q) => f.q.startsWith(q)));

const EXTRA = {
  understand: [
    { q: 'Le lipœdème peut-il toucher les genoux ?', a: 'Oui. Dans les types II et III, la graisse s’accumule souvent à l’intérieur et autour des genoux, ce qui peut gêner la marche et provoquer des frottements. Les genoux font partie des zones traitées par liposuccion WAL au Centre Lipœdème Maroc.' },
  ],
  diagnosis: [
    { q: 'Où trouver un spécialiste du lipœdème près de chez moi au Maroc ?', a: 'Le Centre Lipœdème Maroc du Dr Tawfik Sefrioui, à Casablanca (5 boulevard Abdellatif Benqaddour, Racine), reçoit des patientes de tout le Maroc. Un premier échange peut se faire par WhatsApp, avec photos, avant de venir en consultation.' },
  ],
  treatment: [
    { q: 'La liposuccion WAL laisse-t-elle des cicatrices ?', a: 'Les micro-canules passent par de très petites incisions, généralement discrètes une fois cicatrisées.' },
    { q: 'Peut-on traiter les jambes et les bras en même temps ?', a: 'Cela dépend du volume à retirer. Pour plus de sécurité, les zones sont souvent traitées en plusieurs séances ; le plan est défini lors de la consultation.' },
  ],
  price: [
    { q: 'Quel est le prix d’une liposuccion WAL au Maroc ?', a: 'Le prix dépend du stade, des zones traitées et du nombre de séances. Un devis détaillé est remis après la consultation au Centre Lipœdème Maroc à Casablanca.' },
  ],
};

export const FAQ_HUB: { id: string; title: string; items: FaqItem[] }[] = [
  {
    id: 'comprendre',
    title: 'Comprendre le lipœdème',
    items: [
      ...pick(maladieFaq, 'Qu’est-ce que', 'Le lipœdème se guérit', 'Le lipœdème est-il héréditaire', 'Le sport et le régime', 'Les hommes'),
      ...fromGuide('lipoedeme-ou-cellulite', 'lipoedeme-ou-lymphoedeme'),
      ...EXTRA.understand,
    ],
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic et spécialiste',
    items: [...pick(maladieFaq, 'Comment savoir'), ...fromGuide('diagnostic-lipoedeme-test', 'quel-medecin-consulter-lipoedeme-maroc'), ...EXTRA.diagnosis],
  },
  {
    id: 'traitement',
    title: 'Traitement et liposuccion WAL',
    items: [
      ...pick(homeFaq, 'Quel est le traitement', 'L’intervention se fait'),
      ...fromGuide('liposuccion-wal-ou-classique', 'traitement-lipoedeme-sans-chirurgie', 'lipoedeme-et-grossesse', 'vetements-de-compression-lipoedeme'),
      ...EXTRA.treatment,
    ],
  },
  {
    id: 'prix',
    title: 'Prix et organisation',
    items: [...pick(homeFaq, 'Quel est le prix', 'Les patientes étrangères'), ...fromGuide('prix-operation-lipoedeme-maroc'), ...EXTRA.price],
  },
  {
    id: 'apres',
    title: 'Après l’intervention',
    items: [...pick(homeFaq, 'Combien de temps dure'), ...fromGuide('recuperation-apres-liposuccion-lipoedeme')],
  },
  {
    id: 'centre',
    title: 'Le centre à Casablanca',
    items: [...pick(homeFaq, 'Où se faire traiter'), ...pick(maladieFaq, 'Où consulter')],
  },
].map((c) => {
  // drop duplicate questions (same wording in several places)
  const seen = new Set<string>();
  return { ...c, items: c.items.filter((f) => (seen.has(f.q) ? false : (seen.add(f.q), true))) };
});

export const FAQ_HUB_ALL: FaqItem[] = (() => {
  const seen = new Set<string>();
  return FAQ_HUB.flatMap((c) => c.items).filter((f) => (seen.has(f.q) ? false : (seen.add(f.q), true)));
})();
