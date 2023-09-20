import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://llego.dev/",
  author: "Mark Anthony Llego",
  desc: "A vivid kaleidoscope of thoughts, joie de vivre, and a quirky sprinkle of wit and humor. Join me as I navigate the tumultuous seas of life, personal adventures, and craziness. Fasten your seat belts, as we about to depart on an unexpected journey through the ridiculously whimsical landscape of my mind!",
  title: "llego.dev",
  ogImage: "8cef457e-9c69-43ce-a1ff-33799ee92efc.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  webTitle: "Mark Anthony Llego",
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/llegomark",
    linkTitle: `${SITE.webTitle} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/markllego/",
    linkTitle: `${SITE.webTitle} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/markllego/",
    linkTitle: `${SITE.webTitle} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/markllego/",
    linkTitle: `${SITE.webTitle} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:markllego@gmail.com",
    linkTitle: `Send an email to ${SITE.webTitle}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/1012984419029622784",
    linkTitle: `${SITE.webTitle} on Discord`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://twitter.com/markllego",
    linkTitle: `${SITE.webTitle} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@markllego",
    linkTitle: `${SITE.webTitle} on Mastodon`,
    active: false,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `RSS Feed for ${SITE.title}`,
    active: true,
  },
];
