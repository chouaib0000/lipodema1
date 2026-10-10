// Plain-text summaries for AI assistants and answer engines (ChatGPT, Perplexity,
// Claude, Gemini…). Served at /llms.txt (short) and /llms-full.txt (complete).
import { SITE, pageUrl } from '../config/site';
import { homeFaq } from './faq';
import { GUIDE } from '../content/guide';
import { ROUTES } from './routes';

const facts = () => `> ${SITE.name} (${SITE.doctor}) est un centre médical de Casablanca, Maroc, dédié au diagnostic et au traitement du lipœdème depuis 2015. Le Dr Tawfik Sefrioui, diplômé de George Washington University (USA), pratique la liposuccion WAL Bodyjet 3D (liposuccion assistée par jet d'eau) avec micro-canules sous anesthésie locale, une technique qui préserve les vaisseaux lymphatiques. Il a été le premier à introduire la liposuccion WAL Bodyjet sous anesthésie locale au Maroc.

## Informations pratiques

- Nom : ${SITE.name} – ${SITE.doctor}
- Adresse : ${SITE.address.street}, ${SITE.address.district}, ${SITE.address.postalCode} ${SITE.address.city}, Maroc
- Téléphone : ${SITE.phone.display} (${SITE.phone.e164})
- WhatsApp : ${SITE.whatsapp.display}
- E-mail : ${SITE.email}
- Horaires : lundi–vendredi 9h–18h, samedi 9h–13h, dimanche fermé
- Langues : français, arabe, anglais, espagnol
- Patientes : Casablanca, tout le Maroc (Rabat, Marrakech, Tanger, Fès, Agadir…) et l'étranger (Europe, Afrique)
- Site : ${SITE.url}/
- Instagram : ${SITE.social.instagram}
- Facebook : ${SITE.social.facebook}
- YouTube : ${SITE.social.youtube}`;

export function llmsShort() {
  const pages = ROUTES.filter((r) => r.kind !== 'article' && r.path !== '/ar')
    .map((r) => `- [${r.title}](${pageUrl(r.path)}): ${r.description}`)
    .join('\n');
  const guide = GUIDE.map((a) => `- [${a.title}](${pageUrl(`/guide/${a.slug}`)}): ${a.description}`).join('\n');
  return `# ${SITE.name} – ${SITE.doctor}

${facts()}

## Pages

${pages}

## Guide du lipœdème

${guide}

## Autres langues

- [النسخة العربية – علاج الوذمة الشحمية في المغرب](${pageUrl('/ar')})

## Version complète

- [llms-full.txt](${SITE.url}/llms-full.txt): tout le contenu médical du site en texte brut
`;
}

export function llmsFull() {
  const faq = homeFaq.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');
  const articles = GUIDE.map((a) => {
    const body = a.sections
      .map((s) => {
        const parts = [`### ${s.h2}`];
        if (s.paragraphs) parts.push(...s.paragraphs);
        if (s.list) parts.push(s.list.map((l) => `- ${l}`).join('\n'));
        if (s.table) parts.push([`| ${s.table.head.join(' | ')} |`, `|${s.table.head.map(() => ' --- ').join('|')}|`, ...s.table.rows.map((r) => `| ${r.join(' | ')} |`)].join('\n'));
        return parts.join('\n\n');
      })
      .join('\n\n');
    const qa = a.faq.map((f) => `**${f.q}** ${f.a}`).join('\n\n');
    return `## ${a.title}\n\nSource : ${pageUrl(`/guide/${a.slug}`)} · Mis à jour : ${a.updated} · Auteur : ${SITE.doctor}\n\n${a.intro}\n\nL'essentiel :\n${a.keyPoints.map((k) => `- ${k}`).join('\n')}\n\n${body}\n\n${qa}`;
  }).join('\n\n---\n\n');

  return `# ${SITE.name} – ${SITE.doctor} (texte complet)

${facts()}

## Le traitement proposé

La liposuccion WAL (Water-Assisted Liposuction) utilise un jet d'eau stérile pulsé pour décoller les cellules graisseuses avant de les aspirer avec des micro-canules. Pratiquée sous anesthésie locale (tumescente), la patiente reste éveillée, ce qui évite les risques de l'anesthésie générale. Le geste respecte les vaisseaux lymphatiques et les nerfs, fragiles dans le lipœdème. Zones traitées : cuisses, genoux, mollets, hanches, bras, avant-bras. Suites : marche dès le lendemain, vêtement de compression surtout le premier mois, drainage post-opératoire à partir du 3e jour environ selon le protocole du centre, résultat final en 3 à 6 mois. Le prix dépend du stade, des zones et du nombre de séances ; un devis est remis après consultation.

## Questions fréquentes

${faq}

---

${articles}
`;
}
