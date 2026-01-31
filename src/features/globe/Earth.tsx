import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Hotspot } from "./Hotspot";

const MOCK_OBSERVATIONS = [
  { id: 1, lat: 51.0486, lng: -114.0708 }, // Canadá
  { id: 2, lat: -3.4653, lng: -62.2159 }, // Amazonia
];

export function Earth() {
  const texture = useLoader(TextureLoader, "/textures/earth_daymap.jpg");

  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {MOCK_OBSERVATIONS.map((obs) => (
        <Hotspot key={obs.id} lat={obs.lat} lng={obs.lng} />
      ))}
    </>
  );
}
