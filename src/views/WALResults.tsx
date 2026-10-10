import { PageHero, Section, CtaBand, TextLink } from '../components/ui';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ShowMore from '../components/ShowMore';

const PAIRS = Array.from({ length: 10 }, (_, i) => [`/2031/${i + 1}-before.webp`, `/2031/${i + 1}-after.webp`]);

export default function WALResults() {
  return (
    <>
      <PageHero
        title={<>Liposuccion WAL&nbsp;: résultats avant / après</>}
        intro="Résultats obtenus avec la technique intégrative WAL Bodyjet 3D du Dr Tawfik Sefrioui. Faites glisser le curseur pour comparer."
      >
        <p className="mt-4 text-sm text-ink/55">Photos publiées avec l’accord des patientes. Les résultats varient d’une personne à l’autre.</p>
      </PageHero>

      <Section>
        <ShowMore initial={6} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIRS.map(([before, after], i) => (
            <BeforeAfterSlider key={before} beforeImage={before} afterImage={after} label={`Résultat WAL ${i + 1}`} />
          ))}
        </ShowMore>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <TextLink href="/wal/">La technique WAL</TextLink>
          <TextLink href="/resultats/">Tous les résultats</TextLink>
        </div>
      </Section>

      <CtaBand title="Envisager la liposuccion WAL" secondary={{ href: '/wal/', label: 'La technique' }} />
    </>
  );
}
