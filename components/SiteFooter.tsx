import Link from 'next/link';
import { nav, site } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="border-t border-mauve/20 bg-aubergine/40 pb-10 pt-16">
      <div className="shelf">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[2.2rem] leading-none text-chalk">
              Vidyashankar Guru<span className="text-gold">.</span>
            </p>
            <p className="mt-5 max-w-measure text-small text-orchid/75">{site.role}</p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <p className="text-small text-mauve">Pages</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-quiet text-small">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-small text-mauve">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-quiet text-small">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${site.email}`} className="link-quiet mt-6 block text-small">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-mauve/20 pt-6 text-small text-mauve sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.city}.
          </p>
          <p>Every child has the right to feel positive.</p>
        </div>
      </div>
    </footer>
  );
}
