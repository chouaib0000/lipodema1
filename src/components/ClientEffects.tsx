'use client';

import { usePath } from './usePath';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trackContactClicks } from '../analytics';

/** Keeps <html lang> in sync and wires analytics click tracking once. */
export default function ClientEffects() {
  const pathname = usePath();
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = pathname === '/ar' ? 'ar-MA' : pathname === '/en' ? 'en' : language === 'fr' ? 'fr-MA' : language;
  }, [pathname, language]);

  useEffect(() => trackContactClicks(), []);

  return null;
}
