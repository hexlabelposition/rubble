import Link from "next/link";

import { LogoIcon } from "@shared/ui";
import { MenuIcon } from "@shared/ui";
import { Button } from "@shared/ui";
import { routes } from "@shared/config";

import { navigation } from "../config/navigation";

export const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center py-7 2xl:grid-cols-[1fr_auto_1fr] 2xl:py-14">
      {/* Logo */}
      <div className="flex justify-start">
        <Link
          href={routes.home}
          className="flex items-center gap-x-4 2xl:gap-x-6"
        >
          <LogoIcon
            aria-hidden="true"
            width={36}
            height={36}
            className="2xl:size-22"
          />
          <span className="text-primary-500 text-xl font-bold 2xl:text-2xl">
            Rubble
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden justify-center 2xl:flex">
        <ul className="flex gap-x-17">
          {navigation.map(({ key, href, title }) => (
            <li key={key}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Actions */}
      <div className="flex justify-end">
        {/* Desktop Actions */}
        <div className="hidden gap-x-6 2xl:flex">
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
        <div className="2xl:hidden">
          <button className="flex">
            <MenuIcon aria-hidden="true" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
