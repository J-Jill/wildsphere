import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Hotspot } from "./Hotspot";
import { useObservations } from "@/hooks/useObservations";

export function Earth() {
  const texture = useLoader(TextureLoader, "/textures/earth_daymap.jpg");

  const { data, isLoading, isError } = useObservations();

  if (isError) return null;

  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      {!isLoading &&
        data?.results.map((obs) => <Hotspot key={obs.id} observation={obs} />)}
    </>
  );
}
