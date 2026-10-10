'use client';

import { useState } from 'react';

interface Props {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

/**
 * Before / after comparison. A native range input drives the split, so it works with a
 * finger on iPhone (horizontal drag) without blocking the page's vertical scrolling,
 * and with the keyboard (arrow keys) on desktop.
 */
export default function BeforeAfterSlider({ beforeImage, afterImage, label = 'Résultat' }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl bg-rose-50 ring-1 ring-rose-100 select-none">
      <img src={afterImage} alt={`${label} – après`} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-contain" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={beforeImage} alt={`${label} – avant`} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-contain bg-rose-50" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)]" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-rose-700 shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="m9 6-6 6 6 6M15 6l6 6-6 6" /></svg>
        </span>
      </div>

      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">Avant</span>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">Après</span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${label} : faire glisser pour comparer avant et après`}
        className="ba-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
