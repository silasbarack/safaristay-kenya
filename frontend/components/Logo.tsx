import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type LogoProps = {
  className?: string;
  priority?: boolean;
};

// The official lockup on white (aspect 1080×721). Height drives the size; width follows the aspect
// ratio. The 360×240 file covers the header (64px tall) and footer (96px) on 2–3× screens.
export default function Logo({ className, priority }: LogoProps) {
  return (
    <Link href="/" aria-label="SafariStay Kenya — home" className={clsx('inline-block', className)}>
      <Image
        src="/brand/safaristay-kenya-logo-360.jpg"
        alt="SafariStay Kenya — Hotels · Lodges · Experiences"
        width={360}
        height={240}
        priority={priority}
        className="h-full w-auto"
      />
    </Link>
  );
}
