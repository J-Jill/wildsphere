import * as THREE from "three";
import { useState } from "react";

export function StarsBackground() {
  const [geometry] = useState(() => {
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return geo;
  });

  return (
    <points geometry={geometry}>
      <pointsMaterial size={0.15} color="#ffffff" sizeAttenuation />
    </points>
  );
}
