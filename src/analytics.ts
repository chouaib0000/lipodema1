// Sends a Google Analytics event when a visitor taps "call", "WhatsApp" or "e-mail",
// so you can see in GA4 which pages bring appointment requests.
// Calls and WhatsApp taps are also sent as `qualify_lead`, a key event in GA4.

import { SITE } from './config/site';

type Gtag = (...args: unknown[]) => void;

export function trackContactClicks() {
  const handler = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const w = window as unknown as { gtag?: Gtag; fbq?: Gtag; ttq?: { track: Gtag } };
      const gtag = w.gtag;
      if (!gtag) return;
      const page = window.location.pathname;
      const isLead = href.startsWith('tel:') || href.includes('wa.me/');
      if (isLead) {
        // Same lead signal for the ad platforms, when their tags are switched on
        const { googleAds, googleAdsLeadLabel } = SITE.tracking;
        if (googleAds && googleAdsLeadLabel) gtag('event', 'conversion', { send_to: `${googleAds}/${googleAdsLeadLabel}` });
        // `qualify_lead` is already a key event in this GA4 property → calls and WhatsApp
        // messages show up as conversions per page and per source (Google, ChatGPT…).
        gtag('event', 'qualify_lead', { method: href.startsWith('tel:') ? 'phone' : 'whatsapp', page_path: window.location.pathname });
        w.fbq?.('track', 'Contact');
        w.ttq?.track('Contact');
      }
      if (href.startsWith('tel:')) gtag('event', 'contact_phone', { page_path: page, link_url: href });
      else if (href.includes('wa.me/')) gtag('event', 'contact_whatsapp', { page_path: page });
      else if (href.startsWith('mailto:')) gtag('event', 'contact_email', { page_path: page });
      else if (href.includes('google.com/maps')) gtag('event', 'get_directions', { page_path: page });
    };
  document.addEventListener('click', handler, { capture: true, passive: true });
  return () => document.removeEventListener('click', handler, { capture: true });
}

// Page views on client-side navigation are already sent by GA4 "enhanced measurement"
// (page changes based on browser history events), so none are sent manually here.
