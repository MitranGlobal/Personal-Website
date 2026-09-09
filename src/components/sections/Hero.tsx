'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { site } from '@/lib/site';

const Silk = dynamic(() => import('@/components/three/Silk'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gradient-to-br from-brass via-brass-light to-brass" />,
});

export default function Hero() {
  return (
    <section className="border-b border-ink/12">
      <div className="shell grid gap-12 py-section lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        {/* Text column */}
        <div className="spread">
          <p className="shoulder lg:pt-3">{site.hero.margin}</p>

          <div>
            <h1 className="max-w-[19ch] text-d-xl text-balance text-ink">{site.hero.headline}</h1>

            <p className="mt-5 max-w-[34ch] font-display text-d-sm italic text-plum">
              {site.hero.standfirst}
            </p>

            <div className="mt-8">
              {site.hero.body.map((p) => (
                <p key={p.slice(0, 20)} className="body-copy text-pretty">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href={site.hero.primary.href} className="btn-solid">
                {site.hero.primary.label}
              </Link>
              <Link href={site.hero.secondary.href} className="quiet-link font-sans text-[0.95rem]">
                {site.hero.secondary.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Silk, held as a printed plate rather than a background */}
        <figure className="lg:pt-2">
          <div className="tipped-b border border-ink/15 bg-paper-warm p-2.5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Silk speed={3.4} scale={1.15} color="#C9A227" noiseIntensity={1.2} rotation={0.28} lightMode />
            </div>
          </div>
          <figcaption className="mt-4 max-w-note font-sans text-[0.8rem] leading-relaxed text-ink-faint">
            {site.hero.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
