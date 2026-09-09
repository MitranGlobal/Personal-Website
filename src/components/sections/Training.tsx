import Link from 'next/link';
import { site } from '@/lib/site';

/** The one inverted band on the page, so the single ask stands out. */
export default function Training() {
  return (
    <section id="training" className="bg-plum text-paper">
      <div className="shell grid gap-8 py-section lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
        <div>
          <h2 className="max-w-[18ch] text-d-lg text-balance text-paper">{site.training.headline}</h2>
          <p className="mt-6 max-w-prose text-[1.08rem] leading-[1.68] text-paper/80">{site.training.body}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link
            href={site.training.primary.href}
            className="btn bg-brass-light text-ink hover:bg-brass-wash"
          >
            {site.training.primary.label}
          </Link>
          <Link
            href={site.training.secondary.href}
            className="font-sans text-[0.95rem] text-paper/80 underline decoration-brass-light/60 underline-offset-4 hover:text-paper"
          >
            {site.training.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
