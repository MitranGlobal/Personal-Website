import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-ink/12 bg-paper-warm">
      <div className="shell py-16">
        <p className="max-w-prose font-display text-d-sm italic leading-snug text-plum">
          {site.footerNote}
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg text-ink">Vidyashankar Guru</p>
            <p className="mt-2 font-sans text-[0.88rem] text-ink-faint">{site.contact.office}</p>
            <a
              href={`mailto:${site.contact.email}`}
              className="quiet-link mt-2 block font-sans text-[0.88rem]"
            >
              {site.contact.email}
            </a>
          </div>

          <div>
            <p className="font-sans text-[0.8rem] text-ink-faint">Pages</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="font-sans text-[0.88rem] text-ink-soft hover:text-plum">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[0.8rem] text-ink-faint">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[0.88rem] text-ink-soft hover:text-plum"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[0.8rem] text-ink-faint">Organisation</p>
            <a
              href={site.urls.mitran}
              target="_blank"
              rel="noreferrer"
              className="quiet-link mt-3 block font-sans text-[0.88rem]"
            >
              MiTran Global
            </a>
          </div>
        </div>

        <p className="mt-14 border-t border-ink/12 pt-6 font-sans text-[0.8rem] text-ink-faint">
          © {new Date().getFullYear()} Vidyashankar Guru. Site by MiTran Global.
        </p>
      </div>
    </footer>
  );
}
