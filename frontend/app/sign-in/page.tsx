import type { Metadata } from 'next';
import Link from 'next/link';
import { UserRound } from 'lucide-react';

export const metadata: Metadata = { title: 'Sign in' };

export default function SignInPage() {
  return (
    <div className="ss-container flex justify-center py-16 sm:py-24">
      <div className="w-full max-w-md animate-fade-up rounded-card border border-line bg-white p-8 text-center shadow-card">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700">
          <UserRound className="h-6 w-6" aria-hidden />
        </span>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-ink">Sign in</h1>
        <p className="mt-2 text-sm text-muted">
          Guest accounts — to save stays and keep track of your enquiries — are coming soon. You can browse every stay in the
          meantime.
        </p>
        <Link href="/stays" className="ss-btn-primary mt-6 w-full py-3">
          Browse stays
        </Link>
      </div>
    </div>
  );
}
