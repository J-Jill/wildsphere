import type { InatObservation } from "@/features/observations/types/inaturalist";
import { Calendar, MapPin, Globe, Tag, Eye } from "lucide-react";

type Props = {
  observation: InatObservation;
};

export function ObservationDetails({ observation }: Props) {
  const { observed_on, place_guess, geojson, taxon } = observation;

  return (
    <div className="space-y-4 text-sm">
      <DetailItem
        icon={<Eye size={16} />}
        label="Observed species"
        value={
          taxon?.preferred_common_name ?? observation.species_guess ?? "Unknown"
        }
      />

      {taxon?.name && (
        <DetailItem
          icon={<Tag size={16} />}
          label="Scientific name"
          value={taxon.name}
        />
      )}

      {observed_on && (
        <DetailItem
          icon={<Calendar size={16} />}
          label="Date observed"
          value={new Date(observed_on).toLocaleDateString()}
        />
      )}

      {place_guess && (
        <DetailItem
          icon={<MapPin size={16} />}
          label="Location"
          value={place_guess}
        />
      )}

      {geojson?.coordinates && (
        <DetailItem
          icon={<Globe size={16} />}
          label="Coordinates"
          value={`${geojson.coordinates[1].toFixed(
            3,
          )}, ${geojson.coordinates[0].toFixed(3)}`}
        />
      )}
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-0.5 text-zinc-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-zinc-500">
          {label}
        </span>
        <span className="text-zinc-200">{value}</span>
      </div>
    </div>
  );
}
