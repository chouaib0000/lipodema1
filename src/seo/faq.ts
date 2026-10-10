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

// Arabic FAQ for /ar – people in Morocco also search in Arabic
// ("الوذمة الشحمية", "الليبوديما", "علاج الوذمة الشحمية في المغرب").
export const arFaq: FaqItem[] = [
  {
    q: 'ما هي الوذمة الشحمية (الليبوديما)؟',
    a: 'الوذمة الشحمية مرض مزمن يصيب النسيج الدهني، ويكاد يقتصر على النساء. تتراكم الدهون بشكل متماثل في الساقين والوركين وأحيانًا الذراعين، مع ألم وحساسية عند اللمس وظهور كدمات بسهولة. هذه الدهون لا تستجيب للحمية ولا للرياضة.',
  },
  {
    q: 'أين يمكن علاج الوذمة الشحمية في المغرب؟',
    a: 'يستقبل مركز الوذمة الشحمية بالمغرب للدكتور توفيق الصفريوي المريضات في 5 شارع عبد اللطيف بنقدور، حي راسين، الدار البيضاء. المركز مخصص لعلاج الوذمة الشحمية منذ 2015، ويستقبل مريضات من كل مدن المغرب ومن الخارج.',
  },
  {
    q: 'ما هو العلاج الأكثر فعالية للوذمة الشحمية؟',
    a: 'العلاجات التحفظية مثل الضغط والتدليك اللمفاوي والنشاط البدني تخفف الأعراض لكنها لا تزيل الدهون المريضة. شفط الدهون الملائم للوذمة الشحمية هو العلاج المرجعي اليوم. يعتمد الدكتور الصفريوي تقنية WAL Bodyjet 3D بمساعدة الماء وبقنيات دقيقة تحافظ على الأوعية اللمفاوية.',
  },
  {
    q: 'هل تتم العملية تحت التخدير العام؟',
    a: 'لا. تُجرى عملية شفط الدهون بتقنية WAL تحت التخدير الموضعي، فتبقى المريضة مستيقظة ومرتاحة، مما يجنبها مخاطر التخدير العام ويساعد على تعافٍ أسرع.',
  },
  {
    q: 'كم ثمن عملية علاج الوذمة الشحمية في المغرب؟',
    a: 'يختلف الثمن حسب مرحلة المرض وعدد المناطق المعالجة (الساقان، الفخذان، الذراعان) وعدد الجلسات. يُقدَّم عرض سعر شخصي بعد الاستشارة والفحص السريري في المركز بالدار البيضاء. تواصلي معنا عبر الهاتف أو واتساب لتحديد موعد.',
  },
  {
    q: 'كم تستغرق فترة التعافي؟',
    a: 'يُنصح بالمشي ابتداءً من اليوم التالي للعملية، مع ارتداء لباس الضغط خلال الشهر الأول، ويبدأ التصريف بعد العملية بحوالي 3 أيام حسب بروتوكول المركز. تعود أغلب المريضات إلى نشاط خفيف خلال أيام قليلة.',
  },
];

export const enFaq: FaqItem[] = [
  {
    q: 'What is lipedema?',
    a: 'Lipedema (lipoedema) is a chronic disease of the fat tissue that affects almost only women. Fat builds up symmetrically on the legs, hips and sometimes the arms, with pain, tenderness to touch and easy bruising. This fat does not respond to diet or exercise.',
  },
  {
    q: 'Where can I get lipedema surgery in Morocco?',
    a: 'The Centre Lipœdème Maroc in Casablanca, led by Dr Tawfik Sefrioui, has been dedicated to lipedema since 2015. It treats legs and arms with WAL Bodyjet 3D water-assisted liposuction under local anaesthesia.',
  },
  {
    q: 'Is the surgery done under general anaesthesia?',
    a: 'No. Dr Sefrioui performs WAL liposuction under local (tumescent) anaesthesia: you stay awake and comfortable, and you avoid the risks of general anaesthesia.',
  },
  {
    q: 'Why WAL liposuction for lipedema?',
    a: 'A gentle pulsed water jet loosens the fat cells, which are removed with micro-cannulas. The technique is designed to limit trauma to the lymphatic vessels, which are fragile in lipedema.',
  },
  {
    q: 'How long should I stay in Casablanca?',
    a: 'Patients usually walk the day after surgery. The length of stay depends on the areas treated and the number of sessions; the team gives you a plan after the consultation and can help with accommodation.',
  },
  {
    q: 'How much does lipedema surgery cost in Morocco?',
    a: 'The price depends on the stage, the areas treated and the number of sessions. You receive a detailed quote after the consultation. You can send photos on WhatsApp for a first opinion.',
  },
];
