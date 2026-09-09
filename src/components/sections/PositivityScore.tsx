import Link from 'next/link';
import { site } from '@/lib/site';

export default function PositivityScore() {
  const { headline, body, areas, cta, stat } = site.score;

  return (
    <section id="score" className="border-b border-ink/12">
      <div className="shell grid gap-12 py-section lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <h2 className="max-w-[22ch] text-d-lg text-balance text-ink">{headline}</h2>
          <p className="body-copy mt-6 text-pretty">{body}</p>

          {/* Ten areas as a plain two-column list — a set, not a chip cloud */}
          <ul className="mt-9 grid gap-x-10 gap-y-2.5 border-t border-ink/12 pt-7 sm:grid-cols-2">
            {areas.map((a) => (
              <li key={a} className="font-sans text-[0.95rem] text-ink-soft">
                {a}
              </li>
            ))}
          </ul>

          <Link href={cta.href} className="btn-line mt-9">
            {cta.label}
          </Link>
        </div>

        <aside className="lg:pt-3">
          <div className="border-l-2 border-brass pl-6">
            <p className="font-display text-[clamp(2.6rem,6vw,4rem)] leading-none text-plum">{stat.figure}</p>
            <p className="mt-4 max-w-[28ch] font-display text-[1.15rem] italic leading-snug text-ink">
              {stat.body}
            </p>
            <p className="mt-5 font-sans text-[0.8rem] text-ink-faint">{stat.source}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
