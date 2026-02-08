import type { InatObservation } from "@/features/ObservationPanel/types/inaturalist";
import {
  MapPin,
  Globe,
  Eye,
  Brain,
  Lock,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { InfoItem } from "@/features/ObservationPanel/Tabs/InfoItem";

type Props = {
  observation: InatObservation;
};

export function TabDetails({ observation }: Props) {
  const { place_guess, geojson, taxon, identifications_count, captive } =
    observation;

  return (
    <div className="space-y-4 text-sm">
      <InfoItem
        icon={<Eye size={16} />}
        label="Observed species"
        value={
          taxon?.preferred_common_name ?? observation.species_guess ?? "Unknown"
        }
      />

      {typeof identifications_count === "number" && (
        <InfoItem
          icon={<Brain size={16} />}
          label="Identifications"
          value={identifications_count.toString()}
        />
      )}

      {typeof captive === "boolean" && (
        <InfoItem
          icon={<Lock size={16} />}
          label="Captive"
          value={captive ? "Yes" : "No"}
        />
      )}

      {place_guess && (
        <InfoItem
          icon={<MapPin size={16} />}
          label="Location"
          value={place_guess}
        />
      )}

      {geojson?.coordinates && (
        <InfoItem
          icon={<Globe size={16} />}
          label="Coordinates"
          value={`${geojson.coordinates[1].toFixed(
            3,
          )}, ${geojson.coordinates[0].toFixed(3)}`}
        />
      )}

      {observation.uri && (
        <InfoItem
          icon={<ExternalLink size={16} />}
          label="iNaturalist"
          value={
            <a
              href={observation.uri.toString()}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline">
              View observation
            </a>
          }
        />
      )}

      {taxon?.wikipedia_url && (
        <InfoItem
          icon={<BookOpen size={16} />}
          label="Wikipedia"
          value={
            <a
              href={taxon.wikipedia_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline">
              Learn more about this species
            </a>
          }
        />
      )}
    </div>
  );
}
