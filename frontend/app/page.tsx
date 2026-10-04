import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Compass, Mail, MapPin, Phone, ShieldCheck, Waves } from 'lucide-react';
import StayCard from '@/components/StayCard';
import SearchBar from '@/components/SearchBar';
import { photos, photoSrc } from '@/lib/photos';
import { dialable, featuredStays, RATES_CHECKED_ON, stays } from '@/lib/stays';

// Recheck date-limited offer visibility at least hourly.
export const revalidate = 3600;

const collections = [
  { key: 'city', title: 'City & business', subtitle: 'Contemporary stays for work and well-being', photo: photos.cityHotelRoom, icon: Building2 },
  { key: 'safari', title: 'Safari retreats', subtitle: 'Intimate lodges in extraordinary places', photo: photos.timberSafariRoom, icon: Compass },
  { key: 'coast', title: 'Coastal escapes', subtitle: 'Indian Ocean days. Unhurried moments.', photo: photos.oceanInfinityPool, icon: Waves },
];

export default function HomePage() {
  return <>
    <section className="premium-hero" aria-labelledby="hero-heading">
      <div className="hero-photo">
        <img src="https://image-tc.galaxy.tf/wijpeg-uljpscbwhe9wiv6oxto8jou8/1-hotel-aerial-view-1.jpg" alt="Aerial view of Serena Beach Resort & Spa on Kenya's coast, with its pool, palm gardens and the Indian Ocean" className="absolute inset-0 h-full w-full object-cover" loading="eager" fetchPriority="high" />
        <span className="hero-photo-caption">A little closer to extraordinary.</span>
      </div>
      <div className="hero-copy">
        <p className="premium-eyebrow">Kenya, beautifully experienced<span aria-hidden /></p>
        <h1 id="hero-heading" className="hero-title"><span>Extraordinary stays.</span><span>Exceptional journeys.</span></h1>
        <p className="hero-description">Discover 10 handpicked Kenyan stays — refined Nairobi hotels, intimate safari retreats and unforgettable Indian Ocean escapes — with direct hotel contacts and transparent starting rates.</p>
        <div className="hero-actions">
          <Link href="#destinations" className="ss-btn-primary">Explore the collection <ArrowRight size={19} aria-hidden /></Link>
          <Link href="#hotel-contacts" className="ss-btn-outline">Speak to a hotel <Phone size={18} aria-hidden /></Link>
        </div>
        <div className="hero-proof"><span />Thoughtfully selected. Beautifully Kenyan.</div>
      </div>
      <div className="hero-booking"><SearchBar variant="hero" /></div>
    </section>

    <section id="destinations" className="premium-container section-space scroll-mt-32">
      <div className="section-heading">
        <div><p className="premium-eyebrow">The curated collection<span aria-hidden /></p><h2>A stay for every occasion</h2></div>
        <Link href="/stays" className="text-link">View all stays <ArrowRight size={19} aria-hidden /></Link>
      </div>
      <div className="collection-grid">
        {collections.map(collection => <Link key={collection.key} href={`/stays?collection=${collection.key}`} className="collection-tile">
          <Image src={photoSrc(collection.photo)} alt={collection.photo.alt} fill sizes="(min-width: 900px) 33vw, 90vw" className="object-cover" />
          <div className="collection-shade" />
          <div className="collection-copy"><collection.icon size={22} strokeWidth={1.4} aria-hidden /><h3>{collection.title}</h3><p>{collection.subtitle}</p></div>
          <span className="collection-arrow"><ArrowRight size={23} aria-hidden /></span>
        </Link>)}
      </div>
      <p className="image-note">Collection imagery is editorial; every hotel listing below now uses property-specific photography.</p>
    </section>

    <section className="premium-container assurance-strip" aria-label="How to book">
      <div><ShieldCheck size={28} strokeWidth={1.3} aria-hidden /><p><strong>Official hotel information</strong><span>Published rates and direct contacts</span></p></div>
      <div><Phone size={28} strokeWidth={1.3} aria-hidden /><p><strong>Book directly</strong><span>Speak with the hotel before reserving</span></p></div>
      <div><MapPin size={28} strokeWidth={1.3} aria-hidden /><p><strong>Remarkable Kenya</strong><span>City, safari, coast and the Rift Valley</span></p></div>
    </section>

    <section id="featured" className="premium-container section-space scroll-mt-32">
      <div className="section-heading">
        <div><p className="premium-eyebrow">10 places worth discovering<span aria-hidden /></p><h2>Remarkable stays, real possibilities</h2><p className="section-intro">Compare hotel starting rates in dollars with approximate KES equivalents, see property-specific photography, then enquire directly with the hotel.</p></div>
        <Link href="/stays" className="text-link">Explore all hotels <ArrowRight size={19} aria-hidden /></Link>
      </div>
      <div className="featured-grid">{featuredStays.map(stay => <StayCard key={stay.slug} stay={stay} />)}</div>
      <p className="rate-note">Rates and contacts checked {RATES_CHECKED_ON}. Dollar room rates include an approximate KES equivalent at $1 = KES 129.76 for comparison. Final hotel pricing varies with dates, occupancy, taxes and availability.</p>
    </section>

    <section id="our-story" className="story-section scroll-mt-32">
      <div className="premium-container story-inner">
        <div id="gallery" className="story-photo"><Image src={photoSrc(photos.beachPergola)} alt={photos.beachPergola.alt} fill sizes="(min-width: 900px) 40vw, 90vw" className="object-cover" /><span>From the savanna to the sea</span></div>
        <div className="story-copy"><p className="premium-eyebrow">An invitation to explore<span aria-hidden /></p><h2>Less searching.<br />More looking forward.</h2><p>Kenya is a country of remarkable contrasts. A productive day in Nairobi. The quiet of the Mara. A slow morning beside the Indian Ocean.</p><p>SafariStay brings together a considered selection of Kenyan hotels and lodges, with published pricing and direct hotel contacts to help you plan with confidence.</p><Link href="/stays" className="ss-btn-outline">Find your kind of escape <ArrowRight size={19} aria-hidden /></Link><small>An independent guide. Reservations and payments are handled by each hotel.</small></div>
      </div>
    </section>

    <section id="hotel-contacts" className="premium-container section-space scroll-mt-32">
      <div className="section-heading"><div><p className="premium-eyebrow">Start a conversation<span aria-hidden /></p><h2>Your next stay starts here</h2><p className="section-intro">Ask the hotel about your dates, room choice, meals and the final price.</p></div><Link href="/stays" className="text-link">Browse hotel details <ArrowRight size={19} aria-hidden /></Link></div>
      <div className="contact-directory">{stays.map(stay => <article key={stay.slug}>
        <p className="contact-destination">{stay.destination}</p><h3><Link href={`/stays/${stay.slug}`}>{stay.name}</Link></h3>
        <a href={`tel:${dialable(stay.contact.phones[0])}`}><Phone size={16} aria-hidden />{stay.contact.phones[0]}</a>
        <a href={`mailto:${stay.contact.email}`}><Mail size={16} aria-hidden /><span>{stay.contact.email}</span></a>
      </article>)}</div>
    </section>
  </>;
}
