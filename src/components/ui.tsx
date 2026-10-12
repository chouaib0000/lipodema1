import Link from 'next/link';
import type { ReactNode } from 'react';
import { Check, AlertTriangle, Info } from 'lucide-react';
import { whatsappLink } from '../config/site';
import { WhatsAppIcon } from './MobileActionBar';

/* Shared building blocks for every inner page, so the whole site reads as one
   consistent product: same rhythm, type scale, buttons and colours everywhere. */

type Tone = 'white' | 'mist' | 'dark';

const toneClass: Record<Tone, string> = {
  white: 'bg-white',
  mist: 'bg-mist',
  dark: 'bg-rose-950 text-rose-50',
};

export function Section({ tone = 'white', id, className = '', children }: { tone?: Tone; id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`${toneClass[tone]} ${className}`}>
      <div className="container mx-auto py-14 lg:py-24">{children}</div>
    </section>
  );
}

export function SectionHead({ title, intro, dark = false, center = false }: { title: ReactNode; intro?: ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`block h-px w-10 mb-5 ${dark ? 'bg-rose-300' : 'bg-rose-400'} ${center ? 'mx-auto' : ''}`} />
      <h2 className={`text-[32px] leading-[1.1] sm:text-4xl lg:text-5xl ${dark ? 'text-white' : ''}`}>{title}</h2>
      {intro && <p className={`mt-4 text-[17px] lg:text-lg ${dark ? 'text-rose-100/80' : 'text-ink/75'}`}>{intro}</p>}
    </div>
  );
}

export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-prose space-y-5 text-[17px] leading-[1.75] text-ink/80 ${className}`}>{children}</div>;
}

/** Top of every inner page: title, short intro, actions and an optional photo. */
export function PageHero({
  title,
  intro,
  image,
  imageAlt = '',
  imageClass = 'object-cover',
  actions = true,
  children,
}: {
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageClass?: string;
  actions?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="bg-mist border-b border-rose-100">
      <div className={`container mx-auto pt-8 pb-12 lg:py-20 grid gap-10 ${image ? 'lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16' : ''}`}>
        <div className="fade-in">
          <h1 className="text-[38px] leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="mt-5 max-w-[38rem] text-[17px] lg:text-lg leading-relaxed text-ink/75">{intro}</p>}
          {children}
          {/* On phones the bottom bar already offers Rendez-vous and WhatsApp */}
          {actions && (
            <div className="mt-8 hidden gap-3 sm:flex">
              <Link href="/contact" className="btn-primary">Prendre rendez-vous</Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <span className="text-[#1FA855]"><WhatsAppIcon /></span> Une question ? WhatsApp
              </a>
            </div>
          )}
        </div>
        {image && (
          <div className="overflow-hidden rounded-[28px] bg-rose-100 ring-1 ring-rose-200 aspect-[4/3] lg:aspect-[4/5]">
            <img src={image} alt={imageAlt} className={`h-full w-full ${imageClass}`} fetchPriority="high" />
          </div>
        )}
      </div>
    </section>
  );
}

export function Checklist({ items, dark = false, cols = 1 }: { items: ReactNode[]; dark?: boolean; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-4 ${cols === 2 ? 'sm:grid-cols-2 sm:gap-x-10' : ''}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[16px] leading-relaxed">
          <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${dark ? 'bg-white/10 text-rose-200' : 'bg-rose-100 text-rose-700'}`}>
            <Check size={14} strokeWidth={3} />
          </span>
          <span className={dark ? 'text-rose-50/90' : 'text-ink/85'}>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** For things that really happen in order (consultation → intervention → suivi). */
export function Steps({ items, dark = false }: { items: { title: string; text: ReactNode; points?: string[] }[]; dark?: boolean }) {
  return (
    <ol className="relative mt-10 grid gap-8 lg:grid-cols-2 lg:gap-x-14">
      {items.map((s, i) => (
        <li key={s.title} className="relative flex gap-5">
          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-serif text-xl ${dark ? 'bg-white/10 text-rose-200' : 'bg-rose-600 text-white'}`}>{i + 1}</span>
          <div className="pt-1">
            <h3 className={`text-2xl ${dark ? 'text-white' : ''}`}>{s.title}</h3>
            <div className={`mt-2 text-[16px] leading-relaxed ${dark ? 'text-rose-100/80' : 'text-ink/75'}`}>{s.text}</div>
            {s.points && (
              <ul className={`mt-3 space-y-1.5 text-[15px] ${dark ? 'text-rose-100/75' : 'text-ink/70'}`}>
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />{p}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Features that are NOT a sequence: separated by rules, no numbers. */
export function FeatureGrid({ items, dark = false, cols = 2 }: { items: { title: string; text: ReactNode }[]; dark?: boolean; cols?: 2 | 3 }) {
  return (
    <ul className={`mt-10 grid gap-x-10 sm:grid-cols-2 ${cols === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map((f) => (
        <li key={f.title} className={`border-t py-6 ${dark ? 'border-white/15' : 'border-rose-200'}`}>
          <h3 className={`text-2xl ${dark ? 'text-white' : ''}`}>{f.title}</h3>
          <p className={`mt-2 text-[16px] leading-relaxed ${dark ? 'text-rose-100/80' : 'text-ink/75'}`}>{f.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Callout({ tone = 'info', title, children }: { tone?: 'info' | 'warn'; title?: string; children: ReactNode }) {
  const Icon = tone === 'warn' ? AlertTriangle : Info;
  return (
    <div className={`flex gap-4 rounded-3xl p-6 ${tone === 'warn' ? 'bg-amber-50 text-amber-950' : 'bg-rose-50 text-ink'}`}>
      <Icon className={`mt-0.5 shrink-0 ${tone === 'warn' ? 'text-amber-600' : 'text-rose-600'}`} size={22} />
      <div className="text-[16px] leading-relaxed">
        {title && <p className="font-semibold mb-1">{title}</p>}
        {children}
      </div>
    </div>
  );
}

export function Figure({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full rounded-3xl ring-1 ring-rose-100" />
      {caption && <figcaption className="mt-3 text-sm text-ink/55">{caption}</figcaption>}
    </figure>
  );
}

/** Closing call to action on every page. */
export function CtaBand({ title = 'Parlons de votre cas', text = 'Consultation au centre de Casablanca, ou premier avis par WhatsApp avec quelques photos.', secondary }: { title?: string; text?: string; secondary?: { href: string; label: string } }) {
  return (
    <section className="bg-rose-950">
      <div className="container mx-auto py-14 lg:py-20 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="text-[32px] leading-tight sm:text-4xl lg:text-5xl text-white">{title}</h2>
          <p className="mt-4 max-w-xl text-[17px] text-rose-100/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row lg:justify-end">
          <Link href="/contact" className="btn bg-white text-rose-900 hover:bg-rose-50">Prendre rendez-vous</Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon /> WhatsApp</a>
          {secondary && <Link href={secondary.href} className="btn border border-white/25 text-white hover:bg-white/10">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-rose-700 underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700">
      {children}
    </Link>
  );
}

/** Accordion FAQ (native <details>, works without JavaScript). Pair with FAQPage schema on the route. */
export function FaqList({ items, title = 'Questions fréquentes' }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <SectionHead title={title} />
      <div className="divide-y divide-rose-200 border-y border-rose-200">
        {items.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-semibold text-ink">
              <h3 className="font-sans text-[17px] font-semibold">{f.q}</h3>
              <span className="mt-1 text-xl leading-none text-rose-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/80">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
