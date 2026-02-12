import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Hotspot } from "./Hotspot";
import { useObservations } from "@/features/ObservationPanel/hooks/useObservations";
import { memo } from "react";

function EarthBase({ active }: { active: boolean }) {
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
        data?.results.map((obs) => (
          <Hotspot key={obs.id} observation={obs} active={active} />
        ))}
    </>
  );
}
export const Earth = memo(EarthBase);
