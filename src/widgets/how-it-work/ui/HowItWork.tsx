import { Section } from "@shared/ui";

import { processes } from "../config/processes";

export const HowItWork = () => {
  return (
    <Section.Root id="how-it-work">
      <Section.Header>
        <Section.Label>How It Work</Section.Label>
        <Section.Title>Journey to Achieve Property Success</Section.Title>
        <Section.Description>
          Explore our process from understanding your needs to finding the right
          property.
        </Section.Description>
      </Section.Header>

      <ol className="grid gap-8 md:grid-cols-2 xl:gap-12">
        {processes.map(({ key, step, title, description, Icon }) => (
          <li key={key}>
            <div className="border-secondary-200 flex h-full flex-col gap-y-20 rounded-lg border p-8 xl:gap-y-25 xl:rounded-xl xl:border-2 xl:p-12">
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
