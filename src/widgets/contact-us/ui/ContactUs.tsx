import Image from "next/image";

// import { ContactForm } from "@features/contact-form";

import { Section } from "@shared/ui";

export const ContactUs = () => {
  return (
    <Section.Root id="contact-us" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="lg:min-h-14 lg:text-xs xl:mb-8 xl:rounded-sm xl:border-2 2xl:min-h-16 2xl:px-6 2xl:text-sm">
          Contact Us
        </Section.Label>

        <Section.Title className="lg:text-4xl xl:mb-6 2xl:text-6xl">
          Connect to Find Your Property
        </Section.Title>

        <Section.Description className="lg:text-sm 2xl:text-base">
          Contact our team, and we&apos;ll guide you every step of the way.
        </Section.Description>
      </Section.Header>

      <div className="border-secondary-200 mx-auto grid w-full max-w-216 gap-8 rounded-lg border p-8 xl:mx-0 xl:max-w-full xl:grid-cols-[1fr_2fr] xl:gap-12 xl:rounded-xl xl:border-2 xl:p-12">
        <Image
          src="/contact.webp"
          width={295}
          height={390}
          alt=""
          className="h-auto w-full rounded-md xl:rounded-lg"
        />
        {/* <ContactForm /> */}
      </div>
    </Section.Root>
  );
};

// DOM Structure
{
  /* <section id="contact-us">
  <header>
    <p>Contact Us</p>
    <h2>Connect to Find Your Property</h2>
    <p>Contact our team, and we&apos;ll guide you every step of the way.</p>
  </header>

  <div>
    <img src="" alt="" />

    <form>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Your Name" />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" placeholder="Your Email" />

      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" placeholder="Your Phone" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Your Message" />

      <button type="submit">Send Message</button>
    </form>
  </div>
</section>; */
}
