import type { Metadata } from 'next';
import Books from '@/components/sections/Books';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Five books by Vidyashankar Guru on teen performance, interviews, self-belief and parenting.',
};

export default function BooksPage() {
  return (
    <>
      <header className="border-b border-gold/18 bg-ink-panel pb-16 pt-24">
        <div className="shell">
          <h1 className="on-dark-display max-w-4xl text-display-lg text-balance text-parchment">
            Five books, one argument
          </h1>
        </div>
      </header>
      <Books />
      <Newsletter />
    </>
  );
}
