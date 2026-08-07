import { NavigationItem, Product } from "@/shared/types";

export const navigation: Array<NavigationItem> = [
  { id: "catalog", label: "Каталог", href: "#" },
  { id: "delivery", label: "Доставка", href: "#" },
  { id: "payment", label: "Оплата", href: "#" },
  { id: "contacts", label: "Контакты", href: "#" },
  { id: "about", label: "О компании", href: "#" },
];

export const products: Array<Product> = [
  {
    id: "venus",
    image: require("@/assets/images/Venus.png"),
    title: "«Рождение Венеры»",
    subtitle: "Сандро Боттичелли",
    price: "1 000 000 $",
    oldPrice: "2 000 000 $",
    isDiscount: true,
  },
  {
    id: "last-supper",
    image: require("@/assets/images/Last_Supper.png"),
    title: "«Тайная вечеря»",
    subtitle: "Леонардо да Винчи",
    price: "3 000 000 $",
  },
  {
    id: "creation-of-adam",
    image: require("@/assets/images/Adam.png"),
    title: "«Сотворение Адама»",
    subtitle: "Микеланджело",
    price: "5 000 000 $",
    oldPrice: "6 000 000 $",
    isDiscount: true,
    isInCart: true,
  },
  {
    id: "anatomy-lesson",
    image: require("@/assets/images/Lesson_Anatomy.png"),
    title: "«Урок анатомии»",
    subtitle: "Рембрандт",
    isSold: true,
    soldText: "Продана на аукционе",
  },
];
