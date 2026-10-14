'use client';

import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PageHero, Section, SectionHead, Prose, Checklist, CtaBand, TextLink, Figure, FaqList, References } from '../components/ui';
import { MEDICAL_REFERENCES } from '../content/references';
import { maladieFaq } from '../seo/faq';
import { GUIDE } from '../content/guide';

const ESSENTIAL = [
  'Le lipœdème est une maladie chronique du tissu graisseux, pas un simple surpoids.',
  'Il touche presque exclusivement les femmes et apparaît souvent à la puberté, après une grossesse ou à la ménopause.',
  'La graisse est symétrique (hanches, cuisses, jambes, parfois bras), douloureuse, avec des bleus faciles ; pieds et mains sont épargnés.',
  'Elle résiste aux régimes et au sport, et la maladie évolue en 4 stades.',
  'Le diagnostic est clinique ; le traitement associe compression, activité physique et, si besoin, liposuccion adaptée (WAL).',
];

const COMPARE = {
  head: ['', 'Lipœdème', 'Obésité', 'Lymphœdème', 'Cellulite'],
  rows: [
    ['Qui ?', 'Femmes presque exclusivement', 'Femmes et hommes', 'Femmes et hommes', 'La plupart des femmes'],
    ['Répartition', 'Symétrique, jambes ± bras', 'Globale, tronc compris', 'Souvent un seul membre au début', 'Cuisses, fesses'],
    ['Pieds et mains', 'Épargnés', 'Peuvent être touchés', 'Souvent touchés', '—'],
    ['Douleur, bleus', 'Oui, fréquents', 'Non', 'Peu de douleur', 'Non'],
    ['Effet du régime', 'Faible sur les zones atteintes', 'Perte de poids globale', 'Aucun sur l’œdème', 'Variable'],
  ],
};

const TYPES = [
  { t: 'Type I', d: 'Fesses et hanches' },
  { t: 'Type II', d: 'Des hanches aux genoux' },
  { t: 'Type III', d: 'Des hanches aux chevilles' },
  { t: 'Type IV', d: 'Bras (souvent associé aux jambes)' },
  { t: 'Type V', d: 'Mollets uniquement' },
];

export default function Maladie() {
  const { t } = useLanguage();

  const stages = [
    { n: 1, title: t('stage1'), text: t('stage1Description') },
    { n: 2, title: t('stage2'), text: t('stage2Description') },
    { n: 3, title: t('stage3'), text: t('stage3Description') },
    { n: 4, title: 'Stade 4', text: 'Lipo-lymphœdème : le lipœdème s’accompagne d’un lymphœdème secondaire, avec atteinte possible des pieds.' },
  ];

  return (
    <>
      <PageHero
        title={<>Le lipœdème&nbsp;: symptômes, causes et stades</>}
        intro={t('whatIsLipoedemaText1')}
        image="/2027/1.webp"
        imageAlt="Les stades du lipœdème des jambes"
        imageClass="object-contain bg-white"
      />

      <Section>
        {/* Short, quotable definition – read by Google's AI overview and by ChatGPT */}
        <aside className="mx-auto max-w-4xl rounded-3xl bg-rose-50 p-6 lg:p-8" aria-label="Le lipœdème en bref">
          <p className="font-serif text-2xl text-ink">Le lipœdème en bref</p>
          <ul className="mt-4 space-y-3">
            {ESSENTIAL.map((k) => (
              <li key={k} className="flex gap-3 text-[16px] leading-relaxed text-ink/85">
                <Check size={18} className="mt-1 shrink-0 text-rose-600" strokeWidth={3} />
                {k}
              </li>
            ))}
          </ul>
        </aside>

        <div className="mt-14 lg:mt-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-start">
          <div>
            <SectionHead title={t('whatIsLipoedema')} />
            <Prose className="mt-6">
              <p>{t('whatIsLipoedemaText2')}</p>
            </Prose>
            <h3 className="mt-10 text-2xl">{t('howToRecognize')}</h3>
            <p className="mt-2 text-ink/70">{t('recognizeIntro')}</p>
            <div className="mt-6">
              <Checklist
                items={[t('symmetricSwelling'), t('spontaneousPain'), t('unusualSensitivity'), t('bruising'), t('heavyLegs'), t('disproportionateLegs')]}
              />
            </div>
            <p className="mt-6 text-[15px] text-ink/60">{t('symptomsEvolution')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Figure src="/2027/3.webp" alt="Lipœdème : répartition de la graisse sur les jambes" />
            <Figure src="/2027/4.webp" alt="Lipœdème : évolution de la maladie" />
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title={t('lipoedemaStages')} intro="Le lipœdème évolue avec le temps. Le stade se détermine lors de l’examen clinique." />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <li key={s.n} className="rounded-3xl bg-white p-6 ring-1 ring-rose-100">
              <span className="font-serif text-5xl text-rose-300">{s.n}</span>
              <h3 className="mt-1 text-2xl">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead title={t('whatAreCauses')} intro={t('causesIntro')} />
        <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-3">
          <div className="border-t border-rose-200 pt-6">
            <h3 className="text-2xl">{t('geneticPredisposition')}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/75">{t('geneticText')}</p>
          </div>
          <div className="border-t border-rose-200 pt-6">
            <h3 className="text-2xl">{t('hormonalInfluence')}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/75">{t('hormonalText')}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[t('puberty'), t('pregnancy'), t('postPartum'), t('menopause')].map((x) => (
                <li key={x} className="rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-800">{x}</li>
              ))}
            </ul>
            <p className="mt-3 text-[15px] text-ink/65">{t('hormonalConcluion')}</p>
          </div>
          <div className="border-t border-rose-200 pt-6">
            <h3 className="text-2xl">{t('circulatoryDisorders')}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/75">{t('circulatoryText')}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[t('venousInsufficiency'), t('lymphedema'), t('capillaryFragility')].map((x) => (
                <li key={x} className="rounded-full bg-rose-50 px-3 py-1 text-sm text-rose-800">{x}</li>
              ))}
            </ul>
            <p className="mt-3 text-[15px] text-ink/65">{t('circulatoryConclusion')}</p>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title={t('detailedSymptoms')} />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl mb-5">{t('physicalSymptoms')}</h3>
            <Checklist items={[t('symmetricFatAccumulation'), t('heavinessInLimbs'), t('painOnTouch'), t('easyBruising'), t('dimplingSkin')]} />
          </div>
          <div>
            <h3 className="text-2xl mb-5">{t('dailyLifeImpact')}</h3>
            <Checklist items={[t('clothingDifficulties'), t('walkingFatigue'), t('psychologicalImpact'), t('physicalLimitations'), t('socialIsolation')]} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead title="Lipœdème, obésité, lymphœdème ou cellulite ?" intro="Ces quatre situations sont souvent confondues. Voici les différences qui orientent le diagnostic." />
        <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-rose-100">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead className="bg-rose-50 text-rose-800">
              <tr>{COMPARE.head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-rose-100">
              {COMPARE.rows.map((r) => (
                <tr key={r[0]}>{r.map((c, i) => i === 0 ? <th key={i} scope="row" className="px-4 py-3 font-semibold text-ink">{c}</th> : <td key={i} className="px-4 py-3 text-ink/80">{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[15px] text-ink/65">
          En savoir plus : <Link href="/guide/lipoedeme-ou-cellulite/" className="font-semibold text-rose-700 underline underline-offset-4">lipœdème ou cellulite</Link> ·{' '}
          <Link href="/guide/lipoedeme-ou-lymphoedeme/" className="font-semibold text-rose-700 underline underline-offset-4">lipœdème ou lymphœdème</Link>
        </p>
      </Section>

      <Section tone="mist">
        <SectionHead title="Les types de lipœdème selon les zones touchées" intro="En plus du stade, les médecins décrivent le lipœdème selon sa localisation. Plusieurs types peuvent coexister." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {TYPES.map((x) => (
            <li key={x.t} className="rounded-2xl bg-white p-5 ring-1 ring-rose-100">
              <h3 className="text-xl">{x.t}</h3>
              <p className="mt-1 text-[15px] text-ink/75">{x.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6"><TextLink href="/guide/lipoedeme-des-bras/">Le lipœdème des bras</TextLink></p>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHead title={t('whyPoorlyKnown')} />
          <div>
            <Prose>
              <p>{t('poorlyKnownText1')}</p>
              <p>{t('poorlyKnownText2')}</p>
            </Prose>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href="/diagnostic/">{t('learnMoreDiagnostic')}</TextLink>
              <TextLink href="/traitement/">Les traitements</TextLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title="Le guide du lipœdème" intro="Des réponses détaillées, rédigées et relues par le Dr Tawfik Sefrioui." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE.map((a) => (
            <li key={a.slug}>
              <Link href={`/guide/${a.slug}/`} className="block h-full rounded-2xl bg-white p-5 ring-1 ring-rose-100 transition hover:ring-rose-300">
                <span className="font-serif text-xl leading-snug text-ink">{a.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <FaqList items={maladieFaq} title="Questions fréquentes sur le lipœdème" />
        <div className="mx-auto mt-14 max-w-4xl"><References items={MEDICAL_REFERENCES} /></div>
      </Section>

      <CtaBand title={t('concernedQuestion')} text={t('bookAppointment')} secondary={{ href: '/diagnostic/', label: 'Le diagnostic' }} />
    </>
  );
}
