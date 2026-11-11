export type StoreProduct = {
  productId: string;
  variantId: string;

  name: string;
  variantLabel: string;

  sku: string;

  price: number;

  modelUrl?: string;
};