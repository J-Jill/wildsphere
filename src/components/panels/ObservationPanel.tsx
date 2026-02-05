import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ObservationPanel({ observation }) {
  const taxon = observation.taxon;
  const commonName = taxon?.preferred_common_name ?? observation.species_guess;
  const scientificName = taxon?.name;

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      {/* HERO IMAGE */}
      <div className="h-[360px] w-full shrink-0 overflow-hidden border-b border-white/10">
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
        {/* TITLE */}
        <div>
          <h1 className="text-2xl font-semibold leading-tight">{commonName}</h1>
          {scientificName && (
            <p className="italic text-zinc-400">{scientificName}</p>
          )}
          {taxon?.iconic_taxon_name && (
            <span className="text-xs text-zinc-500">
              {taxon.iconic_taxon_name}
            </span>
          )}
        </div>

        <Tabs defaultValue="details">
          <TabsList className="w-full">
            <TabsTrigger value="details" className="flex-1">
              Details
            </TabsTrigger>
            <TabsTrigger value="context" className="flex-1">
              Context
            </TabsTrigger>
            <TabsTrigger value="media" className="flex-1">
              Media
            </TabsTrigger>
          </TabsList>

          {/* DETAILS */}
          <TabsContent value="details" className="space-y-3 mt-4 text-sm">
            <p>📍 {observation.place_guess ?? "Unknown location"}</p>
            <p>🗓️ Observed on {observation.observed_on ?? "Unknown date"}</p>
            <p>⭐ Quality grade: {observation.quality_grade}</p>
            <p>🧠 Identifications: {observation.identifications_count}</p>
            <p>💬 Comments: {observation.comments_count}</p>
          </TabsContent>

          {/* CONTEXT */}
          <TabsContent value="context" className="space-y-3 mt-4 text-sm">
            <p>Taxonomic rank: {taxon?.rank}</p>
            <p>Iconic group: {taxon?.iconic_taxon_name}</p>

            {taxon?.wikipedia_url && (
              <a
                href={taxon.wikipedia_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline">
                Learn more on Wikipedia
              </a>
            )}
          </TabsContent>

          {/* MEDIA */}
          <TabsContent value="media" className="grid grid-cols-2 gap-2 mt-4">
            {observation.photos?.map((photo) => (
              <img
                key={photo.url}
                src={photo.url.replace("square", "small")}
                className="rounded-md object-cover"
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
