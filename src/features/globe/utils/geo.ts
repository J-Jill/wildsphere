import type { InatObservation } from "@/features/ObservationPanel/types/inaturalist";

export function latLngToVector3(
  lat: number,
  lng: number,
  radius: number,
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
}

export function getLatLng(obs: InatObservation): [number, number] {
  const coords = obs.geojson.coordinates;

  // Caso 1: punto simple
  if (typeof coords[0] === "number") {
    return [coords[0], coords[1]];
  }

  // Caso 2: bounding box o polígono
  const flat = coords.flat(Infinity);

  // flat = [lng1, lat1, lng2, lat2, ...]
  const lngs = flat.filter((_, i) => i % 2 === 0);
  const lats = flat.filter((_, i) => i % 2 === 1);

  const avgLng = lngs.reduce((a, b) => a + b, 0) / lngs.length;
  const avgLat = lats.reduce((a, b) => a + b, 0) / lats.length;

  return [avgLng, avgLat];
}
