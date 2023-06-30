import { DefaultTheme } from "vitepress";

const notebook: DefaultTheme.SidebarItem[] = [
  {
    text: "座学",
    items: [
      {
        text: "はじめに",
        link: "/notebook/",
      },
      {
        text: "初級",
        collapsed: false,
        items: [
          {
            text: "Markdown",
            link: "/notebook/markdown",
          },
        ],
      },
      {
        text: "中級",
        collapsed: false,
        items: [
          {
            text: "ChatGPT Plugin",
            link: "/notebook/chat-gpt-plugin",
          },
        ],
      },
      {
        text: "上級",
        collapsed: false,
        items: [],
      },
    ],
  },
];

export default notebook;
