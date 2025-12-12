"use client";

import type { RefObject } from "react";
import type { ReactNode } from "react";

import { useMobileMenuStore } from "../model/useMobileMenuStore";

type Mode = "open" | "close";

interface MobileMenuButtonProps {
  mode: Mode;
  ref?: RefObject<HTMLButtonElement | null>;
  className?: string;
  children?: ReactNode;
}

export const MobileMenuButton = ({
  mode,
  ref,
  className,
  children,
}: MobileMenuButtonProps) => {
  const closeMenu = useMobileMenuStore((state) => state.closeMenu);
  const openMenu = useMobileMenuStore((state) => state.openMenu);

  const ariaLabel = mode === "open" ? "Open mobile menu" : "Close mobile menu";
  const onClick = mode === "open" ? openMenu : closeMenu;

  return (
    <button
      ref={ref}
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
