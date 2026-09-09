import { site } from '@/lib/site';

/**
 * The complaints parents arrive with, set as a hanging list. This sits
 * immediately after the hero because recognition does more work here than
 * credentials do.
 */
export default function Voices() {
  return (
    <section className="border-b border-ink/12 bg-paper-warm">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-2">What I hear</p>

        <div>
          <ul className="space-y-5">
            {site.voices.map((v) => (
              <li key={v} className="hang max-w-[46ch] font-display text-d-sm italic leading-snug text-ink">
                &ldquo;{v}&rdquo;
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-prose border-t border-ink/12 pt-6 font-sans text-[0.95rem] leading-relaxed text-ink-soft">
            {site.voicesNote}
          </p>
        </div>
      </div>
    </section>
  );
}
