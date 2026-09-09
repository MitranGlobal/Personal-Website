'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLightbox } from '@/lib/store';

export default function Lightbox() {
  const { items, index, isOpen, close, next, prev } = useLightbox();
  const current = items[index];

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, next, prev]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.caption}, ${current.place}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/96 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-mauve/20 px-gutter py-4">
            <p className="text-small">
              <span className="text-chalk">{current.caption}</span>
              <span className="ml-3 text-mauve">{current.place}</span>
            </p>
            <div className="flex items-center gap-5 text-small">
              <span className="tnum text-mauve">
                {index + 1} of {items.length}
              </span>
              <button
                type="button"
                onClick={close}
                className="text-orchid transition-colors hover:text-gilt"
              >
                Close
              </button>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center p-gutter">
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
            >
              <Image
                src={current.src}
                alt={`${current.caption}, ${current.place}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-between border-t border-mauve/20 px-gutter py-4 text-small">
            <button
              type="button"
              onClick={prev}
              className="text-orchid transition-colors hover:text-gilt"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={next}
              className="text-orchid transition-colors hover:text-gilt"
            >
              Next
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
