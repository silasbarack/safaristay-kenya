import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone, Users } from 'lucide-react';
import { dialable, formatKes, formatUsd, fromUsd, maxGuests, usdToKes, type Stay } from '@/lib/stays';
import { enquiryHref, getResidentPackage, kenyaDate, type BookingQuery } from '@/lib/booking';
import StayPhoto from './StayPhoto';

export default function StayCard({ stay, query = {} }: { stay: Stay; query?: BookingQuery }) {
  const usd = fromUsd(stay, Number(query.guests) || 1);
  const offer = getResidentPackage(stay.slug, query.checkin || kenyaDate(), query.checkout);
  const parameters = new URLSearchParams();
  for (const key of ['checkin', 'checkout', 'guests'] as const) if (query[key]) parameters.set(key, query[key]!);
  const href = `/stays/${stay.slug}${parameters.size ? `?${parameters}` : ''}`;

  return <article className="stay-card">
    <Link href={href} className="stay-card-image" aria-label={`View ${stay.name}`}><StayPhoto stay={stay} className="aspect-[4/3]" imageClassName="group-hover:scale-105" /><span className="stay-open"><ArrowUpRight size={20} aria-hidden /></span></Link>
    <div className="stay-card-body">
      <p className="stay-category">{stay.type}</p><h3><Link href={href}>{stay.name}</Link></h3>
      <p className="stay-location"><MapPin size={14} aria-hidden />{stay.destination}<span>·</span><Users size={14} aria-hidden />Up to {maxGuests(stay)}</p>
      <p className="stay-summary">{stay.summary}</p>
      <div className="stay-price"><span>Published room rate from</span><p>{usd === null ? 'Ask about room options' : formatUsd(usd)}<small>{usd !== null && ' / night'}</small></p>{usd !== null && <small className="mt-1 block">≈ {formatKes(usdToKes(usd))}</small>}</div>
      {offer && <div className="resident-price"><span>EA resident safari package</span><strong>{formatKes(offer.firstNightKes)}<small> / person · 1 night</small></strong></div>}
      <div className="stay-card-actions"><a href={`tel:${dialable(stay.contact.phones[0])}`} className="ss-btn-primary"><Phone size={15} aria-hidden />Call hotel</a><a href={enquiryHref(stay, query)} className="ss-btn-outline"><Mail size={15} aria-hidden />Enquire</a></div>
      <Link href={href} className="stay-details-link">Rooms, rates &amp; contact details <ArrowUpRight size={15} aria-hidden /></Link>
    </div>
  </article>;
}
