import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  imageNumber: number;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => setIsDragging(true);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] cursor-ew-resize select-none bg-gray-100"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        <div
          className="absolute inset-0 overflow-hidden bg-gray-100"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Avant traitement"
            className="absolute inset-0 w-full h-full object-contain bg-gray-100"
            draggable="false"
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden bg-gray-100"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img
            src={afterImage}
            alt="Après traitement"
            className="absolute inset-0 w-full h-full object-contain bg-gray-100"
            draggable="false"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-xl flex items-center justify-center rounded-full">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-gray-600"></div>
              <div className="w-0.5 h-4 bg-gray-600"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm px-4 py-2 text-xs font-light text-white tracking-wide">
          AVANT
        </div>
        <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm px-4 py-2 text-xs font-light text-white tracking-wide">
          APRÈS
        </div>
      </div>
    </div>
  );
}
