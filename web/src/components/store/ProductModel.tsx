"use client";

import { Clone, useGLTF } from "@react-three/drei";

type ProductModelProps = {
  modelUrl: string;
  scale?: number;
};

export default function ProductModel({
  modelUrl,
  scale = 1,
}: ProductModelProps) {
  const { scene } = useGLTF(modelUrl);

  return <Clone object={scene} scale={scale} />;
}
