import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/share/components/ui/tabs";

import { TabDetails } from "./TabDetails/TabDetails";
import { MediaTab } from "./TabMedia/MediaTab";
import { TabOverview } from "./TabOverview/TabOverview";

export function TabsPanel({ observation }) {
  const taxon = observation.taxon;
  console.log("observation:", observation);

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      {/* HERO */}
      <div className="h-[360px] border-b border-white/10 overflow-hidden">
        {observation.photos?.[0] ? (
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
            {taxon?.preferred_common_name ?? observation.species_guess}
          </h1>
          {taxon?.name && <p className="italic text-zinc-400">{taxon.name}</p>}
        </div>

        <Tabs defaultValue="details">
          <TabsList className="bg-zinc-900/80 p-1 rounded-lg border border-white/10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <TabOverview observation={observation} />
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            <TabDetails observation={observation} />
          </TabsContent>

          <TabsContent value="media" className="mt-4">
            <MediaTab observation={observation} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
