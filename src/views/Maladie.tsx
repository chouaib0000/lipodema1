'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { PageHero, Section, SectionHead, Prose, Checklist, CtaBand, TextLink, Figure } from '../components/ui';

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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-start">
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

      <CtaBand title={t('concernedQuestion')} text={t('bookAppointment')} secondary={{ href: '/diagnostic/', label: 'Le diagnostic' }} />
    </>
  );
}
