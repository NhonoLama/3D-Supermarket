"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

type Controls = "forward" | "backward" | "left" | "right";

export default function PlayerMovement() {
  const { camera } = useThree();

  const [, getKeys] = useKeyboardControls<Controls>();

  const forwardVector = useRef(new THREE.Vector3());
  const rightVector = useRef(new THREE.Vector3());
  const moveDirection = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const { forward, backward, left, right } = getKeys();

    const movement = moveDirection.current;

    movement.set(0, 0, 0);

    /*
     * Find which direction the camera
     * is currently looking.
     */
    camera.getWorldDirection(forwardVector.current);

    /*
     * We are walking on a floor.
     * Looking upward should not make us fly.
     */
    forwardVector.current.y = 0;

    forwardVector.current.normalize();

    /*
     * Calculate the direction to the
     * camera's right.
     */
    rightVector.current
      .crossVectors(forwardVector.current, camera.up)
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

    /*
     * If we're pressing a movement key,
     * actually move the camera.
     */
    if (movement.lengthSq() > 0) {
      movement.normalize();

      const speed = 4;

      movement.multiplyScalar(speed * delta);

      camera.position.add(movement);
    }
  });

  return null;
}
