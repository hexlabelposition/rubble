export const routes = {
  // general
  home: '/',
  about: '/about',
  contact: '/contact',
  career: '/career',
  joinUs: '/join-us',

  // property
  property: '/property',
  propertyDetail: (id: string) => `/property/${id}`,

  // agent
  agent: '/agent',
  agentDetail: (id: string) => `/agent/${id}`,

  // blog
  blog: '/blog',
  blogDetail: (id: string) => `/blog/${id}`,

  // auth
  login: '/login',
  register: '/register',

  // legal
  privacyPolicy: '/privacy-policy',
  termsOfUse: '/terms-of-use',

  // support
  chatSupport: '/chat-support',
} as const

export const socials = {
  // media
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',

  // contact
  email: 'mailto:rubble@gmail.com',
  phone: 'tel:+1234567890',

  // location
  googleMaps: 'https://www.google.com/maps',
} as const
