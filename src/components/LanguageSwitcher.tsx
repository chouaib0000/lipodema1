'use client';

import Link from 'next/link';
import { usePath } from './usePath';
import { getRoute } from '../seo/routes';
import { langFromPath, LANG_HOME, type SiteLang } from '../i18n/chrome';

const LANGS: { code: SiteLang; label: string; name: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'عربي', name: 'العربية' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
];

/**
 * Each language is a real, indexable page (no half-translated pages): the button opens
 * the same page in that language when it exists, otherwise that language's home page.
 */
export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const path = usePath();
  const current = langFromPath(path);
  const alternates = getRoute(path).alternates ?? [];
  const dark = variant === 'dark';

  return (
    <div className={`inline-flex items-center rounded-full p-0.5 ${dark ? 'bg-white/10' : 'bg-rose-50'}`} role="group" aria-label="Langue / اللغة / Language">
      {LANGS.map((l) => {
        const active = current === l.code;
        const href = alternates.find((a) => a.hreflang === l.code)?.path ?? LANG_HOME[l.code];
        return (
          <Link
            key={l.code}
            href={href === '/' ? '/' : `${href}/`}
            lang={l.code}
            hrefLang={l.code}
            title={l.name}
            aria-current={active ? 'page' : undefined}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors ${l.code === 'ar' ? 'font-arabic text-[13px]' : ''} ${
              active
                ? dark ? 'bg-white text-plum-900' : 'bg-rose-600 text-white'
                : dark ? 'text-plum-100 hover:text-white' : 'text-ink/70 hover:text-rose-700'
            } ${dark ? '' : 'min-h-[36px] px-4'}`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
