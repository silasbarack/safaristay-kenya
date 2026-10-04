import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Mail, MapPin, Phone, Users } from 'lucide-react';
import StayPhoto from '@/components/StayPhoto';
import FadeImage from '@/components/FadeImage';
import { photos, photoSrc } from '@/lib/photos';
import { RATES_CHECKED_ON, dialable, formatKes, formatUsd, fromUsd, getStay, maxGuests, stays } from '@/lib/stays';
import { enquiryHref, getResidentPackage, kenyaDate, validateSearch, type BookingQuery } from '@/lib/booking';

export const revalidate = 3600;
export function generateStaticParams() { return stays.map(stay => ({ slug: stay.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const stay = getStay(params.slug);
  return stay ? { title: stay.name, description: stay.summary } : {};
}

export default function StayPage({ params, searchParams }: { params: { slug: string }; searchParams: Record<string, string | string[] | undefined> }) {
  const stay = getStay(params.slug);
  if (!stay) notFound();
  let query: BookingQuery = {};
  for (const key of ['checkin', 'checkout', 'guests'] as const) if (typeof searchParams[key] === 'string') query[key] = searchParams[key] as string;
  const error = validateSearch(query, kenyaDate());
  if (error) query = {};
  const guests = Number(query.guests) || 1;
  const usd = fromUsd(stay, guests);
  const offer = getResidentPackage(stay.slug, query.checkin || kenyaDate(), query.checkout);
  const host = new URL(stay.website).hostname.replace(/^www\./, '');

  return <div className="premium-container py-8">
    <Link href="/stays" className="text-link"><ArrowLeft size={16} aria-hidden />Back to the collection</Link>
    <div className="detail-heading"><div><p className="premium-eyebrow">{stay.type}<span aria-hidden /></p><h1>{stay.name}</h1><div className="detail-meta"><span><MapPin size={15} aria-hidden />{stay.area}</span><span><Users size={15} aria-hidden />Rooms for up to {maxGuests(stay)} guests</span></div></div><a href={stay.website} target="_blank" rel="noopener noreferrer" className="ss-btn-outline">Official hotel website <ArrowUpRight size={18} aria-hidden /></a></div>
    <div className="grid gap-3 sm:grid-cols-3 sm:grid-rows-2"><StayPhoto stay={stay} size="large" priority className="aspect-[4/3] rounded-lg sm:col-span-2 sm:row-span-2 sm:aspect-auto" />{stay.gallery.slice(0, 2).map(key => <div key={key} className="relative hidden aspect-[4/3] overflow-hidden rounded-lg bg-forest-100 sm:block"><FadeImage src={photoSrc(photos[key], 'small')} alt={photos[key].alt} sizes="33vw" className="object-cover" /></div>)}</div>
    <p className="image-note">Illustrative editorial images. See the hotel&apos;s official website for photographs of this property.</p>
    {error && <p role="alert" className="booking-error mt-4">{error} Contact the hotel to confirm your travel dates.</p>}
    <div className="detail-grid">
      <div className="detail-copy"><p>{stay.description}</p><h2>The experience</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{stay.highlights.map(item => <li key={item} className="flex items-start gap-3 text-sm text-muted"><Check size={17} className="shrink-0 text-gold-600" aria-hidden />{item}</li>)}</ul>
        <h2>Rooms &amp; published rates</h2><div className="detail-room-table"><table className="w-full text-left"><thead><tr><th>Room</th><th className="hidden sm:table-cell">Guests</th><th className="text-right">From / night</th></tr></thead><tbody>{stay.rooms.map(room => <tr key={room.name}><td>{room.name}<small className="mt-1 block text-[10px] text-muted">Up to {room.sleeps} guests{room.sleeps < guests ? ' · Smaller than your party' : ''}</small></td><td className="hidden sm:table-cell">{room.sleeps}</td><td className="whitespace-nowrap text-right font-medium">{formatUsd(room.fromUsd)}</td></tr>)}</tbody></table></div>
        <p className="rate-note">Starting room prices published by {host}, checked {RATES_CHECKED_ON}. The hotel confirms your occupancy, meal plan, taxes and final rate for your dates. <a href={stay.website} target="_blank" rel="noopener noreferrer" className="underline">View the source.</a></p>
        {offer && <section className="resident-offer"><p className="premium-eyebrow">East African residents<span aria-hidden /></p><h3>A safari, thoughtfully packaged</h3><div className="offer-prices"><div><strong>{formatKes(offer.firstNightKes)}</strong><span>First night · per person</span></div><div><strong>{formatKes(offer.extraNightKes)}</strong><span>Extra night · per person</span></div></div><p>Published for stays from 1 October to 22 December 2026. Includes full-board accommodation, two game drives and standard transfers. Proof of residency is required.</p><p>Park entrance fees are excluded. Some room and transfer supplements apply. Subject to availability and the hotel&apos;s terms.</p><a href={offer.source} target="_blank" rel="noopener noreferrer">View the official offer and all terms <ExternalLink size={14} aria-hidden /></a></section>}
        <h2>Make the most of your stay</h2><p className="mt-3">Before reserving, ask about your preferred room, transfers, included meals and cancellation terms. Safari stays may have separate park or conservancy fees.</p><a href={`https://www.google.com/maps/search/?${new URLSearchParams({ api: '1', query: `${stay.name}, ${stay.area}, Kenya` })}`} target="_blank" rel="noopener noreferrer" className="text-link mt-3">View location on Google Maps <ArrowUpRight size={17} aria-hidden /></a>
      </div>
      <aside className="hotel-contact-panel"><p className="premium-eyebrow">Make it happen<span aria-hidden /></p><h2 className="mt-3">Speak with the hotel</h2><div className="stay-price mt-5"><span>Published room rate from</span><p>{usd === null ? 'Ask about multiple rooms' : formatUsd(usd)}<small>{usd !== null && ' / night'}</small></p></div>
        {query.checkin && <p className="rate-note">Your enquiry: {query.checkin} to {query.checkout}{query.guests && ` · ${query.guests} guests`}.</p>}
        <div className="mt-5">{stay.contact.phones.map((phone, index) => <a key={phone} href={`tel:${dialable(phone)}`} className={index === 0 ? 'ss-btn-primary' : 'ss-btn-outline'}><Phone size={16} aria-hidden />{phone}</a>)}</div>
        <a href={enquiryHref(stay, query)} className="ss-btn-outline"><Mail size={16} aria-hidden />Prepare an email enquiry</a><a href={enquiryHref(stay, query)} className="hotel-email">{stay.contact.email}</a>
        {stay.contact.reservationsPhone && <p className="rate-note">Central reservations: <a href={`tel:${dialable(stay.contact.reservationsPhone)}`} className="underline">{stay.contact.reservationsPhone}</a></p>}
        <a href={stay.website} target="_blank" rel="noopener noreferrer" className="text-link mt-3">Check rates on the official site <ExternalLink size={14} aria-hidden /></a><p className="contact-panel-note">Confirm availability and the total price with the hotel. Reservations and payments are handled directly by the hotel. SafariStay is an independent guide.</p>
      </aside>
    </div>
  </div>;
}
