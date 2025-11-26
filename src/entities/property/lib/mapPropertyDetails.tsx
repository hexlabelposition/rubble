import { BedIcon } from "@shared/ui";
import { BathIcon } from "@shared/ui";
import { AreaIcon } from "@shared/ui";

import { formatArea } from "./formatArea";

import type { PropertySummary } from "../model/types";

export function mapPropertyDetails(details: PropertySummary["details"]) {
  return [
    {
      key: "bedrooms",
      value: details.bedrooms,
      label: "Beds",
      Icon: BedIcon,
    },
    {
      key: "bathrooms",
      value: details.bathrooms,
      label: "Baths",
      Icon: BathIcon,
    },
    {
      key: "area",
      value: formatArea(details.area),
      label: "sqft",
      Icon: AreaIcon,
    },
  ];
}
