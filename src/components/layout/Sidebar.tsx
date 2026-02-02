import { useSelection } from "@/context/SelectionContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ObservationCard } from "../cards/ObservationCard";

export function Sidebar() {
  const { selected } = useSelection();

  return (
    <ScrollArea className="h-full p-4">
      {!selected ? (
        <p className="text-sm text-zinc-400">
          Select an observation on the globe.
        </p>
      ) : (
        <ObservationCard observation={selected} />
      )}
    </ScrollArea>
  );
}
