import { memo, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSelection } from "@/context/SelectionContext";
import { latLngToVector3 } from "@/features/globe/utils/geo";
import type { InatObservation } from "@/features/ObservationPanel/types/inaturalist";

type HotspotProps = {
  observation: InatObservation;
  active: boolean;
};

function HotspotBase({ observation, active }: HotspotProps) {
  const { selectObservation } = useSelection();
  const ref = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  const [hovered, setHovered] = useState(false);

  const coords = observation?.geojson?.coordinates;

  const position = useMemo(() => {
    if (!coords) return null;
    const [lng, lat] = coords;
    return latLngToVector3(lat, lng, 1.01);
  }, [coords]);

  useFrame(({ clock }) => {
    if (!ref.current || !materialRef.current) return;

    const pulse = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    const scale = hovered ? 1.4 : active ? 1.2 : pulse;

    ref.current.scale.setScalar(scale);

    materialRef.current.emissiveIntensity = hovered ? 1.2 : 0.6;
  });

  if (!position) return null;

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerEnter={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
        onClick={() => selectObservation(observation)}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial
          ref={materialRef}
          color="orange"
          emissive="orange"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

export const Hotspot = memo(HotspotBase);
