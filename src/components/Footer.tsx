'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Youtube, Instagram, Facebook } from './SocialIcons';
import Link from 'next/link';
import { SITE, mapsLink, whatsappLink } from '../config/site';
import { usePath } from './usePath';
import { CHROME, langFromPath } from '../i18n/chrome';
import LanguageSwitcher from './LanguageSwitcher';

const LINKS = [
  { to: '/maladie', label: 'Qu’est-ce que le lipœdème ?' },
  { to: '/diagnostic', label: 'Diagnostic du lipœdème' },
  { to: '/traitement', label: 'Traitement du lipœdème au Maroc' },
  { to: '/wal', label: 'Liposuccion WAL Bodyjet 3D' },
  { to: '/resultats', label: 'Résultats avant / après' },
  { to: '/temoignages', label: 'Témoignages de patientes' },
  { to: '/guide', label: 'Guide du lipœdème' },
  { to: '/questions-frequentes', label: 'Questions fréquentes' },
  { to: '/lexique-lipoedeme', label: 'Lexique du lipœdème' },
  { to: '/guide/lipoedeme-ou-cellulite', label: 'Lipœdème ou cellulite ?' },
  { to: '/guide/prix-operation-lipoedeme-maroc', label: 'Prix d’une opération au Maroc' },
  { to: '/guide/quel-medecin-consulter-lipoedeme-maroc', label: 'Quel médecin consulter au Maroc ?' },
  { to: '/guide/liposuccion-wal-ou-classique', label: 'Liposuccion WAL ou classique ?' },
];

const ABOUT = [
  { to: '/parcours', label: 'Dr Tawfik Sefrioui' },
  { to: '/clinique', label: 'Le centre à Casablanca' },
  { to: '/parcours-patient', label: 'Parcours patiente' },
  { to: '/services', label: 'Séjour médical' },
  { to: '/publications', label: 'Publications' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact', label: 'Contact et accès' },
  { to: '/ar', label: 'النسخة العربية' },
  { to: '/en', label: 'English – Lipedema surgery Morocco' },
];

function LocalFooter({ lang }: { lang: 'ar' | 'en' | 'es' }) {
  const c = CHROME[lang];
  return (
    <footer className={`bg-plum-950 text-plum-100 ${lang === 'ar' ? 'font-arabic' : ''}`} dir={c.dir} lang={lang}>
      <div className="container mx-auto py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className={`text-2xl text-white ${lang === 'ar' ? 'font-bold' : 'font-serif'}`}>{lang === 'ar' ? 'مركز الوذمة الشحمية بالمغرب' : 'Centre Lipœdème Maroc'}</p>
            <p className="text-sm text-rose-300">{lang === 'ar' ? 'الدكتور توفيق الصفريوي' : 'Dr Tawfik Sefrioui'}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-plum-200">{c.tagline}</p>
          </div>
          <nav aria-label={c.pages}>
            <p className={`text-xl text-white mb-5 ${lang === 'ar' ? 'font-bold' : 'font-serif'}`}>{c.pages}</p>
            <ul className="space-y-3 text-sm">
              {c.nav.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
            <div className="mt-6" dir="ltr"><LanguageSwitcher variant="dark" /></div>
          </nav>
          <address className="not-italic text-sm space-y-4">
            <p className={`text-xl text-white ${lang === 'ar' ? 'font-bold' : 'font-serif'}`}>{c.find}</p>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
              <MapPin size={18} className="mt-0.5 shrink-0 text-rose-300" />
              {lang === 'ar'
                ? <span>5 شارع عبد اللطيف بنقدور، حي راسين<br />20250 الدار البيضاء، {c.country}</span>
                : <span>{SITE.address.street}<br />{SITE.address.district}, {SITE.address.postalCode} Casablanca<br />{c.country}</span>}
            </a>
            <a href={`tel:${SITE.phone.e164}`} className="flex gap-3 hover:text-white"><Phone size={18} className="shrink-0 text-rose-300" /> <span dir="ltr">{SITE.phone.display}</span></a>
            <a href={whatsappLink(c.waMessage)} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white"><Phone size={18} className="shrink-0 text-rose-300" /> WhatsApp <span dir="ltr">{SITE.whatsapp.display}</span></a>
            <div className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-rose-300" />
              <span>{c.hours.map((h) => <span key={h} className="block">{h}</span>)}<span className="block">{c.closed}</span></span>
            </div>
          </address>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-plum-300">
          <p>© {new Date().getFullYear()} Centre Lipœdème Maroc · {c.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const lang = langFromPath(usePath());
  if (lang !== 'fr') return <LocalFooter lang={lang} />;
  return (
    <footer className="bg-plum-950 text-plum-100">
      <div className="container mx-auto py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white">
                <img src={SITE.logo} alt="" width="48" height="48" loading="lazy" className="h-11 w-11 object-contain" />
              </span>
              <div>
                <p className="font-serif text-2xl text-white">Centre Lipœdème Maroc</p>
                <p className="text-sm text-rose-300">Dr Tawfik Sefrioui</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-plum-200">
              Centre dédié au traitement du lipœdème à Casablanca depuis 2015 : consultation spécialisée et liposuccion WAL Bodyjet 3D sous anesthésie locale. Patientes de tout le Maroc et de l’étranger.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { href: SITE.social.instagram, label: 'Instagram', Icon: Instagram },
                { href: SITE.social.facebook, label: 'Facebook', Icon: Facebook },
                { href: SITE.social.youtube, label: 'YouTube', Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Le lipœdème">
            <p className="font-serif text-xl text-white mb-5">Le lipœdème</p>
            <ul className="space-y-3 text-sm">
              {LINKS.map((l) => <li key={l.to}><Link href={l.to} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-label="Le centre">
            <p className="font-serif text-xl text-white mb-5">Le centre</p>
            <ul className="space-y-3 text-sm">
              {ABOUT.map((l) => <li key={l.to}><Link href={l.to} lang={l.to === '/ar' ? 'ar' : undefined} className={`hover:text-white ${l.to === '/ar' ? 'font-arabic text-[15px]' : ''}`}>{l.label}</Link></li>)}
            </ul>
          </nav>

          {/* NAP block – must match the Google Business Profile exactly */}
          <address className="not-italic text-sm space-y-4">
            <p className="font-serif text-xl text-white">Nous trouver</p>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
              <MapPin size={18} className="mt-0.5 shrink-0 text-rose-300" />
              <span>{SITE.address.street}<br />{SITE.address.district}, {SITE.address.postalCode} {SITE.address.city}<br />Maroc</span>
            </a>
            <a href={`tel:${SITE.phone.e164}`} className="flex gap-3 hover:text-white">
              <Phone size={18} className="shrink-0 text-rose-300" /> {SITE.phone.display}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
              <Phone size={18} className="shrink-0 text-rose-300" /> WhatsApp {SITE.whatsapp.display}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-white">
              <Mail size={18} className="shrink-0 text-rose-300" /> {SITE.email}
            </a>
            <div className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-rose-300" />
              <span>
                {SITE.hours.map((h) => <span key={h.label} className="block">{h.label} : {h.time}</span>)}
                <span className="block">{SITE.closedLabel}</span>
              </span>
            </div>
          </address>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs text-plum-300 flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Centre Lipœdème Maroc – Traitement du lipœdème à Casablanca</p>
          <p>Les informations de ce site ne remplacent pas une consultation médicale.</p>
        </div>
      </div>
    </footer>
  );
}
