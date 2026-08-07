export type NavigationItem = {
  label: string;
  href: string;
  id: string;
};

export type ProductId = string | number;

export type ProductImage = {
  src: string;
};

export type Product = {
  id: ProductId;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  images: Array<ProductImage>;
  price?: string;
  oldPrice?: string;
  isDiscount?: boolean;
  isSold?: boolean;
  isInCart?: boolean;
  soldText?: string;
};

export type CartTogglePayload = {
  id: ProductId;
  isInCart: boolean;
};
