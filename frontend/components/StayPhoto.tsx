import Image from 'next/image';
import clsx from 'clsx';
import { photos, photoSrc } from '@/lib/photos';
import type { Stay } from '@/lib/stays';

type StayPhotoProps = {
  stay: Stay;
  className?: string;
  size?: 'large' | 'small';
  priority?: boolean;
};

// A stay's photo, cropped to fill its box, with the destination as a badge.
export default function StayPhoto({ stay, className, size = 'small', priority }: StayPhotoProps) {
  const p = photos[stay.photo];
  return (
    <div className={clsx('relative overflow-hidden bg-forest-100', className)}>
      <Image
        src={photoSrc(p, size)}
        alt={p.alt}
        fill
        priority={priority}
        sizes={size === 'large' ? '100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
        className="object-cover"
      />
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-900">
        {stay.destination}
      </span>
    </div>
  );
}
