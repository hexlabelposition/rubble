import { Section } from "@shared/ui";

import { processes } from "../config/processes";

export const HowItWork = () => {
  return (
    <Section.Root id="how-it-work" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          How It Work
        </Section.Label>

        <Section.Title className="xl:mb-6 xl:text-6xl">
          Journey to Achieve Property Success
        </Section.Title>

        <Section.Description className="xl:text-base">
          Explore our process from understanding your needs to finding the right
          property.
        </Section.Description>
      </Section.Header>

      <ol className="grid gap-8 xl:grid-cols-2 xl:gap-12">
        {processes.map(({ key, step, title, description, Icon }) => (
          <li key={key}>
            <div className="border-secondary-200 flex min-h-108 flex-col justify-between rounded-lg border p-8 xl:min-h-119 xl:rounded-xl xl:border-2 xl:p-12">
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
