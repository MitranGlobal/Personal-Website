import type { Metadata } from 'next';
import PageHead from '@/components/ui/PageHead';
import Books from '@/components/sections/Books';
import Newsletter from '@/components/sections/Newsletter';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Books',
  description: site.books.standfirst,
};

export default function BooksPage() {
  return (
    <>
      <PageHead shoulder="Written" title={site.books.headline} lead={site.books.standfirst} />
      <Books />
      <Newsletter />
    </>
  );
}
