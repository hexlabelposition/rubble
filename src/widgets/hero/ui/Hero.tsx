import Link from "next/link";
import { cn } from "tailwind-variants";

import { Button } from "@shared/ui";
import { ROUTES } from "@shared/config";

import { navigation } from "../config/navigation";

export const Hero = () => {
  return (
    <section id="hero" className="py-12 xl:py-24 xl:pt-0">
      <div className="bg-hero relative min-h-284 rounded-md px-6 py-30 lg:aspect-1344/756 xl:rounded-xl xl:py-40">
        <header className="text-primary-0 mx-auto mb-10 flex max-w-lg flex-col items-center gap-y-4 text-center text-balance xl:mb-20 xl:max-w-4xl xl:gap-y-10">
          <h1 className="text-4xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-8xl">
            Discover Your Dream Home Right at Your Fingertips
          </h1>

          <p className="text-2xs lg:text-xs xl:text-sm 2xl:text-base">
            With customized searches, we help you find properties that match
            your desired location, price and type.
            <br className="min-[550px]:hidden" />
            Start the journey to your ideal property!
          </p>
        </header>

        <div className="mb-40 flex justify-center gap-x-4 2xl:gap-x-6">
          <Button
            as={Link}
            href={ROUTES.GENERAL.PROPERTY}
            variant="primary"
            size="small"
            className="2xl:min-h-24 2xl:rounded-md 2xl:border-2 2xl:px-10 2xl:text-base"
          >
            Get Started
          </Button>

          <Button
            as={Link}
            href={ROUTES.GENERAL.BLOG}
            variant="secondary"
            size="small"
            className="2xl:min-h-24 2xl:rounded-md 2xl:border-2 2xl:px-10 2xl:text-base"
          >
            Watch Demo
          </Button>
        </div>

        <nav aria-label="Quick property filters">
          <ul>
            {navigation.map(({ key, href, title, className }) => (
              <li key={key}>
                <Link
                  href={href}
                  className={cn(className.container, className.position)}
                >
                  <div
                    aria-hidden="true"
                    className="bg-primary-500/24 relative size-6 rounded-full backdrop-blur xl:size-8"
                  >
                    <span className="bg-primary-500/80 absolute inset-0 animate-ping rounded-full" />
                    <span className="bg-primary-0 pointer-events-none absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full xl:size-4" />
                  </div>

                  <div
                    className={cn(
                      "bg-primary-500/24 text-primary-0 text-2xs inline-flex min-h-14 items-center rounded-sm px-4 backdrop-blur xl:rounded-md xl:px-6 xl:text-xs 2xl:min-h-17",
                      className.offset,
                    )}
                  >
                    {title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};
