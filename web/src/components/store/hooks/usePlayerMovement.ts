"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import type { RapierRigidBody } from "@react-three/rapier";
import * as THREE from "three";

type Controls =
  | "forward"
  | "backward"
  | "left"
  | "right";

const MOVE_SPEED = 4;
const CAMERA_HEIGHT_OFFSET = 0.7;

export function usePlayerMovement(
  bodyRef: React.RefObject<RapierRigidBody | null>,
) {
  const { camera } = useThree();

  const [, getKeys] = useKeyboardControls<Controls>();

  const forwardVector = useRef(new THREE.Vector3());
  const rightVector = useRef(new THREE.Vector3());
  const movementVector = useRef(new THREE.Vector3());

  useFrame(() => {
    const body = bodyRef.current;

    if (!body) return;

    const {
      forward,
      backward,
      left,
      right,
    } = getKeys();

    const movement = movementVector.current;

    movement.set(0, 0, 0);

    camera.getWorldDirection(forwardVector.current);

    forwardVector.current.y = 0;
    forwardVector.current.normalize();

    rightVector.current
      .crossVectors(
        forwardVector.current,
        camera.up,
      )
      .normalize();

    if (forward) {
      movement.add(forwardVector.current);
    }

    if (backward) {
      movement.sub(forwardVector.current);
    }

    if (right) {
      movement.add(rightVector.current);
    }

    if (left) {
      movement.sub(rightVector.current);
    }

    const currentVelocity = body.linvel();

    if (movement.lengthSq() > 0) {
      movement.normalize();

      body.setLinvel(
        {
          x: movement.x * MOVE_SPEED,
          y: currentVelocity.y,
          z: movement.z * MOVE_SPEED,
        },
        true,
      );
    } else {
      body.setLinvel(
        {
          x: 0,
          y: currentVelocity.y,
          z: 0,
        },
        true,
      );
    }

    const playerPosition = body.translation();

    camera.position.set(
      playerPosition.x,
      playerPosition.y + CAMERA_HEIGHT_OFFSET,
      playerPosition.z,
    );
  });
}