import StayCardSkeleton from '@/components/StayCardSkeleton';

export default function Loading() {
  return (
    <div className="ss-container py-10 sm:py-12" role="status" aria-label="Loading stays">
      <div className="ss-skeleton h-3 w-16 rounded" />
      <div className="ss-skeleton mt-3 h-10 w-72 max-w-full rounded" />
      <div className="ss-skeleton mt-6 h-[180px] rounded-2xl lg:h-[76px]" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }, (_, i) => (
          <StayCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
