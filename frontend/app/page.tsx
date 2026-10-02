import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StayCard from '@/components/StayCard';
import SearchBar from '@/components/SearchBar';
import PhotoGallery from '@/components/PhotoGallery';
import DestinationChips from '@/components/DestinationChips';
import TrustBar from '@/components/TrustBar';
import FadeImage from '@/components/FadeImage';
import Reveal from '@/components/Reveal';
import { photos, photoSrc } from '@/lib/photos';
import { featuredStays } from '@/lib/stays';

// Staggers the hero's entrance: each line rises in a beat after the one above.
const enter = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function HomePage() {
  return (
    <>
      {/* Hero: savanna sunset with the headline; the search card overlaps its lower edge */}
      <section className="relative isolate overflow-hidden bg-forest-950">
        <div className="absolute inset-0 -z-10">
          <FadeImage
            src={photoSrc(photos.savannaHero, 'hero')}
            alt={photos.savannaHero.alt}
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
            loadedClassName="animate-hero-zoom"
            skeletonClassName="!bg-forest-900"
          />
        </div>
        {/* Keeps white text readable: shades the bottom on phones, the left side on wider screens */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/55 via-forest-950/35 to-forest-950/85 md:bg-gradient-to-r md:from-forest-950/85 md:via-forest-950/45 md:to-transparent"
        />
        <div className="ss-container flex min-h-[480px] flex-col justify-center pb-24 pt-14 sm:min-h-[540px] md:min-h-[600px] md:pb-32">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold-300" style={enter(150)}>
            Discover · Stay · Explore
          </p>
          <h1
            className="mt-4 max-w-2xl animate-fade-up font-serif text-[2.6rem] font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
            style={enter(300)}
          >
            Unforgettable Stays Across Kenya
          </h1>
          <p className="mt-5 max-w-lg animate-fade-up text-base text-white/85 sm:text-lg" style={enter(480)}>
            From luxury hotels to iconic safari lodges, find your perfect stay and experience the true magic of Kenya.
          </p>
        </div>
      </section>

      {/* Search card + destination quick links */}
      <section id="destinations" className="relative z-10 scroll-mt-24">
        <div className="ss-container -mt-16 md:-mt-20">
          <div className="animate-fade-up" style={enter(650)}>
            <SearchBar />
          </div>
          <div className="mt-6 sm:mt-8">
            <DestinationChips />
          </div>
        </div>
      </section>

      {/* Featured stays */}
      <section id="featured" className="ss-container scroll-mt-24 pt-14 sm:pt-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">Featured Stays</h2>
            <p className="mt-1 text-sm text-muted sm:text-base">Handpicked hotels, lodges and camps across Kenya</p>
          </div>
          <Link
            href="/stays"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-forest-900 hover:text-gold-700"
          >
            View all stays <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {featuredStays.map((stay, i) => (
            <Reveal key={stay.slug} delay={i * 110} className="h-full">
              <StayCard stay={stay} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="ss-container pt-10 sm:pt-12">
        <TrustBar />
      </section>

      {/* Gallery */}
      <section id="gallery" className="ss-container scroll-mt-24 pt-16">
        <Reveal>
          <p className="ss-eyebrow">Gallery</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">Pools, lodges and ocean views</h2>
          <p className="mt-2 max-w-2xl text-muted">
            A taste of the stays you can book with SafariStay — from thatched safari lodges to whitewashed coast hotels.
          </p>
        </Reveal>
        <div className="mt-8">
          <PhotoGallery />
        </div>
      </section>
    </>
  );
}
