import type { InatResponse } from "@/features/observations/types/inaturalist";

const BASE_URL = "https://api.inaturalist.org/v1";

export async function fetchObservations(): Promise<InatResponse> {
  const res = await fetch(
    `${BASE_URL}/observations?has[]=geo&quality_grade=research&per_page=50`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch observations");
  }

  return res.json();
}
