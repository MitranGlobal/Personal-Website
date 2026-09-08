import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export default function About() {
  return (
    <section id="about" className="relative bg-ink-soft py-section">
      <div className="shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        {/* Portrait */}
        <Reveal>
          <figure className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-panel ring-1 ring-gold/25">
              <Image
                src="/images/vidyashankar-portrait.jpg"
                alt="Vidyashankar Guru"
                fill
                sizes="(max-width: 1024px) 92vw, 480px"
                className="object-cover"
              />
            </div>
            {/* Gold offset frame — the one decorative gesture in this section */}
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-gold/35"
            />
            <figcaption className="mt-6 font-sans text-[0.82rem] text-parchment/50">
              {site.title}
            </figcaption>
          </figure>
        </Reveal>

        {/* Copy */}
        <Reveal stagger="[data-r]">
          <h2 data-r className="on-dark-display text-display-md text-balance text-parchment">
            {site.about.heading}
          </h2>

          <div data-r className="mt-8 space-y-6">
            {site.about.body.map((p) => (
              <p key={p.slice(0, 24)} className="lead text-pretty">
                {p}
              </p>
            ))}
          </div>

          <div data-r className="mt-10 flex flex-wrap gap-4">
            <Link href="/about" className="btn-gold">
              Read the full story
            </Link>
            <a href={site.urls.mediaKit} className="btn-ghost">
              Download media kit
            </a>
          </div>

          <p data-r className="mt-10 font-display text-2xl italic text-gold/80">
            {site.about.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
