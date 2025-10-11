import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function MetaTags({
  title,
  description,
  keywords,
  image
}: MetaTagsProps) {
  const location = useLocation();

  useEffect(() => {
    const metaData = getMetaData(location.pathname);
    const finalTitle = title || metaData.title;
    const finalDescription = description || metaData.description;
    const finalKeywords = keywords || metaData.keywords;
    const finalImage = image || metaData.image;

    document.title = finalTitle;

    updateMetaTag('name', 'description', finalDescription);
    updateMetaTag('name', 'keywords', finalKeywords);
    updateMetaTag('property', 'og:title', finalTitle);
    updateMetaTag('property', 'og:description', finalDescription);
    updateMetaTag('property', 'og:image', finalImage);
    updateMetaTag('property', 'og:url', `https://lipoedem.ma${location.pathname}`);
    updateMetaTag('name', 'twitter:title', finalTitle);
    updateMetaTag('name', 'twitter:description', finalDescription);
    updateMetaTag('name', 'twitter:image', finalImage);

    updateLinkTag('canonical', `https://lipoedem.ma${location.pathname}`);
  }, [location.pathname, title, description, keywords, image]);

  return null;
}

function updateMetaTag(attribute: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.href = href;
}

function getMetaData(pathname: string) {
  const baseUrl = 'https://lipoedem.ma';
  const defaultImage = `${baseUrl}/2028/1.jpeg`;

  const metaDataMap: { [key: string]: { title: string; description: string; keywords: string; image: string } } = {
    '/': {
      title: 'Lipœdème Maroc – Traitement & Liposuccion WAL Casablanca',
      description: 'Centre expert lipœdème Maroc. Traitement WAL 3D sans cicatrices à Casablanca avec Dr Sefrioui. Résultats prouvés. Consultation gratuite.',
      keywords: 'lipeodeme maroc, lipœdème maroc, lipedema maroc, traitement lipœdème, liposuccion WAL, liposuccion 3D, Dr Tawfik Sefrioui, spécialiste lipœdème, centre lipœdème Casablanca',
      image: defaultImage
    },
    '/maladie': {
      title: 'Qu\'est-ce que le Lipœdème ? | Symptômes, Causes & Stades',
      description: 'Découvrez tout sur le lipœdème : définition, symptômes, causes et différents stades de cette maladie chronique. Information médicale complète par Dr Sefrioui.',
      keywords: 'lipœdème définition, symptômes lipœdème, causes lipœdème, stades lipœdème, maladie lipedema, diagnostic lipœdème',
      image: defaultImage
    },
    '/diagnostic': {
      title: 'Diagnostic du Lipœdème au Maroc | Centre Spécialisé',
      description: 'Diagnostic professionnel du lipœdème à Casablanca. Évaluation complète, examens cliniques et plan de traitement personnalisé avec Dr Sefrioui.',
      keywords: 'diagnostic lipœdème maroc, test lipœdème, examen lipedema, consultation lipœdème casablanca, évaluation lipœdème',
      image: defaultImage
    },
    '/traitement': {
      title: 'Traitement du Lipœdème au Maroc | Solutions Efficaces',
      description: 'Traitements efficaces du lipœdème au Maroc : liposuccion WAL, drainage lymphatique, compression. Solutions adaptées par expert Dr Sefrioui.',
      keywords: 'traitement lipœdème maroc, liposuccion lipedema, WAL maroc, drainage lymphatique, compression lipœdème, chirurgie lipedema',
      image: defaultImage
    },
    '/wal': {
      title: 'Liposuccion WAL 3D | Technique Avancée pour Lipœdème',
      description: 'Liposuccion WAL (Water-Assisted Liposuction) 3D : technique de pointe pour traiter le lipœdème. Moins invasive, récupération rapide. Expert Dr Sefrioui.',
      keywords: 'liposuccion WAL, water assisted liposuction, WAL 3D, liposuccion assistée par eau, traitement lipœdème avancé, chirurgie lipedema moderne',
      image: defaultImage
    },
    '/wal-results': {
      title: 'Résultats Liposuccion WAL | Avant/Après Lipœdème',
      description: 'Photos avant/après de la liposuccion WAL pour le traitement du lipœdème. Résultats réels de patientes traitées au Centre Lipœdème Maroc.',
      keywords: 'résultats WAL, avant après lipœdème, photos liposuccion WAL, résultats traitement lipedema, témoignages WAL',
      image: defaultImage
    },
    '/parcours': {
      title: 'Dr Tawfik Sefrioui | Expert Lipœdème & Médecine Régénérative',
      description: 'Parcours du Dr Tawfik Sefrioui : chirurgien expert en lipœdème et médecine régénérative. Plus de 20 ans d\'expérience, formateur international.',
      keywords: 'Dr Tawfik Sefrioui, chirurgien lipœdème maroc, expert lipedema, médecin régénératif, spécialiste liposuccion WAL',
      image: defaultImage
    },
    '/publications': {
      title: 'Publications Scientifiques | Dr Sefrioui - Lipœdème',
      description: 'Publications scientifiques et recherches du Dr Sefrioui sur le lipœdème et la médecine régénérative. Contributions internationales.',
      keywords: 'publications lipœdème, recherche lipedema, articles scientifiques, Dr Sefrioui publications, études lipœdème',
      image: defaultImage
    },
    '/resultats': {
      title: 'Résultats Traitement Lipœdème | Avant/Après Photos',
      description: 'Galerie de résultats avant/après du traitement du lipœdème. Photos réelles de patientes traitées avec succès au Centre Lipœdème Maroc.',
      keywords: 'résultats lipœdème, avant après lipedema, photos traitement lipœdème, témoignages visuels, galerie résultats',
      image: defaultImage
    },
    '/clinique': {
      title: 'Centre Lipœdème Maroc | Clinique Spécialisée Casablanca',
      description: 'Centre spécialisé dans le traitement du lipœdème à Casablanca. Équipements modernes, équipe experte, accompagnement complet.',
      keywords: 'clinique lipœdème maroc, centre lipedema casablanca, cabinet Dr Sefrioui, clinique spécialisée lipœdème',
      image: defaultImage
    },
    '/services': {
      title: 'Services Médicaux | Centre Lipœdème Maroc',
      description: 'Services complets pour le traitement du lipœdème : consultation, chirurgie WAL, drainage lymphatique, suivi post-opératoire personnalisé.',
      keywords: 'services lipœdème, consultation lipedema, chirurgie WAL maroc, drainage lymphatique, suivi médical',
      image: defaultImage
    },
    '/temoignages': {
      title: 'Témoignages Patientes | Lipœdème Maroc',
      description: 'Témoignages réels de patientes traitées pour le lipœdème au Maroc. Découvrez leurs expériences et transformations avec Dr Sefrioui.',
      keywords: 'témoignages lipœdème, avis patientes lipedema, expériences traitement, témoignages WAL, avis Dr Sefrioui',
      image: defaultImage
    },
    '/parcours-patient': {
      title: 'Parcours Patient | Étapes du Traitement Lipœdème',
      description: 'Découvrez les étapes du parcours patient pour le traitement du lipœdème : consultation, préparation, intervention, récupération et suivi.',
      keywords: 'parcours patient lipœdème, étapes traitement lipedema, processus chirurgie WAL, préparation intervention, suivi post-opératoire',
      image: defaultImage
    },
    '/actualites': {
      title: 'Actualités Lipœdème | Centre Dr Sefrioui Maroc',
      description: 'Dernières actualités sur le lipœdème, nouvelles techniques, événements et formations. Restez informé avec le Centre Lipœdème Maroc.',
      keywords: 'actualités lipœdème, news lipedema, formations lipœdème, événements médicaux, innovations traitement',
      image: defaultImage
    },
    '/contact': {
      title: 'Contact | Consultation Lipœdème Maroc - Dr Sefrioui',
      description: 'Contactez le Centre Lipœdème Maroc pour une consultation avec Dr Sefrioui. Prenez rendez-vous à Casablanca. Consultation gratuite disponible.',
      keywords: 'contact lipœdème maroc, rendez-vous Dr Sefrioui, consultation lipedema casablanca, prendre rendez-vous, téléphone centre lipœdème',
      image: defaultImage
    }
  };

  return metaDataMap[pathname] || metaDataMap['/'];
}
