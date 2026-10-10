'use client';

import dynamic from 'next/dynamic';

// The chatbot is only shown on large screens and is not needed for the first paint:
// load its code after the page is interactive.
const Chatbot = dynamic(() => import('./Chatbot'), { ssr: false });

export default function LazyChatbot() {
  return <Chatbot />;
}
