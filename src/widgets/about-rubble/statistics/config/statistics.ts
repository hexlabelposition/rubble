import { MoveUpRightIcon } from "@shared/ui";

import type { Key } from "react";
import type { FunctionComponent } from "react";
import type { SVGProps } from "react";

interface StatisticItem {
  key: Key;
  title: string;
  description: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

type StatisticList = Array<StatisticItem>;

export const statistics: StatisticList = [
  {
    key: "properties",
    title: "Properties Available",
    description: "800",
    Icon: MoveUpRightIcon,
  },
  {
    key: "partners",
    title: "Total Partners",
    description: "280",
    Icon: MoveUpRightIcon,
  },
  {
    key: "customers",
    title: "Satisfied Customers",
    description: "460",
    Icon: MoveUpRightIcon,
  },
  {
    key: "awards",
    title: "Awards Winning",
    description: "120",
    Icon: MoveUpRightIcon,
  },
];
