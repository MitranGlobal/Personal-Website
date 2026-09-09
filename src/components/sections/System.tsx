'use client';

import Link from 'next/link';
import { useTimelineRule } from '@/hooks/useTimelineRule';
import { site } from '@/lib/site';

/**
 * The ninety days, as a dated sequence. Phases are marked by week rather than
 * by "01 / 02" because the weeks are the actual information.
 */
export default function System() {
  const { containerRef, ruleRef } = useTimelineRule<HTMLOListElement>();

  return (
    <section id="system" className="border-b border-ink/12 bg-paper-warm">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-2">The programme</p>

        <div>
          <h2 className="max-w-[20ch] text-d-lg text-balance text-ink">{site.work.headline}</h2>
          <p className="body-copy mt-6 text-pretty">{site.work.standfirst}</p>

          <ol ref={containerRef} className="relative mt-12 border-t border-ink/12 md:pl-8">
            {/* Track and the rule that fills through it */}
            <span aria-hidden className="absolute left-0 top-0 hidden h-full w-px bg-ink/12 md:block" />
            <span
              ref={ruleRef}
              aria-hidden
              className="absolute left-0 top-0 hidden h-full w-px origin-top bg-brass md:block"
              style={{ transform: 'scaleY(0)' }}
            />

            {site.work.phases.map((p) => (
              <li key={p.title} className="grid gap-2 border-b border-ink/12 py-7 md:grid-cols-[9rem_1fr] md:gap-8">
                <span className="font-sans text-[0.85rem] text-brass">{p.when}</span>
                <div>
                  <h3 className="text-d-sm text-ink">{p.title}</h3>
                  <p className="mt-2.5 max-w-prose text-[1rem] leading-[1.66] text-ink-soft">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-prose font-display text-[1.1rem] italic leading-relaxed text-plum">
            {site.work.parentNote}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link href="/programs" className="btn-solid">
              See the full method
            </Link>
            <span className="max-w-note font-sans text-[0.85rem] text-ink-faint">{site.work.roadmap}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
