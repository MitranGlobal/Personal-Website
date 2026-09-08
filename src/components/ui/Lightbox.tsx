'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLightbox } from '@/store/lightbox';

export default function Lightbox() {
  const { isOpen, items, index, close, next, prev } = useLightbox();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Keyboard control + scroll lock while open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  const current = items[index];

  return (
    <AnimatePresence>
      {isOpen && current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? current.alt}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/94 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        >
          <motion.figure
            className="relative mx-6 max-h-[84vh] w-full max-w-4xl"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-ink-panel ring-1 ring-gold/30">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 900px) 92vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            {current.caption ? (
              <figcaption className="mt-4 text-center text-sm text-parchment/65">
                {current.caption}
              </figcaption>
            ) : null}

            {items.length > 1 ? (
              <div className="mt-5 flex items-center justify-center gap-6">
                <button
                  onClick={prev}
                  className="px-4 py-2 text-sm text-parchment/70 transition-colors hover:text-gold-light"
                >
                  Previous
                </button>
                <span className="font-sans text-sm tabular-nums text-parchment/45">
                  {index + 1} / {items.length}
                </span>
                <button
                  onClick={next}
                  className="px-4 py-2 text-sm text-parchment/70 transition-colors hover:text-gold-light"
                >
                  Next
                </button>
              </div>
            ) : null}
          </motion.figure>

          <button
            ref={closeRef}
            onClick={close}
            className="absolute right-6 top-6 px-4 py-2 text-sm text-parchment/70 transition-colors hover:text-gold-light"
          >
            Close
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
