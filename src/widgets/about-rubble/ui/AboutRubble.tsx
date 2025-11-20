import Image from "next/image";

import { Card } from "@shared/ui";

import { statistics } from "../config/statistics";

export const AboutRubble = () => {
  return (
    <section
      id="about-rubble"
      className="flex flex-col gap-y-14 py-20 2xl:gap-y-20 2xl:py-40"
    >
      <header className="flex flex-col items-center text-center">
        <p className="text-2xs text-secondary-500 border-secondary-200 mb-6 inline-flex min-h-12 items-center justify-center rounded-xs border px-4 xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          About Rubble
        </p>

        <h2 className="mb-4 text-xl font-semibold xl:mb-6 2xl:text-6xl">
          Trusted Partner for Your Journey
        </h2>

        <p className="text-secondary-500 text-xs text-balance 2xl:text-base">
          We manage properties efficiently, ensuring the best renting or selling
          experience.
        </p>
      </header>

      <div className="grid gap-8 xl:grid-cols-[16fr_10fr] 2xl:gap-12">
        <Card as="article" className="2xl:rounded-xl 2xl:border-2 2xl:p-10">
          <h3 className="mb-4 font-semibold 2xl:text-2xl">
            Partner for Every Property Need
          </h3>

          <p className="text-secondary-500 mb-6 text-xs 2xl:mb-8 2xl:text-base">
            As a leading property platform, we provide full-service solutions to
            meet your needs. With top properties and dedicated experts, we
            ensure a seamless experience for buying, selling, or renting.
          </p>
          <Image
            src="/about-rubble.webp"
            width={295}
            height={220}
            alt=""
            sizes="(max-width: 640px) 100vw, 295px"
            className="aspect-295/220 h-auto w-full rounded-md object-cover lg:aspect-auto"
          />
        </Card>

        <ul className="grid h-full grid-cols-2 gap-8 2xl:gap-12">
          {statistics.map(({ key, title, description, Icon }) => (
            <li key={key}>
              <Card className="flex h-full min-h-87 flex-col justify-between rounded-lg 2xl:rounded-xl 2xl:border-2">
                <div className="flex justify-end">
                  <div className="border-secondary-200 flex size-18 items-center justify-center rounded-full border xl:border-2 2xl:size-22">
                    <Icon width={16} height={16} className="2xl:size-12" />
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-y-6 2xl:gap-y-10">
                  <p className="text-xs 2xl:text-base">{title}</p>
                  <p className="text-2xl 2xl:text-5xl">{description}+</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

{
  /* 
              <Card className="flex h-full flex-col justify-between">
                <div className="flex justify-end">
                  <div className="">
                    <Icon width={16} height={16} className="xl:size-12" />
                  </div>
                </div>

                <div>
                  <p>{description}</p>
                  <p>{title}</p>
                </div>
              </Card>
          ))} */
}
