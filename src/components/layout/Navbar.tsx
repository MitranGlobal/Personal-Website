'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * Plain masthead. No dropdowns, no utility strip, no sticky glass panel —
 * the site is short enough that a person can just scroll.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="border-b border-ink/12">
      <nav className="shell flex h-20 items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-[1.35rem] font-medium tracking-tight text-ink">
            Vidyashankar Guru
          </span>
          <span className="mt-1.5 font-sans text-[0.74rem] text-ink-faint">{site.role}</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-sans text-[0.92rem] text-ink-soft transition-colors duration-200 hover:text-plum"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="font-sans text-[0.92rem] text-plum lg:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-ink/12 lg:hidden">
          <ul className="shell flex flex-col py-4">
            {site.nav.map((item) => (
              <li key={item.label} className="border-b border-ink/8 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-xl text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
