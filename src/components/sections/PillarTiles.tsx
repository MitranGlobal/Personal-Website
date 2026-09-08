import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';

/** Four routes into the work — the reference site's quadrant grid, restyled. */
export default function PillarTiles() {
  return (
    <section className="bg-ink py-section" aria-label="Ways to work together">
      <Reveal className="shell grid gap-px border border-gold/18 bg-gold/18 md:grid-cols-2 lg:grid-cols-4" stagger="a">
        {site.tiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className="group relative flex min-h-[240px] flex-col justify-between bg-ink-soft p-8
                       transition-colors duration-500 ease-silk hover:bg-violet-deep/35"
          >
            <h3 className="font-display text-display-sm text-parchment transition-colors group-hover:text-gold-light">
              {tile.title}
            </h3>
            <p className="mt-6 max-w-[24ch] font-sans text-[0.9rem] leading-relaxed text-parchment/55">
              {tile.note}
            </p>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}
