'use client';

import { usePath } from './usePath';
import { Phone, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { SITE, whatsappLink } from '../config/site';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35M12.05 21.79a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26 9.9 9.9 0 0 1 9.89-9.88 9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99 9.9 9.9 0 0 1-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.41Z" />
  </svg>
);

/** Thumb-reachable contact bar for phones, above the iPhone home indicator. */
export default function MobileActionBar() {
  const ar = usePath() === '/ar';
  const L = ar
    ? { call: 'اتصال', rdv: 'موعد', wa: 'السلام عليكم، أود الحصول على معلومات حول علاج الوذمة الشحمية.', font: ' font-arabic text-[13px]' }
    : { call: 'Appeler', rdv: 'Rendez-vous', wa: undefined, font: '' };
  return (
    <div
      className="xl:hidden fixed inset-x-0 bottom-0 z-40 border-t border-rose-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2 px-3 py-2.5" style={{ paddingLeft: 'max(0.75rem, env(safe-area-inset-left))', paddingRight: 'max(0.75rem, env(safe-area-inset-right))' }}>
        <a href={`tel:${SITE.phone.e164}`} className={`flex h-12 flex-col items-center justify-center rounded-2xl bg-rose-50 text-rose-700 text-[12px] font-semibold${L.font}`}>
          <Phone size={19} aria-hidden="true" />
          {L.call}
        </a>
        <a href={whatsappLink(L.wa)} target="_blank" rel="noopener noreferrer" className="flex h-12 flex-col items-center justify-center rounded-2xl bg-[#1FA855] text-white text-[12px] font-semibold">
          <WhatsAppIcon />
          WhatsApp
        </a>
        <Link href="/contact" className={`flex h-12 flex-col items-center justify-center rounded-2xl bg-rose-600 text-white text-[12px] font-semibold${L.font}`}>
          <CalendarDays size={19} aria-hidden="true" />
          {L.rdv}
        </Link>
      </div>
    </div>
  );
}

export { WhatsAppIcon };
