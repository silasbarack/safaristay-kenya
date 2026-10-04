import clsx from 'clsx';
import type { Stay } from '@/lib/stays';

type StayPhotoProps = {
  stay: Stay;
  className?: string;
  size?: 'large' | 'small';
  priority?: boolean;
  imageClassName?: string;
};

// Property-specific listing photography supplied by the hotel's official site
// or its official hospitality collection media. We deliberately use a native
// image element so external hotel CDN URLs work without Next.js host allowlists.
export default function StayPhoto({ stay, className, priority, imageClassName }: StayPhotoProps) {
  return (
    <div className={clsx('relative overflow-hidden bg-forest-100', className)}>
      <img
        src={stay.officialPhotoUrl}
        alt={stay.officialPhotoAlt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={clsx('absolute inset-0 h-full w-full object-cover transition-transform duration-700', imageClassName)}
      />
      <span
        className={clsx(
          'absolute left-3 top-3 rounded-md px-2.5 py-1 text-[11px] font-semibold shadow-sm',
          stay.badge === 'Popular' ? 'bg-gold-400 text-forest-950' : 'bg-forest-900/90 text-white',
        )}
      >
        {stay.badge ?? stay.destination}
      </span>
      <span className="absolute bottom-2 left-2 right-12 rounded bg-black/55 px-2 py-1 text-[9px] leading-tight text-white/90">
        Photo: {stay.photoCredit}
      </span>
    </div>
  );
}
