import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui/tabs";
import { cn } from "@/shared/lib/utils";
import { TabDetails } from "@/features/observation-panel/ui/TabDetails";
import { MediaTab } from "@/features/observation-panel/ui/MediaTab";
import { TabOverview } from "@/features/observation-panel/ui/TabOverview";
import { MediaSkeleton } from "@/features/observation-panel/ui/MediaSkeleton";
import { DetailsSkeleton } from "@/features/observation-panel/ui/DetailsSkeleton";
import { OverviewSkeleton } from "@/features/observation-panel/ui/OverviewSkeleton";
import type { InatObservation } from "@/features/observation-panel/types/inaturalist";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence mode="wait">
        <motion.div
          key={observation?.id ?? "empty"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1 overflow-y-auto p-5 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">
              {taxon?.preferred_common_name ?? observation?.species_guess}
            </h1>
            {taxon?.name && (
              <p className="italic text-zinc-400">{taxon.name}</p>
            )}
          </div>

          <Tabs key={observation?.id ?? "empty"} defaultValue="overview">
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
              {observation ? <TabOverview observation={observation} /> : <OverviewSkeleton />}
            </TabsContent>

            <TabsContent value="details" className="mt-4">
              {observation ? <TabDetails observation={observation} /> : <DetailsSkeleton />}
            </TabsContent>

            <TabsContent value="media" className="mt-4">
              {observation ? <MediaTab observation={observation} /> : <MediaSkeleton />}
            </TabsContent>
          </Tabs>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
