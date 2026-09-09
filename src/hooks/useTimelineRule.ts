'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scrubs a vertical rule from 0 to full height as the reader moves through the
 * ninety-day sequence. This is the only scroll-driven motion on the site: it
 * reports how far through the programme you have read, so it carries
 * information rather than decorating the section.
 */
export function useTimelineRule<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const ruleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const rule = ruleRef.current;
    if (!container || !rule) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rule.style.transform = 'scaleY(1)';
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rule,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 72%',
            end: 'bottom 82%',
            scrub: 0.4,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return { containerRef, ruleRef };
}
