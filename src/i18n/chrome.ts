// Language of the site "chrome" (header, menu, bottom bar, footer) – follows the page.
// French pages use the full French navigation; Arabic, English and Spanish pages get
// their own labels so a visitor never sees a mix of languages.
export type SiteLang = 'fr' | 'ar' | 'en' | 'es';

export const langFromPath = (p: string): SiteLang =>
  p === '/ar' || p.startsWith('/ar/') ? 'ar' : p === '/en' || p.startsWith('/en/') ? 'en' : p === '/es' || p.startsWith('/es/') ? 'es' : 'fr';

export const LANG_HOME: Record<SiteLang, string> = { fr: '/', ar: '/ar', en: '/en', es: '/es' };

type Chrome = {
  dir: 'ltr' | 'rtl';
  home: string;
  disease: { label: string; href: string };
  results: string;
  appointment: string;
  bookCta: string;
  call: string;
  whatsapp: string;
  waMessage?: string;
  menuOpen: string;
  menuClose: string;
  nav: { href: string; label: string }[];
  hours: string[];
  closed: string;
  tagline: string;
  find: string;
  pages: string;
  disclaimer: string;
  country: string;
};

export const CHROME: Record<Exclude<SiteLang, 'fr'>, Chrome> = {
  ar: {
    dir: 'rtl',
    home: 'الرئيسية',
    disease: { label: 'المرض', href: '/ar/aarad-wa-marahil-alwadhma-alshahmiya' },
    results: 'النتائج',
    appointment: 'موعد',
    bookCta: 'احجزي موعدًا',
    call: 'اتصلي',
    whatsapp: 'راسلينا على واتساب',
    waMessage: 'السلام عليكم، أود الحصول على معلومات حول علاج الوذمة الشحمية.',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    nav: [
      { href: '/ar', label: 'الرئيسية' },
      { href: '/ar/aarad-wa-marahil-alwadhma-alshahmiya', label: 'الأعراض والمراحل' },
      { href: '/ar/alwadhma-alshahmiya-am-alsilulit', label: 'الوذمة الشحمية أم السيلوليت؟' },
      { href: '/ar/thaman-amaliyat-alwadhma-alshahmiya', label: 'ثمن العملية' },
      { href: '/ar/shaft-alduhun-bitiqniyat-wal', label: 'شفط الدهون بتقنية WAL' },
      { href: '/ar/ilaj-alwadhma-alshahmiya-bidun-jiraha', label: 'العلاج بدون جراحة' },
      { href: '/resultats', label: 'صور قبل وبعد' },
      { href: '/contact', label: 'العنوان والتواصل' },
    ],
    hours: ['من الإثنين إلى الجمعة: 9:00 – 18:00', 'السبت: 9:00 – 13:00'],
    closed: 'الأحد: مغلق',
    tagline: 'مركز مخصص لعلاج الوذمة الشحمية بالدار البيضاء منذ 2015، بتقنية شفط الدهون WAL تحت التخدير الموضعي. مريضات من كل المغرب ومن الخارج.',
    find: 'العنوان',
    pages: 'صفحات',
    disclaimer: 'المعلومات في هذا الموقع لا تغني عن الاستشارة الطبية.',
    country: 'المغرب',
  },
  en: {
    dir: 'ltr',
    home: 'Home',
    disease: { label: 'Lipedema', href: '/en' },
    results: 'Results',
    appointment: 'Contact',
    bookCta: 'Book a consultation',
    call: 'Call',
    whatsapp: 'Message us on WhatsApp',
    waMessage: 'Hello, I would like information about lipedema treatment in Casablanca.',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    nav: [
      { href: '/en', label: 'Lipedema surgery in Morocco' },
      { href: '/resultats', label: 'Before / after photos' },
      { href: '/temoignages', label: 'Patient videos' },
      { href: '/contact', label: 'Contact & directions' },
    ],
    hours: ['Monday–Friday: 9:00–18:00', 'Saturday: 9:00–13:00'],
    closed: 'Sunday: closed',
    tagline: 'Lipedema centre in Casablanca since 2015: WAL Bodyjet 3D liposuction under local anaesthesia. Patients from all over Morocco and abroad.',
    find: 'Find us',
    pages: 'Pages',
    disclaimer: 'The information on this site does not replace a medical consultation.',
    country: 'Morocco',
  },
  es: {
    dir: 'ltr',
    home: 'Inicio',
    disease: { label: 'Lipedema', href: '/es' },
    results: 'Resultados',
    appointment: 'Contacto',
    bookCta: 'Pedir cita',
    call: 'Llamar',
    whatsapp: 'Escríbanos por WhatsApp',
    waMessage: 'Hola, me gustaría recibir información sobre el tratamiento del lipedema en Casablanca.',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    nav: [
      { href: '/es', label: 'Cirugía del lipedema en Marruecos' },
      { href: '/resultats', label: 'Fotos antes / después' },
      { href: '/temoignages', label: 'Vídeos de pacientes' },
      { href: '/contact', label: 'Contacto y dirección' },
    ],
    hours: ['Lunes a viernes: 9:00–18:00', 'Sábado: 9:00–13:00'],
    closed: 'Domingo: cerrado',
    tagline: 'Centro del lipedema en Casablanca desde 2015: liposucción WAL Bodyjet 3D con anestesia local. Pacientes de todo Marruecos y del extranjero.',
    find: 'Dirección',
    pages: 'Páginas',
    disclaimer: 'La información de este sitio no sustituye una consulta médica.',
    country: 'Marruecos',
  },
};
