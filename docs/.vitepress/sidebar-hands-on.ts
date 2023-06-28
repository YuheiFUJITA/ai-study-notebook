import { DefaultTheme } from "vitepress";

const handsOn: DefaultTheme.SidebarItem[] = [
  {
    text: "ハンズオン",
    items: [
      {
        text: "はじめに",
        link: "/hands-on/",
      },
      {
        text: "初級",
        collapsed: false,
        items: [],
      },
      {
        text: "中級",
        collapsed: false,
        items: [
          {
            text: "ChatGPT Plugin",
            link: "/hands-on/chat-gpt-plugin",
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

export default handsOn;
