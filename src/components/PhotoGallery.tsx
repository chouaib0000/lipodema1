'use client';

import { useState } from 'react';
import Lightbox from './Lightbox';

/**
 * Photo strip that swipes sideways on phones (like an app carousel) and becomes a grid
 * on desktop. Tapping a photo opens the full-screen viewer.
 */
export default function PhotoGallery({
  images,
  label,
  ratio = 'aspect-[4/5]',
  fit = 'object-cover',
  limit,
}: {
  images: string[];
  label: string;
  ratio?: string;
  fit?: string;
  limit?: number;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const shown = limit ? images.slice(0, limit) : images;

  return (
    <>
      <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {shown.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className="snap-start shrink-0 w-[70%] sm:w-auto overflow-hidden rounded-2xl bg-rose-50 ring-1 ring-rose-100 active:scale-[0.98] transition-transform"
          >
            <img src={src} alt={`${label} – photo ${i + 1}`} loading="lazy" decoding="async" className={`${ratio} w-full ${fit}`} />
          </button>
        ))}
      </div>
      {limit && images.length > limit && (
        <button type="button" onClick={() => setIndex(limit)} className="mt-4 text-sm font-semibold text-rose-700 underline underline-offset-4">
          Voir les {images.length} photos
        </button>
      )}
      {index !== null && (
        <Lightbox images={images} index={index} label={label} onIndex={setIndex} onClose={() => setIndex(null)} />
      )}
    </>
  );
}
