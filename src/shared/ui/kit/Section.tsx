import { cn } from "tailwind-variants";

import type { ElementType } from "react";
import type { ComponentPropsWithoutRef } from "react";

// =================================================== Root =================================================== //

type SectionRootProps = ComponentPropsWithoutRef<"section">;

const Root = ({ className, ...props }: SectionRootProps) => {
  return (
    <section
      className={cn("flex flex-col gap-y-14 py-20", className)}
      {...props}
    />
  );
};

// =================================================== Header =================================================== //

type SectionHeaderProps = ComponentPropsWithoutRef<"header">;

const Header = ({ className, ...props }: SectionHeaderProps) => {
  return (
    <header
      className={cn("flex flex-col items-center text-center", className)}
      {...props}
    />
  );
};

// =================================================== Label =================================================== //

type SectionLabelProps = ComponentPropsWithoutRef<"p">;

const Label = ({ className, ...props }: SectionLabelProps) => {
  return (
    <p
      className={cn(
        "text-2xs text-secondary-500 border-secondary-200 mb-6 inline-flex min-h-12 items-center justify-center rounded-xs border-[1.2px] px-4",
        className,
      )}
      {...props}
    />
  );
};

// =================================================== Title =================================================== //

type SectionTitleProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T;
};

const Title = <T extends ElementType = "h2">({
  as,
  className,
  ...props
}: SectionTitleProps<T>) => {
  const Component = as || "h2";
  return (
    <Component
      className={cn("mb-4 text-xl font-semibold", className)}
      {...props}
    />
  );
};

// ================================================= Description ================================================= //

type SectionDescriptionProps = ComponentPropsWithoutRef<"p">;

const Description = ({ className, ...props }: SectionDescriptionProps) => {
  return (
    <p
      className={cn("text-secondary-500 text-xs text-balance", className)}
      {...props}
    />
  );
};

// =================================================== Export =================================================== //

export const Section = {
  Root,
  Header,
  Label,
  Title,
  Description,
} as const;
