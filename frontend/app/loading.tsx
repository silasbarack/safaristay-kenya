import StayCardSkeleton from '@/components/StayCardSkeleton';

// Shown while a page's content is on its way.
export default function Loading() {
  return (
    <div role="status" aria-label="Loading">
      <div className="ss-skeleton h-[480px] !bg-forest-900 sm:h-[540px] md:h-[600px]" />
      <div className="ss-container relative -mt-16 md:-mt-20">
        <div className="h-[180px] rounded-2xl border border-line bg-white p-4 shadow-card lg:h-[76px]">
          <div className="ss-skeleton h-full rounded-xl" />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <StayCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
