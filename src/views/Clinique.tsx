import { MapPin, Navigation } from 'lucide-react';
import { PageHero, Section, SectionHead, Prose, FeatureGrid, CtaBand } from '../components/ui';
import VideoPlayer from '../components/VideoPlayer';
import { SITE, mapsLink } from '../config/site';

export default function Clinique() {
  return (
    <>
      <PageHero
        title="Le centre du lipœdème à Casablanca"
        intro="Au cœur de Casablanca, dans le quartier Racine, un cabinet dédié au traitement du lipœdème : un cadre médical haut de gamme, des technologies de pointe et un accompagnement personnalisé."
        image="/videos/cabinet.jpg"
        imageAlt="Le cabinet du Centre Lipœdème Maroc à Casablanca"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:items-center">
          <div>
            <SectionHead title="Pensé pour votre confort et votre sécurité" />
            <Prose className="mt-6">
              <p>
                Chaque détail a été pensé pour votre confort, votre sécurité et votre sérénité, de la consultation jusqu’au suivi. Le centre allie soins de haute précision, technologies innovantes et écoute.
              </p>
            </Prose>
          </div>
          <VideoPlayer src="/videos/cabinet.mp4" poster="/videos/cabinet.jpg" title="Visite du cabinet" className="mx-auto w-full max-w-[340px]" />
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title="Des équipements de pointe" />
        <FeatureGrid
          items={[
            { title: 'Système WAL de dernière génération', text: 'Équipement de liposuccion assistée par jet d’eau, pour un geste précis et doux.' },
            { title: 'Anesthésie et surveillance', text: 'Matériel moderne d’anesthésie et de monitoring pour votre sécurité pendant l’intervention.' },
            { title: 'Stérilisation', text: 'Protocoles rigoureux et équipements de haute technologie contre tout risque d’infection.' },
            { title: 'Diagnostic précis', text: 'Des outils pour évaluer finement votre situation et bâtir le bon plan de traitement.' },
          ]}
        />
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <SectionHead title="Facile d’accès" />
            <Prose className="mt-6">
              <p>
                Un emplacement central, accessible depuis tous les quartiers de Casablanca et proche des grands axes. Pour les patientes venant de l’étranger, le centre est facilement accessible depuis l’aéroport international Mohammed V.
              </p>
            </Prose>
          </div>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="group flex gap-4 rounded-3xl bg-mist p-7 ring-1 ring-rose-100">
            <MapPin className="mt-1 shrink-0 text-rose-600" size={24} />
            <span>
              <span className="block font-serif text-2xl">{SITE.address.street}</span>
              <span className="block text-ink/70">{SITE.address.district}, {SITE.address.postalCode} {SITE.address.city}, Maroc</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-700 group-hover:underline"><Navigation size={15} /> Itinéraire Google Maps</span>
            </span>
          </a>
        </div>
      </Section>

      <CtaBand title="Visitez le centre" text="Prenez rendez-vous pour découvrir les installations et rencontrer l’équipe." secondary={{ href: '/services/', label: 'Séjour médical' }} />
    </>
  );
}
