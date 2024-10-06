export const siteUrl = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig = (locale?: string) => ({
  name: "Austin Vu",
  url: siteUrl + "/" + locale,
  ogImage: `${siteUrl}/${locale}/opengraph-image`,
  description: "Welcome to Austin Vu's portfolio",
  links: {
    twitter: "https://twitter.com/thuanhipp",
    instagram: "https://www.instagram.com/thuanhip76",
    threads: "https://www.threads.net/@thuanhip76",
    github: "https://github.com/thuanhip76",
  },
});

export type SiteConfig = typeof siteConfig;
