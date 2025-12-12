import { Section } from "@shared/ui";

export const ContactUs = () => {
  return (
    <Section.Root id="contact-us" className="xl:gap-y-20 xl:py-40">
      <Section.Header>
        <Section.Label className="xl:mb-8 xl:min-h-16 xl:rounded-sm xl:border-2 xl:px-6 xl:text-sm">
          Contact Us
        </Section.Label>

        <Section.Title className="xl:mb-6 xl:text-6xl">
          Connect to Find Your Property
        </Section.Title>

        <Section.Description className="xl:text-base">
          Contact our team, and we&apos;ll guide you every step of the way.
        </Section.Description>
      </Section.Header>
    </Section.Root>
  );
};
