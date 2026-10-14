'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'fr' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode}) {
  // Always start in French so the prerendered HTML (what Google indexes) and the
  // first client render match; a saved preference is applied right after mount.
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('language') as Language | null;
      // Applied after hydration on purpose so the prerendered (French) HTML matches the first render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved && saved !== 'fr' && saved in translations) setLanguage(saved);
    } catch { /* storage unavailable */ }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try { localStorage.setItem('language', lang); } catch { /* ignore */ }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
