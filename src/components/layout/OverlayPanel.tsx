import { useSelection } from "@/context/SelectionContext";
import { useObservations } from "@/hooks/useObservations";
import { ObservationPanel } from "../panels/ObservationPanel";
import { ObservationPanelSkeleton } from "../panels/ObservationPanelSkeleton";
import clsx from "clsx";

export function OverlayPanel() {
  const { selected } = useSelection();
  const { isLoading } = useObservations();

  const isVisible = isLoading || !!selected;

  return (
    <div
      className={clsx(
        "h-full transition-all duration-500 ease-out",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
      )}>
      {isLoading ? (
        <ObservationPanelSkeleton />
      ) : selected ? (
        <ObservationPanel observation={selected} />
      ) : (
        <div className="h-full flex items-center justify-center text-sm text-zinc-400">
          Select a hotspot to explore wildlife data.
        </div>
      )}
    </div>
  );
}
