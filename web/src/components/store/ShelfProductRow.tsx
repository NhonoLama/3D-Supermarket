"use client";

import Product from "@/components/store/Product";
import type { StoreProduct } from "@/types/store-product";

type ShelfProductRowProps = {
  products: StoreProduct[];
  y: number;
};

const PRODUCT_SPACING = 0.6;

export default function ShelfProductRow({ products, y }: ShelfProductRowProps) {
  const totalWidth = (products.length - 1) * PRODUCT_SPACING;

  const startX = -totalWidth / 2;

  return (
    <>
      {products.map((product, index) => {
        const x = startX + index * PRODUCT_SPACING;

        return (
          <Product
            key={product.variantId}
            product={product}
            position={[x, y, 0]}
          />
        );
      })}
    </>
  );
}
