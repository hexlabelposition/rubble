import { routes } from "@shared/config";

import type { Key } from "react";

interface NavigationItem {
  key: Key;
  title: string;
  href: string;
}

type NavigationList = Array<NavigationItem>;

export const headerNavigation: NavigationList = [
  {
    key: "home",
    title: "Home",
    href: routes.home,
  },
  {
    key: "property",
    title: "Property",
    href: routes.property,
  },
  {
    key: "agent",
    title: "Agent",
    href: routes.agent,
  },
  {
    key: "blog",
    title: "Blog",
    href: routes.blog,
  },
  {
    key: "about",
    title: "About",
    href: routes.about,
  },
  {
    key: "join-us",
    title: "Join Us",
    href: routes.joinUs,
  },
  {
    key: "contact",
    title: "Contact",
    href: routes.contact,
  },
];
