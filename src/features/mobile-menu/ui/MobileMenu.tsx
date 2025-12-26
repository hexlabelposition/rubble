"use client";

import { motion } from "motion/react";
import { FocusOn } from "react-focus-on";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

import type { ReactNode } from "react";

import { useMobileMenuStore } from "../model/useMobileMenuStore";

interface MobileMenuProps {
  children?: ReactNode;
  className?: string;
}

export const MobileMenu = ({ children, className }: MobileMenuProps) => {
  const isOpen = useMobileMenuStore((state) => state.isOpen);
  const closeMenu = useMobileMenuStore((state) => state.closeMenu);
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  // Close the mobile menu when changing the route
  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  // Close the mobile menu when switching to desktop view
  useEffect(() => {
    closeMenu();
  }, [isDesktop, closeMenu]);

  return (
    <motion.div
      inert={!isOpen}
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className={className}
    >
      <FocusOn
        enabled={isOpen}
        scrollLock={true}
        style={{ height: "100%", display: "flex" }}
      >
        {children}
      </FocusOn>
    </motion.div>
  );
};
