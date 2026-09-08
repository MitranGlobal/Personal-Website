import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/lib/site';

export default function Awards() {
  return (
    <section id="awards" className="bg-ink-soft py-section">
      <div className="shell">
        <SectionHeading title="Recognition" />

        <Reveal as="ul" className="mt-14 divide-y divide-gold/18 border-y border-gold/18" stagger="li">
          {site.awards.map((a) => (
            <li key={a.title} className="grid gap-3 py-8 md:grid-cols-[8rem_1fr] md:gap-10">
              <span className="font-display text-2xl text-gold/70 tabular-nums">{a.year}</span>
              <div>
                <h3 className="font-display text-display-sm text-parchment">{a.title}</h3>
                <p className="mt-2 font-sans text-[0.9rem] text-parchment/55">{a.body}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
