import { PageHero, Section, SectionHead, CtaBand, TextLink } from '../components/ui';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ShowMore from '../components/ShowMore';
import PhotoGallery from '../components/PhotoGallery';

const PAIRS = [
  ['/2030/1.png', '/2030/1a.png'],
  ['/2030/2.png', '/2030/2b.png'],
  ['/2030/3.png', '/2030/3b.png'],
  ['/2030/4.png', '/2030/4a.png'],
  ['/2030/5.png', '/2030/5a.png'],
  ['/2030/6.png', '/2030/6a.png'],
  ['/2030/7.png', '/2030/7a.png'],
  ['/2030/8.png', '/2030/8a.png'],
  ['/2030/9.png', '/2030/9a.png'],
  ['/2030/10.png', '/2030/10a.png'],
  ['/2030/11.png', '/2030/11a.png'],
  ['/2030/12.png', '/2030/12a.png'],
  ['/2030/13.png', '/2030/13a.png'],
  ['/2030/14.png', '/2030/14a.png'],
  ['/photo/photo 1 before.png', '/photo/photo 1 after.png'],
  ['/photo/photo2 before.png', '/photo/photo 2 after.png'],
  ['/photo/photo3 before.png', '/photo/photo3 after.png'],
];

const COMBINED = [
  '/photo/photo 4 have before and after.png',
  '/photo/photo 7 have before and after.png',
  '/photo/photo 8 have before and after.png',
  '/photo/photo 9 have before and after.png',
];

const ARMS = [
  '/bra2/WhatsApp_Image_2025-09-29_at_23.03.45__3_-removebg-preview.png',
  '/bra2/WhatsApp_Image_2025-09-29_at_23.03.46__3_-removebg-preview.png',
  '/bra2/WhatsApp_Image_2025-09-29_at_23.03.47-removebg-preview.png',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__1_-removebg-preview.png',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__2_-removebg-preview.png',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__3_-removebg-preview.png',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40__5_-removebg-preview.png',
  '/bra2/WhatsApp_Image_2025-10-04_at_16.11.40-removebg-preview.png',
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
