import { routes } from "@shared/config";

import type { Key } from "react";

interface NavigationItem {
  readonly key: Key;
  readonly title: string;
  readonly href: string;
}

type NavigationList = ReadonlyArray<NavigationItem>;

export const navigation: NavigationList = [
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
