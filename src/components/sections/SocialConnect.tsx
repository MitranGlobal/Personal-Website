import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export default function SocialConnect() {
  return (
    <section className="bg-ink py-section" aria-label="Social channels">
      <div className="shell">
        <h2 className="on-dark-display max-w-3xl text-display-md text-balance text-parchment">
          Most of the work happens in public
        </h2>
        <p className="lead mt-5 text-pretty">
          Short breakdowns of what is actually going on inside a teenager, posted through the week. Pick whichever
          platform you already live on.
        </p>

        <Reveal as="ul" className="mt-14 grid gap-px border border-gold/18 bg-gold/18 sm:grid-cols-2 lg:grid-cols-3" stagger="li">
          {site.social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-4 bg-ink-soft px-7 py-8
                           transition-colors duration-500 ease-silk hover:bg-violet-deep/35"
              >
                <span className="font-display text-2xl text-parchment transition-colors group-hover:text-gold-light">
                  {s.label}
                </span>
                <span className="font-sans text-[0.82rem] text-parchment/45">{s.handle}</span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
