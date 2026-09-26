import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="ss-container py-24 text-center">
      <p className="ss-eyebrow">404</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-forest-900">This trail goes nowhere</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/stays" className="ss-btn-primary mt-8">
        Browse stays
      </Link>
    </div>
  );
}
