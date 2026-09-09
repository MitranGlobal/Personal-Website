import { site } from '@/lib/site';

/**
 * Testimonials as a set of notes laid out at once, rather than a carousel.
 * Nothing is hidden behind a control, and nothing rotates on its own.
 */
export default function Letters() {
  return (
    <section className="border-b border-ink/12 bg-paper-warm">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-2">From families</p>

        <div>
          <h2 className="text-d-lg text-ink">{site.letters.headline}</h2>

          <ul className="mt-11 grid gap-7 md:grid-cols-2">
            {site.letters.items.map((l, i) => (
              <li
                key={l.from}
                className={`border border-ink/15 bg-paper p-7 ${i % 2 ? 'md:mt-7' : ''}`}
              >
                <blockquote>
                  <p className="font-display text-[1.15rem] italic leading-[1.5] text-ink">
                    &ldquo;{l.text}&rdquo;
                  </p>
                  <footer className="mt-5 font-sans text-[0.85rem] text-ink-faint">{l.from}</footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
