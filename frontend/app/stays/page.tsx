import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StayCard from '@/components/StayCard';
import SearchBar from '@/components/SearchBar';
import { RATES_CHECKED_ON, maxGuests, stays } from '@/lib/stays';
import { kenyaDate, validateSearch, type BookingQuery } from '@/lib/booking';

export const metadata: Metadata = { title: 'Find your stay' };
type SearchParams = Record<string, string | string[] | undefined>;
const collections = [{ key: '', title: 'All stays' }, { key: 'city', title: 'City & business' }, { key: 'safari', title: 'Safari retreats' }, { key: 'coast', title: 'Coastal escapes' }];

export default function StaysPage({ searchParams }: { searchParams: SearchParams }) {
  const query: BookingQuery = {};
  for (const key of ['destination', 'collection', 'checkin', 'checkout', 'guests'] as const) if (typeof searchParams[key] === 'string') query[key] = searchParams[key] as string;
  const { destination = '', collection = '' } = query;
  const guests = Number(query.guests) || 1;
  const error = validateSearch(query, kenyaDate());
  const results = error ? [] : stays.filter(stay =>
    (!destination || stay.destination === destination) && maxGuests(stay) >= guests &&
    (collection === 'city' ? stay.type === 'Hotel' : collection === 'coast' ? stay.type === 'Beach resort' : collection === 'safari' ? stay.type === 'Safari lodge' || stay.type === 'Tented camp' : true)
  );
  const title = destination ? `Stays in ${destination}` : collections.find(item => item.key === collection)?.title || 'All stays in Kenya';

  return <div className="premium-container">
    <div className="listing-header"><p className="premium-eyebrow">A considered collection<span aria-hidden /></p><h1 className="listing-title">{title === 'All stays' ? 'Find your kind of extraordinary' : title}</h1><p className="section-intro">City comfort, safari wonder and coastal calm. Explore your options and reserve directly with the hotel.</p></div>
    <nav aria-label="Stay collections" className="collection-tabs">{collections.map(item => {
      const values = new URLSearchParams();
      if (item.key) values.set('collection', item.key);
      for (const key of ['checkin', 'checkout', 'guests'] as const) if (query[key]) values.set(key, query[key]!);
      return <Link key={item.key} href={`/stays${values.size ? `?${values}` : ''}`} aria-current={collection === item.key ? 'page' : undefined}>{item.title}</Link>;
    })}</nav>
    <SearchBar key={JSON.stringify(query)} defaultDestination={destination} defaultCheckIn={query.checkin} defaultCheckOut={query.checkout} defaultGuests={query.guests ? guests : undefined} collection={collection} />
    {error ? <p role="alert" className="booking-error mt-6">{error}</p> : <p className="results-summary"><strong>{results.length} {results.length === 1 ? 'stay' : 'stays'}</strong> match your preferences{guests > 1 ? ` for ${guests} guests` : ''}.{query.checkin && ` Your dates: ${query.checkin} to ${query.checkout}.`} Confirm availability with the hotel.</p>}
    {results.length ? <div className="featured-grid search-results">{results.map(stay => <StayCard key={stay.slug} stay={stay} query={query} />)}</div> : !error && <div className="rounded-lg border border-line bg-white p-8"><h2 className="font-serif text-3xl">Let&apos;s find another option.</h2><p className="section-intro">Try a different collection or destination. For a larger group or multiple rooms, contact a hotel directly.</p><Link href="/stays" className="ss-btn-primary mt-5">Browse all hotels <ArrowRight size={18} aria-hidden /></Link></div>}
    <p className="rate-note mb-8">Published room rates and official contact details checked {RATES_CHECKED_ON}. Final prices depend on dates and occupancy. KES resident packages require proof of East African residency and exclude park fees.</p>
  </div>;
}
