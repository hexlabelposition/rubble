import Link from "next/link";

import { LogoIcon } from "@shared/ui";
import { Separator } from "@shared/ui";
import { routes } from "@shared/config";

import { navigation } from "../config/navigation";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-20 py-12 2xl:gap-y-40 2xl:pt-24">
      <div className="grid gap-y-14 lg:grid-cols-2 lg:gap-y-0">
        <div className="flex flex-col items-start gap-y-6 2xl:gap-y-8">
          {/* Logo */}
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

          <p className="text-secondary-500 max-w-md text-xs text-balance xl:text-base">
            We are dedicated to helping you find the perfect property with ease.
            Explore a variety of options and let our expert team guide you to
            your ideal home in a efficient way.
          </p>
        </div>

        <nav className="lg:grid-cols-auto-4 grid grid-cols-2 gap-12 2xl:justify-between">
          {navigation.map(({ key, title, list }) => (
            <section key={key} className="flex flex-col gap-y-10">
              <h3 className="text-xs font-semibold 2xl:text-base">{title}</h3>

              <ul className="flex flex-col gap-y-8">
                {list.map(({ key, href, title, rel, target, isExternal }) => {
                  const LinkComponent = isExternal ? "a" : Link;
                  return (
                    <li key={key}>
                      <LinkComponent
                        href={href}
                        rel={rel}
                        target={target}
                        className="text-secondary-500 hover:text-primary-500 text-xs transition-colors duration-300 2xl:text-base"
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

      <div className="flex flex-col gap-y-8 2xl:gap-y-12">
        <Separator
          orientation="horizontal"
          decorative={true}
          className="2xl:h-2px"
        />

        <div className="text-secondary-500 flex flex-col-reverse gap-y-8 text-xs sm:flex-row sm:justify-between 2xl:text-base">
          <p>&copy; Rubble 2025, All Rights Reserved.</p>

          <p>
            <Link href={routes.privacyPolicy}>Privacy Policy</Link>
            {" & "}
            <Link href={routes.termsOfUse}>Terms Of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
