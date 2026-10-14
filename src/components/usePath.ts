'use client';

import { usePathname } from 'next/navigation';

/** Current path without trailing slash ('/maladie/' → '/maladie'), '/' for home. */
export function usePath() {
  const p = usePathname() || '/';
  return p.length > 1 ? p.replace(/\/+$/, '') : p;
}
