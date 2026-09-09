import { programmes } from '@/lib/content';
import { Reveal, DrawRule } from './ui/Scroll';
import { Secondary } from './ui/Action';

export default function Programmes() {
  return (
    <section id="programmes" className="scroll-mt-24 bg-aubergine/30 py-band">
      <div className="shelf">
        <Reveal>
          <p className="marker">Programmes</p>
          <h2 className="mt-6 max-w-[22ch] font-display text-h2 text-chalk">
            Four things I run, and who each one is for.
          </h2>
          <DrawRule className="mt-8 w-24" />
        </Reveal>

        <div className="mt-16 space-y-0">
          {programmes.map((p, i) => (
            <article
              key={p.id}
              className={`grid gap-x-10 gap-y-8 py-12 lg:grid-cols-12 lg:py-16 ${
                i > 0 ? 'border-t border-mauve/20' : ''
              }`}
            >
              {/* Left rail: the facts you scan for. */}
              <div className="lg:col-span-4">
                <p className="font-display text-[1.05rem] italic text-gold">{p.kicker}</p>
                <dl className="mt-6 space-y-4 text-small">
                  <div>
                    <dt className="text-mauve">Length</dt>
                    <dd className="mt-0.5 text-chalk/90">{p.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-mauve">Who it is for</dt>
                    <dd className="mt-0.5 text-chalk/90">{p.audience}</dd>
                  </div>
                </dl>
              </div>

              {/* Right: the pitch, in sentences. */}
              <div className="lg:col-span-8">
                <h3 className="font-display text-h3 text-chalk">{p.title}</h3>
                <p className="mt-4 max-w-measure text-body text-orchid/85">{p.body}</p>

                <ul className="mt-7 space-y-3">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-4 text-small text-orchid/75">
                      <span
                        aria-hidden
                        className="mt-[0.62em] h-1 w-1 flex-none rotate-45 bg-gold"
                      />
                      <span className="max-w-measure">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Secondary href={p.cta.href} external={'external' in p.cta ? p.cta.external : false}>
                    {p.cta.label}
                  </Secondary>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
