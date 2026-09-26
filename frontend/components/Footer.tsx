import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="h-24" />
          <p className="mt-4 max-w-sm text-sm text-muted">
            Hand-picked hotels, lodges and experiences across Kenya — from the Mara plains to the Diani coast.
          </p>
        </div>
        <div>
          <h3 className="ss-eyebrow">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/stays" className="hover:text-gold-700">All stays</Link></li>
            <li><Link href="/#destinations" className="hover:text-gold-700">Destinations</Link></li>
            <li><Link href="/#why" className="hover:text-gold-700">Why SafariStay</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="ss-eyebrow">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Nairobi, Kenya</li>
            <li>Pay securely with M-Pesa or card</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} SafariStay Kenya. All rights reserved.
      </div>
    </footer>
  );
}
