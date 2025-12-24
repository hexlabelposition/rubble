import Link from "next/link";
import { cn } from "tailwind-variants";

import { Button } from "@shared/ui";
import { routes } from "@shared/config";

import { shortcuts } from "../config/shortcuts";

export const Hero = () => {
  return (
    <section id="hero" className="py-12 xl:py-24 xl:pt-0">
      <div className="bg-hero relative min-h-284 rounded-md px-6 py-30 xl:aspect-1344/756 xl:rounded-xl xl:py-40">
        <header className="text-primary-0 mb-10 flex flex-col items-center justify-center gap-y-4 text-center text-balance xl:mb-20 xl:gap-y-10">
          <h1 className="max-w-440 text-4xl font-semibold lg:text-5xl xl:text-6xl 2xl:text-8xl">
            Discover Your Dream Home Right at Your Fingertips
          </h1>

          <p className="text-2xs max-w-300 lg:text-xs xl:text-sm 2xl:text-base">
            With customized searches, we help you find properties that match
            your desired location, price and type.
            <br className="min-[550px]:hidden" />
            Start the journey to your ideal property!
          </p>
        </header>

        <div className="mb-40 flex justify-center gap-x-4 xl:gap-x-6">
          <Button
            as={Link}
            href={routes.property}
            variant="primary"
            size="small"
            className="xl:min-h-24 xl:rounded-md xl:border-2 xl:px-10 xl:text-base"
          >
            Get Started
          </Button>

          <Button
            as={Link}
            href={routes.blog}
            variant="secondary"
            size="small"
            className="xl:min-h-24 xl:rounded-md xl:border-2 xl:px-10 xl:text-base"
          >
            Watch Demo
          </Button>
        </div>

        <ul aria-label="Property search shortcuts">
          {shortcuts.map(
            ({ key, href, title, containerPosition, pointPosition }) => (
              <li key={key}>
                <Link href={href} className={cn("absolute", containerPosition)}>
                  <div className="relative">
                    {/* An element that looks like a button  */}
                    <div className="bg-primary-500/24 text-primary-0 text-2xs inline-flex min-h-14 items-center rounded-sm px-4 backdrop-blur-[4px] xl:min-h-17 xl:rounded-md xl:px-6 xl:text-xs">
                      {title}
                    </div>

                    {/*  Floating point.  */}
                    <div
                      aria-hidden="true"
                      className={cn(
                        "bg-primary-500/24 absolute size-6 rounded-full backdrop-blur-[4px] xl:size-8",
                        pointPosition,
                      )}
                    >
                      <span className="bg-primary-500/80 absolute inset-0 animate-ping rounded-full" />
                      <span className="bg-primary-0 pointer-events-none absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full xl:size-4" />
                    </div>
                  </div>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
