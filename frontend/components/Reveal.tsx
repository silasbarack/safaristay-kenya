'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import clsx from 'clsx';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms, for staggering siblings. */
  delay?: number;
  as?: ElementType;
  id?: string;
};

// Fades and lifts its children into place the first time they scroll into view.
// Without JavaScript the layout's <noscript> rule keeps everything visible.
export default function Reveal({ children, className, delay = 0, as: Tag = 'div', id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={clsx('ss-reveal', className)}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
