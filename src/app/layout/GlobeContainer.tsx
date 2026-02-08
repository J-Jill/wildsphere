import { useSelection } from "@/features/ObservationPanel/Tabs/TabDetails/TabDetails";
import { TabsPanel } from "@/features/ObservationPanel/Tabs/ObservationPanel";
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
        <TabsPanel observation={selected} />
      )}
    </ScrollArea>
  );
}
