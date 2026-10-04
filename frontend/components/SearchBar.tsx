'use client';

import { ArrowRight, CalendarDays, MapPin, UsersRound } from 'lucide-react';
import { useEffect, useId, useState, type FormEvent, type ReactNode } from 'react';
import { destinations } from '@/lib/stays';
import { kenyaDate, validateSearch, type BookingQuery } from '@/lib/booking';

type Props = {
  defaultDestination?: string;
  defaultCheckIn?: string;
  defaultCheckOut?: string;
  defaultGuests?: number;
  collection?: string;
  variant?: 'hero' | 'bar';
};

export default function SearchBar({ defaultDestination = '', defaultCheckIn = '', defaultCheckOut = '', defaultGuests = 2, collection = '', variant = 'bar' }: Props) {
  const id = useId();
  const [error, setError] = useState<string | null>(null);
  const [arrival, setArrival] = useState(defaultCheckIn);
  const [today, setToday] = useState('');
  useEffect(() => setToday(kenyaDate()), []);

  function submit(event: FormEvent<HTMLFormElement>) {
    const values = Object.fromEntries(new FormData(event.currentTarget)) as BookingQuery;
    const message = validateSearch(values, kenyaDate());
    setError(message);
    if (message) event.preventDefault();
  }

  function field(label: string, name: string, icon: ReactNode, child: ReactNode, full = false) {
    return <div className={`booking-field ${full ? 'booking-field--full' : ''}`}>
      <span className="booking-icon">{icon}</span>
      <div className="booking-control"><label htmlFor={`${id}-${name}`}>{label}</label>{child}</div>
    </div>;
  }

  return <form action="/stays" method="get" className={`search-form search-form--${variant}`} onSubmit={submit} aria-label="Find a stay">
    {variant === 'hero' && <h2>Find your next stay</h2>}
    {collection && <input type="hidden" name="collection" value={collection} />}
    {field('Destination', 'destination', <MapPin size={20} aria-hidden />, <select id={`${id}-destination`} name="destination" defaultValue={defaultDestination}>
      <option value="">Where to?</option>
      {destinations.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
    </select>, true)}
    {field('Arrival', 'checkin', <CalendarDays size={20} aria-hidden />, <input id={`${id}-checkin`} name="checkin" type="date" defaultValue={defaultCheckIn} min={today || undefined} onChange={event => setArrival(event.target.value)} />)}
    {field('Departure', 'checkout', <CalendarDays size={20} aria-hidden />, <input id={`${id}-checkout`} name="checkout" type="date" defaultValue={defaultCheckOut} min={arrival || today || undefined} />)}
    {field('Guests', 'guests', <UsersRound size={20} aria-hidden />, <select id={`${id}-guests`} name="guests" defaultValue={String(defaultGuests)}>
      {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
    </select>, true)}
    {error && <p role="alert" className="booking-error">{error}</p>}
    <button type="submit" className="ss-btn-primary booking-submit">Discover stays <ArrowRight size={19} aria-hidden /></button>
    {variant === 'hero' && <p className="booking-note">Browse stays. Confirm availability directly with the hotel.</p>}
  </form>;
}
