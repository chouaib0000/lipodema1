import { Quote } from 'lucide-react';
import { PageHero, Section, SectionHead, CtaBand } from '../components/ui';
import VideoPlayer from '../components/VideoPlayer';

const VIDEOS = [
  { src: '/videos/temoignage-1.mp4', poster: '/videos/temoignage-1.jpg', title: 'Une patiente raconte son parcours' },
  { src: '/videos/temoignage-2.mp4', poster: '/videos/temoignage-2.jpg', title: 'Son expérience avec le Dr Sefrioui' },
];

const WRITTEN = [
  { name: 'Imane', place: 'Bruxelles, Belgique', text: 'Le lipœdème est très mal connu chez nous. Quand j’ai découvert qu’un expert au Maroc proposait une solution adaptée, j’ai sauté sur l’occasion. L’intervention s’est déroulée à Casablanca dans un cabinet moderne et très bien encadré. Les résultats sont au-delà de mes espérances, je revis dans mon corps de femme.' },
  { name: 'Fatou', place: 'Dakar, Sénégal', text: 'Depuis l’adolescence, mes jambes étaient gonflées, douloureuses, et j’avais honte de les montrer. Au Sénégal, aucun médecin ne m’avait parlé du lipœdème. C’est grâce à une amie que j’ai connu le Dr Sefrioui. Il a tout de suite posé le bon diagnostic. Après ma liposuccion WAL, mes douleurs ont disparu et j’ai retrouvé confiance en moi.' },
  { name: 'Sarah', place: 'Casablanca, Maroc', text: 'Pendant des années, j’ai pensé que c’était ma faute si je ne perdais pas de poids aux jambes malgré tous mes efforts. Le Dr Sefrioui m’a expliqué que j’avais un lipœdème. L’intervention a changé ma vie. Je peux enfin porter ce que je veux et marcher sans douleur.' },
  { name: 'Amina', place: 'Rabat, Maroc', text: 'J’ai retrouvé confiance en moi. Le Dr Sefrioui a été à l’écoute et professionnel du début à la fin. Le cabinet est impeccable et l’équipe est très compétente. Je recommande vivement.' },
  { name: 'Khadija', place: 'Paris, France', text: 'Je cherchais un spécialiste du lipœdème proche culturellement et j’ai trouvé le Dr Sefrioui. Mon séjour médical au Maroc s’est très bien passé. Tout était bien organisé, de l’aéroport au cabinet. Les résultats sont visibles et durables.' },
  { name: 'Nadia', place: 'Abidjan, Côte d’Ivoire', text: 'J’avais peur de faire cette intervention loin de chez moi, mais l’équipe du Dr Sefrioui m’a mise en confiance. Ils ont tout organisé pour moi. Je suis très satisfaite du résultat et je n’ai plus ces jambes lourdes et douloureuses.' },
];

export default function Temoignages() {
  return (
    <>
      <PageHero
        title="Témoignages de patientes"
        intro="Elles ont été traitées pour un lipœdème au centre de Casablanca. Elles racontent leur parcours, avec leurs mots."
      />

      <Section>
        <SectionHead title="En vidéo" />
        <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:max-w-3xl">
          {VIDEOS.map((v) => (
            <div key={v.src} className="snap-center shrink-0 w-[78%] sm:w-auto">
              <VideoPlayer src={v.src} poster={v.poster} title={v.title} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title="Elles témoignent" />
        <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {WRITTEN.map((w) => (
            <li key={w.name} className="mb-5 break-inside-avoid rounded-3xl bg-white p-6 ring-1 ring-rose-100">
              <Quote className="text-rose-300" size={26} aria-hidden="true" />
              <blockquote className="mt-3 text-[16px] leading-relaxed text-ink/85">{w.text}</blockquote>
              <p className="mt-4 text-sm"><span className="font-semibold text-ink">{w.name}</span> <span className="text-ink/55">· {w.place}</span></p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Et si c’était votre tour ?" text="Commencez votre parcours vers une vie sans les contraintes du lipœdème." secondary={{ href: '/resultats/', label: 'Voir les résultats' }} />
    </>
  );
}
