import Link from "next/link";

import { MobileMenu } from "@features/mobile-menu";
import { MobileMenuButton } from "@features/mobile-menu";

import { LogoIcon } from "@shared/ui";
import { MenuIcon } from "@shared/ui";
import { CloseIcon } from "@shared/ui";
import { Button } from "@shared/ui";

import { routes } from "@shared/config";

// Local imports
import { headerNavigation } from "../config/headerNavigation";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-7 xl:py-14">
      {/* Logo */}
      <div className="flex flex-1 justify-start">
        <Link
          href={routes.home}
          className="flex items-center gap-x-4 xl:gap-x-6"
        >
          <LogoIcon
            aria-hidden="true"
            width={36}
            height={36}
            className="xl:size-22"
          />
          <span className="text-primary-500 text-xl font-bold xl:text-2xl">
            Rubble
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden grow justify-center xl:flex">
        <ul className="flex gap-x-17">
          {headerNavigation.map(({ key, href, title }) => (
            <li key={key}>
              <NavigationLink href={href}>{title}</NavigationLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Actions */}
      <div className="flex flex-1 justify-end">
        {/* Desktop Actions */}
        <div className="hidden gap-x-6 xl:flex">
          <Button
            as={Link}
            variant="secondary"
            size="large"
            href={routes.login}
            className="px-10"
          >
            Sign In
          </Button>

          <Button
            as={Link}
            variant="primary"
            size="large"
            href={routes.contact}
            className="px-10"
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="xl:hidden">
          <MobileMenuButton mode="open" className="flex">
            <MenuIcon aria-hidden="true" width={24} height={24} />
          </MobileMenuButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu className="bg-primary-0 fixed inset-0 z-50 pr-7 xl:hidden">
        <div className="container flex h-full flex-col justify-between">
          <div className="flex min-h-32 items-center justify-end xl:min-h-50 xl:py-14">
            <MobileMenuButton mode="close">
              <CloseIcon aria-hidden={true} width={24} height={24} />
            </MobileMenuButton>
          </div>

          {/* Mobile Navigation */}
          <nav>
            <ul className="flex flex-col gap-y-17 text-center">
              {headerNavigation.map(({ key, href, title }) => (
                <li key={key}>
                  <NavigationLink href={href}>{title}</NavigationLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-center gap-x-6 pb-50">
            <Button
              as={Link}
              variant="secondary"
              size="large"
              href={routes.login}
              className="px-10"
            >
              Sign In
            </Button>

            <Button
              as={Link}
              variant="primary"
              size="large"
              href={routes.contact}
              className="px-10"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </MobileMenu>
    </header>
  );
};
