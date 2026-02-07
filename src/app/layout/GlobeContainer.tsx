import { useSelection } from "@/features/observations/components/ObservationDetails";
import { ObservationPanel } from "@/features/observations/components/ObservationPanel";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function GlobeContainer() {
  const { selected } = useSelection();

  return (
    <ScrollArea className="h-full p-4">
      {!selected ? (
        <p className="text-sm text-zinc-400">
          Select an observation on the globe.
        </p>
      ) : (
        <ObservationPanel observation={selected} />
      )}
    </ScrollArea>
  );
}
