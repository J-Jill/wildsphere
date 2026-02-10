import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/share/components/ui/tabs";
import { cn } from "@/lib/utils";

import { TabDetails } from "./TabDetails/TabDetails";
import { MediaTab } from "./TabMedia/MediaTab";
import { TabOverview } from "./TabOverview/TabOverview";
import { MediaSkeleton } from "./TabMedia/MediaSkeleton";
import { DetailsSkeleton } from "./TabDetails/DetailsSkeleton";
import { OverviewSkeleton } from "./TabOverview/OverviewSkeleton";
import type { InatObservation } from "../types/inaturalist";

type TabsPanelProps = {
  observation: InatObservation | null;
  hasSelection: boolean;
};

export function TabsPanel({ observation, hasSelection }: TabsPanelProps) {
  const taxon = observation?.taxon;

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      {/* HERO */}
      <div className="h-[360px] border-b border-white/10 overflow-hidden">
        {observation?.photos?.[0] ? (
          <img
            src={observation.photos[0].url.replace("square", "large")}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800" />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">
            {taxon?.preferred_common_name ?? observation?.species_guess}
          </h1>
          {taxon?.name && <p className="italic text-zinc-400">{taxon.name}</p>}
        </div>

        <Tabs defaultValue="details">
          <TabsList
            className={cn(
              "bg-zinc-900/80 p-1 rounded-lg border border-white/10 transition",
              !hasSelection && "opacity-40 pointer-events-none",
            )}>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            {observation ? (
              <TabOverview observation={observation} />
            ) : (
              <OverviewSkeleton />
            )}
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            {observation ? (
              <TabDetails observation={observation} />
            ) : (
              <DetailsSkeleton />
            )}{" "}
          </TabsContent>

          <TabsContent value="media" className="mt-4">
            {observation ? (
              <MediaTab observation={observation} />
            ) : (
              <MediaSkeleton />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
