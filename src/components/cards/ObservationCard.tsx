import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { InatObservation } from "@/types/inaturalist";

type Props = {
  observation: InatObservation;
};

export function ObservationCard({ observation }: Props) {
  const image = observation.photos?.[0]?.url?.replace("square", "medium");

  return (
    <Card className="bg-white text-black border border-[#EEEEEE] rounded-xl overflow-hidden pb-4 pt-4">
      {/* Tabs arriba */}
      <Tabs defaultValue="overview">
        <TabsList className="w-full bg-white text-black border-b border-[#EEEEEE]">
          <TabsTrigger value="overview" className="flex-1">
            Overview
          </TabsTrigger>
          <TabsTrigger value="details" className="flex-1">
            Details
          </TabsTrigger>
        </TabsList>

        {/* Imagen debajo de las tabs */}
        {image && (
          <img
            src={image}
            alt={observation.species_guess}
            className="w-full h- object-cover filter brightness-105 contrast-105 saturate-125 hue-rotate-10"
          />
        )}

        {/* Contenido */}
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold">
            {observation.taxon?.preferred_common_name ??
              observation.species_guess}
          </h3>
          <p className="text-sm text-black/60 italic">
            {observation.taxon?.name}
          </p>
        </CardHeader>

        <CardContent className="text-sm text-black">
          <TabsContent value="overview">
            <p className="text-black/80">
              {observation.taxon?.wikipedia_summary ??
                "No description available."}
            </p>
          </TabsContent>

          <TabsContent value="details">
            <ul className="space-y-1 text-black/70">
              {observation.observed_on && (
                <li>
                  Observed on:{" "}
                  <span className="text-black">{observation.observed_on}</span>
                </li>
              )}
              {observation.taxon?.iconic_taxon_name && (
                <li>
                  Category:{" "}
                  <span className="text-black">
                    {observation.taxon.iconic_taxon_name}
                  </span>
                </li>
              )}
            </ul>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
