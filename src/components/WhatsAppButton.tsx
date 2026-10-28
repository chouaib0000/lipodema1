'use client';

import { useState, useEffect } from 'react';
import { whatsappLink } from '../config/site';
import { WhatsAppIcon } from './MobileActionBar';

/** Desktop-only floating WhatsApp button (phones get the bottom action bar instead). */
export default function WhatsAppButton() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    const onState = (event: Event) => setChatbotOpen((event as CustomEvent).detail.isOpen);
    window.addEventListener('chatbot-state', onState);
    return () => window.removeEventListener('chatbot-state', onState);
  }, []);

  if (chatbotOpen) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden xl:flex fixed left-6 bottom-6 z-40 h-14 items-center gap-2 rounded-full bg-[#1FA855] pl-4 pr-5 text-white font-semibold shadow-[0_12px_30px_-10px_rgba(31,168,85,0.7)] hover:bg-[#178a45] transition-colors"
      aria-label="Écrire au centre sur WhatsApp"
    >
      <span className="scale-125"><WhatsAppIcon /></span>
      WhatsApp
    </a>
  );
}
