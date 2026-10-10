import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const LANGS = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
] as const;

export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { language, setLanguage } = useLanguage();
  const dark = variant === 'dark';
  const { pathname } = useLocation();
  const onArabic = pathname === '/ar';
  const navigate = useNavigate();

  return (
    <div className={`inline-flex items-center rounded-full p-0.5 ${dark ? 'bg-white/10' : 'bg-rose-50'}`} role="group" aria-label="Langue">
      {LANGS.map((l) => {
        const active = !onArabic && language === l.code;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            title={l.name}
            aria-pressed={active}
            onClick={() => { setLanguage(l.code); if (onArabic) navigate('/'); }}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              active
                ? dark ? 'bg-white text-plum-900' : 'bg-rose-600 text-white'
                : dark ? 'text-plum-100 hover:text-white' : 'text-ink/70 hover:text-rose-700'
            } ${dark ? '' : 'min-h-[36px] px-4'}`}
          >
            {l.label}
          </button>
        );
      })}
      {/* Arabic is a separate, indexable page rather than a client-side translation */}
      <Link
        to="/ar"
        lang="ar"
        hrefLang="ar"
        title="العربية"
        aria-current={onArabic ? 'page' : undefined}
        className={`rounded-full px-3 py-1 text-xs font-semibold font-arabic transition-colors ${
          onArabic
            ? dark ? 'bg-white text-plum-900' : 'bg-rose-600 text-white'
            : dark ? 'text-plum-100 hover:text-white' : 'text-ink/70 hover:text-rose-700'
        } ${dark ? '' : 'min-h-[36px] px-4 inline-flex items-center'}`}
      >
        عربي
      </Link>
    </div>
  );
}
