'use client';

import { usePath } from './usePath';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { SITE, mapsLink, whatsappLink } from '../config/site';
import { CHROME, LANG_HOME, langFromPath } from '../i18n/chrome';

type Item = { to: string; key: string };
type Group = { key: string; items: Item[] };

const GROUPS: Group[] = [
  { key: 'lipoedema', items: [
    { to: '/maladie', key: 'lipoedemaDiseases' },
    { to: '/diagnostic', key: 'diagnostic' },
    { to: '/traitement', key: 'treatment' },
    { to: '/wal', key: 'walLiposuction' },
  ] },
  { key: 'drTawfik', items: [
    { to: '/parcours', key: 'journey' },
    { to: '/publications', key: 'publications' },
    { to: '/resultats', key: 'results' },
  ] },
  { key: 'center', items: [
    { to: '/clinique', key: 'clinic' },
    { to: '/services', key: 'services' },
    { to: '/temoignages', key: 'testimonials' },
  ] },
];

const SINGLE: Item[] = [
  { to: '/parcours-patient', key: 'patientJourney' },
  { to: '/guide', key: 'guide' },
  { to: '/actualites', key: 'news' },
];

function Brand({ home = '/' }: { home?: string }) {
  return (
    <Link href={home} className="flex items-center gap-3 shrink-0" aria-label="Centre Lipœdème Maroc – accueil">
      <img src={SITE.logo} alt="" width="56" height="56" className="h-11 w-11 xl:h-14 xl:w-14 object-contain" />
      <span className="leading-tight">
        <span className="block font-serif text-[19px] xl:text-[22px] font-semibold text-ink">Lipœdème Maroc</span>
        <span className="block text-[11px] xl:text-xs text-rose-700 font-medium">Dr Tawfik Sefrioui · Casablanca</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePath();
  const { t } = useLanguage();
  const lang = langFromPath(pathname);
  const local = lang === 'fr' ? null : CHROME[lang];

  // Close the mobile menu when the page changes (state adjusted during render, no effect needed)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setSection(null);
  }

  useEffect(() => {
    // App-like behaviour on phones: the bar slides away while reading down, comes back on scroll up.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 140);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const groupActive = (g: Group) => g.items.some((i) => i.to === pathname);

  return (
    <>
    <header className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75 pt-[env(safe-area-inset-top)] transition-[transform,box-shadow] duration-300 ${hidden && !open ? '-translate-y-full xl:translate-y-0' : 'translate-y-0'} ${scrolled ? 'shadow-[0_1px_0_rgba(46,16,24,0.08),0_8px_24px_-16px_rgba(46,16,24,0.3)]' : 'border-b border-rose-100'}`}>
      {/* Desktop info bar: local signals (address + phone) visible on every page */}
      <div className="hidden xl:block bg-plum-900 text-plum-100 text-[13px]">
        <div className="container mx-auto flex h-9 items-center justify-between gap-6">
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <MapPin size={14} aria-hidden="true" />
            {SITE.address.street}, {SITE.address.district} – {SITE.address.city}
          </a>
          <div className="flex items-center gap-6">
            <span dir={local?.dir}>{local ? local.hours.join(' · ') : 'Lun–Ven 9h–18h · Sam 9h–13h'}</span>
            <a href={`tel:${SITE.phone.e164}`} className="flex items-center gap-2 font-semibold text-white">
              <Phone size={14} aria-hidden="true" /> {SITE.phone.display}
            </a>
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 xl:h-[76px] items-center justify-between gap-4">
        <Brand home={LANG_HOME[lang]} />

        <nav className="hidden xl:flex items-center gap-0.5 text-[14px] font-medium" aria-label="Navigation principale">
          {local ? (
            <div dir={local.dir} className={`flex items-center gap-0.5 ${lang === 'ar' ? 'font-arabic text-[15px]' : ''}`}>
              {local.nav.map((i) => (
                <NavLink key={i.href} href={i.href} end className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'text-rose-700' : 'text-ink hover:text-rose-700'}`}>
                  {i.label}
                </NavLink>
              ))}
              <a href={whatsappLink(local.waMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary ms-3 !py-2.5 !min-h-0 text-sm">{local.bookCta}</a>
            </div>
          ) : (<>
          <NavLink href="/" end className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'text-rose-700' : 'text-ink hover:text-rose-700'}`}>
            {t('home')}
          </NavLink>
          {GROUPS.map((g) => (
            <div key={g.key} className="relative group">
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-full ${groupActive(g) ? 'text-rose-700' : 'text-ink hover:text-rose-700'}`}
                aria-haspopup="true"
              >
                {t(g.key)}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
              </button>
              <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition absolute left-0 top-full pt-2">
                <ul className="w-64 rounded-2xl bg-white p-2 shadow-[0_20px_50px_-20px_rgba(46,16,24,0.35)] ring-1 ring-rose-100">
                  {g.items.map((i) => (
                    <li key={i.to}>
                      <NavLink href={i.to} className={({ isActive }) => `block rounded-xl px-4 py-2.5 ${isActive ? 'bg-rose-50 text-rose-700' : 'text-ink hover:bg-rose-50'}`}>
                        {t(i.key)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {SINGLE.map((i) => (
            <NavLink key={i.to} href={i.to} className={({ isActive }) => `px-3 py-2 rounded-full ${isActive ? 'text-rose-700' : 'text-ink hover:text-rose-700'}`}>
              {t(i.key)}
            </NavLink>
          ))}
          <Link href="/contact" className="btn-primary ml-3 !py-2.5 !min-h-0 text-sm">
            Prendre rendez-vous
          </Link>
          </>)}
        </nav>

        <div className="flex items-center gap-1 xl:hidden">
          <a href={`tel:${SITE.phone.e164}`} className="grid h-11 w-11 place-items-center rounded-full text-rose-700" aria-label={`Appeler le ${SITE.phone.display}`}>
            <Phone size={21} />
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? (local?.menuClose ?? 'Fermer le menu') : (local?.menuOpen ?? 'Ouvrir le menu')}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile drawer */}
      <div
        id="menu-mobile"
        className={`xl:hidden fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-[45] bg-white overflow-y-auto overscroll-contain transition-[opacity,visibility] duration-200 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
        style={{ paddingBottom: 'calc(96px + env(safe-area-inset-bottom))' }}
      >
        {local ? (
          <nav dir={local.dir} className={`container mx-auto pt-2 ${lang === 'ar' ? 'font-arabic' : ''}`} aria-label="Menu">
            {local.nav.map((i) => (
              <NavLink key={i.href} href={i.href} end className={`flex items-center min-h-[56px] border-b border-rose-100 text-2xl text-ink ${lang === 'ar' ? 'font-bold text-xl' : 'font-serif'}`}>
                {i.label}
              </NavLink>
            ))}
            <div className="mt-8 grid gap-3">
              <a href={`tel:${SITE.phone.e164}`} className="btn-primary w-full"><Phone size={18} /> {local.call} <span dir="ltr">{SITE.phone.display}</span></a>
              <a href={whatsappLink(local.waMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">{local.whatsapp}</a>
            </div>
            <div className="mt-6" dir="ltr"><LanguageSwitcher /></div>
          </nav>
        ) : (
        <nav className="container mx-auto pt-2" aria-label="Menu mobile">
          <NavLink href="/" end className="flex items-center min-h-[56px] border-b border-rose-100 font-serif text-2xl text-ink">
            {t('home')}
          </NavLink>
          {GROUPS.map((g) => {
            const expanded = section === g.key;
            return (
              <div key={g.key} className="border-b border-rose-100">
                <button
                  type="button"
                  className="flex w-full items-center justify-between min-h-[56px] font-serif text-2xl text-ink"
                  onClick={() => setSection(expanded ? null : g.key)}
                  aria-expanded={expanded}
                >
                  {t(g.key)}
                  <ChevronDown size={20} className={`text-rose-600 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {expanded && (
                  <ul className="pb-3">
                    {g.items.map((i) => (
                      <li key={i.to}>
                        <NavLink href={i.to} className={({ isActive }) => `flex items-center min-h-[46px] pl-4 border-l-2 ${isActive ? 'border-rose-500 text-rose-700' : 'border-rose-100 text-ink/80'}`}>
                          {t(i.key)}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          {SINGLE.map((i) => (
            <NavLink key={i.to} href={i.to} className="flex items-center min-h-[56px] border-b border-rose-100 font-serif text-2xl text-ink">
              {t(i.key)}
            </NavLink>
          ))}
          <NavLink href="/contact" className="flex items-center min-h-[56px] border-b border-rose-100 font-serif text-2xl text-ink">
            {t('contact')}
          </NavLink>

          <div className="mt-8 grid gap-3">
            <a href={`tel:${SITE.phone.e164}`} className="btn-primary w-full"><Phone size={18} /> Appeler {SITE.phone.display}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">Écrire sur WhatsApp</a>
          </div>
          <p className="mt-6 text-sm text-ink/70">
            {SITE.address.street}, {SITE.address.district}, {SITE.address.city}
          </p>
          <div className="mt-6"><LanguageSwitcher /></div>
        </nav>
        )}
      </div>
    </>
  );
}
