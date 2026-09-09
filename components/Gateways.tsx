import Link from 'next/link';
import { gateways } from '@/lib/content';
import { Reveal } from './ui/Scroll';

export default function Gateways() {
  return (
    <section className="py-band">
      <div className="shelf">
        <Reveal>
          <p className="marker">Four ways in</p>
          <h2 className="mt-6 max-w-[20ch] font-display text-h2 text-chalk">
            Depending on who you are asking for.
          </h2>
        </Reveal>

        <ul className="mt-14 border-t border-mauve/20">
          {gateways.map((g) => {
            const Row = (
              <>
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0 bg-gold transition-[width] duration-500 ease-settle group-hover:w-[3px]"
                />
                <span className="font-display text-h3 text-chalk transition-colors duration-300 group-hover:text-gilt lg:w-[26%] lg:shrink-0">
                  {g.title}
                </span>
                <span className="mt-2 max-w-measure text-body text-orchid/80 lg:mt-0 lg:flex-1">
                  {g.line}
                </span>
                <span className="mt-4 text-small text-gold transition-transform duration-500 ease-settle group-hover:translate-x-1 lg:mt-0 lg:shrink-0">
                  {g.cta}
                </span>
              </>
            );

            return (
              <li key={g.title} className="border-b border-mauve/20">
                {g.external ? (
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex flex-col py-8 pl-6 pr-2 transition-colors duration-500 ease-settle hover:bg-vellum/40 lg:flex-row lg:items-baseline lg:gap-10 lg:py-10"
                  >
                    {Row}
                  </a>
                ) : (
                  <Link
                    href={g.href}
                    className="group relative flex flex-col py-8 pl-6 pr-2 transition-colors duration-500 ease-settle hover:bg-vellum/40 lg:flex-row lg:items-baseline lg:gap-10 lg:py-10"
                  >
                    {Row}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
