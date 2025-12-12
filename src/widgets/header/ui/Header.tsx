import Link from "next/link";

import { LogoIcon } from "@shared/ui";
import { MenuIcon } from "@shared/ui";
import { Button } from "@shared/ui";

import { ROUTES } from "@shared/config";

import { NavigationLink } from "./NavigationLink";
import { navigation } from "../config/navigation";

export const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center py-7 xl:grid-cols-[1fr_auto_1fr] xl:py-14">
      {/* Logo */}
      <div className="flex justify-start">
        <Link
          href={ROUTES.GENERAL.HOME}
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
      <nav className="hidden justify-center xl:flex">
        <ul className="flex gap-x-17">
          {navigation.map(({ key, href, title }) => (
            <li key={key}>
              <NavigationLink
                className="text-secondary-500 aria-[current]:text-primary-500 transition-colors duration-300"
                href={href}
              >
                {title}
              </NavigationLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Actions */}
      <div className="flex justify-end">
        {/* Desktop Actions */}
        <div className="hidden gap-x-6 xl:flex">
          <Button
            as={Link}
            variant="secondary"
            size="large"
            href={ROUTES.AUTH.LOGIN}
            className="px-10"
          >
            Sign In
          </Button>

          <Button
            as={Link}
            variant="primary"
            size="large"
            href={ROUTES.GENERAL.CONTACT}
            className="px-10"
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="xl:hidden">
          <button className="flex">
            <MenuIcon aria-hidden="true" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
