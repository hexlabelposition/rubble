import { cn } from "tailwind-variants";

import type { ComponentPropsWithoutRef } from "react";

type TextareaProps = ComponentPropsWithoutRef<"textarea">;

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "text-primary-500 focus:border-primary-500 hover:border-primary-500 border-secondary-200 placeholder:text-secondary-500 min-h-40 resize-none overflow-hidden rounded-sm border-[1.2px] px-7 py-5 text-xs font-medium transition-colors duration-300 outline-none",
        className,
      )}
      {...props}
    />
  );
};
