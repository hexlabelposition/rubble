import { Section } from "@shared/ui";

export const PopularProperty = () => {
  return (
    <Section.Root id="popular-property" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          Popular Property
        </Section.Label>

        <Section.Title className="xl:mb-6 xl:text-6xl">
          Explore Diverse Property Listings
        </Section.Title>

        <Section.Description className="xl:text-base">
          Discover properties for every need, from cozy homes to luxury estates.
        </Section.Description>
      </Section.Header>
    </Section.Root>
  );
};
