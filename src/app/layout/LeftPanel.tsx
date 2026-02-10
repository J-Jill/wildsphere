import { useSelection } from "@/context/SelectionContext";
import { TabsPanel } from "@/features/ObservationPanel/Tabs/TabsPanel";

type LeftPanelProps = {
  isLoading: boolean;
  isError: boolean;
};

export function LeftPanel({ isLoading, isError }: LeftPanelProps) {
  const { selected } = useSelection();

  if (isError) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-zinc-400 px-6 text-center">
        We’re having trouble loading wildlife data right now.
        <br />
        Please try again in a moment.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-6 space-y-4">
        <div className="h-40 bg-zinc-800 rounded-lg animate-pulse" />
        <div className="h-4 bg-zinc-800 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-zinc-800 rounded w-1/2 animate-pulse" />
      </div>
    );
  }

  return <TabsPanel observation={selected} hasSelection={!!selected} />;
}
