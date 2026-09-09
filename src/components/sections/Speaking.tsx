import Link from 'next/link';
import { site } from '@/lib/site';

export default function Speaking() {
  return (
    <section id="speaking" className="border-b border-ink/12">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-2">Speaking</p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="max-w-[18ch] text-d-lg text-balance text-ink">{site.speaking.headline}</h2>
            <p className="body-copy mt-6 text-pretty">{site.speaking.body}</p>
            <Link href={site.speaking.cta.href} className="btn-line mt-8">
              {site.speaking.cta.label}
            </Link>
          </div>

          <ul className="border-t border-ink/12 lg:mt-2">
            {site.speaking.topics.map((t) => (
              <li key={t} className="border-b border-ink/12 py-5">
                <p className="max-w-[38ch] font-display text-[1.12rem] italic leading-snug text-ink">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
