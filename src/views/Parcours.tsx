import { PageHero, Section, SectionHead, Prose, CtaBand, TextLink } from '../components/ui';
import PhotoGallery from '../components/PhotoGallery';
import { SITE } from '../config/site';

const PHOTOS = ['/2028/5.jpeg', '/2028/1.jpeg', '/2028/3.jpeg', '/2028/4.jpeg', '/2028/6.jpeg', '/2028/7.jpeg', '/2028/8.jpeg', '/2028/9.jpeg'];

const TRAININGS = [
  { place: 'Boston, USA', image: '/2027/Boston USA.jpeg' },
  { place: 'New York, USA', image: '/2027/New York , USA.jpeg' },
  { place: 'Californie, USA', image: '/2027/Californie, USA.jpeg' },
  { place: 'IFATS, Orlando', image: '/2027/IFATS , congrès Orlando USA.jpeg' },
  { place: 'Dubaï', image: '/2027/DUBAI.jpeg' },
  { place: 'Thaïlande', image: '/2027/Thailand.jpeg' },
  { place: 'New York, USA', image: '/2027/New York , USA 1.jpeg' },
  { place: 'Californie, USA', image: '/2027/Californie, USA 1.jpeg' },
];

const FACTS = [
  { k: 'Formation', v: 'George Washington University, USA' },
  { k: 'Au Maroc', v: 'Premier à introduire la liposuccion WAL Bodyjet sous anesthésie locale, il y a plus de 15 ans' },
  { k: 'Sociétés savantes', v: 'American College of Surgeons, American Society of Cosmetic Surgery, IFATS, IMCAS ; directeur du Board de l’ABRM (USA)' },
  { k: 'Formateur', v: 'Médecin référent et formateur Bodyjet (Humanmed) : USA, Dubaï, Koweït, Italie, Roumanie, Taïwan, Hong Kong, Vietnam, Thaïlande' },
  { k: 'Distinctions', v: 'Diamond Crystal Award 2017 ; Gold Global Award of Lipedema 2020, Paris' },
];

export default function Parcours() {
  return (
    <>
      <PageHero
        title="Dr Tawfik Sefrioui, chirurgien du lipœdème"
        intro="Depuis plus de 15 ans, le Dr Sefrioui se consacre au traitement chirurgical du lipœdème à Casablanca, avec sa technique de liposuccion WAL Bodyjet 3D avec micro-canules sous anesthésie locale."
        image={SITE.heroImage}
        imageAlt="Portrait du Dr Tawfik Sefrioui"
        imageClass="object-cover object-[50%_30%]"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHead title="Un parcours international" />
          <dl className="divide-y divide-rose-100 border-y border-rose-100">
            {FACTS.map((f) => (
              <div key={f.k} className="grid gap-1 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-rose-700">{f.k}</dt>
                <dd className="text-[16px] leading-relaxed text-ink/85">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title="Il forme des chirurgiens dans le monde entier" intro="Congrès et formations à la liposuccion WAL Bodyjet." />
        <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 lg:grid-cols-4">
          {TRAININGS.map((t) => (
            <figure key={t.image} className="snap-start shrink-0 w-[70%] sm:w-auto">
              <img src={t.image} alt={`Dr Sefrioui – formation, ${t.place}`} loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-2xl object-cover ring-1 ring-rose-100" />
              <figcaption className="mt-2 text-sm font-medium text-ink/70">{t.place}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Votre chirurgien, et votre allié" />
            <Prose className="mt-6">
              <p>
                Son approche repose sur l’expertise médicale, mais aussi sur la compréhension du parcours émotionnel qui accompagne le lipœdème. Chaque traitement est adapté à la sévérité de la maladie, aux objectifs et à la situation de chaque patiente.
              </p>
              <p>
                Le Dr Sefrioui s’engage aussi pour faire connaître le lipœdème au Maroc et en Afrique, auprès du public comme des professionnels de santé, afin que davantage de femmes soient diagnostiquées et soignées.
              </p>
            </Prose>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href="/publications/">Publications et médias</TextLink>
              <TextLink href="/resultats/">Ses résultats</TextLink>
            </div>
          </div>
          <div>
            <PhotoGallery images={PHOTOS} label="Le Dr Tawfik Sefrioui" limit={4} ratio="aspect-square" />
          </div>
        </div>
      </Section>

      <CtaBand title="Rencontrer le Dr Sefrioui" text="Une consultation personnalisée au centre de Casablanca, ou un premier échange sur WhatsApp." secondary={{ href: '/resultats/', label: 'Voir les résultats' }} />
    </>
  );
}
