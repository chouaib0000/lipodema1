import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface StructuredDataProps {
  type?: string;
}

export default function StructuredData({ type = 'website' }: StructuredDataProps) {
  const location = useLocation();

  useEffect(() => {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = getStructuredData(location.pathname, type);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname, type]);

  return null;
}

function getStructuredData(pathname: string, type: string) {
  const baseUrl = 'https://lipoedem.ma';

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Centre Lipœdème Maroc - Dr Tawfik Sefrioui',
    description: 'Centre expert en traitement du lipœdème au Maroc. Spécialiste de la liposuccion WAL 3D pour le traitement du lipedema.',
    url: baseUrl,
    logo: `${baseUrl}/2027/logo.png`,
    image: `${baseUrl}/2028/1.jpeg`,
    telephone: '+212522948978',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '92 BD Massira Al Khadra',
      addressLocality: 'Casablanca',
      postalCode: '20250',
      addressCountry: 'MA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5731,
      longitude: -7.5898
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Morocco'
    }
  };

  const physicianData = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr Tawfik Sefrioui',
    image: `${baseUrl}/2028/1.jpeg`,
    jobTitle: 'Chirurgien Spécialiste du Lipœdème',
    description: 'Expert international en traitement du lipœdème. Plus de 20 ans d\'expérience en liposuccion WAL 3D et médecine régénérative.',
    url: `${baseUrl}/parcours`,
    medicalSpecialty: ['Plastic Surgery', 'Regenerative Medicine', 'Lipedema Treatment'],
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Centre Lipœdème Maroc'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Faculté de Médecine de Casablanca'
    }
  };

  const medicalConditionData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Lipœdème',
    alternateName: ['Lipedema', 'Lipoedema', 'Lipeodeme'],
    description: 'Le lipœdème est une maladie chronique caractérisée par une accumulation anormale de graisse dans les membres, principalement les jambes et les bras.',
    associatedAnatomy: {
      '@type': 'AnatomicalStructure',
      name: 'Jambes et Bras'
    },
    possibleTreatment: {
      '@type': 'MedicalProcedure',
      name: 'Liposuccion WAL (Water-Assisted Liposuction)',
      description: 'Technique de liposuccion assistée par eau pour le traitement du lipœdème avec résultats optimaux et récupération rapide.'
    }
  };

  const medicalProcedureData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Liposuccion WAL 3D',
    alternateName: 'Water-Assisted Liposuction',
    description: 'Technique de liposuccion assistée par eau, spécifiquement adaptée au traitement du lipœdème. Moins invasive avec meilleure préservation des tissus.',
    procedureType: 'Surgical',
    bodyLocation: ['Legs', 'Arms', 'Thighs'],
    followup: 'Drainage lymphatique post-opératoire recommandé',
    preparation: 'Consultation médicale complète et examens préopératoires',
    howPerformed: 'Utilisation d\'un jet d\'eau pulsé pour déloger délicatement les cellules graisseuses tout en préservant les structures vasculaires et nerveuses.'
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: baseUrl
      }
    ]
  };

  if (pathname !== '/') {
    const pageName = getPageName(pathname);
    breadcrumbData.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: `${baseUrl}${pathname}`
    });
  }

  switch (pathname) {
    case '/':
      return {
        '@context': 'https://schema.org',
        '@graph': [organizationData, physicianData, breadcrumbData]
      };

    case '/maladie':
      return {
        '@context': 'https://schema.org',
        '@graph': [medicalConditionData, organizationData, breadcrumbData]
      };

    case '/traitement':
    case '/wal':
      return {
        '@context': 'https://schema.org',
        '@graph': [medicalProcedureData, organizationData, breadcrumbData]
      };

    case '/parcours':
      return {
        '@context': 'https://schema.org',
        '@graph': [physicianData, organizationData, breadcrumbData]
      };

    case '/contact':
      return {
        '@context': 'https://schema.org',
        '@graph': [
          organizationData,
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact - Centre Lipœdème Maroc',
            description: 'Contactez le Dr Tawfik Sefrioui pour une consultation sur le traitement du lipœdème.',
            url: `${baseUrl}/contact`
          },
          breadcrumbData
        ]
      };

    case '/resultats':
      return {
        '@context': 'https://schema.org',
        '@graph': [
          organizationData,
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Résultats - Avant/Après Traitement Lipœdème',
            description: 'Photos avant/après de patientes traitées pour le lipœdème avec la technique WAL 3D.',
            url: `${baseUrl}/resultats`,
            about: medicalConditionData
          },
          breadcrumbData
        ]
      };

    default:
      return {
        '@context': 'https://schema.org',
        '@graph': [organizationData, breadcrumbData]
      };
  }
}

function getPageName(pathname: string): string {
  const pageNames: { [key: string]: string } = {
    '/maladie': 'La Maladie',
    '/diagnostic': 'Diagnostic',
    '/traitement': 'Traitement',
    '/wal': 'Technique WAL',
    '/wal-results': 'Résultats WAL',
    '/parcours': 'Parcours du Médecin',
    '/publications': 'Publications',
    '/resultats': 'Résultats',
    '/clinique': 'La Clinique',
    '/services': 'Services',
    '/temoignages': 'Témoignages',
    '/parcours-patient': 'Parcours Patient',
    '/actualites': 'Actualités',
    '/contact': 'Contact'
  };

  return pageNames[pathname] || 'Page';
}
