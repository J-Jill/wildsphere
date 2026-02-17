import { memo, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSelection } from "@/context/SelectionContext";
import { useTooltip } from "@/features/globe/context/TooltipContext";
import { latLngToVector3 } from "@/features/globe/utils/geo";
import type { InatObservation } from "@/features/ObservationPanel/types/inaturalist";

type HotspotProps = {
  observation: InatObservation;
  active: boolean;
};

function HotspotBase({ observation, active }: HotspotProps) {
  const { selectObservation } = useSelection();
  const { setTooltip } = useTooltip();

  const ref = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  const { camera, gl } = useThree();

  const [hovered, setHovered] = useState(false);

  const coords = observation?.geojson?.coordinates;

  const position = useMemo(() => {
    if (!coords) return null;
    const [lng, lat] = coords;
    return latLngToVector3(lat, lng, 1.01);
  }, [coords]);

  useFrame(({ clock, raycaster }) => {
    if (!ref.current || !materialRef.current) return;

    // Animación del hotspot
    const pulse = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    const scale = hovered ? 1.4 : active ? 1.2 : pulse;
    ref.current.scale.setScalar(scale);
    materialRef.current.emissiveIntensity = hovered ? 1.2 : 0.6;

    // 🔥 1. Detectar si el cursor sigue sobre el hotspot
    const intersects = raycaster.intersectObject(ref.current);
    const stillHovering = intersects.length > 0;

    if (!stillHovering && hovered) {
      setHovered(false);
      setTooltip(null);
      return;
    }

    // 🔥 2. Si no está hovered, no hacemos nada más
    if (!hovered) return;

    // 🔥 3. Si está hovered, actualizar posición del tooltip
    const pos = ref.current.getWorldPosition(new THREE.Vector3()).clone();
    pos.project(camera);

    const rect = gl.domElement.getBoundingClientRect();

    setTooltip({
      x: rect.left + (pos.x * 0.5 + 0.5) * rect.width,
      y: rect.top + (-pos.y * 0.5 + 0.5) * rect.height,
      text:
        observation.taxon?.preferred_common_name || observation.species_guess,
    });
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
          setTooltip(null); // 🔹 aquí lo limpiamos siempre
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
