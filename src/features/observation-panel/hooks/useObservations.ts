import { useQuery } from "@tanstack/react-query";
import { fetchObservations } from "@/features/observation-panel/api/inaturalist";

export function useObservations() {
  return useQuery({
    queryKey: ["observations"],
    queryFn: fetchObservations,
  });
}
