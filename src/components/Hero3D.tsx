"use client";

import { useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function Blob({ reducedMotion }: { reducedMotion: boolean }) {
  const mesh = useRef<Mesh>(null);
  const entrance = useRef(0);

  useFrame((state, delta) => {
    const node = mesh.current;
    if (!node) return;

    // Entrance: ease the scale up from 0 to 1 once, on mount.
    if (entrance.current < 1) {
      entrance.current = Math.min(1, entrance.current + delta * 0.9);
      const eased = 1 - Math.pow(1 - entrance.current, 3);
      node.scale.setScalar(eased * 1.4);
    }

    if (reducedMotion) return;

    // Slow idle spin plus a gentle turn toward the pointer.
    node.rotation.y += delta * 0.15;
    node.rotation.x += delta * 0.05;
    const targetX = state.pointer.y * 0.3;
    const targetY = state.pointer.x * 0.3;
    node.rotation.x += (targetX - node.rotation.x) * 0.02;
    node.rotation.z += (targetY - node.rotation.z) * 0.02;
  });

  const props: ThreeElements["mesh"] = { ref: mesh };

  return (
    <mesh {...props}>
      <icosahedronGeometry args={[1, 8]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        roughness={0.15}
        metalness={0.4}
        distort={reducedMotion ? 0.25 : 0.4}
        speed={reducedMotion ? 0 : 1.4}
      />
    </mesh>
  );
}

export function Hero3D() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reducedMotion ? "demand" : "always"}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 2, 4]} intensity={1.2} color="#f3efe6" />
      <pointLight position={[-3, -2, -2]} intensity={0.6} color="#8b5cf6" />
      <Blob reducedMotion={reducedMotion} />
    </Canvas>
  );
}
