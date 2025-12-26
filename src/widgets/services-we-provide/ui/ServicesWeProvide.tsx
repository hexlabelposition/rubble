import Image from "next/image";
import { Section } from "@shared/ui";
import { services } from "../config/services";

export const ServicesWeProvide = () => {
  return (
    <Section.Root id="services-we-provide" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="lg:min-h-14 lg:text-xs xl:mb-8 xl:rounded-sm xl:border-2 2xl:min-h-16 2xl:px-6 2xl:text-sm">
          Services We Provide
        </Section.Label>

        <Section.Title className="lg:text-4xl xl:mb-6 2xl:text-6xl">
          Complete Property Solutions
        </Section.Title>

        <Section.Description className="lg:text-sm 2xl:text-base">
          We offer a full range of services to help you find a property, rent or
          sell as needed.
        </Section.Description>
      </Section.Header>

      <ul className="grid justify-center gap-8 xl:grid-cols-3 xl:gap-12">
        {services.map(
          ({ key, title, description, image: { src, width, height, alt } }) => (
            <li key={key}>
              <article className="border-secondary-200 w-full max-w-216 min-w-163 rounded-lg border p-8 text-center xl:rounded-xl xl:border-2 xl:p-12">
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                  loading="lazy"
                  className="mb-4 h-auto w-full rounded-md xl:mb-8 xl:rounded-lg"
                />

                <h3 className="mb-2 text-lg font-semibold xl:mb-4 xl:text-xl 2xl:text-2xl">
                  {title}
                </h3>

                <p className="text-secondary-500 text-2xs text-balance xl:text-sm 2xl:text-base">
                  {description}
                </p>
              </article>
            </li>
          ),
        )}
      </ul>
    </Section.Root>
  );
};
