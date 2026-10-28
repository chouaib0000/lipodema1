'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
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

  // The site no longer translates French pages on the fly: each language has its own pages.


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
