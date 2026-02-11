import { Skeleton } from "@/share/components/ui/skeleton";

export function TabsPanelOverviewSkeleton() {
  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="space-y-2">
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Meta */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>

      {/* Link */}
      <Skeleton className="h-4 w-40" />
    </div>
  );
}
