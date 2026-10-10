import { PageHero, Section, SectionHead, Steps, Checklist, CtaBand, TextLink } from '../components/ui';

export default function ParcoursPatient() {
  return (
    <>
      <PageHero
        title={<>Parcours patiente&nbsp;: les étapes du traitement</>}
        intro="Votre traitement du lipœdème est planifié avec vous, de la première consultation jusqu’au suivi à long terme. Voici comment il se déroule."
      />

      <Section>
        <Steps
          items={[
            {
              title: 'Première consultation',
              text: 'Vos symptômes, un examen clinique complet et un diagnostic précis. Le moment de poser toutes vos questions.',
              points: ['Symptômes et antécédents', 'Examen physique approfondi', 'Diagnostic et stade du lipœdème', 'Options de traitement'],
            },
            {
              title: 'Planification',
              text: 'Un plan sur mesure, des attentes réalistes et une préparation claire.',
              points: ['Plan de traitement personnalisé', 'Devis détaillé et transparent', 'Bilan pré-opératoire', 'Consignes de préparation'],
            },
            {
              title: 'Le jour de l’intervention',
              text: 'Accueil au cabinet, liposuccion WAL au bloc opératoire, puis surveillance en salle de soins.',
              points: ['Accueil personnalisé', 'Marquage pré-opératoire', 'Anesthésie adaptée à votre cas', 'Surveillance post-opératoire immédiate'],
            },
            {
              title: 'Récupération',
              text: 'Des consignes précises pour bien récupérer dans les jours qui suivent.',
              points: ['Marche dès le lendemain', 'Vêtement de compression', 'Drainage post-opératoire selon le protocole', 'Reprise progressive des activités'],
            },
            {
              title: 'Suivi',
              text: 'Des consultations de contrôle, et un médecin disponible pour vos questions.',
              points: ['Contrôles planifiés', 'Évaluation de la récupération', 'Conseils pour garder les résultats'],
            },
            {
              title: 'Résultats',
              text: 'Le résultat final se voit généralement après 3 à 6 mois.',
              points: ['Silhouette qui s’affine', 'Douleurs durablement réduites', 'Meilleure qualité de vie'],
            },
          ]}
        />
      </Section>

      <Section tone="mist">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title="Vous venez de l’étranger ?" intro="Nous organisons votre séjour médical pour que tout se passe en douceur." />
            <div className="mt-6"><TextLink href="/services/">Le séjour médical</TextLink></div>
          </div>
          <Checklist
            items={[
              'Consultation pré-opératoire à distance',
              'Aide pour le voyage et l’hébergement',
              'Séjour planifié au plus juste',
              'Suivi à distance après votre retour',
            ]}
          />
        </div>
      </Section>

      <CtaBand title="Commencer votre parcours" secondary={{ href: '/diagnostic/', label: 'Le diagnostic' }} />
    </>
  );
}
