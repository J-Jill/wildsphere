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

  useFrame(() => {
    if (!ref.current || !materialRef.current) return;

    const baseScale = active ? 1 : 0;
    const hoverScale = hovered ? 1.6 : 1;
    const target = baseScale * hoverScale;

    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.15);

    materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
      materialRef.current.emissiveIntensity,
      hovered ? 1.2 : 0.6,
      0.1,
    );
  });

  if (!position) return null;

  return (
    <mesh
      ref={ref}
      position={position}
      scale={[0, 0, 0]}
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
  );
}

export const Hotspot = memo(HotspotBase);
