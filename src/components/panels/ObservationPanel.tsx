import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ObservationPanel({ observation }) {
  const photo = observation.photos?.[0];

  return (
    <div className="h-full flex flex-col bg-zinc-950 text-white">
      {/* IMAGE */}
      <div className="h-56 w-full shrink-0 overflow-hidden border-b border-white/10">
        {photo ? (
          <img
            src={photo.url.replace("square", "large")}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800" />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <Tabs defaultValue="info">
          <TabsList className="w-full">
            <TabsTrigger value="info" className="flex-1">
              Info
            </TabsTrigger>
            <TabsTrigger value="taxonomy" className="flex-1">
              Taxonomy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-2 mt-4">
            <h2 className="text-lg font-semibold">
              {observation.taxon?.preferred_common_name ??
                observation.species_guess}
            </h2>

            <p className="text-sm text-zinc-400">{observation.taxon?.name}</p>
          </TabsContent>

          <TabsContent value="taxonomy" className="space-y-2 mt-4">
            <p className="text-sm">
              Iconic taxon:{" "}
              <span className="text-zinc-400">
                {observation.taxon?.iconic_taxon_name}
              </span>
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
