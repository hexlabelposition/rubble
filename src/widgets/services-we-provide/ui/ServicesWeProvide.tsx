import Image from "next/image";
import { Section } from "@shared/ui";
import { services } from "../config/services";

export const ServicesWeProvide = () => {
  return (
    <Section.Root id="services-we-provide" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          Services We Provide
        </Section.Label>

        <Section.Title className="xl:mb-6 xl:text-6xl">
          Complete Property Solutions
        </Section.Title>

        <Section.Description className="xl:text-base">
          We offer a full range of services to help you find a property, rent or
          sell as needed.
        </Section.Description>
      </Section.Header>

      <ul className="grid gap-8 xl:grid-cols-3 2xl:gap-12">
        {services.map(
          ({ key, title, description, image: { src, width, height, alt } }) => (
            <li key={key}>
              <div className="border-secondary-200 rounded-lg border p-8 text-center xl:rounded-xl xl:border-2 xl:p-12">
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                  loading="lazy"
                  className="mb-4 h-auto w-full rounded-md xl:mb-8 xl:rounded-lg"
                />

                <h3 className="mb-2 text-lg font-semibold xl:mb-4 xl:text-2xl">
                  {title}
                </h3>

                <p className="text-secondary-500 text-xs text-balance xl:text-base">
                  {description}
                </p>
              </div>
            </li>
          ),
        )}
      </ul>
    </Section.Root>
  );
};
