"use client";

import { RigidBody } from "@react-three/rapier";

export default function StoreEnvironment() {
  return (
    <>
      {/* Floor */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[20, 0.2, 20]} />
          <meshStandardMaterial color="#d9d9d9" />
        </mesh>
      </RigidBody>

      {/* Back wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 2, -10]}>
          <boxGeometry args={[20, 4, 0.2]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
      </RigidBody>

      {/* Left wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-10, 2, 0]}>
          <boxGeometry args={[0.2, 4, 20]} />
          <meshStandardMaterial color="#eeeeee" />
        </mesh>
      </RigidBody>

      {/* Right wall */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[10, 2, 0]}>
          <boxGeometry args={[0.2, 4, 20]} />
          <meshStandardMaterial color="#eeeeee" />
        </mesh>
      </RigidBody>
    </>
  );
}
