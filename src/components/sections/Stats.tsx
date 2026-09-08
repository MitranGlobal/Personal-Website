'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;

        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="goldleaf font-display text-[clamp(3rem,7vw,5rem)] font-semibold tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-ink py-section" aria-label="By the numbers">
      <div className="shell grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="border-l border-gold/25 pl-6">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-3 max-w-[18ch] font-sans text-[0.9rem] leading-snug text-parchment/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
