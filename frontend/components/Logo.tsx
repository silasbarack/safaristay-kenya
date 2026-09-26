import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type LogoProps = {
  className?: string;
  priority?: boolean;
};

// The official lockup (1080×721, on white). Height drives the size; width follows the aspect ratio.
export default function Logo({ className, priority }: LogoProps) {
  return (
    <Link href="/" aria-label="SafariStay Kenya — home" className={clsx('inline-block', className)}>
      <Image
        src="/brand/safaristay-kenya-logo.png"
        alt="SafariStay Kenya — Hotels · Lodges · Experiences"
        width={1080}
        height={721}
        priority={priority}
        className="h-full w-auto"
      />
    </Link>
  );
}
