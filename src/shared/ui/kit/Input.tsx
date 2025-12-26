import { cn } from "tailwind-variants";

import type { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "border-secondary-200 hover:border-primary-500 focus:border-primary-500 text-primary-500 placeholder:text-secondary-500 min-h-20 rounded-sm border-[1.2px] px-7 text-xs font-medium transition-colors duration-300 outline-none",
        className,
      )}
      {...props}
    />
  );
};
