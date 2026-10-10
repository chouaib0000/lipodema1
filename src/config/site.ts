// Single source of truth for the clinic's identity (NAP = Name, Address, Phone).
// Google ranks local businesses partly on how consistent these details are across
// the website, Google Business Profile, Facebook, Dabadoc, etc. Change them HERE only.

export const SITE = {
  url: 'https://lipoedem.ma',
  name: 'Centre Lipœdème Maroc',
  legalName: 'Centre Lipœdème Maroc – Dr Tawfik Sefrioui',
  doctor: 'Dr Tawfik Sefrioui',
  tagline: 'Traitement du lipœdème à Casablanca par liposuccion WAL Bodyjet 3D sous anesthésie locale',
  email: 'contact@lipoedem.ma',

  phone: {
    display: '05 22 39 86 89',
    e164: '+212522398689',
  },
  whatsapp: {
    display: '+212 6 61 05 05 23',
    e164: '+212661050523',
    // digits only, for wa.me links
    wa: '212661050523',
  },

  address: {
    street: '5 boulevard Abdellatif Benqaddour',
    district: 'Racine',
    city: 'Casablanca',
    postalCode: '20250',
    region: 'Casablanca-Settat',
    country: 'MA',
    countryName: 'Maroc',
  },

  // Approximate position of Bd Abdellatif Benkaddour (Racine). Replace with the exact
  // pin from the Google Business Profile if it differs.
  geo: { lat: 33.5885, lng: -7.6355 },

  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00', label: 'Lundi – Vendredi', time: '9h00 – 18h00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00', label: 'Samedi', time: '9h00 – 13h00' },
  ],
  closedLabel: 'Dimanche : fermé',

  social: {
    facebook: 'https://www.facebook.com/lipedem',
    instagram: 'https://www.instagram.com/lipedemacentrecasablanca/',
    youtube: 'https://www.youtube.com/@scarless.cosmeticsurgery',
  },

  // Cities patients come from — used in schema `areaServed` and in local copy.
  areaServed: ['Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Fès', 'Agadir', 'Kénitra', 'El Jadida', 'Mohammedia', 'Meknès', 'Oujda'],

  logo: '/2027/logo.png',
  ogImage: '/2028/1.jpeg',
  doctorPhoto: '/2028/5.jpeg',
  ga: 'G-F46EC384N2',
} as const;

export const fullAddress = `${SITE.address.street}, ${SITE.address.district}, ${SITE.address.postalCode} ${SITE.address.city}, ${SITE.address.countryName}`;

export const mapsQuery = encodeURIComponent(`${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city}, Maroc`);
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;

export const whatsappLink = (text = 'Bonjour, je souhaite obtenir des informations sur le traitement du lipœdème.') =>
  `https://wa.me/${SITE.whatsapp.wa}?text=${encodeURIComponent(text)}`;

export const absUrl = (path: string) => SITE.url + encodeURI(path);
