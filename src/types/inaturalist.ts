export interface InatPhoto {
  url: string;
}

export interface InatTaxon {
  id: number;
  name: string;
  preferred_common_name?: string;
  iconic_taxon_name?: string;
}

export interface InatObservation {
  id: number;
  species_guess: string;
  geojson: {
    coordinates: [number, number]; // [lng, lat]
  };
  taxon?: InatTaxon;
  photos: InatPhoto[];
}

export interface InatResponse {
  results: InatObservation[];
}
