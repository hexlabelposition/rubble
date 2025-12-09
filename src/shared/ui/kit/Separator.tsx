import { tv } from "tailwind-variants";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

const separatorVariants = tv({
  base: "bg-secondary-200 rounded-full border-none",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

// WARNING: The separator cannot have a child. Do not try to insert text into the separator!
type SeparatorProps = Omit<SeparatorPrimitive.SeparatorProps, "children">;

export const Separator = ({
  decorative = true,
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) => {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={separatorVariants({ orientation, className })}
      {...props}
    />
  );
};
