import { site } from '@/lib/site';

/** Continuous credential ribbon — the reference site's "as seen in" band. */
export default function PressMarquee() {
  const row = [...site.press, ...site.press];

  return (
    <section className="border-y border-gold/15 bg-ink-soft py-7" aria-label="Recognition">
      <div className="relative overflow-hidden">
        <ul className="animate-marquee pause-on-hover flex w-max items-center gap-16 px-8">
          {row.map((p, i) => (
            <li
              key={`${p}-${i}`}
              className="whitespace-nowrap font-display text-lg italic text-parchment/38"
              aria-hidden={i >= site.press.length}
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
      </div>
    </section>
  );
}
