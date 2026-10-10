import Link from 'next/link';
import { PageHero, Section, SectionHead, Prose, Checklist, Steps, FeatureGrid, Callout, CtaBand, TextLink, Figure } from '../components/ui';

export default function Traitement() {
  return (
    <>
      <PageHero
        title="Traitement du lipœdème au Maroc"
        intro="Le lipœdème n’est pas un simple excès de graisse : c’est une maladie chronique, évolutive et douloureuse. Elle se soigne, avec une prise en charge médicale spécialisée — aujourd’hui possible à Casablanca avec le Dr Tawfik Sefrioui."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Les objectifs du traitement" />
            <Prose className="mt-6">
              <p>
                Le traitement ne se limite pas à l’esthétique. C’est une démarche thérapeutique globale qui vise à soulager, à freiner l’évolution de la maladie et à améliorer la qualité de vie au quotidien.
              </p>
            </Prose>
          </div>
          <div className="lg:pt-14">
            <Checklist
              items={[
                'Réduire les douleurs et les gonflements',
                'Restaurer la mobilité et la qualité de vie',
                'Améliorer l’aspect des jambes ou des bras',
                'Prévenir les complications (lymphœdème, déformations)',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title="Les options de traitement" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-7 ring-1 ring-rose-100">
            <h3 className="text-2xl">Traitement conservateur</h3>
            <p className="mt-2 text-ink/70">Aux stades précoces, ou en complément de la chirurgie.</p>
            <div className="mt-5">
              <Checklist
                items={[
                  'Vêtements de compression médicale sur mesure',
                  'Drainage lymphatique pour réduire œdèmes et douleur',
                  'Activité physique douce : aquagym, marche nordique, yoga',
                  'Alimentation anti-inflammatoire personnalisée',
                ]}
              />
            </div>
            <div className="mt-6">
              <Callout tone="warn">Ces méthodes soulagent, mais ne réduisent pas les amas graisseux du lipœdème.</Callout>
            </div>
          </article>
          <article className="rounded-3xl bg-rose-950 p-7 text-rose-50">
            <h3 className="text-2xl text-white">Liposuccion spécialisée</h3>
            <p className="mt-2 text-rose-100/80">
              La seule méthode qui retire durablement la graisse malade : une liposuccion adaptée au lipœdème, réalisée par un chirurgien formé à cette maladie.
            </p>
            <div className="mt-5">
              <Checklist
                dark
                items={[
                  'Méthode Body-Jet / WAL : un jet d’eau stérile décolle la graisse en douceur',
                  'Anesthésie locale ou générale selon les cas',
                  'Mini-invasive : moins de douleur, peu de bleus',
                  'Respect du système lymphatique et des nerfs cutanés',
                  'Micro-canules, pas d’incision visible',
                  'Résultat naturel et harmonieux',
                ]}
              />
            </div>
            <Link href="/wal/" className="btn mt-7 bg-white text-rose-900 hover:bg-rose-50">La technique WAL en détail</Link>
          </article>
        </div>
        <p className="mt-8 max-w-prose text-[15px] text-ink/65">
          Il existe trois grands types de chirurgie du lipœdème : la liposuccion avec épargne lymphatique, la liposuccion assistée par jet d’eau et la liposuccion tumescente. Le chirurgien vous aide à choisir selon la sévérité et les particularités de votre lipœdème.
        </p>
      </Section>

      <Section>
        <SectionHead title="Ce que l’on peut attendre" />
        <FeatureGrid
          cols={3}
          items={[
            { title: 'Moins de volume', text: 'Une réduction visible du volume des zones traitées.' },
            { title: 'Moins de douleur', text: 'Un soulagement des douleurs chroniques et de la sensation de jambes lourdes.' },
            { title: 'Plus de mobilité', text: 'Une posture et une marche améliorées.' },
            { title: 'Une silhouette retrouvée', text: 'Des contours plus harmonieux des jambes et des bras.' },
            { title: 'Un équilibre retrouvé', text: 'Le soulagement d’être enfin comprise et soignée.' },
          ]}
        />
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <div>
            <SectionHead title="Avant la WAL : les limites des approches classiques" />
            <Prose className="mt-6">
              <p>
                Compression, drainage, régime et sport apportent un soulagement, mais la graisse du lipœdème résiste à la perte de poids et le drainage demande un suivi à vie.
              </p>
              <p>
                La liposuccion tumescente classique retire la graisse mais peut fragiliser le système lymphatique, et elle se fait souvent sous anesthésie générale, avec plus de risques.
              </p>
            </Prose>
          </div>
          <Figure src="/2028/10.jpeg" alt="Liposuccion traditionnelle et liposuccion WAL pour le lipœdème" caption="Liposuccion traditionnelle et WAL Bodyjet 3D avec micro-canules sous anesthésie locale" />
        </div>
      </Section>

      <Section>
        <SectionHead title="Votre parcours de traitement" />
        <Steps
          items={[
            { title: 'Consultation initiale', text: 'Diagnostic précis, évaluation de votre cas, objectifs et explication détaillée du traitement proposé.' },
            { title: 'Préparation', text: 'Bilan de santé, consignes pré-opératoires et, si vous venez de loin, organisation de votre séjour.' },
            { title: 'Intervention', text: 'Au bloc opératoire du centre, aux normes internationales, avec une équipe spécialisée.' },
            { title: 'Suivi', text: 'Consultations de contrôle et conseils pour optimiser la récupération et garder les résultats.' },
          ]}
        />
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <TextLink href="/parcours-patient/">Le parcours en détail</TextLink>
          <TextLink href="/resultats/">Résultats avant / après</TextLink>
        </div>
      </Section>

      <CtaBand title="Prête à commencer votre traitement ?" secondary={{ href: '/resultats/', label: 'Voir les résultats' }} />
    </>
  );
}
