// Per-page SEO. Used both at build time (prerendered HTML <head>) and in the
// browser (when navigating between pages without a reload).

import { homeFaq, arFaq, enFaq, type FaqItem } from './faq';
import { GUIDE } from '../content/guide';

export type PageKind = 'home' | 'condition' | 'procedure' | 'physician' | 'contact' | 'gallery' | 'about' | 'generic' | 'article' | 'hub';

export interface RouteMeta {
  path: string;
  title: string;        // < 60 chars, main keyword first
  description: string;  // 120–155 chars
  breadcrumb: string;
  kind: PageKind;
  priority: number;     // sitemap
  changefreq: 'weekly' | 'monthly' | 'yearly';
  image?: string;
  lang?: 'fr' | 'ar' | 'en';                      // default 'fr'
  alternates?: { hreflang: string; path: string }[]; // language versions of the same page
  faq?: FaqItem[];                          // emitted as FAQPage schema
  parent?: { name: string; path: string };  // breadcrumb level between home and the page
  article?: { published: string; updated: string; headline: string };
}

const HOME_ALTERNATES = [
  { hreflang: 'fr', path: '/' },
  { hreflang: 'ar', path: '/ar' },
  { hreflang: 'en', path: '/en' },
];

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Lipœdème Maroc – Traitement à Casablanca | Dr Sefrioui',
    description: 'Centre spécialisé du lipœdème au Maroc depuis 2015. Liposuccion WAL Bodyjet 3D sous anesthésie locale à Casablanca par le Dr Tawfik Sefrioui. Prenez rendez-vous.',
    breadcrumb: 'Accueil',
    kind: 'home',
    priority: 1.0,
    changefreq: 'weekly',
    alternates: HOME_ALTERNATES,
    faq: homeFaq,
  },
  {
    path: '/ar',
    title: 'علاج الوذمة الشحمية (الليبوديما) في المغرب | الدار البيضاء',
    description: 'مركز متخصص في علاج الوذمة الشحمية بالدار البيضاء منذ 2015. شفط الدهون بتقنية WAL بالماء تحت التخدير الموضعي مع الدكتور توفيق الصفريوي. احجزي موعدك.',
    breadcrumb: 'العربية',
    kind: 'home',
    priority: 0.9,
    changefreq: 'monthly',
    lang: 'ar',
    image: '/og/lipoedeme-maroc-ar.jpg',
    alternates: HOME_ALTERNATES,
    faq: arFaq,
  },
  {
    path: '/en',
    title: 'Lipedema Surgery in Morocco – Casablanca | Dr Sefrioui',
    description: 'Lipedema treatment in Casablanca, Morocco, since 2015: WAL Bodyjet 3D water-assisted liposuction under local anaesthesia by Dr Tawfik Sefrioui. Free WhatsApp contact.',
    breadcrumb: 'English',
    kind: 'home',
    priority: 0.8,
    changefreq: 'monthly',
    lang: 'en',
    alternates: HOME_ALTERNATES,
    faq: enFaq,
  },
  {
    path: '/maladie',
    title: 'Lipœdème : symptômes, causes et stades | Lipœdème Maroc',
    description: 'Qu’est-ce que le lipœdème ? Symptômes (jambes lourdes, douleurs, bleus), causes hormonales et génétiques, les 4 stades et la différence avec l’obésité.',
    breadcrumb: 'Le lipœdème',
    kind: 'condition',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/diagnostic',
    title: 'Diagnostic du lipœdème à Casablanca | Lipœdème Maroc',
    description: 'Comment diagnostiquer un lipœdème ? Examen clinique, signes à reconnaître et consultation spécialisée au Centre Lipœdème Maroc à Casablanca.',
    breadcrumb: 'Diagnostic',
    kind: 'condition',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/traitement',
    title: 'Traitement du lipœdème au Maroc : options et chirurgie',
    description: 'Traitements du lipœdème au Maroc : compression, drainage, liposuccion WAL sous anesthésie locale. Les options expliquées par le Dr Sefrioui à Casablanca.',
    breadcrumb: 'Traitement',
    kind: 'procedure',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/wal',
    title: 'Liposuccion WAL Bodyjet 3D pour lipœdème | Casablanca',
    description: 'Liposuccion WAL (assistée par jet d’eau) avec micro-canules sous anesthésie locale : technique douce qui préserve les lymphatiques. Pratiquée à Casablanca.',
    breadcrumb: 'Liposuccion WAL',
    kind: 'procedure',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/wal-results',
    title: 'Avant / après liposuccion WAL – Lipœdème | Casablanca',
    description: 'Photos avant / après de patientes traitées pour un lipœdème des jambes et des bras par liposuccion WAL au Centre Lipœdème Maroc à Casablanca.',
    breadcrumb: 'Résultats WAL',
    kind: 'gallery',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/parcours',
    title: 'Dr Tawfik Sefrioui – Chirurgien du lipœdème au Maroc',
    description: 'Parcours du Dr Tawfik Sefrioui, diplômé de George Washington University, pionnier de la liposuccion WAL Bodyjet au Maroc et formateur international.',
    breadcrumb: 'Dr Tawfik Sefrioui',
    kind: 'physician',
    priority: 0.8,
    changefreq: 'yearly',
  },
  {
    path: '/publications',
    title: 'Publications et conférences du Dr Sefrioui | Lipœdème',
    description: 'Publications, interventions médiatiques et conférences du Dr Tawfik Sefrioui sur le lipœdème, la liposuccion WAL et la médecine régénérative.',
    breadcrumb: 'Publications',
    kind: 'physician',
    priority: 0.5,
    changefreq: 'yearly',
  },
  {
    path: '/resultats',
    title: 'Résultats avant / après lipœdème | Centre Lipœdème Maroc',
    description: 'Galerie de résultats avant / après le traitement du lipœdème par liposuccion WAL sous anesthésie locale. Patientes traitées à Casablanca.',
    breadcrumb: 'Résultats',
    kind: 'gallery',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/clinique',
    title: 'Le centre – Clinique du lipœdème à Casablanca (Racine)',
    description: 'Visitez le Centre Lipœdème Maroc, bd Abdellatif Benqaddour à Casablanca : bloc équipé, accueil des patientes du Maroc et de l’étranger.',
    breadcrumb: 'Le centre',
    kind: 'about',
    priority: 0.7,
    changefreq: 'yearly',
  },
  {
    path: '/services',
    title: 'Séjour médical à Casablanca – lipœdème | Accompagnement',
    description: 'Patientes venant d’une autre ville ou de l’étranger : voyage, hébergement, transferts et planning organisés autour de votre traitement du lipœdème à Casablanca.',
    breadcrumb: 'Séjour médical',
    kind: 'about',
    priority: 0.6,
    changefreq: 'yearly',
  },
  {
    path: '/temoignages',
    title: 'Témoignages de patientes – Lipœdème Maroc',
    description: 'Elles ont été traitées pour un lipœdème au Centre Lipœdème Maroc à Casablanca : vidéos et témoignages de patientes après liposuccion WAL.',
    breadcrumb: 'Témoignages',
    kind: 'generic',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/parcours-patient',
    title: 'Parcours patiente : de la consultation au suivi | Lipœdème',
    description: 'Étapes du traitement du lipœdème à Casablanca : premier contact, consultation, intervention sous anesthésie locale, récupération et suivi.',
    breadcrumb: 'Parcours patiente',
    kind: 'generic',
    priority: 0.7,
    changefreq: 'yearly',
  },
  {
    path: '/actualites',
    title: 'Actualités et formations internationales | Dr Sefrioui',
    description: 'Congrès, formations et actualités du Dr Tawfik Sefrioui : USA, Dubaï, Italie, Taïwan, Thaïlande. Le lipœdème et la liposuccion WAL dans le monde.',
    breadcrumb: 'Actualités',
    kind: 'generic',
    priority: 0.5,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact et rendez-vous – Lipœdème Casablanca',
    description: 'Rendez-vous au Centre Lipœdème Maroc, 5 bd Abdellatif Benqaddour, Racine, Casablanca. Téléphone 05 22 39 86 89, WhatsApp, horaires et plan d’accès.',
    breadcrumb: 'Contact',
    kind: 'contact',
    priority: 0.9,
    changefreq: 'yearly',
  },
];

// Guide hub + one route per article (content in src/content/guide.ts)
ROUTES.push(
  {
    path: '/guide',
    title: 'Guide du lipœdème : symptômes, stades, prix, récupération',
    description: 'Les réponses claires du Centre Lipœdème Maroc : lipœdème ou cellulite, stades, prix d’une opération au Maroc, lipœdème des bras, récupération après liposuccion.',
    breadcrumb: 'Guide du lipœdème',
    kind: 'hub',
    priority: 0.8,
    changefreq: 'weekly',
  },
  ...GUIDE.map((a): RouteMeta => ({
    path: `/guide/${a.slug}`,
    title: a.metaTitle,
    description: a.description,
    breadcrumb: a.title.split(' : ')[0],
    kind: 'article',
    priority: 0.8,
    changefreq: 'monthly',
    image: a.image,
    faq: a.faq,
    parent: { name: 'Guide', path: '/guide' },
    article: { published: a.published, updated: a.updated, headline: a.title },
  }))
);

export const NOT_FOUND: RouteMeta = {
  path: '/404',
  title: 'Page introuvable | Lipœdème Maroc',
  description: 'Cette page n’existe pas. Retrouvez le traitement du lipœdème à Casablanca sur la page d’accueil du Centre Lipœdème Maroc.',
  breadcrumb: 'Page introuvable',
  kind: 'generic',
  priority: 0,
  changefreq: 'yearly',
};

export const getRoute = (pathname: string): RouteMeta => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return ROUTES.find((r) => r.path === clean) ?? NOT_FOUND;
};
