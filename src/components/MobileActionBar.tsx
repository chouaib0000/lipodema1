'use client';

import Link from 'next/link';
import { Home, HeartPulse, Images, CalendarDays } from 'lucide-react';
import { usePath } from './usePath';
import { whatsappLink } from '../config/site';
import { CHROME, LANG_HOME, langFromPath } from '../i18n/chrome';

const WhatsAppIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35M12.05 21.79a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26 9.9 9.9 0 0 1 9.89-9.88 9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99 9.9 9.9 0 0 1-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.41Z" />
  </svg>
);

/**
 * App-style bottom tab bar for phones and tablets: the main sections are one thumb away,
 * with WhatsApp as the raised centre action. Sits above the iPhone home indicator.
 */
export default function MobileActionBar() {
  const path = usePath();
  const lang = langFromPath(path);
  const ar = lang === 'ar';
  const local = lang === 'fr' ? null : CHROME[lang];
  const home = LANG_HOME[lang];

  const tabs = [
    { href: home, label: local?.home ?? 'Accueil', Icon: Home, match: (p: string) => p === home },
    local
      ? { href: local.disease.href, label: local.disease.label, Icon: HeartPulse, match: (p: string) => p === local.disease.href && p !== home }
      : { href: '/maladie', label: 'Lipœdème', Icon: HeartPulse, match: (p: string) => ['/maladie', '/diagnostic', '/traitement', '/wal'].includes(p) },
    null,
    { href: '/resultats', label: local?.results ?? 'Résultats', Icon: Images, match: (p: string) => ['/resultats', '/wal-results', '/temoignages'].includes(p) },
    { href: '/contact', label: local?.appointment ?? 'Rendez-vous', Icon: CalendarDays, match: (p: string) => p === '/contact' },
  ];

  return (
    <nav
      aria-label="Navigation rapide"
      className="xl:hidden fixed inset-x-0 bottom-0 z-40 border-t border-rose-100/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className={`mx-auto grid max-w-xl grid-cols-5 items-end px-2 ${ar ? 'font-arabic' : ''}`} style={{ paddingLeft: 'max(0.5rem, env(safe-area-inset-left))', paddingRight: 'max(0.5rem, env(safe-area-inset-right))' }}>
        {tabs.map((t, i) =>
          t === null ? (
            <li key="wa" className="flex justify-center">
              <a
                href={whatsappLink(local?.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="-mt-5 mb-1.5 grid h-14 w-14 place-items-center rounded-full bg-[#1FA855] text-white shadow-[0_10px_24px_-8px_rgba(31,168,85,0.75)] ring-4 ring-white active:scale-95 transition-transform"
              >
                <WhatsAppIcon className="h-7 w-7" />
              </a>
            </li>
          ) : (
            <li key={i}>
              <Link
                href={t.href}
                aria-current={t.match(path) ? 'page' : undefined}
                className={`flex h-[58px] flex-col items-center justify-center gap-1 text-[11px] font-semibold transition-colors active:scale-95 ${t.match(path) ? 'text-rose-700' : 'text-ink/55'}`}
              >
                <t.Icon size={22} strokeWidth={t.match(path) ? 2.4 : 1.8} aria-hidden="true" />
                {t.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export { WhatsAppIcon };
