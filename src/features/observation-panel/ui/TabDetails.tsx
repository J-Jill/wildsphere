import type { InatObservation } from "@/features/observation-panel/types/inaturalist";
import { InfoItem } from "@/features/observation-panel/ui/InfoItem";

type Props = {
  observation: InatObservation;
};

export function TabDetails({ observation }: Props) {
  const { place_guess, geojson, taxon, identifications_count, captive } =
    observation;

  return (
    <div className="text-sm">
      <InfoItem
        label="Observed species"
        value={taxon?.preferred_common_name ?? observation.species_guess ?? "Unknown"}
      />

      {typeof identifications_count === "number" && (
        <InfoItem
          label="Identifications"
          value={identifications_count.toString()}
        />
      )}

      {typeof captive === "boolean" && (
        <InfoItem
          label="Captive"
          value={captive ? "Yes" : "No"}
        />
      )}

      {place_guess && (
        <InfoItem label="Location" value={place_guess} />
      )}

      {geojson?.coordinates && (
        <InfoItem
          label="Coordinates"
          value={`${geojson.coordinates[1].toFixed(3)}, ${geojson.coordinates[0].toFixed(3)}`}
        />
      )}

      {observation.uri && (
        <InfoItem
          label="iNaturalist"
          value={
            <a
              href={observation.uri.toString()}
              target="_blank"
              rel="noreferrer"
              className="text-fg-2 hover:text-fg-1 underline underline-offset-2 transition-colors">
              View observation →
            </a>
          }
        />
      )}

      {taxon?.wikipedia_url && (
        <InfoItem
          label="Wikipedia"
          value={
            <a
              href={taxon.wikipedia_url}
              target="_blank"
              rel="noreferrer"
              className="text-fg-2 hover:text-fg-1 underline underline-offset-2 transition-colors">
              Learn more about this species →
            </a>
          }
        />
      )}
    </div>
  );
}
