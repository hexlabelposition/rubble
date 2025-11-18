import { tv } from "tailwind-variants";

const cardVariants = tv({
  base: "border-secondary-200 rounded-md border p-8",
});

import type { ElementType } from "react";
import type { PolymorphicPropsWithRef } from "@shared/type";

type CardProps<T extends ElementType> = PolymorphicPropsWithRef<T>;

export const Card = <T extends ElementType = "div">({
  as,
  className,
  ...props
}: CardProps<T>) => {
  const Component = as || "div";
  return <Component className={cardVariants({ className })} {...props} />;
};
