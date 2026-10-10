// FAQ shown on the page AND emitted as FAQPage schema. Google requires the
// schema answers to match visible content, so both read from this file.
// Written to answer the questions people actually type into Google and AI assistants
// ("lipoedème maroc", "prix opération lipoedème", "lipoedème casablanca"...).

export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
  {
    q: 'Qu’est-ce que le lipœdème ?',
    a: 'Le lipœdème est une maladie chronique du tissu graisseux qui touche presque exclusivement les femmes. La graisse s’accumule de façon symétrique sur les jambes, les hanches et parfois les bras, avec des douleurs, une sensibilité au toucher et des bleus fréquents. Cette graisse résiste aux régimes et au sport.',
  },
  {
    q: 'Où se faire traiter pour un lipœdème au Maroc ?',
    a: 'Le Centre Lipœdème Maroc du Dr Tawfik Sefrioui, situé au 5 boulevard Abdellatif Benqaddour (quartier Racine) à Casablanca, est dédié au traitement du lipœdème depuis 2015. Des patientes viennent de tout le Maroc (Rabat, Marrakech, Tanger, Fès, Agadir…) et de l’étranger.',
  },
  {
    q: 'Quel est le traitement le plus efficace du lipœdème ?',
    a: 'Les traitements conservateurs (compression, drainage, activité physique) soulagent les symptômes mais n’éliminent pas la graisse malade. La liposuccion adaptée au lipœdème est aujourd’hui le traitement de référence. Au centre, le Dr Sefrioui pratique la liposuccion WAL Bodyjet 3D (assistée par jet d’eau) avec micro-canules, qui respecte les vaisseaux lymphatiques.',
  },
  {
    q: 'L’intervention se fait-elle sous anesthésie générale ?',
    a: 'Non. La liposuccion WAL est réalisée sous anesthésie locale (tumescente) : la patiente reste éveillée et confortable, ce qui évite les risques de l’anesthésie générale, permet de changer de position pendant l’intervention et favorise une récupération plus rapide.',
  },
  {
    q: 'Quel est le prix d’une opération du lipœdème au Maroc ?',
    a: 'Le tarif dépend du stade du lipœdème, du nombre de zones à traiter (jambes, cuisses, bras) et du nombre de séances nécessaires. Un devis personnalisé est remis après la consultation et l’examen clinique au centre de Casablanca. Contactez-nous par téléphone ou WhatsApp pour fixer un rendez-vous.',
  },
  {
    q: 'Combien de temps dure la récupération ?',
    a: 'La marche est encouragée dès le lendemain de l’intervention. Le port d’un vêtement de compression est recommandé pendant le premier mois, et le drainage post-opératoire commence environ 3 jours après l’intervention selon le protocole du centre. La plupart des patientes reprennent une activité légère en quelques jours.',
  },
  {
    q: 'Les patientes étrangères ou d’autres villes peuvent-elles être prises en charge ?',
    a: 'Oui. Le centre accueille des patientes de tout le Maroc et de l’étranger. Un premier échange peut se faire par WhatsApp avec photos, puis le séjour médical à Casablanca est organisé autour de la consultation, de l’intervention et du suivi.',
  },
];
