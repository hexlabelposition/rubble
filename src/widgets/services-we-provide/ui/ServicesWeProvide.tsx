import Image from "next/image";
import { Card } from "@shared/ui";

import { services } from "../config/services";

export const ServicesWeProvide = () => {
  return (
    <section
      id="services-we-provide"
      className="flex flex-col gap-y-14 py-20 2xl:gap-y-20 2xl:py-40"
    >
      <header className="flex flex-col items-center text-center">
        <p className="text-2xs text-secondary-500 border-secondary-200 mb-6 inline-flex min-h-12 items-center justify-center rounded-xs border px-4 xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          Services We Provide
        </p>

        <h2 className="mb-4 text-xl font-semibold 2xl:mb-6 2xl:text-6xl">
          Complete Property Solutions
        </h2>

        <p className="text-secondary-500 text-xs text-balance 2xl:text-base">
          We offer a full range of services to help you find a property, rent or
          sell as needed.
        </p>
      </header>

      <ul className="grid gap-8 xl:grid-cols-3 2xl:gap-12">
        {services.map(
          ({ key, title, description, image: { src, width, height, alt } }) => (
            <li key={key}>
              <Card
                as="article"
                className="rounded-lg text-center 2xl:rounded-xl 2xl:p-12"
              >
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                  className="mb-4 h-auto w-full rounded-md 2xl:mb-8 2xl:rounded-lg"
                />

                <h3 className="mb-2 text-lg font-semibold 2xl:mb-4 2xl:text-2xl">
                  {title}
                </h3>

                <p className="text-secondary-500 text-xs text-balance 2xl:text-base">
                  {description}
                </p>
              </Card>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};
