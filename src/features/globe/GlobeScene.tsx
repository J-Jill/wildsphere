import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Earth } from "./Earth";
import { useObservations } from "../ObservationPanel/hooks/useObservations";
import { useSelection } from "@/context/SelectionContext";
import { latLngToVector3, getLatLng } from "./utils/geo";

interface GlobeSceneProps {
  active: boolean;
}

function SceneContent({ active }: { active: boolean }) {
  const { isError } = useObservations();
  const { selected } = useSelection();

  const globeRef = useRef<THREE.Group>(null!);
  const lightRef = useRef<THREE.DirectionalLight>(null!);
  const targetRotation = useRef(new THREE.Quaternion());

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

  useEffect(() => {
    if (!selected) return;

    const [lng, lat] = getLatLng(selected);
    const targetArr = latLngToVector3(lat, lng, 1);

    // convertir array → Vector3
    const target = new THREE.Vector3(...targetArr);

    const current = new THREE.Vector3(0, 0, 1);

    const q = new THREE.Quaternion().setFromUnitVectors(
      target.clone().normalize(),
      current,
    );

    targetRotation.current.copy(q);
  }, [selected]);

  useFrame(() => {
    if (!globeRef.current) return;

    globeRef.current.quaternion.slerp(targetRotation.current, 0.05);
  });

  if (isError) {
    return <>Unable to load observations</>;
  }

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight ref={lightRef} position={[5, 3, 5]} intensity={0.3} />
      <hemisphereLight intensity={0.4} groundColor="#000000" />

      <group ref={globeRef} rotation={[0, 0, 0]}>
        <Earth active={active} />
      </group>

      <OrbitControls
        enablePan={false}
        minDistance={1.8}
        maxDistance={3}
        enableRotate={!selected}
      />
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
