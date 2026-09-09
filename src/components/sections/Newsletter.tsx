'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      // Wire to your provider (ConvertKit / Mailchimp / Resend) here.
      await new Promise((r) => setTimeout(r, 600));
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="newsletter" className="bg-paper-warm">
      <div className="shell spread py-section">
        <p className="shoulder lg:pt-2">Weekly</p>

        <div>
          <h2 className="max-w-[20ch] text-d-lg text-balance text-ink">{site.newsletter.headline}</h2>
          <p className="body-copy mt-5 text-pretty">{site.newsletter.body}</p>

          <form onSubmit={subscribe} className="mt-8 max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="nl-email" className="sr-only">
                Your email address
              </label>
              <input
                id="nl-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="your email"
                className="w-full border border-ink/25 bg-paper px-4 py-3 font-sans text-[0.95rem]
                           text-ink placeholder:text-ink-faint focus:border-plum focus:outline-none"
              />
              <button type="submit" disabled={status === 'sending'} className="btn-solid shrink-0 disabled:opacity-60">
                {status === 'sending' ? 'One moment' : site.newsletter.cta}
              </button>
            </div>

            <p aria-live="polite" className="mt-3 font-sans text-[0.85rem]">
              {status === 'done' ? (
                <span className="text-plum">Done. The first one arrives on Sunday.</span>
              ) : status === 'error' ? (
                <span className="text-plum">That address does not look right. Have another look.</span>
              ) : (
                <span className="text-ink-faint">One email a week. Leave whenever you like.</span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
