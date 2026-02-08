import { useQuery } from "@tanstack/react-query";
import { fetchObservations } from "@/features/ObservationPanel/services/inaturalist";

export function useObservations() {
  return useQuery({
    queryKey: ["observations"],
    queryFn: fetchObservations,
  });
}
