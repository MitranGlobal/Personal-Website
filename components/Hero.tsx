'use client';

import dynamic from 'next/dynamic';
import { hero, site } from '@/lib/content';
import { Primary, Secondary } from './ui/Action';

/* The shader needs a browser. Nothing below it depends on it, so the page
   renders and reads perfectly before the canvas ever arrives. */
const Silk = dynamic(() => import('./Silk'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-32 sm:pb-20">
      {/* Gold silk, seen in a dark room. The mask keeps it a light source
          rather than a wallpaper. */}
      <div className="silk-mask pointer-events-none absolute inset-0 -z-10 opacity-0 [animation:fade-in_1.8s_cubic-bezier(0.22,1,0.36,1)_0.25s_forwards]">
        <Silk speed={3.4} scale={1.1} color="#D4A62A" noiseIntensity={1.15} rotation={0.32} />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-ink to-transparent" />

      <div className="shelf">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="lg:col-span-8">
            <h1 className="font-display text-h1 font-normal text-chalk">
              {hero.lines.map((line, i) => (
                <span key={line} className="line-clip">
                  <span style={{ animationDelay: `${0.15 + i * 0.11}s` }}>{line}</span>
                </span>
              ))}
            </h1>

            <span
              aria-hidden
              className="rule-draw mt-8 block h-px w-full max-w-xl bg-[var(--gold-rule)]"
              style={{ animationDelay: '0.62s' }}
            />

            <p
              className="fade-in mt-8 max-w-measure font-display text-lead italic text-gilt"
              style={{ animationDelay: '0.72s' }}
            >
              {hero.statement}
            </p>
            <p
              className="fade-in mt-5 max-w-measure text-body text-orchid/85"
              style={{ animationDelay: '0.84s' }}
            >
              {hero.standfirst}
            </p>

            <div
              className="fade-in mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.96s' }}
            >
              <Primary href={hero.primary.href}>{hero.primary.label}</Primary>
              <Secondary href={hero.secondary.href}>{hero.secondary.label}</Secondary>
            </div>
          </div>

          {/* Right column carries the quiet facts, set against the baseline of
              the headline block rather than floating in the middle. */}
          <div
            className="fade-in lg:col-span-4 lg:border-l lg:border-mauve/25 lg:pl-8"
            style={{ animationDelay: '1.08s' }}
          >
            <dl className="grid grid-cols-2 gap-y-6 text-small lg:grid-cols-1">
              <div>
                <dt className="text-mauve">Based in</dt>
                <dd className="mt-1 text-chalk">{site.city}</dd>
              </div>
              <div>
                <dt className="text-mauve">Working since</dt>
                <dd className="mt-1 text-chalk tnum">2005</dd>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <dt className="text-mauve">Founder</dt>
                <dd className="mt-1 text-chalk">MiTran Global</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
