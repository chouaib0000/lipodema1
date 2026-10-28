'use client';

import { usePath } from './usePath';
import { useEffect } from 'react';
import { trackContactClicks } from '../analytics';
import { langFromPath } from '../i18n/chrome';

/** Keeps <html lang> in sync and wires analytics click tracking once. */
export default function ClientEffects() {
  const pathname = usePath();

  useEffect(() => {
    const l = langFromPath(pathname);
    document.documentElement.lang = l === 'ar' ? 'ar-MA' : l === 'fr' ? 'fr-MA' : l;
    document.documentElement.dir = 'ltr';
  }, [pathname]);

  useEffect(() => trackContactClicks(), []);

  return null;
}
