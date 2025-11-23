import { Card } from "@shared/ui";

import { processes } from "../config/processes";

export const HowItWork = () => {
  return (
    <section
      id="how-it-work"
      className="flex flex-col gap-y-14 py-20 2xl:gap-y-20 2xl:py-40"
    >
      <header className="flex flex-col items-center text-center text-balance">
        <p className="text-2xs text-secondary-500 border-secondary-200 mb-6 inline-flex min-h-12 items-center justify-center rounded-xs border px-4 xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          How It Work
        </p>

        <h2 className="mb-4 text-xl font-semibold 2xl:mb-6 2xl:text-6xl">
          Journey to Achieve Property Success
        </h2>

        <p className="text-secondary-500 text-xs text-balance 2xl:text-base">
          Explore our process from understanding your needs to finding the right
          property.
        </p>
      </header>

      <ol className="grid gap-8 xl:grid-cols-2 2xl:gap-12">
        {processes.map(({ key, step, title, description, Icon }) => (
          <li key={key}>
            <Card
              as="article"
              className="flex min-h-108 flex-col justify-between rounded-lg 2xl:min-h-119 2xl:rounded-xl 2xl:border-2 2xl:p-12"
            >
              <div
                aria-hidden={true}
                className="flex items-center justify-between"
              >
                <div className="border-secondary-200 flex size-20 items-center justify-center rounded-sm border 2xl:size-24 2xl:rounded-md 2xl:border-2">
                  <Icon width={20} height={20} className="2xl:size-12" />
                </div>

                <span className="text-lg font-semibold 2xl:text-2xl">
                  {step}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold 2xl:text-2xl">{title}</h3>
                <p className="text-secondary-500 text-xs 2xl:text-base">
                  {description}
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
};
