'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLightbox, type LightboxItem } from '@/store/lightbox';
import { site } from '@/lib/site';

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function Books() {
  const open = useLightbox((s) => s.open);

  const items: LightboxItem[] = site.books.map((b) => ({
    src: `/books/${slug(b.title)}.jpg`,
    alt: `${b.title} — book cover`,
    caption: `${b.title} · ${b.note}`,
  }));

  return (
    <section id="books" className="bg-ink-soft py-section">
      <div className="shell">
        <SectionHeading
          title="Five books, one argument"
          lead="Written across twenty years for the two people in the room — the teenager who has stopped believing they can, and the parent who has run out of things to try."
        />

        <Reveal className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger="figure">
          {site.books.map((book, i) => (
            <figure key={book.title}>
              <button
                onClick={() => open(items, i)}
                className="group relative block aspect-[2/3] w-full overflow-hidden bg-ink-panel ring-1 ring-gold/22
                           transition-transform duration-500 ease-silk hover:-translate-y-1.5"
                aria-label={`View cover of ${book.title}`}
              >
                <Image
                  src={items[i].src}
                  alt={items[i].alt}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 280px"
                  className="object-cover"
                />
              </button>
              <figcaption className="mt-5">
                <h3 className="font-display text-lg leading-snug text-parchment">{book.title}</h3>
                <p className="mt-2 font-sans text-[0.86rem] leading-relaxed text-parchment/55">{book.note}</p>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
