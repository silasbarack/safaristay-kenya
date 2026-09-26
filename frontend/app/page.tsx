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
      {/* Hero: full-width hotel-room photo with the headline and search on top */}
      <section className="relative isolate overflow-hidden bg-forest-950">
        <Image
          src={photoSrc(photos.roomHero, 'hero')}
          alt={photos.roomHero.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[72%_center] md:object-center"
        />
        {/* Keeps white text readable: shades top and bottom on phones, the left side on wider screens */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/75 via-forest-950/45 to-forest-950/80 md:bg-gradient-to-r md:from-forest-950/90 md:via-forest-950/60 md:to-forest-950/10"
        />
        <div className="ss-container flex min-h-[560px] flex-col justify-center py-16 md:min-h-[640px] md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            Hotels · Lodges · Experiences
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Wake up to the <em className="text-gold-300">wild side</em> of Kenya.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            From tented camps on the Maasai Mara to beach villas in Diani, find your stay and book it in minutes.
          </p>
          <div className="mt-8 max-w-2xl">
            <SearchBar />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/75">Popular:</span>
            {destinations.map((d) => (
              <Link
                key={d.name}
                href={`/stays?destination=${encodeURIComponent(d.name)}`}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white backdrop-blur transition hover:border-gold-300 hover:bg-white/20"
              >
                {d.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/80">
            Rooms from <strong className="font-semibold text-white">{formatKes(lowestPrice)}</strong> / night
          </p>
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
