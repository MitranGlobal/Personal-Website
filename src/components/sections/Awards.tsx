import { site } from '@/lib/site';

/** Deliberately quiet. Awards listed once, small, with an honest caption. */
export default function Awards() {
  return (
    <section id="awards" className="border-b border-ink/12">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-2">{site.recognition.headline}</p>

        <div>
          <ul className="border-t border-ink/12">
            {site.recognition.items.map((a) => (
              <li key={a.title} className="grid gap-1 border-b border-ink/12 py-5 md:grid-cols-[5rem_1fr] md:gap-8">
                <span className="font-sans text-[0.85rem] text-brass">{a.year || '—'}</span>
                <div>
                  <p className="text-[1.02rem] text-ink">{a.title}</p>
                  <p className="mt-1 font-sans text-[0.85rem] text-ink-faint">{a.by}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-prose font-sans text-[0.88rem] italic text-ink-faint">
            {site.recognition.note}
          </p>
        </div>
      </div>
    </section>
  );
}
