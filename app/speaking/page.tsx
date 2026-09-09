import type { Metadata } from 'next';
import Link from 'next/link';
import { speaking } from '@/lib/content';
import { Reveal, DrawRule } from '@/components/ui/Scroll';
import { Primary } from '@/components/ui/Action';

export const metadata: Metadata = {
  title: 'On stage',
  description: speaking.standfirst,
};

export default function SpeakingPage() {
  return (
    <div className="spine">
      <section className="pb-band pt-40">
        <div className="shelf">
          <h1 className="max-w-[14ch] font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.94] text-chalk">
            {speaking.heading}
          </h1>
          <DrawRule className="mt-10 w-full max-w-xl" />
          <p className="mt-9 max-w-measure text-lead text-orchid/85">{speaking.standfirst}</p>
          <div className="mt-10">
            <Primary href="/#contact">Send me the brief</Primary>
          </div>
        </div>
      </section>

      <section className="border-t border-mauve/20 bg-aubergine/30 py-band">
        <div className="shelf">
          <Reveal>
            <p className="marker">Formats</p>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-3">
            {speaking.formats.map((f) => (
              <div key={f.title} className="border-t border-mauve/25 pt-7">
                <h2 className="font-display text-h3 text-chalk">{f.title}</h2>
                <p className="mt-2 text-small text-gold">{f.length}</p>
                <p className="mt-5 text-body text-orchid/80">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-band">
        <div className="shelf grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-h2 text-chalk">What I talk about</h2>
            <ul className="mt-9 space-y-6">
              {speaking.topics.map((t) => (
                <li key={t} className="border-b border-mauve/20 pb-6">
                  <p className="max-w-measure font-display text-[1.25rem] leading-snug text-chalk/95">
                    {t}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-mauve/25 lg:pl-10">
            <h2 className="font-display text-h3 text-chalk">The practical bits</h2>
            <dl className="mt-8 space-y-6 text-small">
              {speaking.logistics.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-mauve">{k}</dt>
                  <dd className="mt-1 max-w-measure text-chalk/90">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-small text-orchid/70">
              Not sure which format fits?{' '}
              <Link href="/#contact" className="link-quiet">
                Describe the room and I will tell you.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
