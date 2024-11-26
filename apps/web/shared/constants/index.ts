export const APP_SAVE_KEY = {
  LOCALE: process.env.NEXT_PUBLIC_APP_NAME + "::locale",
  ROLE: process.env.NEXT_PUBLIC_APP_NAME + "::role",
  TOKEN_KEY: process.env.NEXT_PUBLIC_APP_NAME + "::token_key",
  LOGIN_STATUS: process.env.NEXT_PUBLIC_APP_NAME + "::login_status",
};
export const API_URL = "https://github-contributions-api.jogruber.de/v4/";

export const DEFAULT_THEME = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#ebedf0", "#0e4429", "#006d32", "#26a641", "#39d353"],
};
export const LANGUAGE_CODES = [
  "vi",
  "en",
  "ja",
  "hi",
  "zh",
  "es",
  "fr",
  "de",
  "pt",
];

export const LANGUAGE_CODES_COUNTRY = {
  vi: "VN",
  en: "US",
  ja: "JP",
  hi: "IN",
  zh: "CN",
  es: "ES",
  fr: "FR",
  de: "DE",
  pt: "PT",
};

export const breakpoints = {
  0: "xs",
  600: "sm",
  960: "md",
  1280: "lg",
  1920: "xl",
};

export const DATA_MENUS = [
  {
    name: "Home",
    href: "/",
    icon: "/icon-navigation/icon-blog.png",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: "/icon-navigation/icon-blog.png",
  },
  //   {
  //     name: "Project",
  //     href: "/project",
  //     icon: "/icon-navigation/icon-project.png",
  //   },
  {
    name: "About Me",
    href: "/about-me",
    icon: "/icon-navigation/icon-about.png",
  },
  //   {
  //     name: "GitRoll",
  //     href: "/extensions/git-roll",
  //     icon: "/icon-navigation/icon-github.png",
  //   },
  //   {
  //     name: "Resume",
  //     href: "/extensions/resume",
  //     icon: "/icon-navigation/icon-resume.png",
  //   },
  //   {
  //     name: "Setting",
  //     href: "/setting",
  //     icon: "/icon-navigation/icon-setting.png",
  //     positions: {
  //       cameraPosition: [0, 0, 500],
  //       positionModelMain: [100, 200, -100],
  //       positionModelCastle: [],
  //       positionModelRestaurant: [],
  //       positionModelSchool: [],
  //      positionModelDepartment: [],
  //       positionModelMountain: [],
  //       positionModelCity: [],
  //
  //     },
  //   },
  //   {
  //     name: "ChatBot",
  //     href: "/extensions/chatbot",
  //     icon: "/icon-navigation/chat.svg",
  //     positions: {
  //       cameraPosition: [0, 0, 500],
  //       positionModelMain: [100, 200, -100],
  //       positionModelRestaurant: [],
  //       positionModelCastle: [],
  //       positionModelMountain: [],
  //       positionModelSchool: [],
  //       positionModelCity: [],
  //
  //     },
  //   },
];
