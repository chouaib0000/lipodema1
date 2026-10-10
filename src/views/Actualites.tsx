import { PageHero, Section, CtaBand } from '../components/ui';
import { Facebook, Instagram, Youtube } from '../components/SocialIcons';
import { SITE } from '../config/site';

const NEWS = [
  { date: 'Mars 2025', title: 'Sensibilisation au lipœdème au Maroc', text: 'Le Dr Tawfik Sefrioui poursuit sa mission de sensibilisation au lipœdème auprès du public marocain et africain. La maladie reste méconnue dans la région, ce qui retarde le diagnostic et prolonge des souffrances évitables.' },
  { date: 'Février 2025', title: 'Drainage post-opératoire', text: 'Le cabinet fait évoluer son protocole de drainage après liposuccion WAL pour réduire encore les œdèmes et accélérer la récupération.' },
  { date: 'Janvier 2025', title: 'Congrès international sur le lipœdème', text: 'Le Dr Sefrioui a participé à un congrès européen consacré au lipœdème, pour échanger avec d’autres spécialistes sur les dernières avancées du diagnostic et du traitement.' },
];

export default function Actualites() {
  return (
    <>
      <PageHero
        title="Actualités et formations internationales"
        intro="Les nouvelles du centre, des congrès et des avancées dans le traitement du lipœdème."
        actions={false}
      />

      <Section>
        <ol className="relative border-s border-rose-200 ps-8 space-y-12 max-w-3xl">
          {NEWS.map((n) => (
            <li key={n.title} className="relative">
              <span className="absolute -start-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-rose-500 ring-1 ring-rose-200" />
              <time className="text-sm font-semibold text-rose-700">{n.date}</time>
              <h2 className="mt-1 text-3xl">{n.title}</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-ink/75">{n.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-[32px] leading-tight lg:text-4xl">Suivez le centre</h2>
            <p className="mt-3 text-ink/75">Conseils, résultats et témoignages chaque semaine.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram size={18} /> Instagram</a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Facebook size={18} /> Facebook</a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Youtube size={18} /> YouTube</a>
          </div>
        </div>
      </Section>

      <CtaBand title="Des questions sur le lipœdème ?" />
    </>
  );
}
