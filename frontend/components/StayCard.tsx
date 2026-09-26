import Link from 'next/link';
import { MapPin, Star, Users } from 'lucide-react';
import { formatKes, type Stay } from '@/lib/stays';
import StayArt from './StayArt';

export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <Link
      href={`/stays/${stay.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition hover:-translate-y-1"
    >
      <StayArt stay={stay} className="h-48" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-xs">
          <span className="ss-eyebrow">{stay.type}</span>
          <span className="flex items-center gap-1 font-semibold text-ink">
            <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" aria-hidden />
            {stay.rating.toFixed(1)}
            <span className="font-normal text-muted">({stay.reviews})</span>
          </span>
        </div>
        <h3 className="mt-2 font-serif text-xl font-semibold text-forest-900 group-hover:text-gold-700">
          {stay.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted">
          <MapPin className="h-4 w-4" aria-hidden />
          {stay.destination}, {stay.region}
        </p>
        <p className="mt-3 text-sm text-ink/80">{stay.summary}</p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <p>
            <span className="text-lg font-semibold text-forest-900">{formatKes(stay.pricePerNightKes)}</span>
            <span className="text-sm text-muted"> / night</span>
          </p>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Users className="h-4 w-4" aria-hidden />
            Up to {stay.guests}
          </span>
        </div>
      </div>
    </Link>
  );
}
