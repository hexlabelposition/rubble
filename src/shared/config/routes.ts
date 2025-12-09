export const ROUTES = {
  GENERAL: {
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    JOIN_US: "/join-us",
    PROPERTY: "/property",
    AGENT: "/agent",
    BLOG: "/blog",
  },
  DYNAMIC: {
    PROPERTY_DETAILS: (id: string) => `/property/${id}`,
    AGENT_DETAILS: (id: string) => `/agent/${id}`,
    BLOG_DETAILS: (id: string) => `/blog/${id}`,
  },
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  LEGAL: {
    PRIVACY_POLICY: "/privacy-policy",
    TERMS_OF_USE: "/terms-of-use",
  },
  PLACEHOLDERS: {
    CHAT_SUPPORT: "/",
    CAREER: "/",
  },
} as const;
