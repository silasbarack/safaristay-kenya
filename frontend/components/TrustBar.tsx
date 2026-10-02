import { BadgeDollarSign, Headset, Phone, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const items = [
  { icon: ShieldCheck, title: 'Verified Stays', body: 'Real hotels, official details' },
  { icon: Phone, title: 'Book Direct', body: 'Call or email the hotel' },
  { icon: BadgeDollarSign, title: 'Real Rates', body: 'From prices on hotel sites' },
  { icon: Headset, title: 'Local Knowledge', body: 'Kenyan-based team' },
];

export default function TrustBar() {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-5 rounded-card border border-line bg-white px-5 py-6 shadow-sm sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, body }, i) => (
        <Reveal as="li" key={title} delay={i * 90} className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">{title}</span>
            <span className="block text-xs text-muted">{body}</span>
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
