import { voices } from '@/lib/content';
import { Reveal } from './ui/Scroll';

export default function Voices() {
  return (
    <section className="py-band">
      <div className="shelf">
        <Reveal>
          <p className="marker">What people say afterwards</p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-3">
          {voices.map((v) => (
            <figure key={v.who} className="border-t border-mauve/25 pt-8">
              <blockquote>
                <p className="font-display text-[1.3rem] leading-[1.45] text-chalk">
                  {v.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 text-small">
                <span className="block text-gilt">{v.who}</span>
                <span className="mt-0.5 block text-mauve">{v.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
