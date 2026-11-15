import { useEffect, useState, type RefObject } from 'react';

/** Horizontal rail controls; visible on touch devices and on hover/focus elsewhere. */
export function RailButtons({ rail }: { rail: RefObject<HTMLDivElement | null> }) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [rail]);

  const page = (dir: 1 | -1) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const base =
    'absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/85 text-2xl text-bone shadow-lg backdrop-blur transition hover:border-white/60 hover:text-white focus-visible:opacity-100 [@media(hover:hover)]:opacity-0 group-hover/rail:opacity-100';

  return (
    <>
      {canLeft && (
        <button type="button" aria-label="Scroll left" onClick={() => page(-1)} className={`${base} left-2`}>
          ‹
        </button>
      )}
      {canRight && (
        <button type="button" aria-label="Scroll right" onClick={() => page(1)} className={`${base} right-2`}>
          ›
        </button>
      )}
    </>
  );
}
