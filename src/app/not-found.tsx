import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-ink">
      <div className="shell">
        <p className="goldleaf font-display text-display-lg font-semibold">404</p>
        <h1 className="on-dark-display mt-4 max-w-2xl text-display-md text-parchment">
          That page is not here
        </h1>
        <p className="lead mt-5">
          The link may be old, or the address slightly off. Start again from the home page, or go straight to the
          free training.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/" className="btn-gold">Back to home</Link>
          <Link href="/programs#training" className="btn-ghost">Watch the free training</Link>
        </div>
      </div>
    </section>
  );
}
