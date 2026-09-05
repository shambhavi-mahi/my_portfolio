"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import RobotModel from "./RobotModel";
import { Suspense, useEffect, useState } from "react";

export default function RobotScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return <div className="w-full h-full" />;

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} style={{ background: "transparent" }}>
        {/* Light-theme friendly lighting */}
        <ambientLight intensity={1.4} color="#f0f0ff" />
        <directionalLight position={[8, 10, 5]}  intensity={2}   color="#e0e7ff" />
        <directionalLight position={[-8, -5, -5]} intensity={0.6} color="#c4b5fd" />
        <pointLight       position={[0, 3, 3]}    intensity={0.8} color="#a78bfa" />

        <Suspense fallback={null}>
          <Float speed={1.6} rotationIntensity={0.12} floatIntensity={0.6} floatingRange={[-0.15, 0.15]}>
            <RobotModel />
          </Float>

          <ContactShadows
            position={[0, -2.0, 0]}
            opacity={0.12}
            scale={8}
            blur={3}
            far={4}
            color="#6366f1"
          />
        </Suspense>

        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
