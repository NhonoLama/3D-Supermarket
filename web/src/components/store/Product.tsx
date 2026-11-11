"use client";

import { useState } from "react";
import { useThree } from "@react-three/fiber";

import type { StoreProduct } from "@/types/store-product";

import ProductModel from "@/components/store/ProductModel";

type ProductProps = {
  position: [number, number, number];
  product: StoreProduct;
};

export default function Product({ position, product }: ProductProps) {
  const [hovered, setHovered] = useState(false);

  const { gl } = useThree();

  function handlePointerOver() {
    setHovered(true);

    gl.domElement.style.cursor = "pointer";
  }

  function handlePointerOut() {
    setHovered(false);

    gl.domElement.style.cursor = "default";
  }

  function handleClick() {
    console.log("Selected product:", product);
  }

  return (
    <group
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <ProductModel modelUrl={product.modelUrl} scale={1} />
    </group>
  );
}
