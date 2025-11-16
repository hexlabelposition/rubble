import { format } from "url";

import { routes } from "@shared/config";
import { socials } from "@shared/config";

import type { Key } from "react";

interface NavigationItem {
  key: Key;
  title: string;
  href: string;
  rel?: string;
  target?: string;
  isExternal?: boolean;
}

type NavigationList = ReadonlyArray<Readonly<NavigationItem>>;

interface NavigationSectionItem {
  key: Key;
  title: string;
  list: NavigationList;
}

type NavigationSectionList = ReadonlyArray<Readonly<NavigationSectionItem>>;

const companyList: NavigationList = [
  {
    key: "blog",
    title: "Blog",
    href: routes.blog,
  },
  {
    key: "career",
    title: "Career",
    href: routes.career,
  },
  {
    key: "contact",
    title: "Contact",
    href: routes.contact,
  },
  {
    key: "about-us",
    title: "About Us",
    href: routes.about,
  },
];

const socialMediaList: NavigationList = [
  {
    key: "twitter",
    title: "Twitter",
    href: socials.twitter,
    rel: "noopener noreferrer",
    target: "_blank",
    isExternal: true,
  },
  {
    key: "linkedIn",
    title: "LinkedIn",
    href: socials.linkedIn,
    rel: "noopener noreferrer",
    target: "_blank",
    isExternal: true,
  },
  {
    key: "facebook",
    title: "Facebook",
    href: socials.facebook,
    rel: "noopener noreferrer",
    target: "_blank",
    isExternal: true,
  },
  {
    key: "instagram",
    title: "Instagram",
    href: socials.instagram,
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
      pathname: routes.property,
      query: { propertyStatus: "buy" },
    }),
  },
  {
    key: "sell-property",
    title: "Sell Property",
    href: format({
      pathname: routes.property,
      query: { propertyStatus: "sell" },
    }),
  },
  {
    key: "rent-property",
    title: "Rent Property",
    href: format({
      pathname: routes.property,
      query: { propertyStatus: "rent" },
    }),
  },
  {
    key: "property-agent",
    title: "Property Agent",
    href: routes.agent,
  },
];

const contactList: NavigationList = [
  {
    key: "chat-support",
    title: "Chat Support",
    href: routes.chatSupport,
  },
  {
    key: "email",
    title: "rubble@gmail.com",
    href: socials.email,
    isExternal: true,
  },
  {
    key: "phone",
    title: "+1 814 637 1529",
    href: socials.phone,
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
