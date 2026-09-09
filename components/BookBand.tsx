import Image from 'next/image';
import { book } from '@/lib/content';

/* The only light band on the site. A book is a paper object; the page turns
   to paper for exactly as long as we are talking about it. */
export default function BookBand() {
  return (
    <section id="book" className="scroll-mt-24 bg-chalk py-band text-slate">
      <div className="shelf">
        <div className="grid items-center gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm bg-slate/10 shadow-[0_30px_60px_-30px_rgba(21,12,30,0.45)]">
              <Image
                src={book.cover}
                alt={`${book.title} — cover`}
                fill
                sizes="(max-width: 1024px) 70vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-display text-[1.05rem] italic text-ember">{book.subtitle}</p>
            <h2 className="mt-4 max-w-[16ch] font-display text-h2 text-slate">{book.title}</h2>

            <p className="mt-7 max-w-measure text-body text-slate/80">{book.blurb}</p>

            <blockquote className="mt-9 border-l-2 border-ember/70 pl-6">
              <p className="max-w-measure font-display text-h3 italic leading-snug text-slate">
                {book.quote}
              </p>
            </blockquote>

            <a
              href={book.buy.href}
              className="mt-10 inline-flex items-center gap-3 bg-slate px-7 py-4 text-small text-chalk transition-colors duration-300 ease-settle hover:bg-ink"
            >
              {book.buy.label}
              <span aria-hidden className="h-px w-6 bg-gold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
