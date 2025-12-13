import { cn } from "tailwind-variants";
import type { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "border-secondary-200 text-primary-500 min-h-20 rounded-sm border px-7 text-xs font-medium transition-colors duration-300 outline-none",
        className,
      )}
      {...props}
    />
  );
};
