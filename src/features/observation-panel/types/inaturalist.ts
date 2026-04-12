export interface InatPhoto {
  url: string;
  original_url?: string;
}

export interface InatTaxon {
  id: number;
  name: string;
  preferred_common_name?: string;
  iconic_taxon_name?: string;
  wikipedia_summary?: string;
  wikipedia_url?: string;
}

export interface InatObservation {
  id: number;
  species_guess: string;
  description?: string;

  observed_on?: string;
  place_guess?: string;

  quality_grade?: "research" | "needs_id" | "casual";
  identifications_count?: number;
  comments_count?: number;
  captive?: boolean;

  uri?: string;

  geojson?: {
    coordinates: [number, number]; // [lng, lat]
  };

  taxon?: InatTaxon;
  photos: InatPhoto[];
}

export interface InatResponse {
  results: InatObservation[];
}
