import clsx from 'clsx';
import { galleryPhotos, photoSrc } from '@/lib/photos';
import FadeImage from './FadeImage';
import Reveal from './Reveal';

// Nine photos: 3×3 from small tablets up; on phones the first spans both
// columns so the remaining eight fill four even rows.
export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {galleryPhotos.map((p, i) => (
        <Reveal
          as="figure"
          key={p.name}
          delay={(i % 3) * 90}
          className={clsx(
            'group relative aspect-[4/3] overflow-hidden rounded-card bg-forest-100',
            i === 0 && 'col-span-2 sm:col-span-1',
          )}
        >
          <FadeImage
            src={photoSrc(p, 'small')}
            alt={p.alt}
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover group-hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  );
}
