"use client";

import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import MouseLook from "@/components/store/MouseLook";
import PlayerMovement from "@/components/store/PlayerMovement";

const keyboardMap = [
  {
    name: "forward",
    keys: ["KeyW", "ArrowUp"],
  },
  {
    name: "backward",
    keys: ["KeyS", "ArrowDown"],
  },
  {
    name: "left",
    keys: ["KeyA", "ArrowLeft"],
  },
  {
    name: "right",
    keys: ["KeyD", "ArrowRight"],
  },
];

export default function StoreScene() {
  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas
        camera={{
          position: [0, 1.6, 5],
          fov: 60,
        }}
      >
        <MouseLook />

        {/* Lighting */}
        <ambientLight intensity={1.5} />

        <directionalLight position={[5, 10, 5]} intensity={2} />

        <Physics debug>
          <PlayerMovement />

          {/* Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#d9d9d9" />
          </mesh>

          {/* Back wall */}
          <mesh position={[0, 2, -10]}>
            <boxGeometry args={[20, 4, 0.2]} />
            <meshStandardMaterial color="#f5f5f5" />
          </mesh>

          {/* Left wall */}
          <mesh position={[-10, 2, 0]}>
            <boxGeometry args={[0.2, 4, 20]} />
            <meshStandardMaterial color="#eeeeee" />
          </mesh>

          {/* Right wall */}
          <mesh position={[10, 2, 0]}>
            <boxGeometry args={[0.2, 4, 20]} />
            <meshStandardMaterial color="#eeeeee" />
          </mesh>
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
}
