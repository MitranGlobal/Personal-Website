'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reveal is used sparingly and on purpose — a section heading and its rule,
   not every card on the page. Content is visible by default and only animates
   when JS and motion preference both allow it. */
export function Reveal({
  children,
  className = '',
  y = 18,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* A rule that draws itself as the section arrives. One per band. */
export function DrawRule({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.15,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`block h-px origin-left bg-[var(--gold-rule)] ${className}`}
    />
  );
}

/* Counts up when it scrolls into view. Numbers are the only element on the
   page that animate on scroll by themselves, because the count is the point. */
export function Counter({
  to,
  suffix = '',
  className = '',
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (n: number) => Math.round(n).toLocaleString('en-IN') + suffix;

    if (reduced()) {
      el.textContent = format(to);
      return;
    }

    const state = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(state, {
        n: to,
        duration: 2.1,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = format(state.n);
        },
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [to, suffix]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      0{suffix}
    </span>
  );
}
