import Link from "next/link";

import { LogoIcon } from "@shared/ui";
import { Separator } from "@shared/ui";
import { ROUTES } from "@shared/config";

import { navigation } from "../config/navigation";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-20 py-12 xl:gap-y-40 xl:pt-24">
      <div className="grid gap-y-14 lg:grid-cols-2 lg:gap-y-0">
        <div className="flex flex-col items-start gap-y-6 xl:gap-y-8">
          {/* Logo */}
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

          <p className="text-secondary-500 max-w-md text-xs text-balance xl:text-base">
            We are dedicated to helping you find the perfect property with ease.
            Explore a variety of options and let our expert team guide you to
            your ideal home in a efficient way.
          </p>
        </div>

        <nav className="lg:grid-cols-auto-4 grid grid-cols-2 justify-between gap-12">
          {navigation.map(({ key, title, list }) => (
            <section key={key} className="flex flex-col gap-y-10">
              <h3 className="text-xs font-semibold xl:text-base">{title}</h3>

              <ul className="flex flex-col gap-y-8">
                {list.map(({ key, href, title, rel, target, isExternal }) => {
                  const LinkComponent = isExternal ? "a" : Link;
                  return (
                    <li key={key}>
                      <LinkComponent
                        href={href}
                        rel={rel}
                        target={target}
                        className="text-secondary-500 hover:text-primary-500 text-xs transition-colors duration-300 xl:text-base"
                      >
                        {title}
                      </LinkComponent>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-y-8 xl:gap-y-12">
        <Separator
          orientation="horizontal"
          decorative={true}
          className="xl:h-1"
        />

        <div className="text-secondary-500 flex flex-col-reverse gap-y-8 text-xs sm:flex-row sm:justify-between xl:text-base">
          <p>&copy; Rubble 2025, All Rights Reserved.</p>

          <p>
            <Link
              href={ROUTES.LEGAL.PRIVACY_POLICY}
              className="hover:text-primary-500 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            {" & "}
            <Link
              href={ROUTES.LEGAL.TERMS_OF_USE}
              className="hover:text-primary-500 transition-colors duration-300"
            >
              Terms Of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
