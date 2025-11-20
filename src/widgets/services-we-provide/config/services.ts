import type { Key } from "react";

interface ServiceItem {
  key: Key;
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

type ServiceList = Array<ServiceItem>;

export const services: ServiceList = [
  {
    key: "buy",
    title: "Buy Property",
    description:
      "Find your property with a vast selection of options tailored to ideally match your unique preferences.",
    image: {
      src: "/buy-property.webp",
      width: 295,
      height: 262,
      alt: "",
    },
  },
  {
    key: "rent",
    title: "Rent Property",
    description:
      "Discover the perfect housing solution, whether you need a convenient and temporary stay.",
    image: {
      src: "/rent-property.webp",
      width: 295,
      height: 262,
      alt: "",
    },
  },
  {
    key: "sell",
    title: "Sell Property",
    description:
      "Sell your property with maximum visibility, easily connect with a broad audience of buyers.",
    image: {
      src: "/sell-property.webp",
      width: 295,
      height: 262,
      alt: "",
    },
  },
];
