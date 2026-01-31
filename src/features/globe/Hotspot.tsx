import { latLngToVector3 } from "@/utils/geo";

type HotspotProps = {
  lat: number;
  lng: number;
};

export function Hotspot({ lat, lng }: HotspotProps) {
  const position = latLngToVector3(lat, lng, 1.01);

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
