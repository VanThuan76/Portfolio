import { Skeleton } from "@repo/design-system/components/molecules/ui-elements/skeleton";
import { cn } from "@repo/design-system/utils/tw";

interface SkeletonCardProps {
  className?: string;
}
export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={cn("flex flex-col space-y-3", className)}>
      <Skeleton className="h-[125px] w-full rounded-xl bg-gray-400/90" />
      <div className="space-y-2">
        <Skeleton className="w-full h-4 bg-gray-400/90" />
        <Skeleton className="h-4 w-[200px] bg-gray-400/90" />
      </div>
    </div>
  );
}
