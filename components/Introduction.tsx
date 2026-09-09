import Image from 'next/image';
import { about } from '@/lib/content';
import { Reveal, DrawRule } from './ui/Scroll';

export default function Introduction() {
  return (
    <section id="work" className="scroll-mt-24 py-band">
      <div className="shelf">
        <Reveal>
          <p className="marker">The work</p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-16 lg:grid-cols-12">
          {/* Left: the voice. Ragged right, one measure wide, nothing else. */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-h2 text-chalk">{about.heading}</h2>
            </Reveal>

            <DrawRule className="mt-8 w-24" />

            <div className="mt-8 max-w-measure space-y-6 text-body text-orchid/85">
              {about.body.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>

            <p className="mt-10 font-display text-[1.6rem] italic text-gilt/85">
              {about.signature}
            </p>
          </div>

          {/* Right: portrait and the sentence I would want on a poster. */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-vellum">
              <Image
                src="/media/portrait.jpg"
                alt="Vidyashankar Guru"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
              />
            </div>

            <Reveal>
              <blockquote className="mt-8 border-l-2 border-gold/70 pl-6">
                <p className="font-display text-h3 italic leading-snug text-chalk">
                  {about.pullQuote}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
