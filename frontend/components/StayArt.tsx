import clsx from 'clsx';
import type { Stay } from '@/lib/stays';

// Placeholder artwork in the logo's style (sun, hills, acacia) until real photos are added.
export default function StayArt({ stay, className }: { stay: Stay; className?: string }) {
  const [light, dark] = stay.palette;
  return (
    <div
      className={clsx('relative overflow-hidden', className)}
      style={{ background: `linear-gradient(180deg, #fdf9ef 0%, ${light}55 100%)` }}
      aria-hidden
    >
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full">
        <circle cx="270" cy="85" r="46" fill={light} />
        <path d="M0 150 Q120 110 230 140 T400 130 V200 H0 Z" fill={dark} opacity="0.85" />
        <path d="M0 170 Q140 140 260 168 T400 160 V200 H0 Z" fill={dark} />
        <g fill={dark}>
          <rect x="112" y="92" width="6" height="58" rx="2" />
          <ellipse cx="115" cy="88" rx="58" ry="10" />
          <ellipse cx="100" cy="78" rx="38" ry="8" />
          <ellipse cx="134" cy="80" rx="32" ry="7" />
        </g>
      </svg>
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-900">
        {stay.destination}
      </span>
    </div>
  );
}
