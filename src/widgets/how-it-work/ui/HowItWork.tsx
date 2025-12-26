import { Section } from "@shared/ui";

import { processes } from "../config/processes";

export const HowItWork = () => {
  return (
    <Section.Root id="how-it-work" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="lg:min-h-14 lg:text-xs xl:mb-8 xl:rounded-sm xl:border-2 2xl:min-h-16 2xl:px-6 2xl:text-sm">
          How It Work
        </Section.Label>

        <Section.Title className="lg:text-4xl xl:mb-6 2xl:text-6xl">
          Journey to Achieve Property Success
        </Section.Title>

        <Section.Description className="lg:text-sm 2xl:text-base">
          Explore our process from understanding your needs to finding the right
          property.
        </Section.Description>
      </Section.Header>

      <ol className="grid justify-center gap-8 xl:grid-cols-2 xl:gap-12">
        {processes.map(({ key, step, title, description, Icon }) => (
          <li key={key}>
            <div className="border-secondary-200 flex h-full max-w-330 min-w-163 flex-col gap-y-20 rounded-lg border p-8 xl:gap-y-25 xl:rounded-xl xl:border-2 xl:p-12">
              <div
                aria-hidden={true}
                className="flex items-center justify-between"
              >
                <div className="border-secondary-200 flex size-20 items-center justify-center rounded-sm border xl:size-24 xl:rounded-md xl:border-2">
                  <Icon width={20} height={20} className="xl:size-12" />
                </div>

                <span className="text-lg font-semibold xl:text-2xl">
                  {step}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold xl:text-2xl">{title}</h3>
                <p className="text-secondary-500 text-xs xl:text-base">
                  {description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section.Root>
  );
};
