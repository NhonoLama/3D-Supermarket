"use client";

import { CuboidCollider, RigidBody } from "@react-three/rapier";
import type { ReactNode } from "react";

type ShelfProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  children?: ReactNode;
};

export default function Shelf({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  children,
}: ShelfProps) {
  return (
    <RigidBody
      type="fixed"
      position={position}
      rotation={rotation}
      colliders={false}
    >
      {/* Physical collision area */}
      <CuboidCollider args={[1.5, 1, 0.4]} position={[0, 1, 0]} />

      {/* Left support */}
      <mesh position={[-1.45, 1, 0]}>
        <boxGeometry args={[0.1, 2, 0.8]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      {/* Right support */}
      <mesh position={[1.45, 1, 0]}>
        <boxGeometry args={[0.1, 2, 0.8]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      {/* Bottom shelf */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[3, 0.1, 0.8]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      {/* Middle shelf */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[3, 0.1, 0.8]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      {/* Top shelf */}
      <mesh position={[0, 1.7, 0]}>
        <boxGeometry args={[3, 0.1, 0.8]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      {children}
    </RigidBody>
  );
}
