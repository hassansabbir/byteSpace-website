export const siteConfig = {
  name: 'ByteSpace',
  shortName: 'ByteSpace',
  description:
    'Discover your passion and build your skills with ByteSpace. Premium digital creation and tech courses taught by industry experts.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bytespace.example.com',
  ogImage: '/images/og.png',
  creator: 'ByteSpace Team',
  keywords: [
    'online courses',
    'tech education',
    'digital skills',
    'web development',
    'UI/UX design',
    'data science',
    'creative learning',
  ],
  links: {
    twitter: 'https://twitter.com/bytespace',
    github: 'https://github.com/bytespace',
  },
} as const;

export type SiteConfig = typeof siteConfig;
