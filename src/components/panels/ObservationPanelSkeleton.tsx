import { Skeleton } from "@/components/ui/skeleton";

export function ObservationPanelSkeleton() {
  return (
    <div className="h-full flex flex-col bg-zinc-950">
      {/* Image */}
      <Skeleton className="h-56 w-full rounded-none" />

      {/* Content */}
      <div className="flex-1 p-4 space-y-4">
        {/* Tabs */}
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1 rounded-md" />
          <Skeleton className="h-8 flex-1 rounded-md" />
        </div>

        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Text */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}
