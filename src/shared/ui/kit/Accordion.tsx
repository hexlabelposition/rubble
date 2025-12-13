import * as RadixAccordion from "@radix-ui/react-accordion";
import { cn } from "tailwind-variants";

import type { ComponentPropsWithoutRef } from "react";

// ==================================================== Root ==================================================== //

type AccordionRootProps = ComponentPropsWithoutRef<typeof RadixAccordion.Root>;

const Root = ({ ...props }: AccordionRootProps) => {
  return <RadixAccordion.Root {...props} />;
};

// ==================================================== Item ==================================================== //

type AccordionItemProps = ComponentPropsWithoutRef<typeof RadixAccordion.Item>;

const Item = ({ className, ...props }: AccordionItemProps) => {
  return (
    <RadixAccordion.Item
      className={cn(
        "border-secondary-200 focus-within:border-primary-500 hover:border-primary-500 rounded-lg border transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
};

// =================================================== Trigger =================================================== //

type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof RadixAccordion.Trigger
>;

const Trigger = ({ children, className, ...props }: AccordionTriggerProps) => {
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
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
};

// =================================================== Content =================================================== //

type AccordionContentProps = ComponentPropsWithoutRef<
  typeof RadixAccordion.Content
>;

const Content = ({ children, className, ...props }: AccordionContentProps) => {
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
};

// =================================================== Export =================================================== //

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
} as const;
