'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** CSS selector for children to stagger; omit to reveal the block as one. */
  stagger?: string;
  y?: number;
  as?: 'div' | 'section' | 'ul' | 'ol';
};

export default function Reveal({ children, className, stagger, y, as = 'div' }: Props) {
  const ref = useScrollReveal<HTMLDivElement>({ targets: stagger, y });
  const Tag = as as 'div';
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
