export const ServiceCardSkeleton = () => {
  return (
    <div className="p-4 flex flex-col rounded-2xl shadow-2xl bg-base-300 w-full animate-pulse">
      {/* Image Skeleton */}
      <div className="h-[200px] w-full bg-slate-200 rounded-xl mb-4"></div>

      {/* Header Skeleton */}
      <div className="flex py-3 justify-between">
        <div className="space-y-2 flex-1">
          <div className="h-6 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-100 rounded w-1/4"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
          <div className="w-10 h-4 bg-slate-200 rounded"></div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-slate-100 rounded w-full"></div>
        <div className="h-3 bg-slate-100 rounded w-5/6"></div>
      </div>

      {/* Footer (Price & Button) Skeleton */}
      <div className="flex flex-1 py-2 justify-between items-center border-t border-slate-50 pt-4">
        <div className="space-y-2">
          <div className="h-3 bg-slate-100 rounded w-16"></div>
          <div className="h-8 bg-slate-200 rounded w-20"></div>
        </div>
        <div>
          <div className="h-12 w-24 bg-slate-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};