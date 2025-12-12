"use client";

import { cn } from "tailwind-variants";
import { motion } from "motion/react";
import { FocusOn } from "react-focus-on";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

import type { RefObject } from "react";
import type { ReactNode } from "react";

import { useMobileMenuStore } from "../model/useMobileMenuStore";

interface MobileMenuProps {
  children?: ReactNode;
  className?: string;
  refs?: {
    openButtonRef?: RefObject<HTMLButtonElement | null>;
    closeButtonRef?: RefObject<HTMLButtonElement | null>;
  };
}

export const MobileMenu = ({ children, className, refs }: MobileMenuProps) => {
  const isOpen = useMobileMenuStore((state) => state.isOpen);
  const closeMenu = useMobileMenuStore((state) => state.closeMenu);
  const pathname = usePathname();
  const { openButtonRef, closeButtonRef } = refs || {};
  const isDesktop = useMediaQuery("(min-width: 1536px)");

  // Close the mobile menu when changing the route
  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  // Close the mobile menu when switching to desktop view
  useEffect(() => {
    closeMenu();
  }, [isDesktop, closeMenu]);

  return (
    <FocusOn
      enabled={isOpen}
      scrollLock={true}
      onActivation={() => {
        closeButtonRef?.current?.focus();
      }}
      onDeactivation={() => {
        openButtonRef?.current?.focus();
      }}
      style={{ height: "100%" }}
    >
      <motion.div
        inert={!isOpen}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : " 100%" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={cn(
          "bg-primary-0 fixed inset-0 z-50 overflow-hidden 2xl:hidden",
          className,
        )}
      >
        {children}
      </motion.div>
    </FocusOn>
  );
};
