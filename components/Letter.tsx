'use client';

import { FormEvent, useState } from 'react';
import { letter } from '@/lib/content';

export default function Letter() {
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [email, setEmail] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState('sending');
    // TODO: point this at your list — ConvertKit, Beehiiv, Mailchimp, whatever
    // you already use. Until then it just acknowledges locally.
    await new Promise((r) => setTimeout(r, 600));
    setState('done');
  }

  return (
    <section className="border-y border-mauve/20 bg-aubergine/35 py-band">
      <div className="shelf">
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h2 className="font-display text-h2 text-chalk">{letter.title}</h2>
            <p className="mt-5 max-w-measure text-body text-orchid/85">{letter.body}</p>
          </div>

          <div className="lg:col-span-6">
            {state === 'done' ? (
              <p className="border-l-2 border-gold pl-6 text-body text-gilt">
                You are on the list. The next one goes out on Monday.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:flex-row">
                <label htmlFor="letter-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="letter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@work.com"
                  className="w-full flex-1 border-b border-mauve/50 bg-transparent px-1 py-4 text-body text-chalk placeholder:text-mauve focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="bg-gold px-7 py-4 text-small font-medium text-ink transition-colors duration-300 ease-settle hover:bg-gilt disabled:opacity-60"
                >
                  {state === 'sending' ? 'Sending' : letter.cta}
                </button>
              </form>
            )}
            <p className="mt-4 text-small text-mauve">{letter.reassurance}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
