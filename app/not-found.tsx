import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-band">
      <div className="shelf">
        <h1 className="font-display text-h2 text-chalk">That page is not here.</h1>
        <p className="mt-5 max-w-measure text-body text-orchid/80">
          The link may be old, or I may have moved something. The main pages are all one
          click away.
        </p>
        <Link
          href="/"
          className="mt-9 inline-block bg-gold px-7 py-4 text-small font-medium text-ink transition-colors hover:bg-gilt"
        >
          Back to the front page
        </Link>
      </div>
    </section>
  );
}
