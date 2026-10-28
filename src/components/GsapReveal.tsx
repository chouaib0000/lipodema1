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
        // Home hero: soft entrance (the H1 and the photo stay visible for LCP; only secondary
        // lines slide in), a slow zoom-out of the portrait and a gentle parallax on scroll.
        const heroBits = gsap.utils.toArray<HTMLElement>('[data-hero]');
        if (heroBits.length) {
          gsap.from(heroBits, { y: 18, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.09, delay: 0.05 });
          gsap.from('[data-hero-photo] img', { scale: 1.08, duration: 1.6, ease: 'power2.out' });
          gsap.from('[data-hero-card]', { y: 24, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.6)', delay: 0.45 });
          gsap.to('[data-hero-photo] img', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '[data-hero-photo]', start: 'top top', end: 'bottom top', scrub: true } });
        }
        const fold = window.innerHeight;
        const targets = gsap.utils.toArray<HTMLElement>(SELECTOR).filter((el) => el.getBoundingClientRect().top > fold);
        if (!targets.length) return;
        gsap.set(targets, { autoAlpha: 0, y: 24 });
        ScrollTrigger.batch(targets, {
          start: 'top 92%',
          once: true,
          onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.07, overwrite: true }),
        });
        // Decorative rules under section titles draw themselves in
        gsap.utils.toArray<HTMLElement>('.eyebrow-rule').forEach((el) => {
          gsap.fromTo(el, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
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
