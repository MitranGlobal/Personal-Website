import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function About() {
  return (
    <section id="about" className="border-b border-ink/12">
      <div className="shell grid gap-12 py-section lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <figure className="tipped-a border border-ink/15 bg-paper-warm p-2.5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
              <Image
                src="/images/vidyashankar-portrait.jpg"
                alt="Vidyashankar Guru"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </figure>
          <p className="mt-5 max-w-note font-sans text-[0.8rem] leading-relaxed text-ink-faint">
            {site.about.photoCaption}
          </p>

          {/* Credentials as shoulder notes, not badges */}
          <ul className="mt-8 space-y-1.5 border-t border-ink/12 pt-5">
            {site.about.marginalia.map((m) => (
              <li key={m} className="font-sans text-[0.82rem] text-ink-faint">
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="max-w-[22ch] text-d-lg text-balance text-ink">{site.about.headline}</h2>

          <div className="mt-7">
            {site.about.body.map((p) => (
              <p key={p.slice(0, 20)} className="body-copy text-pretty">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link href="/about" className="btn-line">
              More about me
            </Link>
            <a href={site.urls.mediaKit} className="quiet-link font-sans text-[0.92rem]">
              Media kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
