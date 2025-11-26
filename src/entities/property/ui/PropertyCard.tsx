import Image from "next/image";
import { Card } from "@shared/ui";
import { MapPinIcon } from "@shared/ui";
import { formatPrice } from "../lib/formatPrice";
import { mapPropertyDetails } from "../lib/mapPropertyDetails";

import type { PropertySummary } from "../model/types";

type PropertyCardProps = PropertySummary;

export const PropertyCard = ({
  id,
  coverImage,
  title,
  price,
  address,
  details,
}: PropertyCardProps) => {
  const propertyDetails = mapPropertyDetails(details);
  return (
    <Card
      as="article"
      id={id}
      className="rounded-lg 2xl:rounded-xl 2xl:border-2"
    >
      <Image
        src={coverImage}
        width={295}
        height={240}
        alt=""
        style={{
          aspectRatio: "295 / 240",
          objectFit: "cover",
          width: "100%",
          height: "auto",
        }}
        className="mb-4 rounded-md 2xl:mb-6 2xl:rounded-lg"
      />

      <div className="mb-4 flex justify-between font-semibold 2xl:mb-6 2xl:text-xl">
        <h3>{title}</h3>
        <p>{formatPrice(price)}</p>
      </div>

      <div className="text-secondary-500 mb-6 flex items-center gap-x-2 text-xs 2xl:mb-10 2xl:text-base">
        <MapPinIcon
          aria-hidden="true"
          width={16}
          height={16}
          className="2xl:size-10"
        />
        <p>{address}</p>
      </div>

      <div className="flex justify-between">
        {propertyDetails.map(({ key, Icon, value, label }) => (
          <div
            key={key}
            className="text-secondary-500 border-secondary-200 flex min-h-16 items-center gap-x-3 rounded-sm border px-4 text-xs 2xl:min-h-20 2xl:gap-x-4 2xl:rounded-md 2xl:border-2 2xl:px-6 2xl:text-base"
          >
            <Icon aria-hidden="true" />
            {value} {label}
          </div>
        ))}
      </div>
    </Card>
  );
};
