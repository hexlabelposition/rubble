export const PopularProperty = () => {
  return (
    <section
      id="popular-property"
      className="flex flex-col gap-y-14 py-20 2xl:gap-y-20 2xl:py-40"
    >
      <header className="flex flex-col items-center text-center">
        <p className="text-2xs text-secondary-500 border-secondary-200 mb-6 inline-flex min-h-12 items-center justify-center rounded-xs border px-4 xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          Popular Property
        </p>

        <h2 className="mb-4 text-xl font-semibold xl:mb-6 2xl:text-6xl">
          Explore Diverse Property Listings
        </h2>

        <p className="text-secondary-500 text-xs text-balance 2xl:text-base">
          Discover properties for every need, from cozy homes to luxury estates.
        </p>
      </header>
    </section>
  );
};
