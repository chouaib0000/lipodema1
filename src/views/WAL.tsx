import { PageHero, Section, SectionHead, Prose, FeatureGrid, Checklist, CtaBand, TextLink } from '../components/ui';
import PhotoGallery from '../components/PhotoGallery';

const LEGS = [
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 15.52.16.webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.50 (1).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (1).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (2).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (3).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (4).webp',
];

const ARMS = [
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 15.53.00.webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (1).webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (2).webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (3).webp',
];

const LEG_BENEFITS = [
  { title: 'Redécouvrir la mobilité', text: 'En retirant la graisse du lipœdème, la technique rend les gestes du quotidien plus faciles et moins douloureux.' },
  { title: 'Moins de douleur', text: 'La réduction des amas graisseux soulage la lourdeur et la douleur souvent associées au lipœdème.' },
  { title: 'Un plan pour chaque stade', text: 'Le nombre de zones et de séances est défini pour vous, selon le stade et vos objectifs.' },
  { title: 'Mini-invasive', text: 'Des micro-canules permettent des incisions plus petites, moins de traumatisme et une récupération plus rapide.' },
  { title: 'Retrouver confiance', text: 'Des contours de jambes plus harmonieux, pour se sentir à nouveau bien dans son corps.' },
  { title: 'Sécurité avant tout', text: 'Une intervention réalisée par un chirurgien dédié au lipœdème, avec un suivi attentif du début à la fin.' },
];

export default function WAL() {
  return (
    <>
      <PageHero
        title="Liposuccion WAL Bodyjet 3D sous anesthésie locale"
        intro="La technique intégrative du Dr Tawfik Sefrioui pour traiter le lipœdème : un jet d’eau doux et des micro-canules, une patiente éveillée et confortable, et un système lymphatique préservé."
        image="/please use this folder/doctor photo in surgary.webp"
        imageAlt="Le Dr Tawfik Sefrioui pendant une liposuccion WAL sous anesthésie locale"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHead title="Pourquoi la WAL pour le lipœdème ?" />
            <Prose className="mt-6">
              <p>
                La liposuccion WAL (Water-Assisted Liposuction) utilise un jet d’eau stérile pulsé pour décoller les cellules graisseuses avant de les aspirer. Le geste est plus doux qu’une liposuccion classique : il respecte les vaisseaux lymphatiques et les nerfs cutanés, fragiles chez les patientes atteintes de lipœdème.
              </p>
              <p>
                Le Dr Sefrioui a développé une approche intégrative, la WAL Bodyjet 3D avec micro-canules, qu’il pratique sous anesthésie locale. Il est le premier à l’avoir introduite au Maroc, il y a plus de 15 ans.
              </p>
            </Prose>
          </div>
          <div className="lg:pt-16">
            <Checklist
              items={[
                'Anesthésie locale (tumescente) : pas d’anesthésie générale ni de ses risques',
                'Patiente éveillée : elle peut changer de position, pour un résultat plus régulier',
                'Jet d’eau qui préserve les vaisseaux lymphatiques et les nerfs',
                'Micro-canules : incisions minimes, cicatrices discrètes',
                'Marche dès le lendemain, convalescence plus rapide',
                'Résultat naturel et harmonieux',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead
          title="Pour les jambes"
          intro="Cuisses, genoux, mollets : la technique restaure des contours naturels et soulage les jambes lourdes et douloureuses."
        />
        <FeatureGrid items={LEG_BENEFITS} cols={3} />
        <div className="mt-10">
          <PhotoGallery images={LEGS} label="Lipœdème des jambes – avant / après WAL" />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          <div>
            <SectionHead title="Pour les bras" />
            <Prose className="mt-6">
              <p>
                Le traitement cible les bras, les avant-bras et la région des aisselles. Sous anesthésie locale, pleinement éveillée et confortablement installée, la patiente est traitée avec des gestes précis qui sculptent le bras tout en préservant les vaisseaux lymphatiques.
              </p>
            </Prose>
          </div>
          <PhotoGallery images={ARMS} label="Lipœdème des bras – avant / après WAL" />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHead dark title="WAL ou liposuccion traditionnelle ?" />
        <div className="mt-10 overflow-x-auto rounded-3xl bg-white/5 ring-1 ring-white/10">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <caption className="sr-only">Comparaison entre liposuccion traditionnelle et liposuccion WAL</caption>
            <thead>
              <tr className="text-rose-200">
                <th scope="col" className="p-5 font-semibold w-1/4"></th>
                <th scope="col" className="p-5 font-semibold">Liposuccion traditionnelle</th>
                <th scope="col" className="p-5 font-semibold text-white">WAL Bodyjet 3D du centre</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                ['Anesthésie', 'Générale le plus souvent', 'Locale, patiente éveillée'],
                ['Lymphatiques', 'Risque pour des vaisseaux fragiles', 'Jet d’eau doux qui les préserve'],
                ['Canules', 'Canules classiques', 'Micro-canules, incisions minimes'],
                ['Récupération', 'Plus longue', 'Marche dès le lendemain'],
              ].map(([k, a, b]) => (
                <tr key={k}>
                  <th scope="row" className="p-5 font-semibold text-rose-200">{k}</th>
                  <td className="p-5 text-rose-100/70">{a}</td>
                  <td className="p-5 text-white">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Le Dr Tawfik Sefrioui" />
            <Prose className="mt-6">
              <p>
                Diplômé de l’université George Washington aux États-Unis, le Dr Sefrioui se consacre depuis plus de 15 ans à la chirurgie du lipœdème. Il est membre de l’American College of Surgeons, de l’American Society of Cosmetic Surgery, de l’IFATS et de l’IMCAS, et directeur du Board de l’ABRM aux USA.
              </p>
              <p>
                Formateur international de la liposuccion WAL Bodyjet, il a enseigné la technique aux États-Unis, à Dubaï, en Italie, à Taïwan, en Thaïlande et au Koweït. Il a été lauréat du Diamond Crystal Award 2017 et du Gold Global Award of Lipedema en 2020 à Paris.
              </p>
            </Prose>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href="/parcours/">Son parcours</TextLink>
              <TextLink href="/wal-results/">Résultats WAL avant / après</TextLink>
            </div>
          </div>
          <img
            src="/2028/7.webp"
            alt="Le Dr Tawfik Sefrioui au bloc opératoire"
            loading="lazy"
            decoding="async"
            className="w-full rounded-3xl object-cover aspect-square"
          />
        </div>
      </Section>

      <CtaBand title="Savoir si la WAL est adaptée à votre cas" secondary={{ href: '/resultats/', label: 'Voir les résultats' }} />
    </>
  );
}
