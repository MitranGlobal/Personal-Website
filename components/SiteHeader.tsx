'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site } from '@/lib/content';
import { useMenu } from '@/lib/store';

export default function SiteHeader() {
  const [lifted, setLifted] = useState(false);
  const { isOpen, toggle, close } = useMenu();

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ease-settle ${
          lifted
            ? 'border-b border-mauve/20 bg-ink/85 py-3 backdrop-blur-xl'
            : 'border-b border-transparent py-5'
        }`}
      >
        <div className="shelf flex items-center justify-between gap-6">
          <Link
            href="/"
            onClick={close}
            className="font-display text-[1.35rem] leading-none text-chalk transition-colors duration-300 hover:text-gilt"
          >
            Vidyashankar
            <span className="text-gold">.</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="link-quiet text-small">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/speaking"
              className="border border-gold/60 px-5 py-2.5 text-small text-gilt transition-colors duration-300 ease-settle hover:bg-gold hover:text-ink"
            >
              Check my dates
            </Link>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`block h-px w-6 bg-chalk transition-transform duration-300 ease-settle ${
                isOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-chalk transition-transform duration-300 ease-settle ${
                isOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-2xl lg:hidden"
          >
            <div className="shelf flex h-full flex-col justify-center gap-2 pt-16">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block border-b border-mauve/20 py-5 font-display text-[2rem] leading-none text-chalk"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-10 text-small text-mauve"
              >
                {site.city}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
