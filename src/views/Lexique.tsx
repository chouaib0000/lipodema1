import Link from 'next/link';
import { PageHero, Section, CtaBand } from '../components/ui';
import { GLOSSARY } from '../content/glossary';

export default function Lexique() {
  return (
    <>
      <PageHero
        title={<>Lexique du lipœdème</>}
        intro="Les mots que vous entendrez en consultation, expliqués simplement : stades, types, liposuccion WAL, anesthésie tumescente, compression…"
      />
      <Section>
        <dl className="mx-auto max-w-3xl divide-y divide-rose-200 border-y border-rose-200">
          {GLOSSARY.map((g) => (
            <div key={g.term} id={g.term.toLowerCase().normalize('NFD').replace(/[^\w]+/g, '-')} className="py-6">
              <dt className="font-serif text-2xl text-ink">{g.term}</dt>
              <dd className="mt-2 text-[17px] leading-relaxed text-ink/80">
                {g.definition}
                {g.href && <> <Link href={g.href} className="font-semibold text-rose-700 underline underline-offset-4">En savoir plus</Link></>}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
      <CtaBand />
    </>
  );
}
