import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import clsx from 'clsx';
import { formatKes, type Stay } from '@/lib/stays';
import StayPhoto from './StayPhoto';

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={clsx('h-3.5 w-3.5', i <= Math.round(rating) ? 'fill-gold-500 text-gold-500' : 'fill-line text-line')}
        />
      ))}
    </span>
  );
}

export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <Link
      href={`/stays/${stay.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      <StayPhoto
        stay={stay}
        className="aspect-[4/3]"
        imageClassName="group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink group-hover:text-forest-700">{stay.name}</h3>
        <div className="mt-1.5 flex items-center gap-2 text-xs">
          <Stars rating={stay.rating} />
          <span className="text-muted">
            <span className="sr-only">Rated </span>
            {stay.rating.toFixed(1)} ({stay.reviews} reviews)
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1 text-xs text-muted">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {stay.destination}, {stay.region}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-ink/75">{stay.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <p className="leading-tight">
            <span className="block text-base font-bold text-ink">{formatKes(stay.pricePerNightKes)}</span>
            <span className="text-xs text-muted">/ night</span>
          </p>
          <span className="rounded-lg bg-forest-900 px-3.5 py-2 text-xs font-semibold text-white transition group-hover:bg-forest-700">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
