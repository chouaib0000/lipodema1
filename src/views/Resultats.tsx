import { PageHero, Section, SectionHead, CtaBand, TextLink } from '../components/ui';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ShowMore from '../components/ShowMore';
import PhotoGallery from '../components/PhotoGallery';

const PAIRS = [
  ['/2030/1.webp', '/2030/1a.webp'],
  ['/2030/2.webp', '/2030/2b.webp'],
  ['/2030/3.webp', '/2030/3b.webp'],
  ['/2030/4.webp', '/2030/4a.webp'],
  ['/2030/5.webp', '/2030/5a.webp'],
  ['/2030/6.webp', '/2030/6a.webp'],
  ['/2030/7.webp', '/2030/7a.webp'],
  ['/2030/8.webp', '/2030/8a.webp'],
  ['/2030/9.webp', '/2030/9a.webp'],
  ['/2030/10.webp', '/2030/10a.webp'],
  ['/2030/11.webp', '/2030/11a.webp'],
  ['/2030/12.webp', '/2030/12a.webp'],
  ['/2030/13.webp', '/2030/13a.webp'],
  ['/2030/14.webp', '/2030/14a.webp'],
  ['/photo/photo 1 before.webp', '/photo/photo 1 after.webp'],
  ['/photo/photo2 before.webp', '/photo/photo 2 after.webp'],
  ['/photo/photo3 before.webp', '/photo/photo3 after.webp'],
];

const COMBINED = [
  '/photo/photo 4 have before and after.webp',
  '/photo/photo 7 have before and after.webp',
  '/photo/photo 8 have before and after.webp',
  '/photo/photo 9 have before and after.webp',
];

const ARMS = [
  '/bra2/WhatsApp_Image_2025-09-29_at_23.03.45__3_-removebg-preview.webp',
  '/bra2/WhatsApp_Image_2025-09-29_at_23.03.46__3_-removebg-preview.webp',
  '/bra2/WhatsApp_Image_2025-09-29_at_23.03.47-removebg-preview.webp',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__1_-removebg-preview.webp',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__2_-removebg-preview.webp',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__3_-removebg-preview.webp',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__5_-removebg-preview.webp',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40-removebg-preview.webp',
];

export default function Resultats() {
  return (
    <>
      <PageHero
        title="Résultats avant / après traitement du lipœdème"
        intro="Des patientes traitées par le Dr Tawfik Sefrioui avec la liposuccion WAL. Faites glisser le curseur sur chaque photo pour comparer avant et après."
      >
        <p className="mt-4 text-sm text-ink/55">Photos publiées avec l’accord des patientes. Chaque cas est unique : les résultats varient selon le stade et les zones traitées.</p>
      </PageHero>

      <Section>
        <SectionHead title="Comparer avant et après" />
        <ShowMore initial={6} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIRS.map(([before, after], i) => (
            <BeforeAfterSlider key={before} beforeImage={before} afterImage={after} label={`Patiente ${i + 1}`} />
          ))}
        </ShowMore>
      </Section>

      <Section tone="mist">
        <SectionHead title="Plus de résultats" />
        <div className="mt-10">
          <PhotoGallery images={COMBINED} label="Résultats avant / après lipœdème" ratio="aspect-[4/3]" fit="object-contain bg-white" />
        </div>
        <h3 className="mt-14 text-2xl">Lipœdème des bras</h3>
        <div className="mt-5">
          <PhotoGallery images={ARMS} label="Lipœdème des bras – résultats" fit="object-contain bg-white" />
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <TextLink href="/wal-results/">Résultats de la liposuccion WAL</TextLink>
          <TextLink href="/temoignages/">Témoignages de patientes</TextLink>
        </div>
      </Section>

      <CtaBand title="Et pour vous ?" text="Prenez rendez-vous pour parler de vos objectifs et des résultats que vous pouvez attendre." secondary={{ href: '/wal/', label: 'La technique WAL' }} />
    </>
  );
}
