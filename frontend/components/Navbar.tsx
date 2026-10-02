'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import clsx from 'clsx';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/stays', label: 'Stays' },
  { href: '/#destinations', label: 'Destinations' },
  { href: '/#featured', label: 'Featured' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : !href.includes('#') && pathname.startsWith(href));

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300',
        scrolled ? 'shadow-[0_8px_24px_-18px_rgba(18,34,20,0.5)]' : 'border-b border-line',
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Logo className="h-12 sm:h-16" priority />

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium text-ink lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                'relative py-2 transition hover:text-forest-700',
                'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-forest-900 after:transition-transform after:duration-300',
                isActive(l.href) ? 'text-forest-900 after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            href="/stays"
            aria-label="Search stays"
            className="rounded-full p-2 text-ink transition hover:bg-sand hover:text-forest-700"
          >
            <Search className="h-5 w-5" aria-hidden />
          </Link>
          <Link href="/sign-in" className="ss-btn-primary hidden px-5 py-2 sm:inline-flex">
            Sign in
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-full p-2 text-ink transition hover:bg-sand lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="animate-menu-down border-t border-line bg-white lg:hidden">
          <ul className="ss-container flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    'block rounded-lg px-3 py-3 text-base font-medium transition hover:bg-sand',
                    isActive(l.href) ? 'text-forest-900' : 'text-ink',
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-3 pb-2 sm:hidden">
              <Link href="/sign-in" onClick={() => setOpen(false)} className="ss-btn-primary w-full py-3">
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
