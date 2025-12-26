import { Hero } from "@widgets/hero";
import { AboutRubble } from "@widgets/about-rubble/statistics";
import { ServicesWeProvide } from "@widgets/services-we-provide";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutRubble />
      <ServicesWeProvide />
      <section id="popular-property">
        <header>
          <p>Popular Property</p>
          <h2>Explore Diverse Property Listings</h2>
          <p>
            Discover properties for every need, from cozy homes to luxury
            estates.
          </p>
        </header>

        <ul>
          <li>
            <article>
              {/* <img src="" alt="" /> */}
              <h3>Classic Damara</h3>
              <p>
                {" "}
                <data value="480500">$480,500</data>
              </p>
              <address>Seattle, United States</address>
            </article>
          </li>
        </ul>
      </section>

      <section id="how-it-works">
        <header>
          <p>How it Work</p>
          <h2>Journey to Achieve Property Success</h2>
          <p>
            Explore our process from understanding your needs to finding the
            right property.
          </p>
        </header>

        <ol>
          <li>
            <h3>Discover Property</h3>
            <p>
              Find a wide selection of properties that perfectly suit your needs
              and preferences. Browse a comprehensive list of properties that
              offer detailed information.
            </p>
          </li>

          <li>
            <h3>Schedule Visit</h3>
            <p>
              Once you find a property of interest, schedule a visit at your
              convenience. Choose a date and time, and our team will ensure a
              smooth viewing experience.
            </p>
          </li>

          <li>
            <h3>Property Visit</h3>
            <p>
              Visit, explore the neighborhood, and ensure every detail meets
              your expectations. Our team will be on hand to answer questions
              and provide information.
            </p>
          </li>

          <li>
            <h3>Finalize The Deal</h3>
            <p>
              After the visit, if you&apos;re ready, we&apos;ll guide you
              through a secure transaction, handling everything from negotiation
              to paperwork until you&apos;re the official owner.
            </p>
          </li>
        </ol>
      </section>

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
