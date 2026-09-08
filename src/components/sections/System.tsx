import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/lib/site';

/**
 * The four pillars ARE a sequence — pillar one has to hold before pillar two
 * lands — so numbering is doing real work here rather than decorating.
 */
export default function System() {
  return (
    <section id="system" className="relative overflow-hidden bg-ink-panel py-section">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #5B21B6 0%, transparent 70%)' }}
      />

      <div className="shell relative">
        <SectionHeading title={site.system.heading} lead={site.system.lead} />

        <Reveal as="ol" className="mt-16 grid gap-px bg-gold/18 md:grid-cols-2" stagger="li">
          {site.system.pillars.map((p, i) => (
            <li key={p.title} className="bg-ink-panel p-9">
              <span className="font-display text-4xl text-gold/45 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-display text-display-sm text-parchment">{p.title}</h3>
              <p className="mt-4 max-w-[42ch] font-sans text-[0.95rem] leading-relaxed text-parchment/60">
                {p.body}
              </p>
            </li>
          ))}
        </Reveal>

        <div className="mt-14 flex flex-col gap-6 border-t border-gold/20 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-xl italic text-gold/75">{site.system.roadmap}</p>
          <Link href="/programs" className="btn-gold shrink-0">
            See how the 90 days work
          </Link>
        </div>
      </div>
    </section>
  );
}
