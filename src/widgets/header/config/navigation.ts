import { ROUTES } from "@shared/config";

import type { Key } from "react";

interface NavigationItem {
  key: Key;
  title: string;
  href: string;
}

type NavigationList = Array<NavigationItem>;

export const navigation: NavigationList = [
  {
    key: "home",
    title: "Home",
    href: ROUTES.GENERAL.HOME,
  },
  {
    key: "property",
    title: "Property",
    href: ROUTES.GENERAL.PROPERTY,
  },
  {
    key: "agent",
    title: "Agent",
    href: ROUTES.GENERAL.AGENT,
  },
  {
    key: "blog",
    title: "Blog",
    href: ROUTES.GENERAL.BLOG,
  },
  {
    key: "about",
    title: "About",
    href: ROUTES.GENERAL.ABOUT,
  },
  {
    key: "join-us",
    title: "Join Us",
    href: ROUTES.GENERAL.JOIN_US,
  },
  {
    key: "contact",
    title: "Contact",
    href: ROUTES.GENERAL.CONTACT,
  },
];
