import Link from 'next/link';
import { site } from '@/lib/site';

/** Thin utility strip above the nav — mirrors the reference site's top bar. */
export default function TopBar() {
  return (
    <div className="hidden border-b border-gold/15 bg-ink-soft lg:block">
      <div className="shell flex h-10 items-center justify-between text-[0.78rem] text-parchment/58">
        <p className="font-display italic tracking-wide text-gold/85">{site.tagline}</p>

        <div className="flex items-center gap-6">
          <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-gold-light">
            {site.contact.email}
          </a>
          <span aria-hidden className="h-3 w-px bg-gold/25" />
          <div className="flex items-center gap-4">
            {site.social.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold-light"
              >
                {s.label}
              </a>
            ))}
          </div>
          <Link href={site.hero.primaryCta.href} className="text-gold transition-colors hover:text-gold-light">
            Free training
          </Link>
        </div>
      </div>
    </div>
  );
}
