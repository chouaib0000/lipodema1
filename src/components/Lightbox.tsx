'use client';

import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
  index: number;
  label: string;
  onIndex: (i: number) => void;
  onClose: () => void;
}

/** Full-screen photo viewer: swipe on phones, arrow keys / Esc on desktop. */
export default function Lightbox({ images, index, label, onIndex, onClose }: Props) {
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const next = () => onIndex((index + 1) % images.length);
  const prev = () => onIndex((index - 1 + images.length) % images.length);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  });

  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 text-white" style={{ paddingTop: 'max(12px, env(safe-area-inset-top))' }}>
        <span className="text-sm text-white/70">{index + 1} / {images.length}</span>
        <button ref={closeRef} type="button" onClick={onClose} className="grid h-12 w-12 place-items-center rounded-full hover:bg-white/10" aria-label="Fermer">
          <X size={28} />
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-2 pb-4 min-h-0">
        <img src={images[index]} alt={`${label} – photo ${index + 1}`} className="max-h-full max-w-full object-contain select-none" draggable={false} />
        <button type="button" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Photo précédente">
          <ChevronLeft size={28} />
        </button>
        <button type="button" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Photo suivante">
          <ChevronRight size={28} />
        </button>
      </div>
      <div style={{ height: 'env(safe-area-inset-bottom)' }} />
    </div>
  );
}
