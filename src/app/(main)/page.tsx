import { Hero } from "@widgets/hero";
import { AboutRubble } from "@widgets/about-rubble/statistics";
import { ServicesWeProvide } from "@widgets/services-we-provide";
import { PopularProperty } from "@widgets/popular-property";
import { HowItWork } from "@widgets/how-it-work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutRubble />
      <ServicesWeProvide />
      <PopularProperty />
      <HowItWork />
      <section id="contact-us">
        <header>
          <p>Contact Us</p>
          <h2>Connect to Find Your Property</h2>
          <p>
            Contact our team, and we&apos;ll guide you every step of the way.
          </p>
        </header>

        <div>
          {/* <img src="" alt="" /> */}

          <form>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone"
            />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
