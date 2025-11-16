import type { ComponentPropsWithRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import type { ElementType } from "react";

export type PolymorphicPropsWithRef<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithRef<T>;

export type PolymorphicPropsWithoutRef<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;
