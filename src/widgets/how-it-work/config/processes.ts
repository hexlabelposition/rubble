import { BuildingsIcon } from "@shared/ui";
import { CalendarDaysIcon } from "@shared/ui";
import { MapPinCheckInsideIcon } from "@shared/ui";
import { DollarSquareIcon } from "@shared/ui";

import type { Key } from "react";
import type { FunctionComponent } from "react";
import type { SVGProps } from "react";

interface ProcessItem {
  key: Key;
  step: string;
  title: string;
  description: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

type ProcessList = Array<ProcessItem>;

export const processes: ProcessList = [
  {
    key: "discover-property",
    step: "01",
    title: "Discover Property",
    description:
      "Find a wide selection of properties that perfectly suit your needs and preferences. Browse a comprehensive list of properties that offer detailed information.",
    Icon: BuildingsIcon,
  },
  {
    key: "schedule-visit",
    step: "02",
    title: "Schedule Visit",
    description:
      "Once you find a property of interest, schedule a visit at your convenience. Choose a date and time, and our team will ensure a smooth viewing experience.",
    Icon: CalendarDaysIcon,
  },
  {
    key: "property-visit",
    step: "03",
    title: "Property Visit",
    description:
      "Visit, explore the neighborhood, and ensure every detail meets your expectations. Our team will be on hand to answer questions and provide information.",
    Icon: MapPinCheckInsideIcon,
  },
  {
    key: "finalize-deal",
    step: "04",
    title: "Finalize The Deal",
    description:
      "After the visit, if you're ready, we'll guide you through a secure transaction, handling everything from negotiation to paperwork until you're the official owner.",
    Icon: DollarSquareIcon,
  },
];
