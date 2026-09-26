import type { Metadata } from 'next';
import StayCard from '@/components/StayCard';
import SearchBar from '@/components/SearchBar';
import { stays } from '@/lib/stays';

export const metadata: Metadata = { title: 'Stays' };

export default function StaysPage({ searchParams }: { searchParams: { destination?: string } }) {
  const destination = searchParams.destination ?? '';
  const results = destination ? stays.filter((s) => s.destination === destination) : stays;

  return (
    <div className="ss-container py-12">
      <p className="ss-eyebrow">Stays</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-forest-900">
        {destination ? `Stays in ${destination}` : 'All stays in Kenya'}
      </h1>
      <div className="mt-6 max-w-2xl">
        <SearchBar defaultDestination={destination} />
      </div>
      <p className="mt-8 text-sm text-muted">
        {results.length} {results.length === 1 ? 'stay' : 'stays'} found
      </p>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((stay) => (
          <StayCard key={stay.slug} stay={stay} />
        ))}
      </div>
    </div>
  );
}
