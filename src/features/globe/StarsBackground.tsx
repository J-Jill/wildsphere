import { Stars } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export function StarsBackground() {
  const texture = useLoader(TextureLoader, "/textures/2k_stars_milky_way.jpg");

  return (
    <>
      {/* Milky Way nebula — subtle base layer */}
      <mesh>
        <sphereGeometry args={[90, 32, 32]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Crisp individual stars on top */}
      <Stars
        radius={80}
        depth={40}
        count={6000}
        factor={2.5}
        saturation={0}
        fade
        speed={0}
      />
    </>
  );
}
