'use client';

import Image from 'next/image';
import { useLightbox, type LightboxItem } from '@/store/lightbox';
import { site } from '@/lib/site';

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function Books() {
  const open = useLightbox((s) => s.open);

  const items: LightboxItem[] = site.books.items.map((b) => ({
    src: `/books/${slug(b.title)}.jpg`,
    alt: `${b.title}, cover`,
    caption: `${b.title}. ${b.note}`,
  }));

  return (
    <section id="books" className="border-b border-ink/12">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-2">Written</p>

        <div>
          <h2 className="text-d-lg text-ink">{site.books.headline}</h2>
          <p className="body-copy mt-5 text-pretty">{site.books.standfirst}</p>

          {/* A shelf: covers alternate their tilt so the row reads as objects */}
          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {site.books.items.map((book, i) => (
              <li key={book.title}>
                <button
                  onClick={() => open(items, i)}
                  aria-label={`View the cover of ${book.title}`}
                  className={`block w-full border border-ink/15 bg-paper-warm p-2 transition-transform
                              duration-300 ease-ease hover:-translate-y-1 ${i % 2 ? 'tipped-b' : 'tipped-a'}`}
                >
                  <span className="relative block aspect-[2/3] w-full overflow-hidden bg-paper-deep">
                    <Image
                      src={items[i].src}
                      alt={items[i].alt}
                      fill
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 42vw, 240px"
                      className="object-cover"
                    />
                  </span>
                </button>

                <h3 className="mt-5 text-[1.05rem] leading-snug text-ink">{book.title}</h3>
                <p className="mt-1.5 font-sans text-[0.87rem] leading-relaxed text-ink-faint">{book.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
