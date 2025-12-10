import { Hero } from "@widgets/hero";
import { AboutRubble } from "@widgets/about-rubble";
import { ServicesWeProvide } from "@widgets/services-we-provide";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutRubble />
      <ServicesWeProvide />
    </main>
  );
}
