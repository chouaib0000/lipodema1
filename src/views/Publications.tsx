import { Youtube } from '../components/SocialIcons';
import { PageHero, Section, SectionHead, Prose, FeatureGrid, CtaBand } from '../components/ui';
import { SITE } from '../config/site';

export default function Publications() {
  return (
    <>
      <PageHero
        title="Publications et médias"
        intro="Le Dr Tawfik Sefrioui contribue à faire avancer la connaissance du lipœdème : formations, congrès internationaux et interventions dans les médias."
        actions={false}
      />

      <Section>
        <SectionHead title="Domaines d’expertise" />
        <FeatureGrid
          cols={3}
          items={[
            { title: 'Lipœdème', text: 'Diagnostic, classification et traitement par liposuccion WAL.' },
            { title: 'Techniques chirurgicales', text: 'Liposuccion assistée par jet d’eau et approches innovantes sous anesthésie locale.' },
            { title: 'Qualité de vie', text: 'Impact psychologique de la maladie et bien-être des patientes.' },
          ]}
        />
      </Section>

      <Section tone="mist">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <SectionHead title="À la télévision" intro="Le Pr Tawfik Sefrioui, spécialiste en médecine régénérative, invité de l’émission Sabahiyat." />
          </div>
          <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 rounded-3xl bg-white p-6 ring-1 ring-rose-100">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-rose-600 text-white"><Youtube size={26} /></span>
            <span>
              <span className="block font-serif text-2xl">Les vidéos du Dr Sefrioui</span>
              <span className="block text-sm text-ink/65 group-hover:text-rose-700">Interview et explications sur sa chaîne YouTube</span>
            </span>
          </a>
        </div>
      </Section>

      <Section>
        <SectionHead title="Congrès et formations" />
        <FeatureGrid
          cols={3}
          items={[
            { title: 'Formation continue', text: 'Formations spécialisées sur les nouvelles techniques et les protocoles de soins du lipœdème.' },
            { title: 'Échanges internationaux', text: 'Collaboration avec des centres d’excellence européens et internationaux.' },
            { title: 'Conférences', text: 'Interventions pour partager son expertise et sensibiliser la communauté médicale.' },
          ]}
        />
        <Prose className="mt-10">
          <p>
            Cette rigueur scientifique, associée à une approche humaine et personnalisée, garantit aux patientes des protocoles à jour, fondés sur les données médicales les plus récentes.
          </p>
        </Prose>
      </Section>

      <CtaBand title="Bénéficier de cette expertise" secondary={{ href: '/parcours/', label: 'Son parcours' }} />
    </>
  );
}
