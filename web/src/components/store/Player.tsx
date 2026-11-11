"use client";

import { useRef } from "react";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";

import { usePlayerMovement } from "@/components/store/hooks/usePlayerMovement";

export default function Player() {
  const bodyRef = useRef<RapierRigidBody>(null);

  usePlayerMovement(bodyRef);

  return (
    <RigidBody
      ref={bodyRef}
      type="dynamic"
      position={[0, 0.9, 5]}
      colliders={false}
      lockRotations
    >
      <CapsuleCollider args={[0.5, 0.4]} friction={0} />
    </RigidBody>
  );
}
