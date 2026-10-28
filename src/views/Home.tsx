'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Check, ChevronDown, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Lightbox from '../components/Lightbox';
import VideoPlayer from '../components/VideoPlayer';
import { WhatsAppIcon } from '../components/MobileActionBar';
import { SITE, mapsLink, whatsappLink } from '../config/site';
import { homeFaq } from '../seo/faq';
import { GUIDE } from '../content/guide';

const LEGS = [
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 15.52.16.webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.50 (1).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (1).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (2).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (3).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (4).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (6).webp',
  '/2026/leg/2026/Jambes/WhatsApp Image 2025-10-04 at 16.09.51 (7).webp',
];

const ARMS = [
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 15.53.00.webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (1).webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (2).webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (3).webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (4).webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40 (5).webp',
  '/2026/leg/2026/bra/WhatsApp Image 2025-10-04 at 16.11.40.webp',
];

const SYMPTOMS = [
  'Jambes ou bras qui grossissent de façon symétrique, souvent avec des chevilles et des pieds épargnés',
  'Douleurs, sensation de lourdeur et sensibilité au moindre contact',
  'Bleus qui apparaissent facilement, sans choc important',
  'Graisse qui ne diminue pas malgré les régimes et le sport',
  'Apparition ou aggravation à la puberté, après une grossesse ou à la ménopause',
  'Une mère, une sœur ou une tante avec la même silhouette',
];

const BENEFITS = [
  { title: 'Anesthésie locale', text: 'Vous restez éveillée et confortable : pas d’anesthésie générale ni de ses risques, et vous pouvez changer de position pendant l’intervention.' },
  { title: 'Jet d’eau et micro-canules', text: 'La graisse est décollée par un jet d’eau pulsé puis aspirée avec des micro-canules, pour un geste doux qui respecte les vaisseaux lymphatiques.' },
  { title: 'Moins de douleur, plus de mobilité', text: 'En retirant la graisse du lipœdème, la technique soulage la lourdeur et la douleur et facilite à nouveau la marche.' },
  { title: 'Incisions minimes', text: 'Les micro-canules passent par de très petites incisions, avec une cicatrisation discrète et une récupération plus rapide.' },
  { title: 'Plan adapté à chaque stade', text: 'Jambes, genoux, cuisses, bras : le nombre de zones et de séances est défini lors de la consultation, selon votre stade.' },
  { title: 'Marche dès le lendemain', text: 'La mobilité précoce est encouragée, avec compression et drainage post-opératoire à partir du 3e jour selon le protocole du centre.' },
];

const STEPS = [
  { title: 'Premier contact', text: 'Par téléphone ou WhatsApp : vos questions, vos zones concernées et, si vous le souhaitez, quelques photos pour un premier avis.' },
  { title: 'Consultation au centre', text: 'Examen clinique par le Dr Sefrioui, confirmation du diagnostic, stade du lipœdème et plan de traitement personnalisé.' },
  { title: 'Intervention', text: 'Liposuccion WAL Bodyjet 3D sous anesthésie locale, au bloc du centre à Casablanca. Vous rentrez le jour même.' },
  { title: 'Suivi', text: 'Compression, drainage post-opératoire et contrôles réguliers. L’équipe reste joignable pour toute question.' },
];

export default function Home() {
  const { t } = useLanguage();
  const [gallery, setGallery] = useState<null | { images: string[]; label: string; index: number }>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const open = (images: string[], label: string, index = 0) => setGallery({ images, label, index });

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-mist">
        <div className="container mx-auto grid gap-10 pt-10 pb-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="fade-in">
            <p data-hero className="text-sm font-semibold text-rose-700">Centre dédié au lipœdème depuis 2015 · Casablanca</p>
            <h1 className="mt-4 text-[42px] leading-[1.02] sm:text-6xl lg:text-[76px]">
              Traitement du lipœdème au Maroc
            </h1>
            <p data-hero className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink/80">
              Le Dr Tawfik Sefrioui traite le lipœdème des jambes et des bras par liposuccion WAL Bodyjet 3D avec micro-canules, sous anesthésie locale, dans son centre de Casablanca.
            </p>
            <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">Prendre rendez-vous</Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <span className="text-[#1FA855]"><WhatsAppIcon /></span> Poser une question sur WhatsApp
              </a>
            </div>
            <dl data-hero className="mt-10 grid grid-cols-3 gap-4 border-t border-rose-200/70 pt-6 max-w-[34rem]">
              <div>
                <dt className="text-xs text-ink/60">Centre ouvert en</dt>
                <dd className="mt-1 font-serif text-2xl sm:text-3xl text-ink">2015</dd>
              </div>
              <div>
                <dt className="text-xs text-ink/60">Anesthésie</dt>
                <dd className="mt-1 font-serif text-2xl sm:text-3xl text-ink">Locale</dd>
              </div>
              <div>
                <dt className="text-xs text-ink/60">Diplômé aux</dt>
                <dd className="mt-1 font-serif text-2xl sm:text-3xl text-ink">USA</dd>
              </div>
            </dl>
          </div>

          {/* The arch echoes Casablanca's Moorish doorways and frames the surgeon */}
          <figure className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px] lg:mr-0">
            <div data-hero-photo className="relative isolate [transform:translateZ(0)] aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-rose-100 ring-1 ring-rose-200">
              <img
                src={SITE.heroImage}
                alt="Dr Tawfik Sefrioui, chirurgien spécialiste du lipœdème à Casablanca"
                width="800"
                height="930"
                fetchPriority="high"
                className="h-full w-full object-cover object-[50%_30%]"
              />
            </div>
            <figcaption data-hero-card className="absolute -bottom-5 left-4 right-4 sm:left-auto sm:right-[-12px] sm:max-w-[280px] rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_-18px_rgba(46,16,24,0.35)]">
              <span className="block font-serif text-xl text-ink">Dr Tawfik Sefrioui</span>
              <span className="block text-[13px] text-ink/70">George Washington University (USA) · pionnier de la liposuccion WAL au Maroc</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ───────── Symptoms ───────── */}
      <section className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <span className="eyebrow-rule" />
          <h2 className="text-4xl lg:text-5xl">Et si ce n’était pas « juste du poids » ?</h2>
          <p className="mt-5 text-lg text-ink/75 max-w-prose">
            Le lipœdème est une maladie chronique du tissu graisseux qui touche presque exclusivement les femmes. Encore mal connu au Maroc, il est souvent confondu avec l’obésité ou la cellulite, ce qui retarde le diagnostic.
          </p>
          <ul className="mt-8 space-y-4">
            {SYMPTOMS.map((s) => (
              <li key={s} className="flex gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-700"><Check size={14} strokeWidth={3} /></span>
                <span className="text-ink/85">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-rose-700">
            <Link href="/maladie" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700">Comprendre le lipœdème</Link>
            <Link href="/diagnostic" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700">Comment se fait le diagnostic</Link>
          </div>
        </div>
        <button type="button" onClick={() => open(['/2027/1.webp', ...LEGS], 'Stades du lipœdème et résultats')} className="group text-left">
          <img
            src="/2027/1.webp"
            alt="Les stades du lipœdème des jambes : du stade 1 au stade 3"
            width="1270"
            height="666"
            loading="lazy"
            decoding="async"
            className="w-full rounded-3xl ring-1 ring-rose-100"
          />
          <span className="mt-3 block text-sm text-ink/60 group-hover:text-rose-700">Évolution du lipœdème des jambes, du stade 1 au stade 3 — agrandir</span>
        </button>
      </section>

      {/* ───────── WAL technique ───────── */}
      <section className="bg-rose-950 text-rose-50">
        <div className="container mx-auto py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl text-white">La liposuccion WAL Bodyjet 3D, sous anesthésie locale</h2>
              <p className="mt-5 text-lg text-rose-100/85 max-w-prose">{t('understandingText2')}</p>
              <Link href="/wal" className="btn mt-8 bg-white text-rose-900 hover:bg-rose-50">Découvrir la technique WAL</Link>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <li key={b.title} className="border-t border-white/15 py-5">
                  <h3 className="font-serif text-2xl text-white">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-rose-100/80">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 overflow-x-auto rounded-3xl bg-white/5 ring-1 ring-white/10">
            <table className="w-full min-w-[560px] text-left text-[15px]">
              <caption className="sr-only">Liposuccion traditionnelle comparée à la liposuccion WAL du Dr Sefrioui</caption>
              <thead>
                <tr className="text-rose-200">
                  <th scope="col" className="p-5 font-semibold w-1/4"></th>
                  <th scope="col" className="p-5 font-semibold">Liposuccion traditionnelle</th>
                  <th scope="col" className="p-5 font-semibold text-white">Liposuccion WAL du centre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ['Anesthésie', 'Générale le plus souvent', 'Locale (tumescente), patiente éveillée'],
                  ['Système lymphatique', 'Risque de lésion des vaisseaux fragiles', 'Jet d’eau doux qui les préserve'],
                  ['Canules', 'Canules classiques', 'Micro-canules, incisions minimes'],
                  ['Après l’intervention', 'Récupération plus longue', 'Marche dès le lendemain'],
                ].map(([k, a, b]) => (
                  <tr key={k}>
                    <th scope="row" className="p-5 font-semibold text-rose-200">{k}</th>
                    <td className="p-5 text-rose-100/70">{a}</td>
                    <td className="p-5 text-white">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── Results ───────── */}
      <section className="container mx-auto py-16 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow-rule" />
            <h2 className="text-4xl lg:text-5xl">{t('massageTitle')}</h2>
            <p className="mt-4 max-w-prose text-lg text-ink/75">{t('massageDescription')}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/resultats" className="btn-ghost">{t('seeAllResults')}</Link>
          </div>
        </div>

        {[
          { label: 'Lipœdème des jambes', images: LEGS },
          { label: 'Lipœdème des bras', images: ARMS },
        ].map((g) => (
          <div key={g.label} className="mt-10">
            <h3 className="font-sans text-base font-semibold text-ink">{g.label} <span className="font-normal text-ink/50">· {g.images.length} photos</span></h3>
            <div className="-mx-5 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 no-scrollbar lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
              {g.images.slice(0, 4).map((src, i) => (
                <button key={src} type="button" onClick={() => open(g.images, g.label, i)}
                  className="snap-start shrink-0 w-[72%] sm:w-[44%] lg:w-auto overflow-hidden rounded-2xl bg-rose-50 ring-1 ring-rose-100">
                  <img src={src} alt={`${g.label} – avant / après liposuccion WAL, photo ${i + 1}`} loading="lazy" decoding="async"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                </button>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-6 text-sm text-ink/55">Photos de patientes publiées avec leur accord. Les résultats varient d’une personne à l’autre.</p>
      </section>

      {/* ───────── Doctor ───────── */}
      <section className="bg-mist">
        <div className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-center">
          <img
            src="/please use this folder/doctor photo in surgary.webp"
            alt="Le Dr Tawfik Sefrioui pendant une liposuccion WAL sous anesthésie locale"
            width="982"
            height="1280"
            loading="lazy"
            decoding="async"
            className="w-full max-w-md mx-auto rounded-3xl object-cover aspect-[4/5]"
          />
          <div>
            <span className="eyebrow-rule" />
            <h2 className="text-4xl lg:text-5xl">{t('doctorSectionTitle')}</h2>
            <p className="mt-2 text-rose-700 font-semibold">{t('doctorSpecialty')}</p>
            <div className="mt-6 space-y-5 text-ink/80 text-[17px] max-w-prose">
              <p>{t('doctorBio1')}</p>
              <p>{t('doctorBio4')}</p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 font-semibold text-rose-700">
              <li><Link href="/parcours" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700">Son parcours complet</Link></li>
              <li><Link href="/publications" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700">Publications et médias</Link></li>
              <li><Link href="/actualites" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700">Formations à l’international</Link></li>
              <li><Link href="/temoignages" className="underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700">Témoignages de patientes</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Patient journey (a real sequence) ───────── */}
      <section className="container mx-auto py-16 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow-rule" />
          <h2 className="text-4xl lg:text-5xl">Votre parcours au centre</h2>
          <p className="mt-4 text-lg text-ink/75">De la première question jusqu’au suivi, une seule équipe vous accompagne à Casablanca.</p>
        </div>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-rose-200 pt-6">
              <span className="font-serif text-5xl text-rose-300">{i + 1}</span>
              <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
              <p className="mt-2 text-[15px] text-ink/75">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
          <div className="max-w-prose">
            <h3 className="font-serif text-3xl">Le cabinet en vidéo</h3>
            <p className="mt-3 text-ink/75">Visite du centre et du bloc opératoire où sont réalisées les interventions, au cœur du quartier Racine.</p>
            <Link href="/parcours-patient" className="mt-5 inline-block font-semibold text-rose-700 underline underline-offset-4 decoration-rose-300">Le parcours patiente en détail</Link>
          </div>
          <VideoPlayer src="/videos/cabinet.mp4" poster="/videos/cabinet.webp" title="Visite du cabinet" className="w-full max-w-[320px] mx-auto" />
        </div>
      </section>

      {/* ───────── Guide teaser (internal links to in-depth articles) ───────── */}
      <section className="container mx-auto py-16 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow-rule" />
            <h2 className="text-4xl lg:text-5xl">Le guide du lipœdème</h2>
            <p className="mt-4 text-lg text-ink/75">Les réponses du Dr Sefrioui aux questions que vous vous posez.</p>
          </div>
          <Link href="/guide" className="btn-ghost self-start lg:self-auto">Tout le guide</Link>
        </div>
        <ul className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 no-scrollbar lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {GUIDE.slice(0, 3).map((g) => (
            <li key={g.slug} className="snap-start shrink-0 w-[80%] sm:w-[46%] lg:w-auto">
              <Link href={`/guide/${g.slug}`} className="flex h-full flex-col rounded-3xl bg-mist p-6 ring-1 ring-rose-100 active:scale-[0.99] transition">
                <span className="font-serif text-2xl leading-snug text-ink">{g.title}</span>
                <span className="mt-3 text-[15px] leading-relaxed text-ink/70">{g.description}</span>
                <span className="mt-auto pt-5 text-sm font-semibold text-rose-700">Lire l’article</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────── FAQ (also emitted as FAQPage schema) ───────── */}
      <section className="bg-mist">
        <div className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="eyebrow-rule" />
            <h2 className="text-4xl lg:text-5xl">Questions fréquentes sur le lipœdème</h2>
            <p className="mt-4 text-ink/75">Une autre question ? Écrivez-nous sur WhatsApp, l’équipe vous répond.</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6"><WhatsAppIcon /> Poser ma question</a>
          </div>
          <div className="divide-y divide-rose-200 border-y border-rose-200">
            {homeFaq.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q}>
                  <h3 className="font-sans">
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left text-[17px] font-semibold text-ink">
                      {f.q}
                      <ChevronDown size={20} className={`mt-0.5 shrink-0 text-rose-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                  </h3>
                  {/* Kept in the DOM (hidden) so crawlers read every answer */}
                  <div hidden={!isOpen} className="pb-6 pr-8 text-ink/80">
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Local block ───────── */}
      <section className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <span className="eyebrow-rule" />
          <h2 className="text-4xl lg:text-5xl">Le centre du lipœdème à Casablanca</h2>
          <p className="mt-4 max-w-prose text-lg text-ink/75">
            Situé dans le quartier Racine, le centre accueille des patientes de Casablanca, de tout le Maroc — Rabat, Marrakech, Tanger, Fès, Agadir — et de l’étranger.
          </p>
          <address className="not-italic mt-8 space-y-4 text-[17px]">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-rose-700">
              <MapPin className="mt-1 shrink-0 text-rose-600" size={20} />
              <span>{SITE.address.street}, {SITE.address.district}<br />{SITE.address.postalCode} {SITE.address.city}, Maroc</span>
            </a>
            <a href={`tel:${SITE.phone.e164}`} className="flex gap-3 hover:text-rose-700">
              <Phone className="mt-1 shrink-0 text-rose-600" size={20} /> {SITE.phone.display}
            </a>
            <p className="flex gap-3">
              <Clock className="mt-1 shrink-0 text-rose-600" size={20} />
              <span>Lundi – vendredi 9h – 18h · samedi 9h – 13h</span>
            </p>
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">{t('makeAppointment')}</Link>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Navigation size={16} /> Itinéraire</a>
          </div>
        </div>
        <img
          src="/2028/1.webp"
          alt="Bloc opératoire du Centre Lipœdème Maroc à Casablanca"
          width="982"
          height="1280"
          loading="lazy"
          decoding="async"
          className="w-full max-w-md mx-auto aspect-square object-cover rounded-[28px]"
        />
      </section>

      {gallery && (
        <Lightbox
          images={gallery.images}
          index={gallery.index}
          label={gallery.label}
          onIndex={(index) => setGallery({ ...gallery, index })}
          onClose={() => setGallery(null)}
        />
      )}
    </>
  );
}
