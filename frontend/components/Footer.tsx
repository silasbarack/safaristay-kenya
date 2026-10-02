import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 scroll-mt-24 border-t border-line bg-white sm:mt-24">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo className="h-24" />
          <p className="mt-4 max-w-sm text-sm text-muted">
            Hand-picked hotels, lodges and experiences across Kenya — from the Mara plains to the Mombasa coast.
          </p>
        </div>
        <div>
          <h3 className="ss-eyebrow">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/stays" className="hover:text-gold-700">All stays</Link></li>
            <li><Link href="/#featured" className="hover:text-gold-700">Featured stays</Link></li>
            <li><Link href="/#destinations" className="hover:text-gold-700">Destinations</Link></li>
            <li><Link href="/#gallery" className="hover:text-gold-700">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="ss-eyebrow">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Nairobi, Kenya</li>
            <li>Book directly with each hotel</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} SafariStay Kenya. All rights reserved. · Photos:{' '}
        <a href="https://unsplash.com" className="underline hover:text-gold-700" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
      </div>
    </footer>
  );
}
