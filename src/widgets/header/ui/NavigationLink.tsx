"use client";

import Link from "next/link";
import { cn } from "tailwind-variants";
import { match } from "path-to-regexp";
import { usePathname } from "next/navigation";

import type { ComponentPropsWithoutRef } from "react";

type NavigationLinkProps = ComponentPropsWithoutRef<typeof Link>;

export const NavigationLink = ({
  className,
  href,
  ...props
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : href?.pathname;

  const isActive = !!(
    pathname &&
    hrefString &&
    match(hrefString, { decode: decodeURIComponent })(pathname)
  );

  const isHomePage = pathname === "/";

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={cn(
        isHomePage ? "text-primary-500" : "text-secondary-500",
        "hover:text-primary-500 aria-[current]:text-primary-500 transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
};
