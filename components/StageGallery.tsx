'use client';

import Image from 'next/image';
import { stage } from '@/lib/content';
import { useLightbox } from '@/lib/store';

export default function StageGallery() {
  const open = useLightbox((s) => s.open);

  return (
    <section className="pb-band">
      <div className="shelf">
        <p className="marker">Rooms I have been in</p>

        {/* Deliberately uneven: the first frame is wide, the rest fall into a
            column grid beside it. A contact sheet, not a card wall. */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stage.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => open(stage, i)}
              className={`group relative overflow-hidden bg-vellum ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2 lg:col-span-2' : ''
              } ${i === 0 ? 'aspect-[4/3] sm:aspect-auto' : 'aspect-[4/3]'}`}
              aria-label={`Open photograph: ${s.caption}, ${s.place}`}
            >
              <Image
                src={s.src}
                alt={`${s.caption}, ${s.place}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-settle group-hover:scale-[1.035]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-ink/25 transition-colors duration-500 group-hover:bg-ink/5"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-3 pt-10 text-left text-small">
                <span className="text-chalk">{s.caption}</span>
                <span className="text-mauve">{s.place}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
