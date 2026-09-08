import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/lib/site';

export default function PositivityScore() {
  const { heading, lead, areas, stat } = site.positivity;

  return (
    <section id="score" className="bg-ink py-section">
      <div className="shell grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <SectionHeading title={heading} lead={lead} />

          <Reveal as="ul" className="mt-10 flex flex-wrap gap-2.5" stagger="li">
            {areas.map((a) => (
              <li
                key={a}
                className="border border-gold/28 px-4 py-2 font-sans text-[0.85rem] text-parchment/72"
              >
                {a}
              </li>
            ))}
          </Reveal>

          <Link href={site.urls.positivityScore} className="btn-gold mt-10">
            Take the assessment
          </Link>
        </div>

        {/* The stat that justifies the whole practice */}
        <Reveal>
          <aside className="relative flex h-full flex-col justify-center border border-gold/25 bg-ink-soft p-10">
            <p className="goldleaf font-display text-[clamp(3.4rem,9vw,6rem)] font-semibold leading-none">
              {stat.figure}
            </p>
            <p className="mt-6 max-w-[30ch] font-display text-xl italic leading-snug text-parchment/85">
              {stat.body}
            </p>
            <p className="mt-8 font-sans text-[0.8rem] text-parchment/45">{stat.source}</p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
