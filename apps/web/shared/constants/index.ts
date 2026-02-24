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
    name: "Blog",
    href: "/blog",
    icon: "/icon-navigation/icon-blog.png",
  },
  {
    name: "Home",
    href: "/",
    icon: "/icon-navigation/icon-blog.png",
  },
  {
    name: "Project",
    href: "/project",
    icon: "/icon-navigation/icon-project.png",
  },
  {
    name: "About Me",
    href: "/about-me",
    icon: "/icon-navigation/icon-about.png",
  },
  // {
  //     name: "GitRoll",
  //     href: "/extensions/git-roll",
  //     icon: "/icon-navigation/icon-github.png",
  // },
  // {
  //     name: "Resume",
  //     href: "/extensions/resume",
  //     icon: "/icon-navigation/icon-resume.png",
  // },
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

export const PLACE_HOLDER_BLUR_HASH =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==";
