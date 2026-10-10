import { Plane, Hotel, Car, CalendarDays } from 'lucide-react';
import { PageHero, Section, SectionHead, Checklist, CtaBand } from '../components/ui';

const SERVICES = [
  { Icon: Plane, title: 'Votre voyage', text: 'Conseils pour le vol et l’arrivée, organisation du transfert de l’aéroport à votre hébergement.' },
  { Icon: Hotel, title: 'Hébergement', text: 'Hôtels et résidences proches du cabinet, selon votre budget, avec aide à la réservation.' },
  { Icon: Car, title: 'Déplacements', text: 'Trajets entre votre hébergement et le cabinet pour les consultations et le suivi.' },
  { Icon: CalendarDays, title: 'Planning sur mesure', text: 'Consultation, intervention et contrôles coordonnés pour un séjour court et serein.' },
];

export default function Services() {
  return (
    <>
      <PageHero
        title="Votre séjour médical à Casablanca"
        intro="Vous venez d’une autre ville ou de l’étranger ? L’équipe organise votre séjour autour de votre traitement, du vol jusqu’au suivi après votre retour."
      />

      <Section>
        <SectionHead title="Nous nous occupons des détails" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICES.map(({ Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-3xl bg-mist p-6 ring-1 ring-rose-100">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-rose-600 ring-1 ring-rose-100"><Icon size={22} /></span>
              <div>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-1 text-[16px] leading-relaxed text-ink/75">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHead title="Avant, pendant et après votre séjour" />
          <Checklist
            items={[
              'Consultation à distance avant votre arrivée',
              'Aide pour les démarches administratives',
              'Suivi à distance après votre retour',
              'Échanges en français, arabe et anglais',
            ]}
          />
        </div>
      </Section>

      <CtaBand title="Organisez votre séjour médical" text="Écrivez-nous sur WhatsApp : nous préparons votre venue avec vous." />
    </>
  );
}
