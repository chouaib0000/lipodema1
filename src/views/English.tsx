'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, MapPin, Phone, Clock, Plane } from 'lucide-react';
import { SITE, mapsLink, whatsappLink } from '../config/site';
import { enFaq } from '../seo/faq';
import { WhatsAppIcon } from '../components/MobileActionBar';

const WA_EN = 'Hello, I would like information about lipedema treatment in Casablanca.';

const SYMPTOMS = [
  'Symmetrical enlargement of the legs or arms, while the feet and hands stay slim',
  'Pain, heaviness and tenderness when the skin is pressed',
  'Bruises that appear easily, without a real knock',
  'Fat that does not go away with diet or exercise',
  'Symptoms that start or worsen at puberty, after pregnancy or at menopause',
  'A mother, sister or aunt with the same body shape',
];

const BENEFITS = [
  { t: 'Local anaesthesia', d: 'You stay awake and comfortable during the procedure, without the risks of general anaesthesia.' },
  { t: 'Water jet and micro-cannulas', d: 'A gentle pulsed water jet loosens the fat, which is removed through micro-cannulas, sparing the lymphatic vessels.' },
  { t: 'Less pain, easier movement', d: 'Removing lipedema fat often relieves heaviness and pain and makes walking easier.' },
  { t: 'Walking the next day', d: 'Compression garment and post-operative drainage according to the centre’s protocol, with regular follow-up.' },
];

const STEPS = [
  { t: 'First contact', d: 'By phone or WhatsApp: your questions, the areas concerned and photos if you wish, for a first opinion.' },
  { t: 'Consultation in Casablanca', d: 'Clinical examination by Dr Sefrioui, confirmation of the diagnosis, stage and treatment plan, with a detailed quote.' },
  { t: 'Procedure', d: 'WAL Bodyjet 3D liposuction under local anaesthesia at the centre in Casablanca.' },
  { t: 'Follow-up', d: 'Compression, drainage and check-ups. The team stays available on WhatsApp after you return home.' },
];

export default function English() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div lang="en">
      <section className="bg-mist">
        <div className="container mx-auto grid gap-10 pt-10 pb-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-700">Dedicated to lipedema since 2015 · Casablanca, Morocco</p>
            <h1 className="mt-4 text-[40px] leading-[1.05] sm:text-5xl lg:text-6xl">
              Lipedema surgery in Morocco
            </h1>
            <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-ink/80">
              Dr Tawfik Sefrioui treats lipedema of the legs and arms with WAL Bodyjet 3D water-assisted liposuction, using micro-cannulas under local anaesthesia, at his centre in Casablanca. Patients come from all over Morocco, Europe and Africa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(WA_EN)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon /> Message us on WhatsApp
              </a>
              <a href={`tel:${SITE.phone.e164}`} className="btn-ghost">
                <Phone size={18} /> +212 5 22 39 86 89
              </a>
            </div>
            <p className="mt-6 text-sm text-ink/60">
              <Link href="/" lang="fr" className="underline underline-offset-4">Version française</Link>
              {' · '}
              <Link href="/ar" lang="ar" className="underline underline-offset-4 font-arabic">النسخة العربية</Link>
            </p>
          </div>
          <figure className="relative mx-auto w-full max-w-[400px]">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-rose-100 ring-1 ring-rose-200">
              <img src={SITE.heroImage} alt="Dr Tawfik Sefrioui, lipedema surgeon in Casablanca, Morocco"
                width="800" height="930" fetchPriority="high" className="h-full w-full object-cover object-[50%_30%]" />
            </div>
            <figcaption className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_-18px_rgba(46,16,24,0.35)]">
              <span className="block font-serif text-2xl text-ink">Dr Tawfik Sefrioui</span>
              <span className="block text-sm text-ink/70">Trained at George Washington University (USA) · WAL pioneer in Morocco</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl lg:text-4xl">Is it really just weight?</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            Lipedema is a chronic disease of the fat tissue in women. It is often mistaken for obesity or cellulite, which delays diagnosis by years. These signs should lead you to see a doctor who knows the disease:
          </p>
          <ul className="mt-8 space-y-4">
            {SYMPTOMS.map((s) => (
              <li key={s} className="flex gap-3 text-[17px] leading-relaxed">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-700"><Check size={14} strokeWidth={3} /></span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl">WAL liposuction under local anaesthesia</h2>
          <ul className="mt-6">
            {BENEFITS.map((b) => (
              <li key={b.t} className="border-t border-rose-200 py-5">
                <h3 className="font-serif text-2xl">{b.t}</h3>
                <p className="mt-1 text-[17px] leading-relaxed text-ink/75">{b.d}</p>
              </li>
            ))}
          </ul>
          <Link href="/resultats" lang="fr" className="mt-4 inline-block font-semibold text-rose-700 underline underline-offset-4">
            See before / after results
          </Link>
        </div>
      </section>

      <section className="bg-rose-950 text-rose-50">
        <div className="container mx-auto py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl text-white">Your treatment, step by step</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="border-t-2 border-white/20 pt-6">
                <span className="font-serif text-4xl text-rose-300">{i + 1}</span>
                <h3 className="mt-2 font-serif text-2xl text-white">{s.t}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-rose-100/80">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 flex items-start gap-3 max-w-2xl text-rose-100/90">
            <Plane className="mt-1 shrink-0 text-rose-300" size={20} aria-hidden="true" />
            Coming from abroad? Casablanca Mohammed V airport has direct flights from most European cities. The team helps you plan your stay; consultations are available in English, French, Arabic and Spanish.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 lg:py-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-3xl lg:text-4xl">Frequently asked questions</h2>
          <a href={whatsappLink(WA_EN)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6"><WhatsAppIcon /> Ask your question</a>
        </div>
        <div className="divide-y divide-rose-200 border-y border-rose-200">
          {enFaq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left font-serif text-xl text-ink">
                    {f.q}
                    <ChevronDown size={20} className={`mt-1 shrink-0 text-rose-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div hidden={!isOpen} className="pb-6 pr-8 text-[17px] leading-relaxed text-ink/80"><p>{f.a}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-mist">
        <div className="container mx-auto py-16 lg:py-20">
          <h2 className="text-3xl lg:text-4xl">The centre in Casablanca</h2>
          <address className="not-italic mt-8 grid gap-4 text-[17px] sm:grid-cols-3">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-rose-600" size={20} />
              <span>{SITE.address.street}, {SITE.address.district}<br />{SITE.address.postalCode} Casablanca, Morocco</span>
            </a>
            <a href={`tel:${SITE.phone.e164}`} className="flex gap-3">
              <Phone className="mt-1 shrink-0 text-rose-600" size={20} />
              <span>+212 5 22 39 86 89<br />WhatsApp {SITE.whatsapp.display}</span>
            </a>
            <p className="flex gap-3">
              <Clock className="mt-1 shrink-0 text-rose-600" size={20} />
              <span>Monday–Friday 9:00–18:00<br />Saturday 9:00–13:00</span>
            </p>
          </address>
        </div>
      </section>
    </div>
  );
}
