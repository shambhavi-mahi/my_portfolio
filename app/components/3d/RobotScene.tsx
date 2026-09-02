"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import RobotModel from "./RobotModel";
import { Suspense, useEffect, useState } from "react";

export default function RobotScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-full min-h-[400px] md:min-h-[600px]" />;

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] relative z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        {/* Soft Ambient Lighting for Light Theme */}
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#e0e7ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#e879f9" />
        
        <Suspense fallback={null}>
          <Float
            speed={2} // Animation speed
            rotationIntensity={0.15} // XYZ rotation intensity
            floatIntensity={0.5} // Up/down float intensity
            floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within
          >
            <RobotModel />
          </Float>
          
          <ContactShadows 
            position={[0, -1.8, 0]} 
            opacity={0.3} 
            scale={10} 
            blur={2.5} 
            far={4} 
            color="#6366f1" 
          />
        </Suspense>
        
        {/* Adds natural subtle reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
