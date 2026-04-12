import { memo, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSelection } from "@/features/observation-panel/model/SelectionContext";
import { useTooltip } from "@/features/globe/model/TooltipContext";
import { latLngToVector3 } from "@/features/globe/lib/geo";
import type { InatObservation } from "@/features/observation-panel/types/inaturalist";

type HotspotProps = {
  observation: InatObservation;
  active: boolean;
};

function HotspotBase({ observation }: HotspotProps) {
  const { selectObservation } = useSelection();
  const { setTooltip } = useTooltip();

  const dotRef = useRef<THREE.Mesh>(null!);
  const pingRef = useRef<THREE.Mesh>(null!);
  const pingMaterialRef = useRef<THREE.MeshBasicMaterial>(null!);
  const { camera, gl } = useThree();

  const [hovered, setHovered] = useState(false);

  const coords = observation?.geojson?.coordinates;

  const position = useMemo(() => {
    if (!coords) return null;
    const [lng, lat] = coords;
    return latLngToVector3(lat, lng, 1.01);
  }, [coords]);

  useFrame(({ clock, raycaster }) => {
    if (!dotRef.current || !pingRef.current || !pingMaterialRef.current) return;

    // Core dot — scale up on hover
    dotRef.current.scale.setScalar(hovered ? 1.6 : 1);

    // Sonar ping — expands and fades in a loop
    const t = (clock.getElapsedTime() % 2) / 2; // 0 → 1 every 2s
    pingRef.current.scale.setScalar(1 + t * 4);
    pingMaterialRef.current.opacity = (1 - t) * 0.4;

    // Detect if cursor is still hovering
    const intersects = raycaster.intersectObject(dotRef.current);
    if (!intersects.length && hovered) {
      setHovered(false);
      setTooltip(null);
      return;
    }

    if (!hovered) return;

    // Update tooltip position
    const pos = dotRef.current.getWorldPosition(new THREE.Vector3()).clone();
    pos.project(camera);

    const rect = gl.domElement.getBoundingClientRect();
    setTooltip({
      x: rect.left + (pos.x * 0.5 + 0.5) * rect.width,
      y: rect.top + (-pos.y * 0.5 + 0.5) * rect.height,
      text: observation.taxon?.preferred_common_name || observation.species_guess,
    });
  });

  if (!position) return null;

  return (
    <group position={position}>
      {/* Sonar ping ring */}
      <mesh ref={pingRef}>
        <sphereGeometry args={[0.013, 8, 8]} />
        <meshBasicMaterial
          ref={pingMaterialRef}
          color="white"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Core dot */}
      <mesh
        ref={dotRef}
        onPointerEnter={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          setHovered(false);
          document.body.style.cursor = "default";
          setTooltip(null);
        }}
        onClick={() => selectObservation(observation)}>
        <sphereGeometry args={[0.013, 12, 12]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </group>
  );
}

export const Hotspot = memo(HotspotBase);
