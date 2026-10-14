'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

/**
 * Lightweight video: only the poster image loads with the page (preload="none").
 * The file is requested when the visitor taps play, and starts streaming at once
 * (files are encoded with "fast start"). play() is called inside the tap itself so
 * iPhone Safari plays with sound on the first touch.
 */
export default function VideoPlayer({
  src,
  poster,
  title,
  vertical = true,
  className = '',
}: {
  src: string;
  poster: string;
  title: string;
  vertical?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => {
      /* if the browser refuses, the native controls stay available */
    });
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-ink ${vertical ? 'aspect-[9/16]' : 'aspect-video'} ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
        aria-label={title}
      />
      {!started && (
        <button type="button" onClick={start} className="group absolute inset-0 h-full w-full" aria-label={`Lire la vidéo : ${title}`}>
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-rose-700 shadow-xl transition-transform group-active:scale-95">
            <Play size={26} className="ml-1" fill="currentColor" />
          </span>
          <span className="absolute bottom-4 left-4 right-4 text-left text-[15px] font-semibold text-white">{title}</span>
        </button>
      )}
    </div>
  );
}
