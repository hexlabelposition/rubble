export const routes = {
  // general
  home: "/",
  about: "/about",
  contact: "/contact",
  joinUs: "/join-us",
  property: "/property",
  agent: "/agent",
  blog: "/blog",

  // dynamic
  propertyDetails: (id: string) => `/property/${id}`,
  agentDetails: (id: string) => `/agent/${id}`,
  blogDetails: (id: string) => `/blog/${id}`,

  // auth
  login: "/login",
  register: "/register",

  // legal
  privacyPolicy: "/privacy-policy",
  termsOfUse: "/terms-of-use",

  // placeholders (in development)
  chatSupport: "/",
  career: "/",
} as const;

export const socials = {
  // media
  twitter: "https://twitter.com",
  linkedIn: "https://linkedin.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  // contact
  email: "mailto:rubble@gmail.com",
  phone: "tel:+18146371529",
} as const;
