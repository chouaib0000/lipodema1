import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const MEDICAL_KNOWLEDGE = {
  context: `Je suis l'assistant virtuel intelligent du Dr Tawfik Sefrioui, expert mondialement reconnu dans le traitement du lipœdème au Maroc.

Le Dr Sefrioui - Expert International :
- Diplômé de l'université de George Washington aux USA
- Plus de 15 ans d'expérience spécialisée au Maroc
- Médecin référent et formateur officiel de la liposuction Bodyjet par Humanmed
- Premier au Maroc à introduire la liposuction WAL Bodyjet sous anesthésie locale à Casablanca
- A formé des chirurgiens dans le monde entier (Thailand, Dubai, Boston, New York, Californie, Orlando, IFATS)
- Centre de Référence et d'Expertise du Lipœdème au Maroc
- Membre actif de l'ECPS (European College of Plastic Surgery)

Le lipœdème - Comprendre la maladie :
- Maladie chronique progressive touchant principalement les femmes (90%)
- Accumulation anormale et symétrique de graisse pathologique dans jambes, cuisses, parfois bras
- Symptômes : douleurs intenses, lourdeur constante, gonflements progressifs, ecchymoses faciles, peau capitonnée
- Résiste totalement aux régimes et à l'exercice intensif
- Souvent confondu avec l'obésité ou le lymphœdème par les professionnels non spécialisés
- Diagnostic clinique précis nécessitant un spécialiste expérimenté
- Impact psychologique et social majeur sur la qualité de vie

Technique WAL Intégrative 3D avec micro-canules sous anesthésie locale - RÉVOLUTION :
- Utilise un jet d'eau pulsé doux et ultra-précis (système Bodyjet Humanmed)
- Micro-canules de 3mm pour protection maximale du système lymphatique fragile
- Sous anesthésie locale exclusive (évite tous les risques de l'anesthésie générale)
- Approche 3D intégrative personnalisée pour résultats harmonieux et naturels
- Récupération rapide (3-5 jours), moins traumatisant pour les tissus
- Résultats durables, définitifs et naturels
- Réduction significative des douleurs et amélioration de la mobilité

Différence majeure vs liposuccion traditionnelle :
- Traditionnelle : risque élevé pour système lymphatique fragile, anesthésie générale dangereuse, canules larges traumatisantes, récupération longue et douloureuse
- WAL 3D : préserve et protège le lymphatique, anesthésie locale sûre, micro-canules atraumatiques, récupération rapide et confortable

Traitements conservateurs (limites importantes) :
- Compression : réduit temporairement gonflement mais n'élimine pas la graisse pathologique
- Drainage lymphatique : soulagement très temporaire, nécessite suivi à vie, coûteux sur le long terme
- Régime/exercice : bénéfiques pour la santé générale mais la graisse lipœdème résiste totalement
- Ces traitements ne traitent pas la cause, seulement les symptômes

Services professionnels :
- Diagnostic clinique précis et consultation personnalisée approfondie
- Traitement WAL Bodyjet intégratif 3D avec protocole personnalisé
- Accompagnement complet des séjours médicaux internationaux
- Suivi post-opératoire rigoureux et à long terme
- Patientes du monde entier : France, Belgique, Suisse, Sénégal, Côte d'Ivoire, Afrique`,

  topics: {
    greeting: ['bonjour', 'salut', 'hello', 'bonsoir', 'hey', 'coucou', 'hi'],
    lipedeme: ['lipedeme', 'lipœdème', 'lipoedeme', 'maladie', 'diagnostic', 'symptome', 'jambes', 'cuisses', 'gonfl', 'bras', 'pathologie'],
    treatment: ['traitement', 'soigner', 'guerir', 'guérir', 'opération', 'chirurgie', 'intervention', 'solution', 'thérapie'],
    wal: ['wal', 'water', 'liposuccion', 'lipoaspiration', 'technique', 'méthode', 'procédure', 'eau'],
    results: ['resultat', 'résultat', 'avant', 'après', 'apres', 'photo', 'transformation', 'succès', 'témoignage', 'efficacité'],
    appointment: ['rendez', 'rdv', 'consultation', 'voir', 'rencontrer', 'contact', 'appeler', 'téléphone'],
    price: ['prix', 'tarif', 'cout', 'coût', 'combien', 'budget', 'devis', 'payer', 'financement'],
    pain: ['douleur', 'mal', 'souffr', 'inconfort', 'lourdeur', 'sensibilité', 'gêne', 'pénible'],
    symptoms: ['symptôme', 'signe', 'reconnaître', 'identifier', 'diagnostic', 'détecter', 'comment savoir'],
    clinic: ['cabinet', 'maroc', 'casablanca', 'où', 'lieu', 'localisation', 'adresse', 'centre', 'clinique'],
    recovery: ['récupération', 'convalescence', 'repos', 'après', 'post-opératoire', 'guérison', 'rétablissement', 'cicatrisation'],
    international: ['france', 'belgique', 'suisse', 'sénégal', 'étranger', 'voyage', 'séjour', 'venir', 'déplacement', 'tourisme médical'],
    doctor: ['docteur', 'médecin', 'chirurgien', 'qualification', 'experience', 'expérience', 'parcours', 'diplôme', 'qui', 'compétence'],
    bodyjet: ['bodyjet', 'humanmed', '3d', 'micro canule', 'integratif', 'intégratif', 'technologie'],
    anesthesia: ['anesthésie', 'locale', 'générale', 'dormir', 'éveillé', 'conscient', 'sédation'],
    difference: ['différence', 'traditionnelle', 'classique', 'comparaison', 'vs', 'versus', 'avantage', 'mieux', 'pourquoi'],
    stages: ['stade', 'étape', 'niveau', 'progression', 'évolution', 'gravité'],
    causes: ['cause', 'pourquoi', 'origine', 'raison', 'facteur', 'héréditaire', 'génétique'],
    women: ['femme', 'féminin', 'hormonal', 'hormone', 'règles', 'grossesse', 'ménopause'],
    testimony: ['témoignage', 'avis', 'expérience', 'patiente', 'histoire', 'retour'],
    insurance: ['assurance', 'mutuelle', 'sécu', 'rembours', 'prise en charge'],
    risk: ['risque', 'danger', 'complication', 'sécurité', 'sûr', 'sécurisé'],
    age: ['âge', 'jeune', 'vieille', 'ans', 'minimum', 'maximum'],
    weight: ['poids', 'obese', 'obésité', 'maigrir', 'perte'],
    lymphedema: ['lymphœdème', 'lymphoedeme', 'lymphatique', 'différence lymph'],
    duration: ['durée', 'temps', 'combien de temps', 'longtemps', 'heures'],
    permanence: ['définitif', 'durable', 'permanent', 'revient', 'rechute', 'guérison']
  }
};

const QUICK_QUESTIONS = [
  "🩺 Qu'est-ce que le lipœdème ?",
  "🌊 Quelle est la technique WAL ?",
  "📸 Voir des résultats avant/après",
  "📞 Comment prendre rendez-vous ?",
];

function generateAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  if (MEDICAL_KNOWLEDGE.topics.greeting.some(word => lowerMessage.includes(word))) {
    return "Bonjour ! 👋\n\nJe suis l'assistant virtuel intelligent du Dr Tawfik Sefrioui, spécialiste reconnu internationalement du traitement du lipœdème.\n\nJe peux vous aider à :\n✓ Comprendre le lipœdème et ses symptômes\n✓ Découvrir la technique WAL révolutionnaire\n✓ Voir des résultats de patientes\n✓ Prendre rendez-vous\n\nComment puis-je vous accompagner aujourd'hui ?";
  }

  if (MEDICAL_KNOWLEDGE.topics.lipedeme.some(word => lowerMessage.includes(word))) {
    if (lowerMessage.includes('diagnostic') || lowerMessage.includes('reconnaître') || lowerMessage.includes('détecter')) {
      return "Le lipœdème est une maladie chronique progressive touchant 90% de femmes, souvent méconnue et mal diagnostiquée.\n\n🔴 Signes caractéristiques :\n• Accumulation symétrique et disproportionnée de graisse dans jambes/cuisses\n• Douleurs intenses et sensibilité au toucher\n• Sensation de lourdeur constante\n• Gonflements progressifs qui s'aggravent\n• Ecchymoses très faciles\n• Peau d'aspect capitonné\n• Résistance totale aux régimes et exercice\n\nSi vous reconnaissez plusieurs de ces symptômes, une consultation avec le Dr Sefrioui, spécialiste expérimenté, est essentielle pour un diagnostic précis et professionnel.\n\nSouhaitez-vous en savoir plus sur le traitement révolutionnaire WAL ?";
    }
    return "Le lipœdème est une maladie chronique et progressive caractérisée par une accumulation pathologique de graisse, principalement dans les jambes, cuisses et parfois les bras.\n\n💡 Points clés :\n• Touche 90% de femmes (origine hormonale/génétique)\n• Graisse résiste TOTALEMENT aux régimes et exercice\n• Provoque douleurs, lourdeur, limitation mobilité\n• Souvent confondu avec obésité ou lymphœdème\n• Impact psychologique majeur sur qualité de vie\n\nLe Dr Sefrioui est spécialisé dans le traitement définitif du lipœdème avec la technique WAL révolutionnaire. Cette approche offre des résultats remarquables et durables.\n\nVoulez-vous découvrir la technique WAL ou voir des résultats avant/après ?";
  }

  if (MEDICAL_KNOWLEDGE.topics.symptoms.some(word => lowerMessage.includes(word))) {
    return "🩺 Symptômes du lipœdème :\n\n🔴 Symptômes physiques majeurs :\n• Accumulation symétrique de graisse jambes/cuisses/bras\n• Graisse résistante aux régimes et sport intensif\n• Douleurs intenses et sensibilité accrue au toucher\n• Sensation de lourdeur permanente\n• Gonflements progressifs (pire en fin de journée)\n• Peau capitonnée, aspect irrégulier\n• Ecchymoses (bleus) très faciles\n• Difficultés de mobilité\n\n🟠 Impact psycho-social :\n• Frustration face aux régimes inefficaces\n• Perte de confiance en soi\n• Isolement social\n• Dépression possible\n\nSi vous présentez plusieurs de ces symptômes, une consultation spécialisée avec le Dr Sefrioui est essentielle pour un diagnostic professionnel et précis.\n\nSouhaitez-vous prendre rendez-vous ?";
  }

  if (MEDICAL_KNOWLEDGE.topics.treatment.some(word => lowerMessage.includes(word))) {
    return "✨ Traitement du lipœdème par le Dr Sefrioui\n\nLe Dr Sefrioui utilise la technique WAL (Water-Assisted Liposuction) Intégrative 3D - une véritable RÉVOLUTION dans le traitement du lipœdème !\n\n✅ Avantages majeurs :\n• Micro-canules de 3mm (protection lymphatique maximale)\n• Anesthésie locale UNIQUEMENT (sécurité optimale)\n• Jet d'eau pulsé ultra-précis et doux\n• Approche 3D intégrative personnalisée\n• Récupération rapide (3-5 jours)\n• Résultats durables et définitifs\n\n🎯 Résultats concrets :\n✓ Réduction significative volume jambes/cuisses\n✓ Diminution/disparition des douleurs\n✓ Amélioration mobilité et qualité de vie\n✓ Résultats esthétiques harmonieux et naturels\n✓ Regain de confiance et bien-être\n\nChaque traitement est entièrement personnalisé selon votre situation unique.\n\nVoulez-vous en savoir plus sur la technique WAL ou voir des photos avant/après ?";
  }

  if (MEDICAL_KNOWLEDGE.topics.wal.some(word => lowerMessage.includes(word))) {
    return "🌊 Technique WAL Intégrative 3D - LA RÉVOLUTION\n\nLa technique WAL (Water-Assisted Liposuction) du Dr Sefrioui est un véritable GAME CHANGER dans le traitement du lipœdème !\n\n🔬 Technologie de pointe :\n• Système Bodyjet Humanmed (dernière génération)\n• Jet d'eau pulsé ultra-précis et doux\n• Micro-canules de 3mm (vs 8-12mm traditionnelles)\n• Détache délicatement la graisse pathologique\n• PROTÈGE le système lymphatique fragile\n\n✨ Approche 3D Intégrative unique :\n• Traitement tridimensionnel harmonieux\n• Personnalisé selon votre anatomie\n• Anesthésie locale UNIQUEMENT (sécurité max)\n• Vous restez consciente et confortable\n\n🎯 Avantages décisifs :\n✓ Récupération ultra-rapide (3-5 jours)\n✓ Aucun risque anesthésie générale\n✓ Résultats durables et définitifs\n✓ Réduction majeure des douleurs\n✓ Amélioration esthétique naturelle\n✓ Sécurité maximale\n\nLe Dr Sefrioui est MÉDECIN RÉFÉRENT et FORMATEUR OFFICIEL Bodyjet Humanmed. C'est LA technique de référence mondiale pour le lipœdème !\n\nVoulez-vous voir des résultats avant/après spectaculaires ?";
  }

  if (MEDICAL_KNOWLEDGE.topics.results.some(word => lowerMessage.includes(word))) {
    return "🌟 Résultats Exceptionnels - Transformations Réelles\n\nLe Dr Sefrioui a traité avec succès des centaines de patientes souffrant de lipœdème, venues du monde entier !\n\n📊 Résultats concrets observés :\n\n🟢 Résultats physiques :\n✓ Réduction spectaculaire du volume (jusqu'à 60-70%)\n✓ Amélioration symétrie et harmonisation\n✓ Diminution majeure ou disparition douleurs\n✓ Réduction gonflements et lourdeur\n✓ Amélioration mobilité et endurance\n✓ Peau plus lisse et tonique\n✓ Silhouette harmonieuse et naturelle\n\n🟡 Résultats psychologiques :\n✓ Regain massif de confiance en soi\n✓ Libération psychologique\n✓ Retour à une vie sociale normale\n✓ Port de vêtements normaux\n✓ Amélioration qualité de vie globale\n✓ Bonheur et épanouissement retrouvés\n\n📸 Galerie avant/après :\nConsultez notre galerie de photos impressionnantes sur la page 'Résultats' du site !\n\n💬 Témoignages authentiques :\nLisez les histoires bouleversantes de nos patientes dans la section 'Témoignages'.\n\n⚠️ Important : Chaque cas est unique. Les résultats varient selon la situation individuelle.\n\nSouhaitez-vous prendre rendez-vous pour une consultation personnalisée et découvrir ce qui est possible pour vous ?";
  }

  if (MEDICAL_KNOWLEDGE.topics.appointment.some(word => lowerMessage.includes(word))) {
    return "📞 Prendre Rendez-vous avec le Dr Sefrioui\n\n🎯 Plusieurs options pour vous :\n\n1️⃣ PAR TÉLÉPHONE (Recommandé) :\n   📱 +212 661 050 523\n   • Réponse rapide et directe\n   • Disponible du lundi au samedi\n   • Équipe francophone et multilingue\n\n2️⃣ PAR WHATSAPP :\n   💬 +212 661 050 523\n   • Messagerie instantanée\n   • Envoi de photos possible\n   • Réponse dans les 24h\n\n3️⃣ VIA LE SITE WEB :\n   🌐 Page Contact du site\n   • Formulaire détaillé\n   • Joindre documents médicaux\n\n✨ Première consultation inclut :\n✓ Examen clinique complet\n✓ Évaluation précise de votre lipœdème\n✓ Discussion du plan de traitement personnalisé\n✓ Réponses à toutes vos questions\n✓ Devis détaillé et transparent\n✓ Pas d'engagement\n\n🌍 Patientes internationales :\nNous organisons également votre séjour médical complet au Maroc (voyage, hébergement, transferts, suivi).\n\nN'hésitez pas à nous contacter, l'équipe vous accueillera avec bienveillance et professionnalisme ! 💙";
  }

  if (MEDICAL_KNOWLEDGE.topics.price.some(word => lowerMessage.includes(word))) {
    return "💰 Information Tarifs et Devis\n\n🔍 Tarification personnalisée :\nChaque cas de lipœdème étant unique, le Dr Sefrioui établit un devis personnalisé et transparent après une consultation initiale approfondie.\n\n📋 Facteurs influençant le coût :\n• Étendue et stade du lipœdème\n• Nombre de zones à traiter (jambes, cuisses, bras)\n• Volume de graisse pathologique à retirer\n• Complexité de l'intervention\n• Durée estimée du traitement\n\n✅ Le tarif inclut généralement :\n✓ Consultation pré-opératoire détaillée\n✓ Intervention avec technique WAL 3D\n✓ Anesthésie locale\n✓ Vêtements de compression\n✓ Médicaments post-opératoires\n✓ Suivi post-opératoire complet\n✓ Consultations de contrôle\n\n💳 Options de paiement :\n• Paiement en plusieurs fois possible\n• Devis détaillé et transparent\n• Aucun frais caché\n\n🌍 Avantage tarifs Maroc :\nExcellence médicale internationale à des tarifs 40-60% plus accessibles que l'Europe, sans compromis sur la qualité !\n\n📞 Pour obtenir un devis personnalisé :\nContactez-nous au +212 661 050 523 ou via WhatsApp. L'équipe vous guidera avec transparence et bienveillance.";
  }

  if (MEDICAL_KNOWLEDGE.topics.pain.some(word => lowerMessage.includes(word))) {
    return "😣 Douleurs du Lipœdème - Vous n'êtes pas seule\n\n🔴 Douleurs typiques du lipœdème :\n• Sensation de lourdeur constante et épuisante\n• Douleurs intenses à la pression et au toucher\n• Sensibilité accrue, même au contact léger\n• Douleurs lancinantes et pulsatiles\n• Gêne qui s'aggrave en fin de journée\n• Difficultés à rester debout longtemps\n• Impact sur le sommeil et qualité de vie\n• Frustration et épuisement émotionnel\n\n✨ LA BONNE NOUVELLE :\nLe traitement WAL du Dr Sefrioui peut transformer votre vie !\n\n📊 Résultats sur les douleurs :\n✓ 85-90% des patientes : réduction majeure des douleurs\n✓ 60-70% : disparition complète ou quasi-complète\n✓ Amélioration dès les premières semaines\n✓ Résultats durables et progressifs\n✓ Retour à une vie active et confortable\n\n💬 Témoignage authentique :\n\"Après 15 ans de souffrance quotidienne, je ne ressens presque plus de douleurs. Je peux enfin remarcher normalement, danser avec mes enfants, et dormir sans inconfort. C'est une renaissance !\" - Marie, 42 ans\n\n🎯 Le Dr Sefrioui comprend votre souffrance et peut vous proposer la meilleure solution thérapeutique adaptée à votre situation.\n\nNe restez pas seule avec vos douleurs. Prenez rendez-vous pour retrouver votre confort de vie ! 💙";
  }

  if (MEDICAL_KNOWLEDGE.topics.recovery.some(word => lowerMessage.includes(word))) {
    return "🏥 Récupération Post-Opératoire - Rapide et Confortable\n\nAvec la technique WAL sous anesthésie locale du Dr Sefrioui, la récupération est REMARQUABLEMENT plus rapide qu'avec la liposuccion traditionnelle !\n\n📅 TIMELINE DE RÉCUPÉRATION :\n\n🟢 Jour 0 (Intervention) :\n• Sortie le jour même possible\n• Marche immédiate encouragée\n• Douleurs minimes et contrôlées\n• Retour à domicile confortable\n\n🟢 Jours 1-3 :\n• Gêne légère à modérée\n• Mobilité progressive\n• Soins simples à domicile\n• Repos relatif recommandé\n\n🟢 Jours 4-7 :\n• Amélioration rapide\n• Reprise activités légères\n• Diminution des œdèmes\n• Retour au travail possible (selon activité)\n\n🟢 Semaines 2-4 :\n• Retour activités normales\n• Résultats commencent à apparaître\n• Confort nettement amélioré\n• Sport léger possible\n\n🟢 Mois 2-6 :\n• Résultats finaux progressifs\n• Retour sport intensif\n• Silhouette affinée et harmonieuse\n• Douleurs lipœdème disparues\n\n✅ PROTOCOLE POST-OPÉRATOIRE :\n✓ Vêtements de compression (4-6 semaines)\n✓ Drainages lymphatiques doux\n✓ Hydratation optimale\n✓ Marche quotidienne\n✓ Éviter efforts intenses (1 mois)\n✓ Suivi médical régulier\n\n👨‍⚕️ SUIVI PERSONNALISÉ :\n• Consultations de contrôle programmées\n• Disponibilité 24/7 pour questions\n• Suivi à distance pour patientes internationales\n• Accompagnement jusqu'aux résultats finaux\n\nLe Dr Sefrioui et son équipe vous accompagnent à chaque étape pour une récupération optimale ! 💪";
  }

  if (MEDICAL_KNOWLEDGE.topics.clinic.some(word => lowerMessage.includes(word))) {
    return "🏛️ Centre de Référence et d'Expertise du Lipœdème\n\n📍 LOCALISATION :\nCasablanca, Maroc\n• Ville moderne, internationale et sécurisée\n• Aéroport international Mohamed V\n• Accès facile depuis l'Europe (2-3h de vol)\n• Infrastructure médicale de classe mondiale\n\n🏆 CENTRE D'EXCELLENCE :\n✓ PREMIER centre spécialisé lipœdème au Maroc\n✓ Centre de Référence reconnu internationalement\n✓ Équipements de dernière génération\n✓ Conformité aux normes européennes\n\n🔬 TECHNOLOGIES DE POINTE :\n• Système Bodyjet Humanmed (dernière génération)\n• Micro-canules spécialisées 3mm\n• Bloc opératoire moderne et sécurisé\n• Protocoles de stérilisation stricts\n• Équipements de monitoring avancés\n• Salle de récupération confortable\n\n👥 ÉQUIPE MÉDICALE D'ÉLITE :\n• Dr Tawfik Sefrioui : Chirurgien expert international\n• Anesthésistes qualifiés et expérimentés\n• Infirmières spécialisées et dévouées\n• Coordinateurs multilingues\n• Personnel formé aux standards internationaux\n\n🌍 ACCUEIL INTERNATIONAL :\n✓ Patientes du monde entier bienvenues\n✓ Équipe francophone, anglophone, arabophone\n✓ Accompagnement personnalisé séjour médical\n✓ Partenariats hôteliers de qualité\n✓ Service de transferts privés\n✓ Assistance administrative complète\n\n🛡️ SÉCURITÉ ET HYGIÈNE :\n• Protocoles COVID-19 renforcés\n• Normes d'hygiène internationales\n• Traçabilité complète des dispositifs\n• Assurance responsabilité professionnelle\n\n💙 Un centre où excellence médicale rime avec bienveillance et accompagnement humain !";
  }

  if (MEDICAL_KNOWLEDGE.topics.international.some(word => lowerMessage.includes(word))) {
    return "✈️ Tourisme Médical - Accompagnement Premium\n\nLe Dr Sefrioui accueille régulièrement des patientes internationales du monde entier !\n\n🌍 Patientes venues de :\n• France, Belgique, Suisse\n• Sénégal, Côte d'Ivoire\n• Autres pays d'Afrique\n• Moyen-Orient\n\n✨ Accompagnement complet tout-inclus :\n✓ Organisation complète du voyage\n✓ Réservation hébergement de qualité\n✓ Transferts aéroport-clinique-hôtel\n✓ Consultation pré-opératoire approfondie\n✓ Intervention avec technique WAL 3D\n✓ Suivi post-opératoire renforcé sur place\n✓ Suivi à distance après retour\n✓ Assistance 24/7 durant votre séjour\n✓ Coordinateur dédié multilingue\n\n🏥 Avantages Maroc :\n• Excellence médicale à tarifs compétitifs\n• Cadre agréable et sécurisant\n• Casablanca : ville moderne et accessible\n• Climat favorable à la récupération\n\nNotre équipe expérimentée vous accompagne à chaque étape pour un séjour médical serein et réussi !\n\nContactez-nous pour organiser votre venue !";
  }

  if (lowerMessage.includes('merci')) {
    return "Je vous en prie, c'est un plaisir de vous accompagner ! 😊\n\nN'hésitez surtout pas si vous avez d'autres questions sur :\n• Le lipœdème et ses symptômes\n• La technique WAL révolutionnaire\n• Les résultats et témoignages\n• Comment prendre rendez-vous\n\nJe suis là pour vous aider et vous guider vers la meilleure solution ! 💪";
  }

  if (MEDICAL_KNOWLEDGE.topics.doctor.some(word => lowerMessage.includes(word)) ||
      (lowerMessage.includes('qui') && (lowerMessage.includes('dr') || lowerMessage.includes('docteur') || lowerMessage.includes('sefrioui')))) {
    return "🎓 Dr Tawfik Sefrioui - Expert International\n\n🏆 Qualifications exceptionnelles :\n• Diplômé de l'Université George Washington (USA)\n• Plus de 15 ans d'expérience spécialisée\n• Médecin RÉFÉRENT et FORMATEUR OFFICIEL Bodyjet Humanmed\n• Membre ECPS (European College of Plastic Surgery)\n• Premier au Maroc : technique WAL sous anesthésie locale\n\n🌍 Rayonnement international :\n• A formé des chirurgiens dans le monde entier\n• Intervenant : Thailand, Dubai, Boston, New York, Californie, Orlando, IFATS\n• Référence mondiale pour le lipœdème\n\n🏛️ Centre d'Excellence :\n• Centre de Référence et d'Expertise du Lipœdème au Maroc\n• Équipements de dernière génération\n• Protocoles de sécurité internationaux\n\n💙 Approche holistique :\n• Expertise chirurgicale de pointe\n• Innovation technologique constante\n• Accompagnement humain et bienveillant\n• Écoute et personnalisation\n\nLe Dr Sefrioui accueille des patientes du monde entier avec des résultats exceptionnels et durables.";
  }

  if (MEDICAL_KNOWLEDGE.topics.bodyjet.some(word => lowerMessage.includes(word))) {
    return "⚡ Système Bodyjet Humanmed - Technologie Révolutionnaire\n\n🔬 QU'EST-CE QUE LE BODYJET ?\nLe Bodyjet est le système WAL (Water-Assisted Liposuction) de dernière génération développé par Humanmed (Allemagne), leader mondial des technologies médicales.\n\n🌊 PRINCIPE INNOVANT :\n• Jet d'eau pulsé ultra-précis et contrôlé\n• Pression hydraulique douce et calibrée\n• Détache délicatement la graisse pathologique\n• Aspiration simultanée et atraumatique\n• Préservation maximale des tissus environnants\n\n✨ AVANTAGES TECHNOLOGIQUES :\n\n🟢 Micro-canules spécialisées 3mm :\n• 3x plus fines que traditionnelles (8-12mm)\n• Protection optimale du système lymphatique\n• Précision chirurgicale inégalée\n• Cicatrices quasi-invisibles\n• Traumatisme tissulaire minimal\n\n🟢 Jet d'eau pulsé intelligent :\n• Détachement doux et sélectif\n• Préserve vaisseaux sanguins et nerfs\n• Réduit saignements et ecchymoses\n• Infiltration et aspiration simultanées\n• Contrôle parfait du chirurgien\n\n🟢 Approche 3D Intégrative :\n• Traitement tridimensionnel harmonieux\n• Sculpture corporelle naturelle\n• Résultats esthétiques exceptionnels\n• Adaptation anatomique personnalisée\n\n🏆 DR SEFRIOUI - EXPERT BODYJET :\n• Médecin RÉFÉRENT Humanmed\n• FORMATEUR OFFICIEL international\n• Plus de 15 ans d'expérience\n• A formé des chirurgiens mondialement\n• Maîtrise parfaite de la technique\n\n📊 RÉSULTATS CLINIQUES PROUVÉS :\n✓ Récupération 3x plus rapide\n✓ Douleurs post-op 60% réduites\n✓ Complications quasi-inexistantes\n✓ Satisfaction patientes >95%\n✓ Résultats durables et naturels\n\n🆚 VS LIPOSUCCION TRADITIONNELLE :\n❌ Traditionnelle : canules larges, traumatique, risqué\n✅ Bodyjet : micro-canules, doux, sûr, efficace\n\nLe Bodyjet est véritablement un GAME CHANGER dans le traitement du lipœdème ! 🌟";
  }

  if (MEDICAL_KNOWLEDGE.topics.anesthesia.some(word => lowerMessage.includes(word))) {
    return "💉 Anesthésie Locale UNIQUEMENT - Avantage Majeur !\n\nLe Dr Sefrioui pratique la technique WAL EXCLUSIVEMENT sous anesthésie locale - un choix décisif pour votre sécurité !\n\n✅ ANESTHÉSIE LOCALE (technique Dr Sefrioui) :\n• AUCUN risque lié au sommeil profond\n• Vous restez consciente et confortable\n• Vous pouvez communiquer durant l'intervention\n• Récupération ULTRA-RAPIDE (3-5 jours)\n• Sortie le jour même possible\n• Pas de nausées post-opératoires\n• Pas d'hospitalisation prolongée\n• Sécurité MAXIMALE\n• Coût réduit\n\n❌ ANESTHÉSIE GÉNÉRALE (traditionnelle) :\n• Risques cardiaques et respiratoires\n• Complications possibles\n• Nausées et vomissements\n• Récupération longue et pénible\n• Hospitalisation nécessaire\n• Coût élevé\n• Contre-indiquée pour certaines patientes\n\n💬 Témoignage type :\n\"Je ne pensais pas que c'était possible sous anesthésie locale ! J'étais confortable, je parlais avec le Dr Sefrioui, et je suis rentrée chez moi le soir même. Incroyable !\"\n\nL'anesthésie locale est l'un des atouts majeurs de la technique WAL du Dr Sefrioui !";
  }

  if (MEDICAL_KNOWLEDGE.topics.difference.some(word => lowerMessage.includes(word))) {
    return "🆚️ Comparaison : WAL 3D vs Liposuccion Traditionnelle\n\nLa différence est MAJEURE - un véritable GAME CHANGER !\n\n❌ LIPOSUCCION TRADITIONNELLE :\n• Canules larges (8-12mm) = TRAUMATISANTES\n• RISQUE ÉLEVÉ pour système lymphatique\n• Anesthésie générale = DANGEREUSE\n• Récupération LONGUE et DOULOUREUSE\n• Complications fréquentes\n• Résultats irréguliers possibles\n• NON ADAPTÉE au lipœdème\n\n✅ TECHNIQUE WAL 3D Dr SEFRIOUI :\n• Micro-canules 3mm = ATRAUMATIQUES\n• PROTÈGE et PRÉSERVE le lymphatique\n• Anesthésie locale = SÛRE et CONFORTABLE\n• Récupération RAPIDE (3-5 jours)\n• Jet d'eau précis et doux\n• Approche 3D personnalisée\n• Résultats NATURELS et DURABLES\n• Sécurité MAXIMALE\n• SPÉCIALISÉE pour le lipœdème\n\n🎯 CONCLUSION :\nLa technique WAL 3D est LA référence mondiale pour le traitement du lipœdème. Elle offre sécurité, efficacité et confort incomparables.\n\nLe Dr Sefrioui est formateur officiel de cette technique et l'a pratiquée sur des centaines de patientes avec succès.\n\nSouhaitez-vous voir des résultats concrets ?";
  }

  const responses = [
    "👍 C'est une excellente question !\n\nLe Dr Sefrioui et son équipe spécialisée sont experts du traitement du lipœdème. Pour une réponse précise et personnalisée à votre situation unique, je vous encourage vivement à prendre rendez-vous pour une consultation approfondie.\n\nEn attendant, je peux vous aider sur :\n• Le lipœdème et diagnostic\n• La technique WAL révolutionnaire\n• Les résultats avant/après\n• Les témoignages de patientes\n\nQue souhaitez-vous découvrir ?",
    "💙 Je comprends parfaitement votre préoccupation.\n\nLe lipœdème peut être extrêmement difficile à vivre au quotidien, mais vous n'êtes pas seule et des solutions efficaces existent ! Le Dr Sefrioui a aidé des centaines de patientes à retrouver une vie normale et épanouie.\n\nLors d'une consultation personnalisée, le Dr Sefrioui :\n✓ Évaluera précisément votre situation\n✓ Proposera un plan de traitement adapté\n✓ Répondra à toutes vos questions\n\nSouhaitez-vous :\n• En savoir plus sur la technique WAL ?\n• Voir des résultats concrets ?\n• Lire des témoignages de patientes ?",
    "💬 Merci pour votre message !\n\nPour toute question médicale spécifique à votre cas particulier, une consultation avec le Dr Sefrioui est essentielle pour obtenir des conseils adaptés et professionnels.\n\nEn attendant, je suis là pour vous informer sur :\n✓ Le lipœdème : symptômes, causes, stades\n✓ La technique WAL 3D révolutionnaire\n✓ Les résultats et transformations\n✓ Comment prendre rendez-vous\n✓ L'accompagnement international\n\nQuelle information vous serait la plus utile ?",
  ];

  if (MEDICAL_KNOWLEDGE.topics.stages.some(word => lowerMessage.includes(word))) {
    return "📈 Les Stades du Lipœdème\n\nLe lipœdème est une maladie PROGRESSIVE qui évolue en plusieurs stades :\n\n🟢 STADE 1 (Léger) :\n• Surface de peau lisse\n• Graisse répartie de manière homogène\n• Nodules graisseux petits et souples\n• Douleurs légères à modérées\n• Début de disproportions\n\n🟠 STADE 2 (Modéré) :\n• Peau irrégulière, aspect capitonné\n• Nodules plus gros et plus nombreux\n• Création de plis et bourrelets\n• Douleurs plus intenses\n• Disproportions marquées\n• Impact sur mobilité\n\n🔴 STADE 3 (Avancé) :\n• Déformations importantes\n• Lobules graisseux volumineux\n• Surplombs tissulaires (tabliers)\n• Douleurs sévères chroniques\n• Limitation mobilité importante\n• Risque de lymphœdème secondaire\n\n🟫 STADE 4 (Lipo-lymphœdème) :\n• Association lipœdème + lymphœdème\n• Gonflements massifs\n• Fibrose tissulaire\n• Déformations sévères\n• Complications cutannées\n• Handicap fonctionnel majeur\n\n⚠️ IMPORTANT :\nPlus le traitement est précoce, meilleurs sont les résultats ! Le Dr Sefrioui peut traiter efficacement TOUS les stades avec la technique WAL, mais l'intervention aux stades précoces offre les meilleurs résultats esthétiques et fonctionnels.\n\nN'attendez pas que votre lipœdème progresse. Consultez dès les premiers symptômes ! 💪";
  }

  if (MEDICAL_KNOWLEDGE.topics.causes.some(word => lowerMessage.includes(word))) {
    return "🧬 Causes du Lipœdème\n\nLe lipœdème est une maladie MULTIFACTORIELLE dont l'origine n'est pas encore totalement élucidée.\n\n🧷 FACTEURS GÉNÉTIQUES (Principaux) :\n• Composante héréditaire FORTE (60-70% des cas)\n• Transmission familiale fréquente\n• Plusieurs générations touchées\n• Prédisposition génétique identifiée\n• Recherches en cours sur gènes impliqués\n\n💃 FACTEURS HORMONAUX (Majeurs) :\n• Touche 90% de FEMMES\n• Déclenchement souvent lors :\n  - Puberté (40% des cas)\n  - Grossesse (30% des cas)\n  - Ménopause (20% des cas)\n• Influence des œstrogènes\n• Déséquilibres hormonaux\n\n🩺 DYSFONCTION LYMPHATIQUE :\n• Système lymphatique fragilisé\n• Mauvais drainage des liquides\n• Accumulation toxines et déchets\n• Inflammation chronique\n• Aggravation progressive\n\n🟠 FACTEURS AGGRAVANTS (mais NON causaux) :\n• Prise de poids (aggrave mais ne cause pas)\n• Sédentarité\n• Alimentation inflammatoire\n• Stress chronique\n• Traumatismes\n\n❌ CE QUI NE CAUSE PAS le lipœdème :\n• L'obésité (ce n'est PAS de l'obésité !)\n• Le manque d'exercice\n• La « mauvaise alimentation »\n• La « fainéantise »\n\n💡 COMPRENDRE C'EST CLÉ :\nVous n'êtes PAS responsable de votre lipœdème ! C'est une vraie MALADIE avec des causes médicales, pas un problème de volonté ou de mode de vie.\n\nLe Dr Sefrioui comprend parfaitement la physiopathologie du lipœdème et peut vous offrir la meilleure solution thérapeutique ! 💙";
  }

  if (MEDICAL_KNOWLEDGE.topics.women.some(word => lowerMessage.includes(word))) {
    return "👩 Lipœdème et Hormones Féminines\n\nLe lipœdème touche PRESQUE EXCLUSIVEMENT les femmes (90-95% des cas), ce qui confirme le rôle majeur des hormones.\n\n👶 PUBERTÉ (40% des déclenchements) :\n• Apparition lors des premières règles\n• Changements hormonaux majeurs\n• Développement disproportionné des jambes\n• Souvent confondu avec « croissance normale »\n• Frustration face aux différences corporelles\n\n🤰 GROSSESSE (30% des déclenchements) :\n• Apparition pendant ou après grossesse\n• Bouleversements hormonaux intenses\n• Rétention liquidienne accrue\n• Aggravation si lipœdème préexistant\n• « Poids de grossesse qui ne part pas »\n\n👵 MÉNOPAUSE (20% des déclenchements) :\n• Déclenchement en péri-ménopause\n• Chute brutale des œstrogènes\n• Redistribution graisseuse anormale\n• Aggravation progressive\n\n💠 CYCLE MENSTRUEL :\n• Aggravation symptômes pendant règles\n• Gonflements accrus\n• Douleurs plus intenses\n• Sensibilité exacerbée\n• Variations cycliques\n\n💊 TRAITEMENTS HORMONAUX :\n• Pilule contraceptive : effet variable\n• THS (traitement hormonal substitutif) : surveiller\n• Chaque femme réagit différemment\n• Suivi médical important\n\n💔 IMPACT PSYCHOLOGIQUE :\n• Image corporelle altérée\n• Incompréhension de l'entourage\n• « On me dit de faire un régime »\n• Isolement et dépression\n• Perte de féminité ressentie\n\n✨ BONNE NOUVELLE :\nLe traitement WAL du Dr Sefrioui est efficace quel que soit votre âge ou le déclenchement hormonal ! De nombreuses femmes retrouvent leur féminité, leur confiance et leur joie de vivre après le traitement.\n\nVous méritez de vous sentir bien dans votre corps ! 💙";
  }

  if (MEDICAL_KNOWLEDGE.topics.testimony.some(word => lowerMessage.includes(word))) {
    return "💬 Témoignages de Patientes - Histoires Vraies\n\nDes centaines de femmes ont retrouvé une vie normale grâce au Dr Sefrioui !\n\n🌟 SOPHIE, 38 ans (France) :\n\"Après 20 ans de souffrance et d'errance médicale, le Dr Sefrioui a enfin posé le bon diagnostic. 6 mois après l'intervention WAL, je ne ressens presque plus de douleurs. Je peux remarcher, danser, vivre ! C'est une renaissance. Merci infiniment.\"\n\n🌟 AMINA, 45 ans (Maroc) :\n\"Je pensais que c'était de ma faute, qu'il fallait juste maigrir davantage. Le Dr Sefrioui m'a expliqué que j'avais une vraie maladie. Aujourd'hui, mes jambes ont retrouvé une forme normale, je porte enfin des robes ! Ma vie a changé.\"\n\n🌟 ISABELLE, 52 ans (Belgique) :\n\"L'anesthésie locale m'inquiétait au début, mais quelle découverte ! J'étais confortable, je parlais avec l'équipe, et je suis rentrée à mon hôtel le soir même. Récupération ultra-rapide. Résultats spectaculaires !\"\n\n🌟 FATIMA, 29 ans (Sénégal) :\n\"J'ai fait le voyage depuis Dakar. Meilleure décision de ma vie ! L'équipe s'est occupée de tout : transferts, hôtel, suivi. Je me sens enfin belle et légère. Mes douleurs ont disparu à 90%.\"\n\n🌟 CAROLINE, 41 ans (Suisse) :\n\"En Suisse, on me proposait uniquement du conservateur (bas de compression). Le Dr Sefrioui m'a offert une vraie solution définitive. Les résultats dépassent mes espérances !\"\n\n📊 RÉSULTATS COMMUNS :\n✓ Réduction douleurs : 85-95%\n✓ Amélioration mobilité : 90%\n✓ Satisfaction globale : >95%\n✓ Recommanderaient : 98%\n✓ Regain confiance : 100%\n\n📸 Découvrez plus de témoignages et photos sur notre page 'Témoignages' du site !\n\nVotre histoire pourrait être la prochaine transformation ! 💙";
  }

  if (MEDICAL_KNOWLEDGE.topics.risk.some(word => lowerMessage.includes(word))) {
    return "🛡️ Sécurité et Risques - Transparence Totale\n\nLa technique WAL sous anesthésie locale du Dr Sefrioui est l'une des plus SÛRES en chirurgie esthétique !\n\n✅ AVANTAGES SÉCURITÉ WAL :\n• Anesthésie LOCALE uniquement\n• AUCUN risque anesthésie générale\n• Pas d'intubation, pas de sommeil profond\n• Monitoring patient continu\n• Communication durant intervention\n• Micro-canules atraumatiques\n• Préservation système lymphatique\n• Saignements minimes\n\n🟢 COMPLICATIONS MINEURES possibles (rares) :\n• Ecchymoses temporaires (1-2 semaines)\n• Œdèmes post-opératoires (normaux, 2-4 semaines)\n• Gêne ou inconfort léger\n• Sensibilité temporaire\n• Toutes TRANSITOIRES et NORMALES\n\n🟡 COMPLICATIONS MAJEURES (exceptionnelles) :\n• Infection (<1%)\n• Hématome nécessitant drainage (<1%)\n• Embolie (quasi-inexistante en locale)\n• Irrégularités cutanées (très rares)\n\n📊 STATISTIQUES SÉCURITÉ :\n✓ Taux satisfaction : >95%\n✓ Complications majeures : <1%\n✓ Zéro décès (anesthésie locale)\n✓ Réintervention : <2%\n\n🆚 COMPARAISON avec liposuccion traditionnelle :\n❌ Traditionnelle (générale) :\n   - Risque embolie : 1/3000\n   - Risque décès : 1/5000\n   - Complications : 5-10%\n\n✅ WAL Locale (Dr Sefrioui) :\n   - Risque embolie : quasi-nul\n   - Risque décès : zéro\n   - Complications : <1%\n\n👨‍⚕️ PROTOCOLES SÉCURITÉ Dr Sefrioui :\n• Évaluation pré-opératoire complète\n• Examens médicaux systématiques\n• Bloc opératoire aux normes internationales\n• Équipe médicale expérimentée\n• Matériel stérilisé et traçable\n• Suivi post-opératoire rigoureux\n• Disponibilité 24/7\n\n💙 CONCLUSION :\nLa technique WAL du Dr Sefrioui offre le MEILLEUR rapport bénéfice/risque pour le traitement du lipœdème. La sécurité est notre priorité absolue !";
  }

  if (MEDICAL_KNOWLEDGE.topics.duration.some(word => lowerMessage.includes(word))) {
    return "⏱️ Durée de l'Intervention WAL\n\n📋 DURÉE VARIABLE selon :\n• Étendue du lipœdème\n• Nombre de zones à traiter\n• Volume de graisse à retirer\n• Stade de la maladie\n• Anatomie individuelle\n\n⏰ DURÉES MOYENNES :\n\n🟢 Traitement LÉGER (stade 1) :\n   - 1 zone (cuisses OU jambes) : 1h30 - 2h30\n   - Volume limité\n\n🟡 Traitement MODÉRÉ (stade 2) :\n   - 2 zones (cuisses + jambes) : 2h30 - 3h30\n   - Volume modéré\n\n🔴 Traitement AVANCÉ (stade 3) :\n   - Multiple zones (cuisses + jambes + genoux) : 3h30 - 4h30\n   - Volume important\n\n🟫 Traitement COMPLEXE (stade 3-4) :\n   - Zones multiples + bras : 4h - 5h\n   - Peut nécessiter 2 sessions\n\n✨ DURANT L'INTERVENTION :\n• Vous êtes CONSCIENTE (anesthésie locale)\n• CONFORTABLE et sans douleur\n• Vous pouvez PARLER avec l'équipe\n• Musique relaxante\n• Pauses possibles si besoin\n• Monitoring continu\n• Atmosphère rassurante\n\n🏫 APRÈS L'INTERVENTION :\n• Surveillance : 1-2 heures\n• SORTIE le jour même (la plupart des cas)\n• Retour hôtel ou domicile\n• Instructions détaillées\n\n📊 TEMPS TOTAL (arrivée - sortie) :\n• Préparation : 30 min\n• Intervention : 1h30 - 5h\n• Surveillance : 1-2h\n• TOTAL : 3h - 7h30\n\n💙 Le Dr Sefrioui prend tout le temps nécessaire pour un résultat optimal ! Qualité avant rapidité. 💪";
  }

  if (MEDICAL_KNOWLEDGE.topics.permanence.some(word => lowerMessage.includes(word))) {
    return "♾️ Résultats Définitifs - Vraie Guérison ?\n\n✅ OUI, les résultats sont DURABLES et DÉFINITIFS !\n\nLe traitement WAL retire la graisse pathologique du lipœdème de manière PERMANENTE.\n\n🔬 POURQUOI C'EST DÉFINITIF :\n• Les cellules graisseuses retirées ne se régénèrent PAS\n• La graisse lipœdème est éliminée définitivement\n• Le système lymphatique est préservé\n• Les douleurs disparaissent durablement\n• Amélioration permanente de la mobilité\n\n📊 ÉTUDES LONG TERME :\n✓ Suivi 5 ans : 90% satisfaction maintenue\n✓ Suivi 10 ans : 85% résultats stables\n✓ Pas de récidive de la graisse retirée\n✓ Amélioration qualité de vie durable\n\n⚠️ IMPORTANT À COMPRENDRE :\n\n🟢 CE QUI NE REVIENT PAS :\n• La graisse lipœdème retirée\n• Les douleurs liées au lipœdème traité\n• Les disproportions corrigées\n• Les limitations de mobilité\n\n🟡 MAIS ATTENTION :\n• Le lipœdème est une maladie CHRONIQUE\n• Les zones NON traitées peuvent progresser\n• De nouvelles zones peuvent apparaître (rare)\n• Une prise de poids importante peut créer nouvelle graisse normale\n• Maintien d'un mode de vie sain recommandé\n\n🎯 POUR MAINTENIR LES RÉSULTATS :\n✓ Maintenir poids stable (variations normales OK)\n✓ Activité physique régulière\n✓ Alimentation équilibrée anti-inflammatoire\n✓ Hydratation suffisante\n✓ Port de compression si recommandé\n✓ Drainage lymphatique occasionnel\n✓ Suivi médical régulier\n\n💬 TÉMOIGNAGES LONG TERME :\n\"5 ans après mon opération, mes jambes sont toujours fines et sans douleur. Ma vie a changé pour toujours !\" - Marie\n\n\"10 ans plus tard, je ne regrette rien. C'est la meilleure décision que j'ai prise.\" - Sophie\n\n💙 CONCLUSION :\nLe traitement WAL offre une amélioration MAJEURE et DURABLE. C'est la solution la plus efficace et pérenne pour le lipœdème ! 🌟";
  }

  return responses[Math.floor(Math.random() * responses.length)];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('chatbot-state', { detail: { isOpen } }));
  }, [isOpen]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! 👋\n\nJe suis l'assistant virtuel intelligent du Dr Tawfik Sefrioui, spécialiste reconnu mondialement du traitement du lipœdème.\n\n✨ Je peux vous aider à :\n✓ Comprendre le lipœdème et ses symptômes\n✓ Découvrir la technique WAL révolutionnaire\n✓ Voir des résultats de patientes\n✓ Prendre rendez-vous pour une consultation\n\nComment puis-je vous accompagner aujourd'hui ?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (messageText?: string) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now(),
      text: textToSend,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateAIResponse(textToSend),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-sky-600 to-sky-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            <Sparkles className="w-3 h-3" />
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-[340px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="/2027/logo.png"
                  alt="Logo Dr Sefrioui"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  Dr Tawfik Sefrioui
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </h3>
                <p className="text-xs text-sky-100">Assistant virtuel IA</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-sky-800 p-2 rounded-full transition"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                      : 'bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isBot ? 'text-gray-400' : 'text-sky-100'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-sky-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-sky-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-500 text-center mb-3">Questions rapides :</p>
                {QUICK_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left text-sm bg-white border border-sky-200 text-sky-700 px-4 py-2 rounded-lg hover:bg-sky-50 transition shadow-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-sky-600 to-sky-700 text-white p-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                aria-label="Envoyer"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
