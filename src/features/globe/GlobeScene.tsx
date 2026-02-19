import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Earth } from "./Earth";
import { useObservations } from "../ObservationPanel/hooks/useObservations";
import { useSelection } from "@/context/SelectionContext";
import { latLngToVector3, getLatLng } from "./utils/geo";
import { StarsBackground } from "./StarsBackground";

interface GlobeSceneProps {
  active: boolean;
}

function SceneContent({ active }: { active: boolean }) {
  const { isError } = useObservations();
  const { selected } = useSelection();
  const globeRef = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.DirectionalLight>(null!);
  const isUserInteracting = useRef(false);

  useFrame(() => {
    if (!globeRef.current || isUserInteracting.current) return;
    globeRef.current.rotation.y += 0.001;
  });
  if (isError) return <>Unable to load observations</>;

  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight ref={lightRef} position={[5, 3, 5]} intensity={0.3} />
      <hemisphereLight intensity={0.4} groundColor="#000000" />
      <group ref={globeRef}>
        <Earth active={active} />
      </group>
      <OrbitControls
        enablePan={false}
        minDistance={1.8}
        maxDistance={3}
        onStart={() => (isUserInteracting.current = true)}
        onEnd={() => (isUserInteracting.current = false)}
      />
    </>
  );
}

export function GlobeScene({ active }: GlobeSceneProps) {
  return (
    <Canvas className="h-full w-full" camera={{ position: [0, 0, 6], fov: 50 }}>
      <StarsBackground /> <SceneContent active={active} />
    </Canvas>
  );
}
