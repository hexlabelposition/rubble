export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <h1>Discover Your Dream Home Right at Your Fingertips</h1>
        <p>
          With customized searches, we help you find properties that match your
          desired location, price and type. Start the journey to your ideal
          property!
        </p>

        <div>
          <a href="">Get Started</a>
          <button type="button">Watch Demo</button>
        </div>

        <ul aria-label="Quick links with property search parameters">
          <li>
            <a href="">Buy Property</a>
          </li>
          <li>
            <a href="">Rent Property</a>
          </li>
          <li>
            <a href="">Sell Property</a>
          </li>
        </ul>
      </section>

      <section id="about-rubble">
        <header>
          <p>About Rubble</p>
          <h2>Trusted Partner for Your Journey</h2>
          <p>
            We manage properties efficiently, ensuring the best renting or
            selling experience.
          </p>
        </header>

        <div>
          <div>
            <h3>Partner for Every Property Need</h3>
            <p>
              As a leading property platform, we provide full-service solutions
              to meet your needs. With top properties and dedicated experts, we
              ensure a seamless experience for buying, selling, or renting.
            </p>
            <img src="" alt="" />
          </div>

          <dl>
            <div>
              <dt>Properties Available</dt>
              <dd>800+</dd>
            </div>
            <div>
              <dt>Satisfied Customer</dt>
              <dd>460+</dd>
            </div>
            <div>
              <dt>Total Partners</dt>
              <dd>280+</dd>
            </div>
            <div>
              <dt>Awards Winning</dt>
              <dd>120+</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="services-we-provide">
        <header>
          <p>Services We Provide</p>
          <h2>Complete Property Solutions</h2>
          <p>
            We offer a full range of services to help you find a property, rent
            or sell as needed.
          </p>
        </header>

        <ul>
          <li>
            <article>
              <img src="" alt="" />

              <h3>Buy Property</h3>
              <p>
                Find your property with a vast selection of options tailored to
                ideally match your unique preferences.
              </p>
            </article>
          </li>
          <li>
            <article>
              <img src="" alt="" />
              <h3>Rent Property</h3>
              <p>
                Discover the perfect housing solution, whether you need a
                convenient and temporary stay.
              </p>
            </article>
          </li>
          <li>
            <article>
              <img src="" alt="" />
              <h3>Sell Property</h3>
              <p>
                Sell your property with maximum visibility, easily connect with
                a broad audience of buyers.
              </p>
            </article>
          </li>
        </ul>
      </section>

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
          <img src="" alt="" />

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
