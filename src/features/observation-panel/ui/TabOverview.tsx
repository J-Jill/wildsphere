import type { InatObservation } from "@/features/observation-panel/types/inaturalist";
import { InfoItem } from "@/features/observation-panel/ui/InfoItem";

type Props = {
  observation: InatObservation;
};

export function TabOverview({ observation }: Props) {
  const taxon = observation.taxon;

  return (
    <div className="text-sm space-y-5">
      <div>
        {observation.observed_on && (
          <InfoItem
            label="Observed on"
            value={new Date(observation.observed_on).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        )}

        {observation.place_guess && (
          <InfoItem
            label="Location"
            value={observation.place_guess}
          />
        )}

        {taxon?.iconic_taxon_name && (
          <InfoItem
            label="Group"
            value={taxon.iconic_taxon_name}
          />
        )}
      </div>

      {observation.description && (
        <p className="text-white/50 leading-relaxed text-sm">
          {observation.description}
        </p>
      )}

      {taxon?.wikipedia_url && (
        <a
          href={taxon.wikipedia_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-200">
          Wikipedia →
        </a>
      )}
    </div>
  );
}
