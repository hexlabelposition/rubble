import { format } from "node:url";
import { ROUTES } from "@shared/config";

import type { Key } from "react";

interface NavigationItem {
  key: Key;
  href: string;
  title: string;
  className: {
    container: string;
    position: string;
    offset: string;
  };
}

type NavigationList = Array<NavigationItem>;

export const navigation: NavigationList = [
  {
    key: "buy",
    href: format({
      pathname: ROUTES.GENERAL.PROPERTY,
      query: { propertyStatus: "buy" },
    }),
    title: "Buy Property",
    className: {
      container: "flex absolute flex-row-reverse p-4",
      position:
        "top-[68%] left-[20%] lg:left-[14%] lg:top-[63%] translate-x-[-50%] translate-y-[-50%]",
      offset: "mt-6 2xl:mt-8",
    },
  },
  {
    key: "rent",
    href: format({
      pathname: ROUTES.GENERAL.PROPERTY,
      query: { propertyStatus: "rent" },
    }),
    title: "Rent Property",
    className: {
      container: "flex absolute flex-row-reverse p-4",
      position:
        "bottom-[8%] left-[46%] lg:left-[46%] lg:bottom-[11%] translate-x-[-50%] translate-y-[-50%]",
      offset: "mt-6 2xl:mt-8",
    },
  },
  {
    key: "sell",
    href: format({
      pathname: ROUTES.GENERAL.PROPERTY,
      query: { propertyStatus: "sell" },
    }),
    title: "Sell Property",
    className: {
      container: "flex absolute p-4",
      position:
        "right-[17%] bottom-[21%] lg:right-[18%] lg:bottom-[22%] translate-x-[50%] translate-y-[-50%]",
      offset: "mt-6 2xl:mt-8",
    },
  },
];
