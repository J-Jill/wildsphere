import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSelection } from "@/context/SelectionContext";
import { latLngToVector3 } from "@/utils/geo";
import type { InatObservation } from "@/types/inaturalist";

type HotspotProps = {
  observation: InatObservation;
  active: boolean;
};

function HotspotBase({ observation, active }: HotspotProps) {
  const { selectObservation } = useSelection();
  const ref = useRef<THREE.Mesh>(null!);

  const coords = observation?.geojson?.coordinates;

  const position = useMemo(() => {
    if (!coords) return null;
    const [lng, lat] = coords;
    return latLngToVector3(lat, lng, 1.01);
  }, [coords]);

  useFrame(() => {
    if (!ref.current) return;

    const target = active ? 1 : 0;
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1);
  });

  if (!position) return null;

  return (
    <mesh
      ref={ref}
      position={position}
      scale={[0, 0, 0]}
      onClick={() => selectObservation(observation)}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial
        color="orange"
        emissive="orange"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

export const Hotspot = memo(HotspotBase);
