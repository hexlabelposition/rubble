import * as RadixLabel from "@radix-ui/react-label";
import { cn } from "tailwind-variants";

import type { ComponentPropsWithoutRef } from "react";

type LabelProps = ComponentPropsWithoutRef<typeof RadixLabel.Root>;

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <RadixLabel.Root
      className={cn("text-primary-500 text-sm font-semibold", className)}
      {...props}
    />
  );
};
