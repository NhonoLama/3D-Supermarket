"use client";

import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import type { StoreProduct } from "@/types/store-product";

import { testProducts } from "@/data/mock-products";

import MouseLook from "@/components/store/MouseLook";
import Player from "@/components/store/Player";
import StoreEnvironment from "@/components/store/StoreEnvironment";
import Shelf from "@/components/store/Shelf";
import ShelfProductRow from "@/components/store/ShelfProductRow";

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
          <Player />
          <StoreEnvironment />
          {/* Left side of aisle */}
          <Shelf position={[-3, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <ShelfProductRow y={1.35} products={testProducts} />
          </Shelf>

          <Shelf position={[-3, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

          <Shelf position={[-3, 0, 4]} rotation={[0, Math.PI / 2, 0]} />

          {/* Right side of aisle */}
          <Shelf position={[3, 0, -4]} rotation={[0, Math.PI / 2, 0]} />

          <Shelf position={[3, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

          <Shelf position={[3, 0, 4]} rotation={[0, Math.PI / 2, 0]} />
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
}
