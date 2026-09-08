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
      await new Promise((r) => setTimeout(r, 700));
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="newsletter" className="border-y border-gold/18 bg-ink-panel py-section">
      <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <h2 className="on-dark-display text-display-md text-balance text-parchment">
            {site.newsletter.heading}
          </h2>
          <p className="lead mt-5">{site.newsletter.body}</p>
        </div>

        <form onSubmit={subscribe} className="w-full">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="nl-email" className="sr-only">
              Email address
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
              placeholder="you@example.com"
              className="w-full border border-gold/30 bg-ink px-5 py-4 font-sans text-[0.95rem]
                         text-parchment placeholder:text-parchment/35 focus:border-gold focus:outline-none"
            />
            <button type="submit" disabled={status === 'sending'} className="btn-gold shrink-0 disabled:opacity-60">
              {status === 'sending' ? 'Subscribing…' : site.newsletter.cta}
            </button>
          </div>

          <p aria-live="polite" className="mt-3 font-sans text-[0.84rem]">
            {status === 'done' ? (
              <span className="text-gold-light">Subscribed. The first note arrives on Sunday.</span>
            ) : status === 'error' ? (
              <span className="text-violet-mist">That address does not look right. Check it and try again.</span>
            ) : (
              <span className="text-parchment/40">One email a week. Unsubscribe any time.</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
