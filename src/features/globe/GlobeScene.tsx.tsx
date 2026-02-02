import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Earth } from "./Earth";

interface GlobeSceneProps {
  active: boolean;
}

function SceneContent({ active }: { active: boolean }) {
  const globeRef = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.DirectionalLight>(null!);

  useFrame(() => {
    if (!globeRef.current || !lightRef.current) return;

    globeRef.current.position.y = THREE.MathUtils.lerp(
      globeRef.current.position.y,
      active ? 0 : -1.5,
      0.05,
    );

    lightRef.current.intensity = THREE.MathUtils.lerp(
      lightRef.current.intensity,
      active ? 3.5 : 0.3,
      0.05,
    );
  });

  return (
    <>
      <ambientLight intensity={0.4} />

      <directionalLight ref={lightRef} position={[5, 3, 5]} intensity={0.3} />

      <hemisphereLight intensity={0.4} groundColor="#000000" />

      <group ref={globeRef}>
        <Earth active={active} />
      </group>

      <OrbitControls enablePan={false} minDistance={1.8} maxDistance={3} />
    </>
  );
}

export function GlobeScene({ active }: GlobeSceneProps) {
  return (
    <Canvas className="h-full w-full" camera={{ position: [0, 0, 6], fov: 50 }}>
      <SceneContent active={active} />
    </Canvas>
  );
}
