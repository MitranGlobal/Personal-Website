import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-ink-soft">
      <div className="shell py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr] lg:gap-20">
          {/* Wordmark block */}
          <div>
            <Link href="/" className="goldleaf font-display text-3xl font-semibold">
              Vidyashankar Guru
            </Link>
            <p className="mt-4 max-w-[34ch] font-sans text-[0.92rem] leading-relaxed text-parchment/55">
              {site.title}
            </p>
            <p className="mt-6 font-display text-lg italic text-gold/70">{site.tagline}</p>

            <div className="mt-8 space-y-1.5 font-sans text-[0.88rem] text-parchment/55">
              <p>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-gold-light">
                  {site.contact.email}
                </a>
              </p>
              <p>{site.contact.office}</p>
            </div>
          </div>

          {/* Link columns */}
          <nav className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" aria-label="Footer">
            {site.footer.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-display text-base text-gold/85">{col.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="font-sans text-[0.88rem] text-parchment/58 transition-colors hover:text-gold-light"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-gold/18 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[0.82rem] text-parchment/40">
            © {year} Vidyashankar Guru · MiTran Global. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-[0.82rem] text-parchment/48 transition-colors hover:text-gold-light"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
