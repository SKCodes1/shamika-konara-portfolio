import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  if (!images || images.length === 0) {
    return (
      <div className="h-48 flex items-center justify-center text-sm text-muted-foreground">
        No images available
      </div>
    );
  }

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  /* ---------- Swipe Handlers ---------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // minimum swipe distance

    if (distance > swipeThreshold) next(); // swipe left
    if (distance < -swipeThreshold) prev(); // swipe right

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative h-48 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Arrows (desktop) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white hover:bg-black/60"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white hover:bg-black/60"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === current ? "bg-primary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
