import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, Section, CtaBand } from '../components/ui';
import { GUIDE } from '../content/guide';

export default function GuideHub() {
  return (
    <>
      <PageHero
        title="Guide du lipœdème"
        intro="Des réponses claires aux questions que se posent les patientes : reconnaître la maladie, comprendre son stade, préparer son traitement et sa récupération."
        actions={false}
      />
      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE.map((a) => (
            <li key={a.slug}>
              <Link href={`/guide/${a.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-rose-100 transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(46,16,24,0.35)] active:scale-[0.99]">
                {a.image ? (
                  <img src={a.image} alt={a.imageAlt ?? ''} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover bg-rose-50" />
                ) : (
                  <span className="aspect-[16/10] w-full bg-gradient-to-br from-rose-100 to-plum-100" />
                )}
                <span className="flex flex-1 flex-col p-6">
                  <span className="font-serif text-2xl leading-snug text-ink group-hover:text-rose-800">{a.title}</span>
                  <span className="mt-3 text-[15px] leading-relaxed text-ink/70">{a.description}</span>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-rose-700">Lire l’article <ArrowUpRight size={16} /></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title="Une question sur votre cas ?" />
    </>
  );
}
