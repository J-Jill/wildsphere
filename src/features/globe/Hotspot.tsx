import { latLngToVector3 } from "@/utils/geo";
import { useSelection } from "@/context/SelectionContext";
import type { InatObservation } from "@/types/inaturalist";

type HotspotProps = {
  observation: InatObservation;
};

export function Hotspot({ observation }: HotspotProps) {
  const { selectObservation } = useSelection();

  if (!observation?.geojson) return null;

  const [lng, lat] = observation.geojson.coordinates;
  const position = latLngToVector3(lat, lng, 1.01);

  return (
    <mesh position={position} onClick={() => selectObservation(observation)}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
