import type { InatObservation } from "../../types/inaturalist";
import { Calendar, MapPin, Globe, BookOpen } from "lucide-react";
import { InfoItem } from "@/features/ObservationPanel/Tabs/InfoItem";

type Props = {
  observation: InatObservation;
};

export function TabOverview({ observation }: Props) {
  const taxon = observation.taxon;

  const commonName =
    taxon?.preferred_common_name ??
    observation.species_guess ??
    "Unknown species";

  return (
    <div className="space-y-6 text-sm">
      {/* META */}
      <div className="space-y-3">
        {observation.observed_on && (
          <InfoItem
            icon={<Calendar size={16} />}
            label="Observed on"
            value={new Date(observation.observed_on).toLocaleDateString()}
          />
        )}

        {observation.place_guess && (
          <InfoItem
            icon={<MapPin size={16} />}
            label="Location"
            value={observation.place_guess}
          />
        )}

        {taxon?.iconic_taxon_name && (
          <InfoItem
            icon={<Globe size={16} />}
            label="Group"
            value={taxon.iconic_taxon_name}
          />
        )}
      </div>

      {/* DESCRIPTION */}
      {observation.description && (
        <p className="text-zinc-300 leading-relaxed">
          {observation.description}
        </p>
      )}

      {/* LINKS */}
      {taxon?.wikipedia_url && (
        <a
          href={taxon.wikipedia_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:underline">
          <BookOpen size={16} />
          Learn more on Wikipedia
        </a>
      )}
    </div>
  );
}
