import { memo, useMemo } from "react";
import { useSelection } from "@/context/SelectionContext";
import type { InatObservation } from "@/types/inaturalist";
import { latLngToVector3 } from "@/utils/geo";

type HotspotProps = {
  observation: InatObservation;
};

function HotspotBase({ observation }: HotspotProps) {
  const { selectObservation } = useSelection();

  const coords = observation?.geojson?.coordinates;

  const position = useMemo(() => {
    if (!coords) return null;
    const [lng, lat] = coords;
    return latLngToVector3(lat, lng, 1.01);
  }, [coords]);

  if (!position) return null;

  return (
    <mesh position={position} onClick={() => selectObservation(observation)}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export const Hotspot = memo(HotspotBase);
