'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, UserRound, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { href: '/stays', label: 'Stays' },
  { href: '/#destinations', label: 'Destinations' },
  { href: '/stays?collection=city', label: 'Business travel' },
  { href: '/#our-story', label: 'Our story' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return <header className="site-header">
    <div className="header-inner">
      <Logo className="header-logo" priority />
      <nav aria-label="Main" className="desktop-nav">
        {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link href="/sign-in" className="account-link" aria-label="Sign in"><UserRound size={21} aria-hidden /><span>Sign in</span></Link>
        <Link href="/stays" className="ss-btn-primary header-plan">Plan your stay <ArrowRight size={18} aria-hidden /></Link>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(value => !value)}>{open ? <X size={27} aria-hidden /> : <Menu size={28} aria-hidden />}</button>
      </div>
    </div>
    {open && <nav id="mobile-menu" aria-label="Mobile" className="mobile-nav">
      {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowRight size={17} aria-hidden /></Link>)}
      <Link href="/stays" className="ss-btn-primary" onClick={() => setOpen(false)}>Plan your stay <ArrowRight size={18} aria-hidden /></Link>
    </nav>}
  </header>;
}
