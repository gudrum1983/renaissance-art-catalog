import { NavigationItem, Product, ProductImage } from "@/shared/types";
import venusImage from "@/assets/images/Venus.png";
import venusImage1 from "@/assets/images/Venus_1.png";
import venusImage2 from "@/assets/images/Venus_2.png";
import lastSupperImage from "@/assets/images/Last_Supper.png";
import lastSupperImage1 from "@/assets/images/Last_Supper_1.png";
import adamImage from "@/assets/images/Adam.png";
import adamImage1 from "@/assets/images/Adam_1.png";
import adamImage2 from "@/assets/images/Adam_2.png";
import adamImage3 from "@/assets/images/Adam_3.png";
import anatomyLessonImage from "@/assets/images/Lesson_Anatomy.png";
import anatomyLessonImage1 from "@/assets/images/Lesson_Anatomy_1.png";
import anatomyLessonImage2 from "@/assets/images/Lesson_Anatomy_2.png";
import anatomyLessonImage3 from "@/assets/images/Lesson_Anatomy_3.png";

const createProductImages = (...sources: Array<string>): Array<ProductImage> =>
  sources.map((src) => ({ src }));

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
    image: venusImage,
    images: createProductImages(venusImage, venusImage1, venusImage2),
    title: "«Рождение Венеры»",
    subtitle: "Сандро Боттичелли",
    description:
      "Одна из самых узнаваемых работ итальянского Возрождения. Богиня Венера предстаёт на берегу как воплощение красоты и гармонии.",
    price: "1 000 000 $",
    oldPrice: "2 000 000 $",
    isDiscount: true,
  },
  {
    id: "last-supper",
    image: lastSupperImage,
    images: createProductImages(lastSupperImage, lastSupperImage1),
    title: "«Тайная вечеря»",
    subtitle: "Леонардо да Винчи",
    description:
      "Монументальная сцена последней трапезы Христа с учениками. Леонардо передал напряжение момента через жесты, взгляды и строгую перспективу.",
    price: "3 000 000 $",
  },
  {
    id: "creation-of-adam",
    image: adamImage,
    images: createProductImages(adamImage, adamImage1, adamImage2, adamImage3),
    title: "«Сотворение Адама»",
    subtitle: "Микеланджело",
    description:
      "Фрагмент росписи потолка Сикстинской капеллы о передаче жизни человеку. Почти соприкасающиеся руки стали символом творческого начала.",
    price: "5 000 000 $",
    oldPrice: "6 000 000 $",
    isDiscount: true,
    isInCart: true,
  },
  {
    id: "anatomy-lesson",
    image: anatomyLessonImage,
    images: createProductImages(
      anatomyLessonImage,
      anatomyLessonImage1,
      anatomyLessonImage2,
      anatomyLessonImage3
    ),
    title: "«Урок анатомии»",
    subtitle: "Рембрандт",
    description:
      "Групповой портрет амстердамских хирургов, объединённых вокруг анатомической демонстрации. Свет выделяет главных участников и усиливает драматизм сцены.",
    isSold: true,
    soldText: "Продана на аукционе",
  },
];
