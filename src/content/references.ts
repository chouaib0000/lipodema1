// Reference sources shown under medical content ("Sources médicales") and emitted as
// schema.org `citation`. Answer engines (ChatGPT, Gemini, AI Overviews) favour pages
// whose claims are backed by the same authoritative sources they already trust.
export interface Reference { label: string; publisher: string; url: string }

export const MEDICAL_REFERENCES: Reference[] = [
  {
    label: 'Recommandations S2k sur le lipœdème (2024)',
    publisher: 'Journal der Deutschen Dermatologischen Gesellschaft',
    url: 'https://doi.org/10.1111/ddg.15513',
  },
  { label: 'Lipœdème : symptômes, diagnostic et traitement', publisher: 'Assurance Maladie (ameli.fr)', url: 'https://www.ameli.fr/assure/sante/themes/lipoedeme' },
  { label: 'Lipoedema', publisher: 'NHS (Royaume-Uni)', url: 'https://www.nhs.uk/conditions/lipoedema/' },
  { label: 'Staging of lipedema', publisher: 'Lipedema Foundation', url: 'https://www.lipedema.org/staging' },
];
