import * as RadixAccordion from "@radix-ui/react-accordion";
import { cn } from "tailwind-variants";
import type { ComponentPropsWithoutRef } from "react";

function Root({
  ...props
}: ComponentPropsWithoutRef<typeof RadixAccordion.Root>) {
  return <RadixAccordion.Root {...props} />;
}

function Item({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof RadixAccordion.Item>) {
  return (
    <RadixAccordion.Item
      className={cn(
        "border-secondary-200 focus-within:border-primary-500 hover:border-primary-500 rounded-lg border transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
}

function Trigger({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>) {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className={cn(
          "text-primary-500 flex flex-1 items-start justify-between gap-x-15 p-8 text-sm font-semibold outline-none",
          className,
        )}
        {...props}
      >
        {children}
        <div>Icon</div>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}

function Content({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof RadixAccordion.Content>) {
  return (
    <RadixAccordion.Content
      className="data-[state=closed]:animate-radix-accordion-up data-[state=open]:animate-radix-accordion-down overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "text-secondary-500 p-8 pt-0 text-xs font-medium",
          className,
        )}
      >
        {children}
      </div>
    </RadixAccordion.Content>
  );
}

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};
