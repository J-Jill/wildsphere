import { useSelection } from "@/context/SelectionContext";
import { useObservations } from "@/hooks/useObservations";
import { ObservationPanel } from "../panels/ObservationPanel";
import { ObservationPanelSkeleton } from "../panels/ObservationPanelSkeleton";

export function OverlayPanel() {
  const { selected } = useSelection();
  const { isLoading } = useObservations();

  if (isLoading) {
    return <ObservationPanelSkeleton />;
  }

  if (!selected) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-zinc-400">
        Select a hotspot to explore wildlife data.
      </div>
    );
  }

  return <ObservationPanel observation={selected} />;
}