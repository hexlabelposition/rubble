import { format } from "node:url";
import { routes } from "@shared/config";

import type { Key } from "react";

interface ShortcutItem {
  key: Key;
  href: string;
  title: string;
  containerPosition?: string;
  pointPosition: string;
}

type ShortcutList = Array<ShortcutItem>;

const mapCorners = {
  topRight: "top-0 right-0 translate-x-full -translate-y-full",
  topLeft: "top-0 left-0 -translate-x-full -translate-y-full",
};

export const shortcuts: ShortcutList = [
  {
    key: "buy",
    href: format({
      pathname: routes.property,
      query: { propertyStatus: "buy" },
    }),
    title: "Buy Property",
    containerPosition:
      "bottom-[29%] lg:bottom-[34%] lg:left-[9%] xl:left-[8.5%] 2xl:left-[10%]",
    pointPosition: mapCorners.topRight,
  },
  {
    key: "rent",
    href: format({
      pathname: routes.property,
      query: { propertyStatus: "rent" },
    }),
    title: "Rent Property",
    containerPosition:
      "left-[32%] bottom-[14%] lg:left-[40.5%] lg:bottom-[17%] xl:bottom-[14%] xl:left-[40%] 2xl:left-[41.5%] 2xl:bottom-[16%]",
    pointPosition: mapCorners.topRight,
  },
  {
    key: "sell",
    href: format({
      pathname: routes.property,
      query: { propertyStatus: "sell" },
    }),
    title: "Sell Property",
    containerPosition:
      "bottom-[27%] right-[7%] lg:right-[13%] lg:bottom-[29%] xl:bottom-[28%] 2xl:right-[14%]",
    pointPosition: mapCorners.topLeft,
  },
];
