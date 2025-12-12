import { cn } from "tailwind-variants";
import type { InputHTMLAttributes } from "react";

export const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "min-h-20 rounded-sm px-7 outline-none",
        "border-secondary-200 border",
        "text-primary-500 text-xs font-medium",
        "transition-colors duration-300",
        "focus:border-primary-500 disabled:placeholder:text-secondary-300 placeholder:text-secondary-500",
        className,
      )}
      {...props}
    />
  );
};
