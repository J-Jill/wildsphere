import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./Earth";

export function GlobeScene() {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 2.2], fov: 50 }}>
      {/* Luz base */}
      <ambientLight intensity={0.8} />

      {/* Luz tipo sol */}
      <directionalLight position={[5, 3, 5]} intensity={4.5} />

      {/* Relleno suave */}
      <hemisphereLight intensity={0.4} groundColor="#000000" />

      <Earth />

      <OrbitControls enablePan={false} minDistance={1.8} maxDistance={3} />
    </Canvas>
  );
}
