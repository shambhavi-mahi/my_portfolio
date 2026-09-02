"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function RobotModel() {
  const groupRef = useRef<THREE.Group>(null);

  // Catch errors loading GLB to show fallback immediately
  let scene = null;
  try {
    const gltf = useGLTF("/models/robot.glb", true, true, (error) => {
      console.warn("Could not load /models/robot.glb, rendering fallback.", error);
    });
    scene = (gltf as any).scene;
  } catch (e) {
    // Graceful fallback if file is missing completely during SSR or Client mount
  }

  useFrame((state) => {
    // Smooth mouse tracking parallax
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;

    if (groupRef.current) {
      // Smooth interpolation for subtle mouse tracking
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  // If the user's custom GLB is loaded successfully
  if (scene) {
    return <primitive ref={groupRef} object={scene} scale={1.5} position={[0, -1, 0]} />;
  }

  // FALLBACK PRIMITIVE ROBOT - Premium & Sleek
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, -0.2, 0]}>
        <capsuleGeometry args={[0.6, 1.4, 4, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Visor / Eyes (Subtle glowing LED) */}
      <mesh position={[0, 1.35, 0.42]}>
        <boxGeometry args={[0.6, 0.15, 0.2]} />
        <meshStandardMaterial 
          color="#c7d2fe" 
          emissive="#6366f1" 
          emissiveIntensity={2} 
          toneMapped={false} 
        />
      </mesh>
      
      {/* Accent floating rings / arms */}
      <mesh position={[-0.9, 0, 0]}>
        <capsuleGeometry args={[0.15, 0.8, 4, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.2} />
      </mesh>
      <mesh position={[0.9, 0, 0]}>
        <capsuleGeometry args={[0.15, 0.8, 4, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.2} />
      </mesh>

      {/* Internal core glow */}
      <mesh position={[0, -0.2, 0.5]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#8b5cf6" 
          emissiveIntensity={1.5} 
          toneMapped={false} 
        />
      </mesh>
    </group>
  );
}

// Preload the model if it exists, otherwise it will just fail silently and use fallback
useGLTF.preload("/models/robot.glb");
