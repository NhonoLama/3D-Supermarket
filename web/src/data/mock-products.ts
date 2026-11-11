import type { StoreProduct } from "@/types/store-product";

export const testProducts: StoreProduct[] = [
   {
      productId: "coke",
      variantId: "coke-500ml",
      name: "Coca-Cola",
      variantLabel: "500 ml",
      sku: "COKE-500",
      price: 100,
      modelUrl: "/models/products/coca-cola_no_sugar_1.5l.glb",
    },
  {
    productId: "fanta",
    variantId: "fanta-500ml",
    name: "Fanta",
    variantLabel: "500 ml",
    sku: "FANTA-500",
    price: 100,
     modelUrl: "/models/products/coca-cola_no_sugar_1.5l.glb",
  },
  {
    productId: "sprite",
    variantId: "sprite-500ml",
    name: "Sprite",
    variantLabel: "500 ml",
    sku: "SPRITE-500",
    price: 100,
     modelUrl: "/models/products/coca-cola_no_sugar_1.5l.glb",
  },
];