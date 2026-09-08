'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/lib/site';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = site.testimonials[i];

  return (
    <section className="bg-ink py-section" aria-label="What families say">
      <div className="shell">
        <SectionHeading title="What families say" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="on-dark-display font-display text-[clamp(1.5rem,3.4vw,2.6rem)] italic leading-[1.28] text-parchment">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8 font-sans text-[0.9rem] text-gold/80">
                {t.author}, {t.place}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Dot control — tied to a real action, so the motion is earned */}
          <div className="flex gap-3 lg:flex-col">
            {site.testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                aria-current={idx === i}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  idx === i ? 'bg-gold' : 'bg-parchment/22 hover:bg-parchment/45'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
