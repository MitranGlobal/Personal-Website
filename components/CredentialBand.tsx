'use client';

import { useEffect, useRef } from 'react';
import { credentials } from '@/lib/content';

/* A slow horizontal band of what I am. It reacts to scrolling — pushing the
   page speeds the band up and briefly reverses it, which is the only place on
   the site where motion answers the scroll itself. */
export default function CredentialBand() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let offset = 0;
    let velocity = 0;
    let lastY = window.scrollY;
    let raf = 0;
    let width = track.scrollWidth / 2;

    const measure = () => {
      width = track.scrollWidth / 2;
    };
    measure();

    const onScroll = () => {
      velocity += (window.scrollY - lastY) * 0.08;
      lastY = window.scrollY;
    };

    const tick = () => {
      velocity *= 0.92;
      offset -= 0.42 + velocity;
      if (width > 0) {
        if (offset <= -width) offset += width;
        if (offset > 0) offset -= width;
      }
      track.style.transform = `translate3d(${offset}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  const run = [...credentials, ...credentials];

  return (
    <div className="relative overflow-hidden border-y border-mauve/20 bg-aubergine/40 py-5">
      <div ref={trackRef} className="flex w-max items-center gap-10 will-change-transform">
        {run.map((c, i) => (
          <span key={`${c}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-[1.05rem] text-chalk/80">{c}</span>
            <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
