import { tv } from "tailwind-variants";

import type { ElementType } from "react";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex shrink-0 items-center justify-center whitespace-nowrap",
  variants: {
    variant: {
      primary: "bg-primary-500 text-primary-0 border-primary-300",
      secondary: "border-secondary-200 bg-primary-0 text-primary-500",
    },
    size: {
      "extra-small": "min-h-16 rounded-sm border px-8 text-xs font-semibold",
      small: "min-h-18 rounded-sm border px-8 text-sm font-semibold",
      medium: "min-h-20 rounded-md border-2 px-8 text-base font-semibold",
      large: "min-h-24 rounded-md border-2 px-8 text-base font-semibold",
    },
    withIcon: {
      true: "gap-x-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      false: null,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    withIcon: false,
  },
});

type ButtonProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithRef<T> &
  VariantProps<typeof buttonVariants>;

function Button<T extends ElementType = "button">({
  as,
  variant,
  size,
  withIcon,
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={buttonVariants({ variant, size, withIcon, className })}
      {...props}
    />
  );
}

export { Button };
