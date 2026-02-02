import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function SceneContent({ active }: { active: boolean }) {
  const globeRef = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.DirectionalLight>(null!);

  useFrame(() => {
    if (!globeRef.current || !lightRef.current) return;

    // Posición Y del globo
    globeRef.current.position.y = THREE.MathUtils.lerp(
      globeRef.current.position.y,
      active ? 0 : -1.5,
      0.05,
    );

    // Intensidad de luz
    lightRef.current.intensity = THREE.MathUtils.lerp(
      lightRef.current.intensity,
      active ? 1.2 : 0.2,
      0.05,
    );
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight ref={lightRef} position={[5, 5, 5]} intensity={0.2} />

      <group ref={globeRef}>{/* Globe + hotspots */}</group>
    </>
  );
}
