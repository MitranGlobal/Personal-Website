import Link from 'next/link';
import { site } from '@/lib/site';

/** The lead magnet — full-bleed violet band so it interrupts the ink rhythm. */
export default function FreeTraining() {
  return (
    <section id="training" className="relative overflow-hidden bg-violet-deep">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ background: 'linear-gradient(115deg, #3B0F70 0%, #5B21B6 48%, #2A1147 100%)' }}
      />
      <div className="shell relative grid gap-10 py-section lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="on-dark-display text-display-md text-balance text-parchment">
            {site.training.heading}
          </h2>
          <p className="lead mt-6 text-pretty text-parchment/78">{site.training.body}</p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <Link href={site.training.cta.href} className="btn-gold w-full justify-center lg:w-auto">
            {site.training.cta.label}
          </Link>
          <Link href={site.training.secondary.href} className="btn-ghost w-full justify-center lg:w-auto">
            {site.training.secondary.label}
          </Link>
          <p className="font-sans text-[0.8rem] text-parchment/55">No cost. No card. Roughly 25 minutes.</p>
        </div>
      </div>
    </section>
  );
}
