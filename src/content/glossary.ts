// /lexique-lipoedeme – short definitions of the words patients meet.
// Emitted as a schema.org DefinedTermSet: definitions are what answer engines quote.
export interface Term { term: string; definition: string; href?: string }

export const GLOSSARY: Term[] = [
  { term: 'Lipœdème', definition: 'Maladie chronique du tissu graisseux, presque exclusivement féminine : accumulation symétrique et douloureuse de graisse sur les jambes, les hanches et parfois les bras, qui résiste aux régimes et au sport.', href: '/maladie/' },
  { term: 'Lipedema / lipoedem', definition: 'Noms du lipœdème en anglais (lipedema) et en allemand (Lipödem, souvent écrit « lipoedem »).' },
  { term: 'Lymphœdème', definition: 'Gonflement dû à une accumulation de lymphe, souvent asymétrique et touchant les pieds. À distinguer du lipœdème, même si les deux peuvent s’associer.', href: '/guide/lipoedeme-ou-lymphoedeme/' },
  { term: 'Lipo-lymphœdème', definition: 'Stade avancé du lipœdème (stade 4) où s’ajoute un lymphœdème secondaire, avec possible atteinte des pieds.', href: '/guide/stades-du-lipoedeme/' },
  { term: 'Cellulite', definition: 'Aspect « peau d’orange » de la peau, fréquent et indolore, qui n’est pas une maladie. À distinguer du lipœdème.', href: '/guide/lipoedeme-ou-cellulite/' },
  { term: 'Stades du lipœdème', definition: 'Classement en 4 stades selon l’aspect de la peau et du tissu graisseux : peau lisse avec petits nodules (1), peau irrégulière (2), amas et replis (3), lymphœdème associé (4).', href: '/guide/stades-du-lipoedeme/' },
  { term: 'Types du lipœdème', definition: 'Classement selon les zones : fesses et hanches (I), des hanches aux genoux (II), des hanches aux chevilles (III), bras (IV), mollets (V).', href: '/maladie/' },
  { term: 'Signe de Stemmer', definition: 'Impossibilité de pincer la peau à la base du deuxième orteil. Il oriente vers un lymphœdème et reste en général négatif dans le lipœdème pur.' },
  { term: 'Liposuccion WAL', definition: 'Water-Assisted Liposuction : liposuccion assistée par jet d’eau pulsé, qui détache la graisse en douceur avant de l’aspirer, en limitant le traumatisme des vaisseaux lymphatiques.', href: '/wal/' },
  { term: 'Bodyjet', definition: 'Appareil de liposuccion WAL utilisé au Centre Lipœdème Maroc pour délivrer le jet d’eau et aspirer la graisse.', href: '/wal/' },
  { term: 'Micro-canules', definition: 'Canules de petit diamètre utilisées pour aspirer la graisse par de très petites incisions, plus respectueuses des tissus.' },
  { term: 'Anesthésie tumescente', definition: 'Anesthésie locale par infiltration d’une grande quantité de solution diluée dans la zone à traiter. La patiente reste éveillée.' },
  { term: 'Vaisseaux lymphatiques', definition: 'Petits vaisseaux qui drainent la lymphe. Fragiles dans le lipœdème, ils doivent être préservés pendant la liposuccion.' },
  { term: 'Drainage lymphatique manuel', definition: 'Massage doux qui favorise la circulation de la lymphe. Il soulage la lourdeur et l’œdème mais ne retire pas la graisse du lipœdème.', href: '/guide/traitement-lipoedeme-sans-chirurgie/' },
  { term: 'Compression médicale', definition: 'Bas, collants, panty ou manchons qui exercent une pression adaptée sur les membres. Ils soulagent les symptômes et accompagnent la récupération après liposuccion.', href: '/guide/vetements-de-compression-lipoedeme/' },
  { term: 'Traitement conservateur', definition: 'Ensemble des traitements sans chirurgie : compression, activité physique, drainage, alimentation équilibrée.', href: '/guide/traitement-lipoedeme-sans-chirurgie/' },
];
