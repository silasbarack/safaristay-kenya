import Link from 'next/link';
import { BedDouble, MapPin, Users } from 'lucide-react';
import { approxKes, formatKes, formatUsd, fromUsd, maxGuests, type Stay } from '@/lib/stays';
import StayPhoto from './StayPhoto';

export default function StayCard({ stay }: { stay: Stay }) {
  const usd = fromUsd(stay);
  return (
    <Link
      href={`/stays/${stay.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
    >
      <StayPhoto stay={stay} className="aspect-[4/3]" imageClassName="group-hover:scale-105" />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink group-hover:text-forest-700">{stay.name}</h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <span className="flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" aria-hidden />
            {stay.type}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" aria-hidden />
            Sleeps up to {maxGuests(stay)}
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1 text-xs text-muted">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {stay.area}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-ink/75">{stay.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <p className="leading-tight">
            <span className="text-xs text-muted">From </span>
            <span className="text-base font-bold text-ink">{formatUsd(usd)}</span>
            <span className="block text-xs text-muted">≈ {formatKes(approxKes(usd))} / night</span>
          </p>
          <span className="shrink-0 rounded-lg bg-forest-900 px-3.5 py-2 text-xs font-semibold text-white transition group-hover:bg-forest-700">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
