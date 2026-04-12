import { Skeleton } from "@/shared/ui/skeleton";

function Row() {
  return (
    <div className="flex gap-3 items-start">
      <Skeleton className="h-4 w-4 rounded-full" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export function DetailsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Row key={i} />
      ))}
    </div>
  );
}
