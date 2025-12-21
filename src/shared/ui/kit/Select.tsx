import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "tailwind-variants";

import type { ComponentPropsWithoutRef } from "react";

// ==================================================== Root ==================================================== //

type SelectRootProps = ComponentPropsWithoutRef<typeof RadixSelect.Root>;

const Root = ({ ...props }: SelectRootProps) => {
  return <RadixSelect.Root {...props} />;
};

// ================================================== Trigger ================================================== //

type SelectTriggerProps = ComponentPropsWithoutRef<typeof RadixSelect.Trigger>;

const Trigger = ({ children, className, ...props }: SelectTriggerProps) => {
  return (
    <RadixSelect.Trigger
      className={cn(
        "border-secondary-200 text-primary-500 focus:border-primary-500 hover:border-primary-500 data-placeholder:text-secondary-500 group flex min-h-20 w-auto items-center justify-between gap-7 rounded-sm border px-7 text-sm font-medium transition-colors duration-300 outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </RadixSelect.Trigger>
  );
};

// =================================================== Value =================================================== //

type SelectValueProps = ComponentPropsWithoutRef<typeof RadixSelect.Value>;

const Value = ({ ...props }: SelectValueProps) => {
  return <RadixSelect.Value {...props} />;
};

// =================================================== Content =================================================== //

type SelectContentProps = ComponentPropsWithoutRef<typeof RadixSelect.Content>;

const Content = ({
  children,
  position = "popper",
  align = "center",
  className,
  ...props
}: SelectContentProps) => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        position={position}
        align={align}
        className={cn(
          "bg-primary-0 border-secondary-200 text-primary-500 max-h-(--radix-select-content-available-height) w-(--radix-select-trigger-width) rounded-sm border p-2 text-sm",
          className,
        )}
        sideOffset={8}
        {...props}
      >
        <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
};

// =================================================== Item =================================================== //

type SelectItemProps = ComponentPropsWithoutRef<typeof RadixSelect.Item>;

const Item = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <RadixSelect.Item
      className={cn(
        "hover:bg-secondary-200 focus:bg-secondary-200 flex min-h-18 items-center rounded-sm px-5 outline-none select-none",
        className,
      )}
      {...props}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
};

// =================================================== Export =================================================== //

export const Select = {
  Root,
  Trigger,
  Value,
  Content,
  Item,
} as const;
