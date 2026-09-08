'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  return (
    <header
      className={`sticky top-0 z-[120] transition-colors duration-500 ease-silk ${
        scrolled ? 'border-b border-gold/18 bg-ink/88 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="shell flex h-[74px] items-center justify-between" aria-label="Primary">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="goldleaf font-display text-[1.42rem] font-semibold tracking-tight">
            Vidyashankar Guru
          </span>
          <span className="mt-1 font-sans text-[0.64rem] tracking-[0.18em] text-parchment/45">
            MiTran Global
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const kids = 'children' in item ? item.children : undefined;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-3 font-sans text-[0.92rem] text-parchment/78 transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>

                <AnimatePresence>
                  {kids && openMenu === item.label ? (
                    <motion.ul
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-full w-64 border border-gold/20 bg-ink-panel/97 py-2 backdrop-blur-xl"
                    >
                      {kids.map((kid) => (
                        <li key={kid.label}>
                          <Link
                            href={kid.href}
                            className="block px-5 py-2.5 font-sans text-[0.88rem] text-parchment/70 transition-colors hover:bg-violet-deep/40 hover:text-gold-light"
                          >
                            {kid.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}

          <li className="ml-4">
            <Link href={site.urls.calendly} className="btn-gold">
              Book a consultation
            </Link>
          </li>
        </ul>

        {/* Mobile trigger */}
        <button
          onClick={() => setDrawer((d) => !d)}
          aria-expanded={drawer}
          aria-label={drawer ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-gold transition-transform duration-300 ${drawer ? 'translate-y-[6px] rotate-45' : ''}`}
          />
          <span className={`h-px w-6 bg-gold transition-opacity duration-300 ${drawer ? 'opacity-0' : ''}`} />
          <span
            className={`h-px w-6 bg-gold transition-transform duration-300 ${drawer ? '-translate-y-[6px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 top-[74px] z-[110] overflow-y-auto bg-ink/97 backdrop-blur-xl lg:hidden"
          >
            <ul className="shell flex flex-col py-8">
              {site.nav.map((item) => {
                const kids = 'children' in item ? item.children : undefined;
                return (
                  <li key={item.label} className="border-b border-gold/12 py-4">
                    <Link
                      href={item.href}
                      onClick={() => setDrawer(false)}
                      className="font-display text-2xl text-parchment"
                    >
                      {item.label}
                    </Link>
                    {kids ? (
                      <ul className="mt-3 flex flex-col gap-2">
                        {kids.map((kid) => (
                          <li key={kid.label}>
                            <Link
                              href={kid.href}
                              onClick={() => setDrawer(false)}
                              className="text-[0.9rem] text-parchment/58"
                            >
                              {kid.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
              <li className="pt-8">
                <Link href={site.urls.calendly} onClick={() => setDrawer(false)} className="btn-gold w-full">
                  Book a consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
