// Guide articles: in-depth answers to what people search about lipœdème in Morocco.
// Each article is rendered at /guide/<slug>/ with Article + FAQ structured data.
// Medical content written for patients; reviewed-by attribution points to the doctor.

import type { FaqItem } from '../seo/faq';

export interface GuideSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
}

export interface GuideArticle {
  slug: string;
  title: string;          // H1
  metaTitle: string;      // < 60 chars
  description: string;    // 120–155 chars
  intro: string;
  keyPoints: string[];    // "L'essentiel" box – short, quotable facts
  sections: GuideSection[];
  faq: FaqItem[];
  image?: string;
  imageAlt?: string;
  published: string;      // ISO date
  updated: string;
  related: string[];      // other guide slugs
}

export const GUIDE: GuideArticle[] = [
  {
    slug: 'lipoedeme-ou-cellulite',
    title: 'Lipœdème ou cellulite : comment faire la différence ?',
    metaTitle: 'Lipœdème ou cellulite : comment faire la différence ?',
    description: 'Douleur, bleus, symétrie, pieds épargnés : les signes qui distinguent le lipœdème de la cellulite et de l’obésité, et quand consulter.',
    intro:
      'La cellulite est un aspect de la peau que présentent la plupart des femmes. Le lipœdème est une maladie du tissu graisseux, douloureuse et évolutive. Les deux sont souvent confondus, ce qui retarde le diagnostic de nombreuses patientes.',
    keyPoints: [
      'La cellulite est un aspect de surface, en général indolore ; le lipœdème est une maladie, souvent douloureuse.',
      'Le lipœdème touche les deux jambes de façon symétrique et épargne les pieds.',
      'Les bleus fréquents et la douleur au toucher orientent vers le lipœdème.',
      'La graisse du lipœdème ne diminue pas avec le régime ou le sport.',
      'Seul un examen clinique par un médecin qui connaît la maladie permet de conclure.',
    ],
    sections: [
      {
        h2: 'La cellulite : un aspect de la peau, pas une maladie',
        paragraphs: [
          'La cellulite correspond à l’aspect « peau d’orange » ou capitonné de la peau, surtout sur les cuisses et les fesses. Elle concerne la grande majorité des femmes, quel que soit leur poids, et s’explique par la structure du tissu sous la peau.',
          'Elle n’est pas douloureuse, n’entraîne pas de bleus particuliers et ne s’aggrave pas en une maladie. Elle peut varier avec le poids, l’activité physique et les hormones.',
        ],
      },
      {
        h2: 'Le lipœdème : une maladie chronique du tissu graisseux',
        paragraphs: [
          'Le lipœdème est une accumulation anormale et symétrique de graisse, le plus souvent sur les hanches, les cuisses, les genoux et les mollets, parfois sur les bras. Il touche presque exclusivement les femmes et apparaît souvent à la puberté, après une grossesse ou à la ménopause.',
          'Cette graisse est douloureuse au toucher, les bleus apparaissent facilement et les jambes sont lourdes. Elle résiste aux régimes et au sport, et la maladie a tendance à évoluer avec le temps.',
        ],
      },
      {
        h2: 'Les différences en un coup d’œil',
        table: {
          head: ['', 'Cellulite', 'Lipœdème', 'Obésité'],
          rows: [
            ['Douleur au toucher', 'Non', 'Oui, fréquente', 'Non'],
            ['Bleus faciles', 'Non', 'Oui', 'Non'],
            ['Répartition', 'Variable', 'Symétrique, jambes (± bras)', 'Globale, tronc compris'],
            ['Pieds et mains', '—', 'Épargnés', 'Peuvent être touchés'],
            ['Effet du régime', 'Variable', 'Peu ou pas d’effet sur les zones atteintes', 'Perte de poids globale'],
            ['Évolution', 'Stable', 'Progressive', 'Variable'],
          ],
        },
      },
      {
        h2: 'Les signes qui doivent faire consulter',
        list: [
          'Des jambes nettement plus fortes que le haut du corps, depuis des années',
          'Une sensibilité ou une douleur quand on appuie sur la peau',
          'Des bleus qui apparaissent sans choc important',
          'Une sensation de jambes lourdes, surtout en fin de journée',
          'Une graisse qui ne bouge pas malgré les efforts',
          'Une mère, une sœur ou une tante avec la même silhouette',
        ],
      },
      {
        h2: 'Comment le diagnostic est posé',
        paragraphs: [
          'Il n’existe pas d’examen sanguin du lipœdème. Le diagnostic repose sur l’interrogatoire et l’examen clinique : répartition de la graisse, symétrie, douleur à la palpation, présence de nodules, état des pieds et de la circulation. Des examens complémentaires (écho-Doppler veineux, bilan sanguin) servent surtout à écarter d’autres causes.',
          'Au Centre Lipœdème Maroc, à Casablanca, cette consultation est réalisée par le Dr Tawfik Sefrioui. Elle permet de confirmer ou non le lipœdème, d’en préciser le stade et de proposer un traitement adapté.',
        ],
      },
    ],
    faq: [
      { q: 'La cellulite peut-elle devenir un lipœdème ?', a: 'Non. Ce sont deux choses différentes : la cellulite est un aspect de la peau, le lipœdème une maladie du tissu graisseux. Mais une femme atteinte de lipœdème peut aussi avoir de la cellulite, ce qui entretient la confusion.' },
      { q: 'Le lipœdème est-il lié au surpoids ?', a: 'Le lipœdème peut toucher des femmes minces comme des femmes en surpoids. Sa graisse ne répond pas au régime, contrairement à la graisse liée au surpoids. Les deux peuvent coexister.' },
      { q: 'Quel médecin consulter pour un lipœdème au Maroc ?', a: 'Un médecin qui connaît la maladie. À Casablanca, le Centre Lipœdème Maroc du Dr Tawfik Sefrioui est dédié au diagnostic et au traitement du lipœdème depuis 2015.' },
    ],
    image: '/2027/1.jpeg',
    imageAlt: 'Évolution du lipœdème des jambes',
    published: '2026-10-10',
    updated: '2026-10-10',
    related: ['stades-du-lipoedeme', 'lipoedeme-ou-lymphoedeme', 'prix-operation-lipoedeme-maroc'],
  },
  {
    slug: 'stades-du-lipoedeme',
    title: 'Les stades du lipœdème (1 à 4) et les types selon la localisation',
    metaTitle: 'Stades du lipœdème 1, 2, 3, 4 : comment les reconnaître',
    description: 'Stade 1, 2, 3 et lipo-lymphœdème : comment évolue le lipœdème, à quoi ressemble chaque stade, et les types selon les zones touchées.',
    intro:
      'Le lipœdème évolue avec le temps. Les médecins le décrivent en stades, selon l’aspect de la peau et du tissu graisseux, et en types, selon les zones du corps atteintes. Connaître son stade aide à choisir le bon traitement.',
    keyPoints: [
      'Stade 1 : peau lisse, tissu graisseux épaissi et sensible.',
      'Stade 2 : peau irrégulière, nodules palpables sous la peau.',
      'Stade 3 : masses graisseuses importantes, plis et déformations, surtout aux cuisses et aux genoux.',
      'Stade 4 : lipo-lymphœdème, quand un lymphœdème s’ajoute au lipœdème.',
      'Le stade ne dit pas tout : la douleur et la gêne au quotidien comptent aussi.',
    ],
    sections: [
      {
        h2: 'Stade 1',
        paragraphs: [
          'La surface de la peau reste lisse, mais le tissu sous la peau est épaissi. À la palpation, on peut sentir de petits nodules. Les jambes sont déjà plus volumineuses que le haut du corps et souvent sensibles au toucher.',
        ],
      },
      {
        h2: 'Stade 2',
        paragraphs: [
          'La peau devient irrégulière, avec des capitons et des nodules plus gros. Des amas de graisse peuvent apparaître, notamment à l’intérieur des genoux. Les douleurs et la sensation de lourdeur sont souvent plus marquées.',
        ],
      },
      {
        h2: 'Stade 3',
        paragraphs: [
          'Le tissu graisseux forme des masses importantes et des plis, en particulier sur les cuisses et autour des genoux. Ces volumes gênent la marche, provoquent des frottements et limitent la mobilité.',
        ],
      },
      {
        h2: 'Stade 4 : le lipo-lymphœdème',
        paragraphs: [
          'À un stade avancé, le volume de graisse peut gêner la circulation lymphatique et entraîner un lymphœdème secondaire : un gonflement qui peut alors atteindre les pieds. On parle de lipo-lymphœdème. La prise en charge devient plus complexe, d’où l’intérêt d’un diagnostic précoce.',
        ],
      },
      {
        h2: 'Les types de lipœdème selon les zones',
        list: [
          'Type I : bassin, fesses et hanches',
          'Type II : des hanches aux genoux',
          'Type III : des hanches aux chevilles',
          'Type IV : les bras',
          'Type V : les mollets uniquement',
        ],
        paragraphs: ['Ces types peuvent se combiner : un lipœdème des jambes s’accompagne souvent d’une atteinte des bras.'],
      },
      {
        h2: 'Quel traitement selon le stade ?',
        paragraphs: [
          'Aux premiers stades, la compression, l’activité physique adaptée et une alimentation anti-inflammatoire soulagent les symptômes. Lorsque la graisse malade entraîne douleur, gêne ou déformation, la liposuccion adaptée au lipœdème est le seul traitement qui la retire durablement.',
          'Au Centre Lipœdème Maroc, le Dr Tawfik Sefrioui pratique la liposuccion WAL Bodyjet 3D avec micro-canules, sous anesthésie locale. Le nombre de zones et de séances est défini lors de la consultation, selon le stade et le type.',
        ],
      },
    ],
    faq: [
      { q: 'Le lipœdème passe-t-il forcément au stade suivant ?', a: 'Pas toujours, mais la maladie a tendance à progresser, souvent lors des changements hormonaux (grossesse, ménopause). Un suivi et une prise en charge adaptée aident à limiter cette évolution.' },
      { q: 'Peut-on opérer un lipœdème de stade 1 ?', a: 'Oui, si la gêne et les douleurs le justifient. Intervenir tôt donne souvent de meilleurs résultats, car la peau et le système lymphatique sont mieux préservés. La décision se prend en consultation.' },
      { q: 'Les pieds sont-ils touchés par le lipœdème ?', a: 'Non, les pieds sont typiquement épargnés, ce qui crée un effet de « bracelet » à la cheville. Si les pieds gonflent, il faut rechercher un lymphœdème associé (stade 4).' },
    ],
    image: '/img/lipoedeme-stade-4-jambes.jpg',
    imageAlt: 'Lipœdème de stade avancé des jambes',
    published: '2026-10-10',
    updated: '2026-10-10',
    related: ['lipoedeme-ou-cellulite', 'lipoedeme-ou-lymphoedeme', 'recuperation-apres-liposuccion-lipoedeme'],
  },
  {
    slug: 'prix-operation-lipoedeme-maroc',
    title: 'Prix d’une opération du lipœdème au Maroc : ce qui fait varier le devis',
    metaTitle: 'Prix opération lipœdème au Maroc : de quoi dépend le devis',
    description: 'Combien coûte une liposuccion du lipœdème au Maroc ? Zones, stade, nombre de séances, anesthésie : ce qui fait varier le prix, et comment obtenir un devis.',
    intro:
      'C’est l’une des premières questions des patientes. Il n’existe pas de prix unique : chaque lipœdème est différent, et le devis dépend du stade, des zones à traiter et du nombre de séances. Voici ce qui entre en compte, et comment obtenir un devis clair.',
    keyPoints: [
      'Le prix dépend surtout du nombre de zones à traiter et du nombre de séances.',
      'Le stade du lipœdème et le volume de graisse à retirer influencent la durée de l’intervention.',
      'L’anesthésie locale évite les frais et les risques d’une anesthésie générale.',
      'Un devis détaillé et sans engagement est remis après la consultation au centre.',
      'Un premier avis est possible par WhatsApp avec quelques photos.',
    ],
    sections: [
      {
        h2: 'Ce qui fait varier le prix',
        list: [
          'Les zones traitées : cuisses, genoux, mollets, bras…',
          'Le stade du lipœdème et le volume de graisse malade',
          'Le nombre de séances : un lipœdème étendu se traite souvent en plusieurs temps',
          'La durée de l’intervention et le matériel utilisé (système Body-Jet, micro-canules)',
          'Le suivi : vêtements de compression, drainage post-opératoire, contrôles',
        ],
      },
      {
        h2: 'Ce que comprend en général la prise en charge',
        list: [
          'La consultation et l’examen clinique',
          'L’intervention par liposuccion WAL sous anesthésie locale',
          'Les consignes et le matériel post-opératoire',
          'Les consultations de contrôle',
        ],
        paragraphs: ['Le détail exact figure sur le devis remis après la consultation, pour qu’il n’y ait aucune surprise.'],
      },
      {
        h2: 'Pourquoi un devis personnalisé',
        paragraphs: [
          'Deux patientes au même stade n’ont pas forcément les mêmes zones atteintes ni les mêmes objectifs. Un prix « au forfait » annoncé sans examen ne reflète pas la réalité de votre traitement. L’examen clinique permet de définir précisément ce qui sera fait, en combien de séances, et donc le coût réel.',
        ],
      },
      {
        h2: 'Comment obtenir votre devis',
        paragraphs: [
          'Prenez rendez-vous au Centre Lipœdème Maroc, 5 boulevard Abdellatif Benqaddour, quartier Racine, à Casablanca (05 22 39 86 89). Si vous habitez loin, envoyez d’abord vos questions et quelques photos par WhatsApp : l’équipe vous donnera un premier avis et organisera la consultation.',
        ],
      },
    ],
    faq: [
      { q: 'La liposuccion du lipœdème est-elle remboursée au Maroc ?', a: 'La prise en charge dépend de votre assurance ou mutuelle et de votre contrat. Le centre peut vous remettre les documents médicaux nécessaires pour faire la demande.' },
      { q: 'Peut-on traiter toutes les zones en une seule fois ?', a: 'Cela dépend du volume à retirer et de votre état de santé. Pour la sécurité et la qualité du résultat, un lipœdème étendu est souvent traité en plusieurs séances, planifiées dès la consultation.' },
      { q: 'Le devis est-il gratuit ?', a: 'Le devis est remis après la consultation, sans engagement. Un premier avis peut aussi être donné à distance par WhatsApp.' },
    ],
    image: '/img/appareil-bodyjet-liposuccion-wal-anesthesie-locale.jpg',
    imageAlt: 'Appareil Body-Jet utilisé pour la liposuccion WAL',
    published: '2026-10-10',
    updated: '2026-10-10',
    related: ['recuperation-apres-liposuccion-lipoedeme', 'stades-du-lipoedeme', 'lipoedeme-des-bras'],
  },
  {
    slug: 'recuperation-apres-liposuccion-lipoedeme',
    title: 'Après une liposuccion du lipœdème : la récupération étape par étape',
    metaTitle: 'Récupération après liposuccion du lipœdème : étape par étape',
    description: 'Marche, compression, drainage, reprise du travail et du sport : à quoi s’attendre après une liposuccion WAL du lipœdème sous anesthésie locale.',
    intro:
      'La liposuccion WAL sous anesthésie locale permet une récupération plus rapide qu’une liposuccion classique sous anesthésie générale. Voici le déroulé habituel des suites, selon le protocole du Centre Lipœdème Maroc. Votre programme exact vous est remis après l’intervention.',
    keyPoints: [
      'Retour à domicile ou à l’hôtel le jour même dans la plupart des cas.',
      'Marche encouragée dès le lendemain pour favoriser la circulation.',
      'Vêtement de compression, surtout pendant le premier mois.',
      'Drainage post-opératoire à partir du 3e jour environ, selon le protocole du centre.',
      'Résultat final visible en général après 3 à 6 mois.',
    ],
    sections: [
      {
        h2: 'Le jour de l’intervention',
        paragraphs: [
          'Sous anesthésie locale, vous restez éveillée et confortable. Après une période de surveillance, vous pouvez rentrer avec les consignes écrites et votre vêtement de compression. Un écoulement du liquide d’infiltration par les petites incisions est normal les premières heures.',
        ],
      },
      {
        h2: 'La première semaine',
        list: [
          'Marcher dès le lendemain, plusieurs fois par jour',
          'Porter le vêtement de compression jour et nuit',
          'Commencer le drainage post-opératoire vers le 3e jour, selon le protocole du centre',
          'Bien s’hydrater et éviter les efforts intenses',
        ],
        paragraphs: ['Gonflement, bleus et sensibilité sont habituels et diminuent progressivement.'],
      },
      {
        h2: 'Les semaines suivantes',
        paragraphs: [
          'La plupart des patientes reprennent une activité légère en quelques jours, et le travail de bureau rapidement. La compression est recommandée en particulier pendant le premier mois. Le sport reprend progressivement, selon l’avis du chirurgien.',
          'Après un mois, le centre peut proposer un programme de remodelage (activité à faible impact associée à une technologie de vide et de compression, et à une alimentation saine) pour accompagner la récupération.',
        ],
      },
      {
        h2: 'Quand voit-on le résultat ?',
        paragraphs: [
          'Une partie de l’amélioration est visible rapidement, mais le gonflement met plusieurs semaines à disparaître. Le résultat final s’apprécie en général entre 3 et 6 mois. Les douleurs liées au lipœdème diminuent souvent nettement dans les zones traitées.',
        ],
      },
      {
        h2: 'Quand contacter le centre',
        list: [
          'Fièvre, rougeur ou chaleur inhabituelle d’une zone',
          'Douleur qui augmente au lieu de diminuer',
          'Gonflement important d’une seule jambe',
          'Toute question ou inquiétude : l’équipe reste joignable par téléphone et WhatsApp',
        ],
      },
    ],
    faq: [
      { q: 'Combien de temps faut-il rester à Casablanca après l’intervention ?', a: 'Cela dépend du nombre de zones traitées et de votre situation. Le centre planifie votre séjour avec vous pour que les premiers contrôles se fassent sur place, puis le suivi peut continuer à distance.' },
      { q: 'Est-ce douloureux après l’opération ?', a: 'Une gêne et des courbatures sont habituelles les premiers jours et se gèrent avec les antalgiques prescrits. La marche précoce aide à récupérer.' },
      { q: 'Le lipœdème peut-il revenir après la liposuccion ?', a: 'La graisse retirée ne revient pas. Le lipœdème restant une maladie chronique, des zones non traitées peuvent évoluer ; un mode de vie sain et un suivi aident à maintenir le résultat.' },
    ],
    image: '/img/jambes-apres-liposuccion-lipoedeme.jpg',
    imageAlt: 'Jambes après une liposuccion du lipœdème',
    published: '2026-10-10',
    updated: '2026-10-10',
    related: ['prix-operation-lipoedeme-maroc', 'stades-du-lipoedeme', 'lipoedeme-des-bras'],
  },
  {
    slug: 'lipoedeme-ou-lymphoedeme',
    title: 'Lipœdème ou lymphœdème : quelles différences ?',
    metaTitle: 'Lipœdème ou lymphœdème : les différences à connaître',
    description: 'Symétrie, pieds, douleur, signe de Stemmer : comment distinguer le lipœdème du lymphœdème, et pourquoi cela change le traitement.',
    intro:
      'Les deux noms se ressemblent et les deux font gonfler les jambes, mais ce ne sont pas les mêmes maladies. Le lipœdème est une maladie du tissu graisseux ; le lymphœdème est un gonflement dû à une mauvaise circulation de la lymphe. Les deux peuvent parfois s’associer.',
    keyPoints: [
      'Le lipœdème est symétrique et épargne les pieds ; le lymphœdème touche souvent un seul membre et les pieds.',
      'Le lipœdème est douloureux au toucher ; le lymphœdème l’est peu au début.',
      'Le signe de Stemmer (peau du 2e orteil difficile à pincer) oriente vers le lymphœdème.',
      'Un lipœdème avancé peut se compliquer d’un lymphœdème : c’est le lipo-lymphœdème.',
    ],
    sections: [
      {
        h2: 'Les différences principales',
        table: {
          head: ['', 'Lipœdème', 'Lymphœdème'],
          rows: [
            ['Nature', 'Graisse anormale', 'Accumulation de lymphe'],
            ['Répartition', 'Symétrique (deux jambes)', 'Souvent un seul membre'],
            ['Pieds', 'Épargnés', 'Souvent gonflés'],
            ['Douleur au toucher', 'Fréquente', 'Rare au début'],
            ['Bleus faciles', 'Oui', 'Non'],
            ['Signe de Stemmer', 'Négatif', 'Souvent positif'],
          ],
        },
      },
      {
        h2: 'Pourquoi la différence est importante',
        paragraphs: [
          'Le traitement n’est pas le même. Le lymphœdème se traite surtout par drainage, bandages et compression. Le lipœdème peut aussi bénéficier de compression, mais seule une liposuccion adaptée retire la graisse malade.',
          'Une liposuccion pour lipœdème doit respecter le système lymphatique : c’est l’intérêt des techniques douces comme la liposuccion WAL assistée par jet d’eau, pratiquée au Centre Lipœdème Maroc par le Dr Tawfik Sefrioui.',
        ],
      },
      {
        h2: 'Comment le médecin fait la différence',
        paragraphs: [
          'L’examen clinique suffit le plus souvent : observation des jambes et des pieds, recherche du signe de Stemmer, palpation des tissus. En cas de doute, une lymphoscintigraphie peut être demandée pour évaluer la circulation lymphatique.',
        ],
      },
    ],
    faq: [
      { q: 'Le lipœdème peut-il provoquer un lymphœdème ?', a: 'Oui, à un stade avancé, le volume de graisse peut gêner la circulation lymphatique. On parle alors de lipo-lymphœdème, ou stade 4.' },
      { q: 'Le drainage lymphatique guérit-il le lipœdème ?', a: 'Non. Il peut soulager la sensation de lourdeur et l’œdème, mais il ne retire pas la graisse du lipœdème.' },
    ],
    published: '2026-10-10',
    updated: '2026-10-10',
    related: ['lipoedeme-ou-cellulite', 'stades-du-lipoedeme', 'recuperation-apres-liposuccion-lipoedeme'],
  },
  {
    slug: 'lipoedeme-des-bras',
    title: 'Lipœdème des bras : symptômes et traitement',
    metaTitle: 'Lipœdème des bras : symptômes, diagnostic et traitement',
    description: 'Bras lourds et douloureux, graisse qui s’arrête au poignet : reconnaître le lipœdème des bras et le traiter par liposuccion WAL sous anesthésie locale à Casablanca.',
    intro:
      'Le lipœdème ne touche pas que les jambes. Chez de nombreuses patientes, les bras sont aussi atteints, en particulier le haut du bras. La graisse s’arrête net au niveau du poignet, laissant la main fine.',
    keyPoints: [
      'Graisse symétrique sur le haut des bras, parfois l’avant-bras, mains épargnées.',
      'Sensibilité, douleur au toucher et bleus faciles, comme sur les jambes.',
      'Souvent associé à un lipœdème des jambes.',
      'Traitement : liposuccion WAL sous anesthésie locale, qui préserve les lymphatiques.',
    ],
    sections: [
      {
        h2: 'Les signes du lipœdème des bras',
        list: [
          'Bras volumineux par rapport au reste du haut du corps',
          'Graisse qui « pend » sous le bras et s’arrête au poignet',
          'Douleur ou sensibilité quand on appuie',
          'Bleus qui apparaissent facilement',
          'Volume qui ne diminue pas avec le sport ciblé ou le régime',
        ],
      },
      {
        h2: 'Le traitement',
        paragraphs: [
          'La compression et l’activité physique peuvent soulager, sans réduire la graisse malade. La liposuccion adaptée au lipœdème est le traitement qui la retire durablement.',
          'Au Centre Lipœdème Maroc, le Dr Tawfik Sefrioui traite les bras, les avant-bras et la région des aisselles par liposuccion WAL Bodyjet 3D avec micro-canules, sous anesthésie locale. La patiente reste éveillée et confortable, et le geste préserve les vaisseaux lymphatiques.',
        ],
      },
    ],
    faq: [
      { q: 'Peut-on traiter les bras et les jambes en même temps ?', a: 'Cela dépend du volume total à retirer. Souvent, les zones sont traitées en plusieurs séances pour plus de sécurité ; le plan est défini lors de la consultation.' },
      { q: 'Reste-t-il des cicatrices sur les bras ?', a: 'Les micro-canules passent par de très petites incisions, généralement discrètes une fois cicatrisées.' },
    ],
    image: '/img/lipoedeme-bras-avant-apres.jpg',
    imageAlt: 'Lipœdème des bras avant et après liposuccion WAL',
    published: '2026-10-10',
    updated: '2026-10-10',
    related: ['stades-du-lipoedeme', 'prix-operation-lipoedeme-maroc', 'recuperation-apres-liposuccion-lipoedeme'],
  },
];

export const getArticle = (slug: string) => GUIDE.find((a) => a.slug === slug);
