"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

export default function MouseLook() {
  const { camera, gl } = useThree();

  const isDragging = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    const canvas = gl.domElement;

    // Important for first-person style rotation
    camera.rotation.order = "YXZ";

    const handlePointerDown = (event: PointerEvent) => {
      // Right mouse button only
      if (event.button !== 2) return;

      isDragging.current = true;

      lastX.current = event.clientX;
      lastY.current = event.clientY;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging.current) return;

      const deltaX = event.clientX - lastX.current;
      const deltaY = event.clientY - lastY.current;

      lastX.current = event.clientX;
      lastY.current = event.clientY;

      const sensitivity = 0.0025;

      // Left / right
      camera.rotation.y -= deltaX * sensitivity;

      // Up / down
      camera.rotation.x -= deltaY * sensitivity;

      // Prevent camera from flipping upside down
      const maxPitch = Math.PI / 2 - 0.05;

      camera.rotation.x = Math.max(
        -maxPitch,
        Math.min(maxPitch, camera.rotation.x),
      );
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    canvas.addEventListener("contextmenu", handleContextMenu);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);

      canvas.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [camera, gl]);

  return null;
}
