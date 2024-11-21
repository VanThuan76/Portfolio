export const GROUP_PEOPLE_STATIC = [
  { src: "/images/blog/person_2.svg", alt: "@person" },
  {
    src: "/images/blog/person_3.svg",
    alt: "@person",
    translateX: "-translate-x-12",
    translateY: "-translate-y-10",
  },
  {
    src: "/images/blog/person_4.svg",
    alt: "@person",
    translateX: "-translate-x-24",
    translateY: "",
  },
  {
    src: "/images/blog/person_5.svg",
    alt: "@person",
    translateX: "-translate-x-[350px]",
    translateY: "translate-y-10",
  },
];

export const GROUP_REFERENCES = [
  { url: "/images/blog/daily_dev_logo.jpg", alt: "@dailydevlogo" },
  { url: "/images/blog/medium_logo.png", alt: "@mediumlogo" },
  { url: "/images/blog/dev_community_logo.png", alt: "@devcommunitylogo" },
  { url: "/images/blog/stackoverflow_logo.png", alt: "@stackoverflowlogo" },
  { url: "/images/blog/github_logo.png", alt: "@githublogo" },
];

export const DEFAULT_VALUES = [
  {
    language_code: "en",
    content: [
      {
        id: "1",
        type: "h1",
        children: [{ text: "Welcome to the Austin's Editor" }],
      },
      {
        id: "2",
        type: "p",
        children: [
          { text: "A rich-text editor with AI capabilities. Try the" },
          { text: "AI commands", bold: true },
          { text: " or use " },
          { text: "Cmd+J", kbd: true },
          { text: " to open the AI menu." },
        ],
      },
    ],
  },
  {
    language_code: "vi",
    content: [
      {
        id: "1",
        type: "h1",
        children: [{ text: "Chào mừng đến với Trình soạn thảo của Austin" }],
      },
      {
        id: "2",
        type: "p",
        children: [
          {
            text: "Một trình soạn thảo văn bản phong phú với khả năng AI. Hãy thử ",
          },
          { text: "các lệnh AI", bold: true },
          { text: " hoặc sử dụng " },
          { text: "Cmd+J", kbd: true },
          { text: " để mở menu AI." },
        ],
      },
    ],
  },
  {
    language_code: "ja",
    content: [
      {
        id: "1",
        type: "h1",
        children: [{ text: "オースティンのエディターへようこそ" }],
      },
      {
        id: "2",
        type: "p",
        children: [
          { text: "AI機能を持つリッチテキストエディターです。" },
          { text: "AIコマンド", bold: true },
          { text: "を試すか、" },
          { text: "Cmd+J", kbd: true },
          { text: "でAIメニューを開いてください。" },
        ],
      },
    ],
  },
];
