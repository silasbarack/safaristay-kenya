import type { Metadata } from 'next';
import Link from 'next/link';
import StayCard from '@/components/StayCard';
import SearchBar from '@/components/SearchBar';
import Reveal from '@/components/Reveal';
import { RATES_CHECKED_ON, maxGuests, stays } from '@/lib/stays';

export const metadata: Metadata = { title: 'Stays' };

type SearchParams = { destination?: string; checkin?: string; checkout?: string; guests?: string };

export default function StaysPage({ searchParams }: { searchParams: SearchParams }) {
  const destination = searchParams.destination ?? '';
  const guests = Math.max(1, Number.parseInt(searchParams.guests ?? '', 10) || 1);
  const results = stays.filter((s) => (!destination || s.destination === destination) && maxGuests(s) >= guests);

  return (
    <div className="ss-container py-10 sm:py-12">
      <div className="animate-fade-up">
        <p className="ss-eyebrow">Stays</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-5xl">
          {destination ? `Stays in ${destination}` : 'All stays in Kenya'}
        </h1>
      </div>
      <div className="mt-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
        <SearchBar
          defaultDestination={destination}
          defaultCheckIn={searchParams.checkin}
          defaultCheckOut={searchParams.checkout}
          defaultGuests={searchParams.guests ? guests : undefined}
        />
      </div>
      <p className="mt-8 text-sm text-muted">
        {results.length} {results.length === 1 ? 'stay' : 'stays'} found
        {guests > 1 && ` for ${guests} guests`} · Rates from hotel websites, checked {RATES_CHECKED_ON}
      </p>
      {results.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((stay, i) => (
            <Reveal key={stay.slug} delay={(i % 4) * 90} className="h-full">
              <StayCard stay={stay} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-card border border-dashed border-line bg-white p-10 text-center">
          <p className="font-serif text-xl font-semibold text-ink">No stays match that search yet</p>
          <p className="mt-2 text-sm text-muted">Try another destination or fewer guests.</p>
          <Link href="/stays" className="ss-btn-primary mt-6">
            Show all stays
          </Link>
        </div>
      )}
    </div>
  );
}
