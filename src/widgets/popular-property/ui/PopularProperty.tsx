import { Section } from "@shared/ui";

export const PopularProperty = () => {
  return (
    <Section.Root id="popular-property" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="lg:min-h-14 lg:text-xs xl:mb-8 xl:rounded-sm xl:border-2 2xl:min-h-16 2xl:px-6 2xl:text-sm">
          Popular Property
        </Section.Label>

        <Section.Title className="lg:text-4xl xl:mb-6 2xl:text-6xl">
          Explore Diverse Property Listings
        </Section.Title>

        <Section.Description className="lg:text-sm 2xl:text-base">
          Discover properties for every need, from cozy homes to luxury estates.
        </Section.Description>
      </Section.Header>
    </Section.Root>
  );
};

// DOM Structure
{
  /* <section id="popular-property">
  <header>
    <p>Popular Property</p>
    <h2>Explore Diverse Property Listings</h2>
    <p>
      Discover properties for every need, from cozy homes to luxury estates.
    </p>
  </header>

  <ul>
    <li>
      <article>
        <img src="" alt="" />
        <h3>Classic Damara</h3>
        <p>
          {" "}
          <data value="480500">$480,500</data>
        </p>
        <address>Seattle, United States</address>
      </article>
    </li>
  </ul>
</section>; */
}
