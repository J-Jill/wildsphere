import { Skeleton } from "@/share/components/ui/skeleton";

export function MediaSkeleton() {
  return (
    <div className="space-y-4">
      {/* Main image */}
      <Skeleton className="w-full h-[320px] rounded-lg" />

      {/* Thumbnails */}
      <div className="flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="w-20 h-20 rounded-md" />
        ))}
      </div>
    </div>
  );
}
