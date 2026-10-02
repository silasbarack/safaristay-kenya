import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, MapPin, Star, Users } from 'lucide-react';
import StayPhoto from '@/components/StayPhoto';
import { formatKes, getStay, stays } from '@/lib/stays';

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const stay = getStay(params.slug);
  return stay ? { title: stay.name, description: stay.summary } : {};
}

export default function StayPage({ params }: { params: { slug: string } }) {
  const stay = getStay(params.slug);
  if (!stay) notFound();

  return (
    <div className="ss-container py-10">
      <Link href="/stays" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-gold-700">
        <ArrowLeft className="h-4 w-4" aria-hidden /> All stays
      </Link>

      <StayPhoto stay={stay} size="large" priority className="mt-4 aspect-[4/3] animate-fade-in rounded-card sm:aspect-[5/2]" />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="ss-eyebrow">{stay.type}</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-ink">{stay.name}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" aria-hidden /> {stay.destination}, {stay.region}
            </span>
            <span className="flex items-center gap-1 text-ink">
              <Star className="h-4 w-4 fill-gold-500 text-gold-500" aria-hidden />
              <strong>{stay.rating.toFixed(1)}</strong>
              <span className="text-muted">({stay.reviews} reviews)</span>
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" aria-hidden /> Up to {stay.guests} guests
            </span>
          </div>
          <p className="mt-6 text-base leading-relaxed text-ink/85">{stay.description}</p>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-forest-900">What&apos;s included</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {stay.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-forest-600" aria-hidden /> {a}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-forest-900">Experiences</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stay.experiences.map((e) => (
              <li key={e} className="rounded-full border border-gold-300 bg-gold-50 px-3 py-1 text-sm text-gold-800">
                {e}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-card border border-line bg-white p-6 shadow-card lg:sticky lg:top-28">
          <p>
            <span className="text-2xl font-semibold text-forest-900">{formatKes(stay.pricePerNightKes)}</span>
            <span className="text-sm text-muted"> / night</span>
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <label className="text-xs font-semibold text-muted">
              Check-in
              <input type="date" className="ss-input mt-1" />
            </label>
            <label className="text-xs font-semibold text-muted">
              Check-out
              <input type="date" className="ss-input mt-1" />
            </label>
          </div>
          <button type="button" disabled className="ss-btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60">
            Booking opens soon
          </button>
          <p className="mt-3 text-center text-xs text-muted">Online booking with M-Pesa is coming next.</p>
        </aside>
      </div>
    </div>
  );
}
