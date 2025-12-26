"use client";

import type { ReactNode } from "react";

import { useMobileMenuStore } from "../model/useMobileMenuStore";

type Mode = "open" | "close";

interface MobileMenuButtonProps {
  mode: Mode;
  className?: string;
  children?: ReactNode;
}

export const MobileMenuButton = ({
  mode,
  className,
  children,
}: MobileMenuButtonProps) => {
  const closeMenu = useMobileMenuStore((state) => state.closeMenu);
  const openMenu = useMobileMenuStore((state) => state.openMenu);

  const ariaLabel = mode === "open" ? "Open mobile menu" : "Close mobile menu";
  const onClick = mode === "open" ? openMenu : closeMenu;

  return (
    <button aria-label={ariaLabel} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
