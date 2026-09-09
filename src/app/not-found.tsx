import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="border-b border-ink/12">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-3">404</p>
        <div>
          <h1 className="max-w-[18ch] text-d-lg text-balance text-ink">
            That page is not here anymore
          </h1>
          <p className="body-copy mt-5">
            The link is probably old, or the address is slightly off. Start from the beginning, or go
            straight to the free training.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link href="/" className="btn-solid">Back to the start</Link>
            <Link href="/programs#training" className="quiet-link font-sans text-[0.95rem]">
              Watch the free training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
