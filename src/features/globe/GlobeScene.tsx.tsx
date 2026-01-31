import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./Earth";

export function GlobeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ antialias: true }}>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Controls */}
      <OrbitControls enablePan={false} minDistance={2} maxDistance={5} />

      {/* Earth */}
      <Earth />
    </Canvas>
  );
}
