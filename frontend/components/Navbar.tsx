import Link from 'next/link';
import Logo from './Logo';

const links = [
  { href: '/stays', label: 'Stays' },
  { href: '/#destinations', label: 'Destinations' },
  { href: '/#why', label: 'Why SafariStay' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-container items-center justify-between gap-4 px-4 sm:px-6">
        <Logo className="h-16" priority />
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-gold-700">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/stays" className="ss-btn-primary">
          Book a stay
        </Link>
      </div>
    </header>
  );
}
