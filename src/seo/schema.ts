import { SITE, absUrl, mapsLink, pageUrl } from '../config/site';
import type { RouteMeta } from './routes';

const ID = {
  website: `${SITE.url}/#website`,
  clinic: `${SITE.url}/#clinic`,
  doctor: `${SITE.url}/#dr-tawfik-sefrioui`,
  condition: `${SITE.url}/maladie/#lipoedeme`,
  procedure: `${SITE.url}/wal/#liposuccion-wal`,
};

const clinic = {
  '@type': ['MedicalClinic', 'MedicalBusiness'],
  '@id': ID.clinic,
  name: SITE.name,
  alternateName: ['Centre Lipoedème Maroc', 'Lipoedem Maroc', 'Centre du Lipœdème Casablanca', SITE.legalName],
  description:
    'Centre médical de Casablanca dédié au traitement du lipœdème depuis 2015 : consultation spécialisée et liposuccion WAL Bodyjet 3D avec micro-canules sous anesthésie locale.',
  url: `${SITE.url}/`,
  logo: absUrl(SITE.logo),
  image: [absUrl(SITE.ogImage), absUrl('/2028/1.jpeg'), absUrl(SITE.doctorPhoto)],
  telephone: SITE.phone.e164,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.street}, ${SITE.address.district}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  hasMap: mapsLink,
  openingHoursSpecification: SITE.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  contactPoint: [
    { '@type': 'ContactPoint', telephone: SITE.phone.e164, contactType: 'customer service', areaServed: 'MA', availableLanguage: ['French', 'Arabic', 'English', 'Spanish'] },
    { '@type': 'ContactPoint', telephone: SITE.whatsapp.e164, contactType: 'reservations', availableLanguage: ['French', 'Arabic', 'English'] },
  ],
  medicalSpecialty: ['PlasticSurgery', 'Dermatology'],
  availableService: { '@id': ID.procedure },
  employee: { '@id': ID.doctor },
  founder: { '@id': ID.doctor },
  foundingDate: '2015',
  areaServed: [
    { '@type': 'Country', name: 'Maroc' },
    ...SITE.areaServed.map((c) => ({ '@type': 'City', name: c })),
  ],
  knowsLanguage: ['fr', 'ar', 'en', 'es'],
  priceRange: '$$',
  currenciesAccepted: 'MAD, EUR',
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.youtube],
};

const doctor = {
  '@type': 'Physician',
  '@id': ID.doctor,
  name: SITE.doctor,
  alternateName: ['Tawfik Sefrioui', 'Pr Tawfik Sefrioui', 'Dr Sefrioui'],
  url: `${SITE.url}/parcours/`,
  image: absUrl(SITE.doctorPhoto),
  jobTitle: 'Chirurgien spécialiste du lipœdème',
  description:
    'Chirurgien installé à Casablanca, pionnier de la liposuccion WAL Bodyjet sous anesthésie locale au Maroc et formateur international (USA, Dubaï, Italie, Taïwan, Thaïlande).',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'George Washington University', address: { '@type': 'PostalAddress', addressCountry: 'US' } },
  medicalSpecialty: 'PlasticSurgery',
  worksFor: { '@id': ID.clinic },
  address: clinic.address,
  telephone: SITE.phone.e164,
  knowsAbout: ['Lipœdème', 'Lipedema', 'Liposuccion WAL', 'Water-assisted liposuction', 'Anesthésie tumescente', 'Médecine régénérative'],
  sameAs: [SITE.social.youtube],
};

const condition = {
  '@type': 'MedicalCondition',
  '@id': ID.condition,
  name: 'Lipœdème',
  alternateName: ['Lipedema', 'Lipoedema', 'Lipoedème', 'Lipeodeme', 'الوذمة الشحمية'],
  description:
    'Maladie chronique du tissu adipeux, touchant presque exclusivement les femmes, caractérisée par une accumulation symétrique et douloureuse de graisse sur les jambes, les hanches et parfois les bras, résistante aux régimes.',
  associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Tissu adipeux sous-cutané des membres' },
  signOrSymptom: [
    'Augmentation symétrique du volume des jambes ou des bras',
    'Douleurs et sensibilité au toucher',
    'Ecchymoses fréquentes',
    'Jambes lourdes',
    'Graisse résistante aux régimes et au sport',
  ].map((name) => ({ '@type': 'MedicalSignOrSymptom', name })),
  riskFactor: ['Antécédents familiaux', 'Puberté, grossesse ou ménopause'].map((name) => ({ '@type': 'MedicalRiskFactor', name })),
  possibleTreatment: { '@id': ID.procedure },
};

const procedure = {
  '@type': 'MedicalProcedure',
  '@id': ID.procedure,
  name: 'Liposuccion WAL Bodyjet 3D sous anesthésie locale',
  alternateName: ['Water-Assisted Liposuction', 'Liposuccion WAL', 'Liposuccion assistée par jet d’eau'],
  description:
    'Liposuccion assistée par jet d’eau réalisée avec des micro-canules sous anesthésie locale tumescente, adaptée au lipœdème car elle limite le traumatisme des vaisseaux lymphatiques.',
  procedureType: 'https://schema.org/SurgicalProcedure',
  bodyLocation: ['Jambes', 'Cuisses', 'Genoux', 'Hanches', 'Bras'],
  howPerformed: 'Infiltration d’une solution tumescente puis aspiration douce de la graisse grâce à un jet d’eau pulsé et des micro-canules, la patiente restant éveillée.',
  preparation: 'Consultation spécialisée, examen clinique et bilan pré-opératoire.',
  followup: 'Vêtement de compression, marche dès le lendemain, drainage post-opératoire à partir du 3e jour.',
  status: 'https://schema.org/ActiveActionStatus',
};

const website = {
  '@type': 'WebSite',
  '@id': ID.website,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: 'fr-MA',
  publisher: { '@id': ID.clinic },
};

export function buildSchema(route: RouteMeta) {
  const url = pageUrl(route.path);

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: route.lang === 'ar' ? 'الرئيسية' : 'Accueil', item: `${SITE.url}/` },
      ...(route.path === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: route.breadcrumb, item: url }]),
    ],
  };

  const pageType =
    route.kind === 'contact' ? 'ContactPage' : route.kind === 'about' || route.kind === 'physician' ? 'AboutPage' : 'MedicalWebPage';

  const webpage: Record<string, unknown> = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: route.lang === 'ar' ? 'ar-MA' : 'fr-MA',
    isPartOf: { '@id': ID.website },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    primaryImageOfPage: absUrl(route.image ?? SITE.ogImage),
  };
  if (pageType === 'MedicalWebPage') {
    webpage.about = { '@id': ID.condition };
    webpage.audience = { '@type': 'PeopleAudience', audienceType: 'Patient' };
    webpage.reviewedBy = { '@id': ID.doctor };
  }
  if (route.kind === 'physician') webpage.mainEntity = { '@id': ID.doctor };
  if (route.kind === 'contact') webpage.mainEntity = { '@id': ID.clinic };

  const graph: unknown[] = [website, clinic, doctor, webpage, breadcrumb];
  if (route.kind === 'condition' || route.kind === 'home') graph.push(condition);
  if (route.kind === 'procedure' || route.kind === 'home' || route.kind === 'condition') graph.push(procedure);
  if (route.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: route.lang === 'ar' ? 'ar-MA' : 'fr-MA',
      mainEntity: route.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
