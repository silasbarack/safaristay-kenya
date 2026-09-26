import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Smartphone, Headset } from 'lucide-react';
import StayCard from '@/components/StayCard';
import SearchBar from '@/components/SearchBar';
import PhotoGallery from '@/components/PhotoGallery';
import { photos, photoSrc } from '@/lib/photos';
import { destinations, formatKes, stays } from '@/lib/stays';

const lowestPrice = Math.min(...stays.map((s) => s.pricePerNightKes));

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Hand-picked stays',
    body: 'Every hotel, lodge and camp is visited and vetted before it is listed.',
  },
  {
    icon: Smartphone,
    title: 'Pay with M-Pesa',
    body: 'Confirm your booking from your phone in seconds. Cards are accepted too.',
  },
  {
    icon: Headset,
    title: 'Local support',
    body: 'A Nairobi-based team is on hand before, during and after your trip.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="ss-container grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="ss-eyebrow">Hotels · Lodges · Experiences</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
              Wake up to the <span className="text-gold-600">wild side</span> of Kenya.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              From tented camps on the Maasai Mara to beach villas in Diani, find your stay and book it in minutes.
            </p>
            <div className="mt-8">
              <SearchBar />
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-card md:aspect-[5/4]">
              <Image
                src={photoSrc(photos.roomHero)}
                alt={photos.roomHero.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">Rooms from</p>
              <p className="font-serif text-xl font-semibold text-forest-900">{formatKes(lowestPrice)} / night</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured stays */}
      <section className="ss-container py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="ss-eyebrow">Featured</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-forest-900">Stays our guests love</h2>
          </div>
          <Link href="/stays" className="inline-flex items-center gap-1 text-sm font-semibold text-forest-900 hover:text-gold-700">
            See all stays <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stays.slice(0, 3).map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="ss-container scroll-mt-24 pb-16">
        <p className="ss-eyebrow">Gallery</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-forest-900">Pools, lodges and ocean views</h2>
        <p className="mt-2 max-w-2xl text-muted">
          A taste of the stays you can book with SafariStay — from thatched safari lodges to whitewashed coast hotels.
        </p>
        <div className="mt-8">
          <PhotoGallery />
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="scroll-mt-24 bg-forest-900 py-16 text-white">
        <div className="ss-container">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">Destinations</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold">Where will you wake up?</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {destinations.map((d) => (
              <Link
                key={d.name}
                href={`/stays?destination=${encodeURIComponent(d.name)}`}
                className="rounded-card border border-white/15 bg-white/5 p-5 transition hover:border-gold-400 hover:bg-white/10"
              >
                <p className="font-serif text-lg font-semibold">{d.name}</p>
                <p className="mt-1 text-sm text-white/70">
                  {d.count} {d.count === 1 ? 'stay' : 'stays'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="ss-container scroll-mt-24 py-16">
        <p className="ss-eyebrow">Why SafariStay</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-forest-900">Kenya, booked properly</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-card border border-line bg-white p-6 shadow-card">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-forest-900">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
