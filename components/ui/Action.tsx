import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

/* Solid gold. One per screenful, on the single thing I most want clicked. */
export function Primary({ href, children, external, className = '' }: Props) {
  const cls = `group inline-flex items-center gap-3 bg-gold px-7 py-4 text-small font-medium tracking-[0.01em] text-ink transition-[background-color,transform] duration-300 ease-settle hover:bg-gilt active:translate-y-px ${className}`;
  const inner = (
    <>
      {children}
      <span
        aria-hidden
        className="h-px w-6 bg-ink transition-[width] duration-300 ease-settle group-hover:w-9"
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* Outlined in the violet structural tone. The alternative, never the star. */
export function Secondary({ href, children, external, className = '' }: Props) {
  const cls = `inline-flex items-center gap-3 border border-mauve/50 px-7 py-4 text-small text-orchid transition-colors duration-300 ease-settle hover:border-gold hover:text-gilt ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
