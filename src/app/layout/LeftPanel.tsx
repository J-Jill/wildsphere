import { useSelection } from "@/context/SelectionContext";
import { useObservations } from "@/features/ObservationPanel/hooks/useObservations";
import { ObservationPanelSkeleton } from "../../features/ObservationPanel/Tabs/ObservationSkeleton";
import { TabsPanel } from "@/features/ObservationPanel/Tabs/ObservationPanel";
import clsx from "clsx";

export function LeftPanel() {
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
        <TabsPanel observation={selected} />
      ) : (
        <div className="h-full flex items-center justify-center text-sm text-zinc-400">
          Select a hotspot to explore wildlife data.
        </div>
      )}
    </div>
  );
}
