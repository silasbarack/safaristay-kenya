'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

type FadeImageProps = Omit<ImageProps, 'fill' | 'onLoad'> & {
  /** Extra classes applied once the image has loaded, e.g. a zoom-out animation. */
  loadedClassName?: string;
  /** Classes for the placeholder, e.g. a darker base behind a hero photo. */
  skeletonClassName?: string;
};

// A `fill` image that sits on a shimmering placeholder until the file arrives,
// then fades and sharpens in, so photos load in gracefully instead of popping.
// The parent must be positioned (relative/absolute) and sized.
export default function FadeImage({ className, loadedClassName, skeletonClassName, alt, ...props }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <span
        aria-hidden
        className={clsx('ss-skeleton absolute inset-0 transition-opacity duration-700', skeletonClassName, loaded && 'opacity-0')}
      />
      <Image
        {...props}
        alt={alt}
        fill
        onLoad={() => setLoaded(true)}
        className={clsx(
          'transition-[opacity,filter,transform] duration-700 ease-out',
          loaded ? clsx('opacity-100 blur-0', loadedClassName) : 'opacity-0 blur-sm',
          className,
        )}
      />
    </>
  );
}
