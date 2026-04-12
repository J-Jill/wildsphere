import * as TabsPrimitive from "@radix-ui/react-tabs";
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

const TABS = [
  { value: "overview", label: "Overview" },
  { value: "details",  label: "Details" },
  { value: "media",    label: "Media" },
];

export function TabsPanel({ observation, hasSelection }: TabsPanelProps) {
  const taxon = observation?.taxon;
  const photo = observation?.photos?.[0];

  return (
    <div className="h-full flex flex-col bg-black">

      {/* HERO */}
      <div className="relative h-[280px] shrink-0 overflow-hidden">
        {photo ? (
          <img
            src={photo.url.replace("square", "large")}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-surface" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <AnimatePresence mode="wait">
          <motion.div
            key={observation?.id ?? "empty-hero"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-5">
            <h1 className="font-vietnam font-black text-3xl uppercase tracking-tighter leading-tight text-fg-1">
              {taxon?.preferred_common_name ?? observation?.species_guess ?? "Select a species"}
            </h1>
            {taxon?.name && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-fg-3 mt-1">
                {taxon.name}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* TABS + CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={observation?.id ?? "empty-content"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1 overflow-y-auto flex flex-col">

          <TabsPrimitive.Root defaultValue="overview" key={observation?.id ?? "empty"}>
            <TabsPrimitive.List
              className={cn(
                "flex border-b border-stroke shrink-0",
                !hasSelection && "opacity-30 pointer-events-none",
              )}>
              {TABS.map(({ value, label }) => (
                <TabsPrimitive.Trigger
                  key={value}
                  value={value}
                  className="flex-1 py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium
                             text-fg-3 hover:text-fg-2 transition-colors duration-200
                             border-b-2 border-transparent -mb-px
                             data-[state=active]:text-fg-1 data-[state=active]:border-white
                             focus:outline-none">
                  {label}
                </TabsPrimitive.Trigger>
              ))}
            </TabsPrimitive.List>

            <div className="p-5">
              <TabsPrimitive.Content value="overview">
                {observation ? <TabOverview observation={observation} /> : <OverviewSkeleton />}
              </TabsPrimitive.Content>
              <TabsPrimitive.Content value="details">
                {observation ? <TabDetails observation={observation} /> : <DetailsSkeleton />}
              </TabsPrimitive.Content>
              <TabsPrimitive.Content value="media">
                {observation ? <MediaTab observation={observation} /> : <MediaSkeleton />}
              </TabsPrimitive.Content>
            </div>
          </TabsPrimitive.Root>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
