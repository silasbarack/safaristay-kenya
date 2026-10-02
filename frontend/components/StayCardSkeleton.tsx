// Grey stand-in for a StayCard while a page is loading.
export default function StayCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-card" aria-hidden>
      <div className="ss-skeleton aspect-[4/3]" />
      <div className="space-y-3 p-5">
        <div className="ss-skeleton h-5 w-3/4 rounded" />
        <div className="ss-skeleton h-3 w-1/2 rounded" />
        <div className="ss-skeleton h-3 w-2/3 rounded" />
        <div className="ss-skeleton h-3 w-full rounded" />
        <div className="flex items-end justify-between pt-3">
          <div className="ss-skeleton h-6 w-24 rounded" />
          <div className="ss-skeleton h-8 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
