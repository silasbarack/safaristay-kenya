import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, ExternalLink, Mail, MapPin, MessageCircle, Phone, Users } from 'lucide-react';
import StayPhoto from '@/components/StayPhoto';
import FadeImage from '@/components/FadeImage';
import Reveal from '@/components/Reveal';
import { photos, photoSrc } from '@/lib/photos';
import {
  RATES_CHECKED_ON,
  approxKes,
  dialable,
  formatKes,
  formatUsd,
  fromUsd,
  getStay,
  maxGuests,
  stays,
} from '@/lib/stays';

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

  const usd = fromUsd(stay);
  const { contact } = stay;
  const enquiry = encodeURIComponent(`Booking enquiry: ${stay.name}`);
  const host = new URL(stay.website).hostname.replace(/^www\./, '');

  return (
    <div className="ss-container py-10">
      <Link href="/stays" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-gold-700">
        <ArrowLeft className="h-4 w-4" aria-hidden /> All stays
      </Link>

      {/* Main photo + two smaller ones from the stay's gallery */}
      <div className="mt-4 grid animate-fade-in gap-3 sm:grid-cols-3 sm:grid-rows-2">
        <StayPhoto stay={stay} size="large" priority className="aspect-[4/3] rounded-card sm:col-span-2 sm:row-span-2 sm:aspect-auto" />
        {stay.gallery.slice(0, 2).map((key) => (
          <div key={key} className="relative hidden aspect-[4/3] overflow-hidden rounded-card bg-forest-100 sm:block">
            <FadeImage src={photoSrc(photos[key], 'small')} alt={photos[key].alt} sizes="33vw" className="object-cover" />
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">Illustrative photos — not of this property.</p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="ss-eyebrow">{stay.type}</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">{stay.name}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" aria-hidden /> {stay.area}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" aria-hidden /> Rooms for up to {maxGuests(stay)} guests
            </span>
          </div>
          <p className="mt-6 text-base leading-relaxed text-ink/85">{stay.description}</p>

          <h2 className="mt-10 font-serif text-2xl font-semibold text-ink">Highlights</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {stay.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-forest-600" aria-hidden /> {h}
              </li>
            ))}
          </ul>

          <Reveal>
            <h2 className="mt-10 font-serif text-2xl font-semibold text-ink">Rooms &amp; rates</h2>
            <div className="mt-4 overflow-hidden rounded-card border border-line bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-sand text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Room</th>
                    <th className="hidden px-4 py-3 font-semibold sm:table-cell">Sleeps</th>
                    <th className="px-4 py-3 text-right font-semibold">From / night</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {stay.rooms.map((r) => (
                    <tr key={r.name}>
                      <td className="px-4 py-3">
                        <span className="font-medium text-ink">{r.name}</span>
                        <span className="block text-xs text-muted sm:hidden">Sleeps {r.sleeps}</span>
                      </td>
                      <td className="hidden px-4 py-3 text-muted sm:table-cell">{r.sleeps}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-semibold text-ink">{formatUsd(r.fromUsd)}</span>
                        <span className="block text-xs text-muted">≈ {formatKes(approxKes(r.fromUsd))}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-muted">
              Rates are the hotel&apos;s own &ldquo;from&rdquo; prices on {host}, checked {RATES_CHECKED_ON}. They change daily;
              KES amounts are approximate.
            </p>
          </Reveal>
        </div>

        <aside className="h-fit rounded-card border border-line bg-white p-6 shadow-card lg:sticky lg:top-28">
          <p className="text-sm text-muted">From</p>
          <p>
            <span className="text-2xl font-semibold text-ink">{formatUsd(usd)}</span>
            <span className="text-sm text-muted"> / night</span>
          </p>
          <p className="text-sm text-muted">≈ {formatKes(approxKes(usd))}</p>

          <h2 className="mt-6 text-sm font-semibold text-ink">Book directly with the hotel</h2>
          <div className="mt-3 space-y-2">
            {contact.whatsapp && (
              <a
                href={`https://wa.me/${dialable(contact.whatsapp).replace('+', '')}?text=${enquiry}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ss-btn-primary w-full bg-[#1f7a46] py-3 hover:bg-[#186338]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp {contact.whatsapp}
              </a>
            )}
            {contact.phones.map((phone, i) => (
              <a
                key={phone}
                href={`tel:${dialable(phone)}`}
                className={i === 0 ? 'ss-btn-primary w-full py-3' : 'flex w-full items-center justify-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-forest-700'}
              >
                <Phone className="h-4 w-4" aria-hidden /> Call {phone}
              </a>
            ))}
            <a
              href={`mailto:${contact.email}?subject=${enquiry}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-forest-700"
            >
              <Mail className="h-4 w-4" aria-hidden /> {contact.email}
            </a>
          </div>

          {contact.reservationsPhone && (
            <p className="mt-4 text-xs text-muted">
              Central reservations:{' '}
              <a href={`tel:${dialable(contact.reservationsPhone)}`} className="font-medium text-ink underline hover:text-gold-700">
                {contact.reservationsPhone}
              </a>
            </p>
          )}
          <a
            href={stay.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest-900 hover:text-gold-700"
          >
            Official website: {host} <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <p className="mt-4 border-t border-line pt-4 text-xs text-muted">
            Contact details are from the hotel&apos;s official website. SafariStay isn&apos;t affiliated with the hotel —
            you book and pay with the hotel directly.
          </p>
        </aside>
      </div>
    </div>
  );
}
