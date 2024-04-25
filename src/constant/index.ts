export const APP_SAVE_KEY = {
  LOCALE: process.env.NEXT_PUBLIC_APP_NAME + "::locale",
  ROLE: process.env.NEXT_PUBLIC_APP_NAME + "::role",
  TOKEN_KEY: process.env.NEXT_PUBLIC_APP_NAME + "::token_key",
  LOGIN_STATUS: process.env.NEXT_PUBLIC_APP_NAME + "::login_status",
};
export const breakpoints = {
  0: "xs",
  600: "sm",
  960: "md",
  1280: "lg",
  1920: "xl",
};
export const initialValueByCreatingBlog = [
  {
    type: "h1",
    children: [
      {
        text: "🌳 Blocks",
      },
    ],
    id: "1",
  },
  {
    type: "p",
    children: [
      {
        text: "Easily create headings of various levels, from H1 to H6, to structure your content and make it more organized.",
      },
    ],
    id: "2",
  },
  {
    type: "blockquote",
    children: [
      {
        text: "Create blockquotes to emphasize important information or highlight quotes from external sources.",
      },
    ],
    id: "3",
  },
  {
    type: "code_block",
    lang: "javascript",
    children: [
      {
        type: "code_line",
        children: [
          {
            text: "// Use code blocks to showcase code snippets",
          },
        ],
        id: "7sm5n",
      },
      {
        type: "code_line",
        children: [
          {
            text: "function greet() {",
          },
        ],
        id: "sjhkp",
      },
      {
        type: "code_line",
        children: [
          {
            text: "  console.info('Hello World!');",
          },
        ],
        id: "7bxzk",
      },
      {
        type: "code_line",
        children: [
          {
            text: "}",
          },
        ],
        id: "64n7a",
      },
    ],
    id: "4",
  },
  {
    type: "p",
    children: [
      {
        text: "Each block is a React component in which you can manage the state:",
      },
    ],
    id: "5",
  },
  {
    type: "action_item",
    checked: true,
    children: [
      {
        text: 'Create a "banana language" translation plugin',
      },
    ],
    id: "6",
  },
  {
    type: "action_item",
    checked: true,
    children: [
      {
        text: 'Create a "detect sarcasm" plugin (good luck with that)',
      },
    ],
    id: "7",
  },
  {
    type: "action_item",
    children: [
      {
        text: "Create an AI auto-complete plugin",
      },
    ],
    id: "8",
  },
  {
    type: "h2",
    children: [
      {
        text: "🔗 Link",
      },
    ],
    id: "9",
  },
  {
    type: "p",
    children: [
      {
        text: "Add ",
      },
      {
        type: "a",
        url: "https://en.wikipedia.org/wiki/Hypertext",
        children: [
          {
            text: "hyperlinks",
          },
        ],
        id: "ziuia",
      },
      {
        text: " within your text to reference external sources or provide additional information using the Link plugin.",
      },
    ],
    id: "10",
  },
  {
    type: "p",
    children: [
      {
        text: "Effortlessly create hyperlinks using the toolbar or by pasting a URL while selecting the desired text.",
      },
    ],
    id: "11",
  },
  {
    type: "h1",
    children: [
      {
        text: "🌱 Marks",
      },
    ],
    id: "12",
  },
  {
    type: "p",
    children: [
      {
        text: "Add style and emphasis to your text using the mark plugins, which offers a variety of formatting options.",
      },
    ],
    id: "13",
  },
  {
    type: "p",
    children: [
      {
        text: "Make text ",
      },
      {
        text: "bold",
        bold: true,
      },
      {
        text: ", ",
      },
      {
        text: "italic",
        italic: true,
      },
      {
        text: ", ",
      },
      {
        text: "underlined",
        underline: true,
      },
      {
        text: ", or apply a ",
      },
      {
        text: "combination",
        bold: true,
        italic: true,
        underline: true,
      },
      {
        text: " of these styles for a visually striking effect.",
      },
    ],
    id: "14",
  },
  {
    type: "p",
    children: [
      {
        text: "Add ",
      },
      {
        text: "strikethrough",
        strikethrough: true,
      },
      {
        text: " to indicate deleted or outdated content.",
      },
    ],
    id: "15",
  },
  {
    type: "p",
    children: [
      {
        text: "Write code snippets with inline ",
      },
      {
        text: "code",
        code: true,
      },
      {
        text: " formatting for easy readability.",
      },
    ],
    id: "16",
  },
  {
    type: "p",
    children: [
      {
        text: "Add ",
      },
      {
        text: "m",
        color: "white",
        backgroundColor: "#df4538",
      },
      {
        text: "u",
        color: "white",
        backgroundColor: "#e2533a",
      },
      {
        text: "l",
        color: "white",
        backgroundColor: "#e6603d",
      },
      {
        text: "t",
        color: "white",
        backgroundColor: "#e96f40",
      },
      {
        text: "i",
        color: "white",
        backgroundColor: "#ec7d43",
      },
      {
        text: "p",
        color: "white",
        backgroundColor: "#ef8a45",
      },
      {
        text: "l",
        color: "white",
        backgroundColor: "#f29948",
      },
      {
        text: "e",
        color: "white",
        backgroundColor: "#f5a74b",
      },
      {
        text: " ",
      },
      {
        text: "font",
        color: "rgb(252, 109, 38)",
      },
      {
        text: " and ",
      },
      {
        text: "background",
        color: "white",
        backgroundColor: "rgb(252, 109, 38)",
      },
      {
        text: " colors to create vibrant and eye-catching text.",
      },
    ],
    id: "17",
  },
  {
    type: "p",
    children: [
      {
        text: "Highlight",
        highlight: true,
      },
      {
        text: " important information for better clarity.",
      },
    ],
    id: "18",
  },
  {
    type: "p",
    children: [
      {
        text: "Press ",
      },
      {
        text: "⌘ + B",
        kbd: true,
      },
      {
        text: " to apply bold mark or ",
      },
      {
        text: "⌘ + I",
        kbd: true,
      },
      {
        text: " for italic mark.",
      },
    ],
    id: "19",
  },
  {
    type: "h2",
    children: [
      {
        text: "＠ Mention",
      },
    ],
    id: "20",
  },
  {
    type: "p",
    children: [
      {
        text: "Mention and reference other users or entities within your text using @-mentions.",
      },
    ],
    id: "21",
  },
  {
    type: "p",
    children: [
      {
        text: "Try mentioning ",
      },
      {
        type: "mention",
        children: [
          {
            text: "",
          },
        ],
        value: "BB-8",
        id: "uo8y6",
      },
      {
        text: " or ",
      },
      {
        type: "mention",
        children: [
          {
            text: "",
          },
        ],
        value: "Boba Fett",
        id: "ztqm3",
      },
      {
        text: ".",
      },
    ],
    id: "22",
  },
  {
    type: "h2",
    children: [
      {
        text: "🙂 Emoji's",
      },
    ],
    id: "23",
  },
  {
    type: "p",
    children: [
      {
        text: "Express yourself with a touch of fun 🎉 and emotion 😃.",
      },
    ],
    id: "24",
  },
  {
    type: "p",
    children: [
      {
        text: "Pick from the toolbar or write after the colon to open the combobox :",
      },
    ],
    id: "25",
  },
];
