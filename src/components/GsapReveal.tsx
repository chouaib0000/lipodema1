'use client';

import { useEffect } from 'react';
import { usePath } from './usePath';

/**
 * Subtle scroll animations with GSAP + ScrollTrigger.
 * - Content stays in the HTML and visible without JavaScript (Google and AI crawlers see everything).
 * - Only elements below the fold are animated, so nothing above the fold flashes.
 * - GSAP is loaded after the page is interactive (separate chunk, no impact on first paint).
 * - Disabled for visitors who ask for reduced motion.
 */
const SELECTOR = [
  'main section h2',
  'main section ol > li',
  'main section ul.grid > li',
  'main figure',
  'main details',
  'main aside',
  'main table',
].join(',');

export default function GsapReveal() {
  const path = usePath();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const fold = window.innerHeight;
        const targets = gsap.utils.toArray<HTMLElement>(SELECTOR).filter((el) => el.getBoundingClientRect().top > fold);
        if (!targets.length) return;
        gsap.set(targets, { autoAlpha: 0, y: 24 });
        ScrollTrigger.batch(targets, {
          start: 'top 92%',
          once: true,
          onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.07, overwrite: true }),
        });
        // Safety net: never leave content hidden (e.g. print, anchor jumps)
        window.addEventListener('beforeprint', () => gsap.set(targets, { autoAlpha: 1, y: 0 }), { once: true });
      });
      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [path]);

  return null;
}
