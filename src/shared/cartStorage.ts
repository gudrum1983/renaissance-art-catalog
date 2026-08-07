import { ProductId } from "@/shared/types";

const CART_STORAGE_KEY = "renaissance-art-catalog:cart";

const isProductId = (value: unknown): value is ProductId =>
  typeof value === "string" || typeof value === "number";

export const loadCartProductIds = (): Array<ProductId> | null => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (storedCart === null) return null;

    const parsedCart: unknown = JSON.parse(storedCart);

    return Array.isArray(parsedCart) ? parsedCart.filter(isProductId) : null;
  } catch {
    return null;
  }
};

export const saveCartProductIds = (productIds: Array<ProductId>): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(productIds));
  } catch {
    // Корзина продолжит работать в памяти, если localStorage недоступен.
  }
};
