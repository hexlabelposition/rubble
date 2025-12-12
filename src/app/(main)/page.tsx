import { Hero } from "@widgets/hero";
import { AboutRubble } from "@widgets/about-rubble";
import { ServicesWeProvide } from "@widgets/services-we-provide";
import { PopularProperty } from "@widgets/popular-property";
import { HowItWork } from "@widgets/how-it-work";
import { ContactUs } from "@widgets/contact-us";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutRubble />
      <ServicesWeProvide />
      <PopularProperty />
      <HowItWork />
      <ContactUs />
    </main>
  );
}
