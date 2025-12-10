import { format } from "url";

import { ROUTES } from "@shared/config";
import { SOCIALS } from "@shared/config";

import type { Key } from "react";

interface NavigationItem {
  key: Key;
  title: string;
  href: string;
  rel?: string;
  target?: string;
  isExternal?: boolean;
}

type NavigationList = Array<NavigationItem>;

interface NavigationSectionItem {
  key: Key;
  title: string;
  list: NavigationList;
}

type NavigationSectionList = Array<NavigationSectionItem>;

const companyList: NavigationList = [
  {
    key: "blog",
    title: "Blog",
    href: ROUTES.GENERAL.BLOG,
  },
  {
    key: "career",
    title: "Career",
    href: ROUTES.PLACEHOLDERS.CAREER,
  },
  {
    key: "contact",
    title: "Contact",
    href: ROUTES.GENERAL.CONTACT,
  },
  {
    key: "about-us",
    title: "About Us",
    href: ROUTES.GENERAL.ABOUT,
  },
];

const socialMediaList: NavigationList = [
  {
    key: "twitter",
    title: "Twitter",
    href: SOCIALS.MEDIA.TWITTER,
    rel: "noopener noreferrer",
    target: "_blank",
    isExternal: true,
  },
  {
    key: "linkedIn",
    title: "LinkedIn",
    href: SOCIALS.MEDIA.LINKEDIN,
    rel: "noopener noreferrer",
    target: "_blank",
    isExternal: true,
  },
  {
    key: "facebook",
    title: "Facebook",
    href: SOCIALS.MEDIA.FACEBOOK,
    rel: "noopener noreferrer",
    target: "_blank",
    isExternal: true,
  },
  {
    key: "instagram",
    title: "Instagram",
    href: SOCIALS.MEDIA.INSTAGRAM,
    rel: "noopener noreferrer",
    target: "_blank",
    isExternal: true,
  },
];

const servicesList: NavigationList = [
  {
    key: "buy-property",
    title: "Buy Property",
    href: format({
      pathname: ROUTES.GENERAL.PROPERTY,
      query: { propertyStatus: "buy" },
    }),
  },
  {
    key: "sell-property",
    title: "Sell Property",
    href: format({
      pathname: ROUTES.GENERAL.PROPERTY,
      query: { propertyStatus: "sell" },
    }),
  },
  {
    key: "rent-property",
    title: "Rent Property",
    href: format({
      pathname: ROUTES.GENERAL.PROPERTY,
      query: { propertyStatus: "rent" },
    }),
  },
  {
    key: "property-agent",
    title: "Property Agent",
    href: ROUTES.GENERAL.AGENT,
  },
];

const contactList: NavigationList = [
  {
    key: "chat-support",
    title: "Chat Support",
    href: ROUTES.PLACEHOLDERS.CHAT_SUPPORT,
  },
  {
    key: "email",
    title: "rubble@gmail.com",
    href: SOCIALS.CONTACT.EMAIL,
    isExternal: true,
  },
  {
    key: "phone",
    title: "+1 814 637 1529",
    href: SOCIALS.CONTACT.PHONE,
    isExternal: true,
  },
];

export const navigation: NavigationSectionList = [
  {
    key: "company",
    title: "Company",
    list: companyList,
  },
  {
    key: "social-media",
    title: "Social Media",
    list: socialMediaList,
  },
  {
    key: "services",
    title: "Services",
    list: servicesList,
  },
  {
    key: "contact",
    title: "Contact",
    list: contactList,
  },
];
