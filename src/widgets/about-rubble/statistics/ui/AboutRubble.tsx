import Image from "next/image";

import { Section } from "@shared/ui";

import { statistics } from "../config/statistics";

export const AboutRubble = () => {
  return (
    <Section.Root id="about-rubble">
      <Section.Header>
        <Section.Label>About Rubble</Section.Label>
        <Section.Title>Trusted Partner for Your Journey</Section.Title>
        <Section.Description>
          We manage properties efficiently, ensuring the best renting or selling
          experience.
        </Section.Description>
      </Section.Header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[16fr_10fr] xl:gap-12">
        <div className="border-secondary-200 rounded-md border p-8 xl:rounded-xl xl:border-2 xl:p-10">
          <h3 className="mb-4 font-semibold xl:text-2xl">
            Partner for Every Property Need
          </h3>

          <p className="text-secondary-500 mb-6 text-xs xl:mb-8 xl:text-base">
            As a leading property platform, we provide full-service solutions to
            meet your needs. With top properties and dedicated experts, we
            ensure a seamless experience for buying, selling, or renting.
          </p>

          <Image
            src="/about-rubble.webp"
            width={295}
            height={220}
            alt=""
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 295px"
            className="aspect-295/220 h-auto w-full rounded-md object-cover lg:aspect-auto xl:rounded-lg"
          />
        </div>

        <dl className="grid h-full grid-cols-2 gap-8 xl:gap-12">
          {statistics.map(({ key, title, description, Icon }) => (
            <div
              key={key}
              className="border-secondary-200 flex h-full flex-col justify-between rounded-lg border p-8 xl:rounded-xl xl:border-2 xl:p-12"
            >
              <div className="flex justify-end">
                <div className="border-secondary-200 flex size-18 items-center justify-center rounded-full border xl:size-22 xl:border-2">
                  <Icon width={16} height={16} className="xl:size-12" />
                </div>
              </div>

              <div className="flex flex-col-reverse gap-y-6 xl:gap-y-10">
                <dt className="text-2xs xl:text-base">{title}</dt>
                <dd className="text-2xl xl:text-5xl">{description}+</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Section.Root>
  );
};
