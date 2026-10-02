import clsx from 'clsx';
import { photos, photoSrc } from '@/lib/photos';
import type { Stay } from '@/lib/stays';
import FadeImage from './FadeImage';

type StayPhotoProps = {
  stay: Stay;
  className?: string;
  size?: 'large' | 'small';
  priority?: boolean;
  imageClassName?: string;
};

// A stay's photo, cropped to fill its box, with its badge (or destination) on top.
export default function StayPhoto({ stay, className, size = 'small', priority, imageClassName }: StayPhotoProps) {
  const p = photos[stay.photo];
  return (
    <div className={clsx('relative overflow-hidden bg-forest-100', className)}>
      <FadeImage
        src={photoSrc(p, size)}
        alt={p.alt}
        priority={priority}
        sizes={size === 'large' ? '100vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
        className={clsx('object-cover', imageClassName)}
      />
      <span
        className={clsx(
          'absolute left-3 top-3 rounded-md px-2.5 py-1 text-[11px] font-semibold shadow-sm',
          stay.badge === 'Popular' ? 'bg-gold-400 text-forest-950' : 'bg-forest-900/90 text-white',
        )}
      >
        {stay.badge ?? stay.destination}
      </span>
    </div>
  );
}
