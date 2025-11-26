import { Hero } from "@widgets/hero";
import { AboutRubble } from "@widgets/about-rubble";
import { ServicesWeProvide } from "@widgets/services-we-provide";
import { PopularProperty } from "@widgets/popular-property";
import { HowItWork } from "@widgets/how-it-work";
import { ContactUs } from "@widgets/contact-us";

import { getPopularProperty } from "@entities/property";

export default async function HomePage() {
  const properties = await getPopularProperty();

  return (
    <main>
      <Hero />
      <AboutRubble />
      <ServicesWeProvide />
      <PopularProperty properties={properties} />
      <HowItWork />
      <ContactUs />
    </main>
  );
}
