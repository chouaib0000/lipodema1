import { PageHero, Section, SectionHead, Prose, Checklist, Steps, Callout, CtaBand, TextLink } from '../components/ui';

const CONFUSIONS = [
  { name: 'L’obésité', text: 'alors que la graisse du lipœdème est localisée et résiste aux régimes.' },
  { name: 'La rétention d’eau', text: 'alors que le gonflement du lipœdème est inflammatoire et douloureux.' },
  { name: 'La cellulite', text: 'qui reste superficielle et sans douleur.' },
  { name: 'Le lymphœdème', text: 'qui touche les pieds et présente des signes cliniques différents.' },
];

export default function Diagnostic() {
  return (
    <>
      <PageHero
        title="Diagnostic du lipœdème à Casablanca"
        intro="Il n’existe pas de prise de sang qui révèle le lipœdème : le diagnostic repose sur un examen clinique attentif par un médecin qui connaît la maladie. C’est le point de départ de tout traitement."
        image="/img/dr-tawfik-sefrioui-chirurgien-lipoedeme.jpg"
        imageAlt="Le Dr Tawfik Sefrioui, chirurgien spécialiste du lipœdème"
        imageClass="object-cover object-top"
      />

      <Section>
        <SectionHead title="Les étapes du diagnostic" />
        <Steps
          items={[
            { title: 'Entretien médical', text: 'Vos symptômes, leur évolution, vos antécédents médicaux, hormonaux et familiaux, et l’impact sur votre quotidien.' },
            { title: 'Examen physique', text: 'Répartition et symétrie de la graisse, texture de la peau, sensibilité au toucher, présence d’œdème, circulation.' },
            { title: 'Diagnostic différentiel', text: 'Écarter un lymphœdème, une obésité simple ou un trouble veineux : une étape clé pour proposer le bon traitement.' },
            { title: 'Plan de traitement', text: 'Une stratégie adaptée à votre stade et à vos objectifs, avec les options possibles et un devis transparent.' },
          ]}
        />
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Les signes que le médecin recherche" />
            <div className="mt-8">
              <Checklist
                items={[
                  'Graisse répartie de façon symétrique',
                  'Sensibilité accrue au toucher',
                  'Tendance aux bleus',
                  'Pas d’amélioration avec le régime',
                  'Pieds et mains épargnés',
                  'Texture de peau irrégulière, nodules',
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHead title="Souvent confondu avec…" />
            <ul className="mt-8 divide-y divide-rose-200 border-y border-rose-200">
              {CONFUSIONS.map((c) => (
                <li key={c.name} className="py-4 text-[16px]">
                  <span className="font-semibold text-ink">{c.name}</span> <span className="text-ink/75">{c.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] text-ink/65">Seule une consultation avec un médecin formé au lipœdème permet un diagnostic précis.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead title="Comment se déroule la consultation" intro="Comptez 45 à 60 minutes. Consultation en français, en arabe ou en anglais, dossier confidentiel." />
        <Steps
          items={[
            {
              title: 'Écoute et antécédents',
              text: 'Un temps pour comprendre votre histoire et vos attentes.',
              points: ['Historique médical, hormonal et familial', 'Douleurs, fatigue, mobilité, gêne esthétique', 'Vos attentes physiques et émotionnelles'],
            },
            {
              title: 'Examen clinique ciblé',
              text: 'L’examen qui confirme ou non le lipœdème.',
              points: ['Symétrie, zones sensibles, œdèmes', 'Palpation : douleur, nodules', 'Signe de Stemmer', 'Mesures et photos médicales si besoin'],
            },
            {
              title: 'Examens complémentaires',
              text: 'Seulement si nécessaire.',
              points: ['Écho-Doppler veineux', 'Bilan biologique', 'Lymphoscintigraphie en cas de doute avec un lymphœdème'],
            },
            {
              title: 'Vous repartez avec',
              text: 'Des réponses claires et un plan concret.',
              points: ['Un diagnostic argumenté', 'Un plan de traitement personnalisé', 'Un devis transparent, sans engagement', 'Un calendrier de soins réaliste'],
            },
          ]}
        />
      </Section>

      <Section tone="mist">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <SectionHead title="Vous vivez loin de Casablanca ?" />
            <Prose className="mt-6">
              <p>
                Le Dr Sefrioui propose une première consultation à distance, par téléphone ou visioconférence (WhatsApp ou Zoom), pour préparer votre venue.
              </p>
            </Prose>
          </div>
          <Callout title="La consultation à distance permet de">
            <ul className="mt-2 space-y-1.5">
              <li>• vérifier si la chirurgie est indiquée pour vous ;</li>
              <li>• préparer les analyses à faire avant le déplacement ;</li>
              <li>• planifier un séjour médical court et efficace.</li>
            </ul>
          </Callout>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <TextLink href="/maladie/">Les symptômes du lipœdème</TextLink>
          <TextLink href="/traitement/">Les traitements</TextLink>
        </div>
      </Section>

      <CtaBand title="Obtenir un diagnostic précis" text="Prenez rendez-vous avec le Dr Tawfik Sefrioui au centre de Casablanca, ou envoyez vos questions sur WhatsApp." secondary={{ href: '/traitement/', label: 'Les traitements' }} />
    </>
  );
}
