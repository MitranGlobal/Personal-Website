'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Options = {
  /** Selector for children to stagger. Omit to animate the container itself. */
  targets?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

/**
 * One reveal on entry — used sparingly, on section headings and the
 * two grids where sequence carries meaning. Honours prefers-reduced-motion.
 */
export function useScrollReveal<T extends HTMLElement>({
  targets,
  y = 26,
  duration = 0.85,
  stagger = 0.08,
  start = 'top 82%',
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const nodes = targets ? Array.from(el.querySelectorAll(targets)) : [el];
    if (!nodes.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nodes,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [targets, y, duration, stagger, start]);

  return ref;
}
