// Self-hosted videos, described as schema.org VideoObject so they can appear in
// Google video results and be understood by answer engines.
export interface SiteVideo { id: string; name: string; description: string; contentUrl: string; thumbnailUrl: string; duration: string; uploadDate: string }

export const VIDEOS: Record<string, SiteVideo> = {
  cabinet: {
    id: 'cabinet',
    name: 'Visite du Centre Lipœdème Maroc à Casablanca',
    description: 'Visite du cabinet du Dr Tawfik Sefrioui à Casablanca, centre dédié au diagnostic et au traitement du lipœdème par liposuccion WAL sous anesthésie locale.',
    contentUrl: '/videos/cabinet.mp4',
    thumbnailUrl: '/videos/cabinet.jpg',
    duration: 'PT47S',
    uploadDate: '2026-10-10',
  },
  temoignage1: {
    id: 'temoignage1',
    name: 'Lipœdème : une patiente raconte son parcours',
    description: 'Témoignage d’une patiente traitée pour un lipœdème par liposuccion WAL au Centre Lipœdème Maroc, à Casablanca.',
    contentUrl: '/videos/temoignage-1.mp4',
    thumbnailUrl: '/videos/temoignage-1.jpg',
    duration: 'PT1M',
    uploadDate: '2026-10-10',
  },
  temoignage2: {
    id: 'temoignage2',
    name: 'Lipœdème : son expérience avec le Dr Sefrioui',
    description: 'Une patiente partage son expérience du traitement du lipœdème avec le Dr Tawfik Sefrioui au Centre Lipœdème Maroc.',
    contentUrl: '/videos/temoignage-2.mp4',
    thumbnailUrl: '/videos/temoignage-2.jpg',
    duration: 'PT1M',
    uploadDate: '2026-10-10',
  },
};

/** Which videos are shown on which page. */
export const PAGE_VIDEOS: Record<string, string[]> = {
  '/': ['cabinet'],
  '/clinique': ['cabinet'],
  '/temoignages': ['temoignage1', 'temoignage2'],
};

/** Date the medical pages were last reviewed (shown on the page and in schema). */
export const MEDICAL_REVIEW_DATE = '2026-10-28';
