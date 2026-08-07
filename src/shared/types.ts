export type NavigationItem = {
  label: string;
  href: string;
  id: string;
};

export type ProductId = string | number;

export type Product = {
  id: ProductId;
  image: string;
  title: string;
  subtitle: string;
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
