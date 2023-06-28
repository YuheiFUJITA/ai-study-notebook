import { DefaultTheme } from "vitepress";

const doc: DefaultTheme.SidebarItem[] = [
  {
    text: "座学",
    items: [
      {
        text: "はじめに",
        link: "/doc/",
      },
      {
        text: "初級",
        collapsed: false,
        items: [
          {
            text: "Markdown",
            link: "/doc/markdown",
          },
        ],
      },
      {
        text: "中級",
        collapsed: false,
        items: [],
      },
      {
        text: "上級",
        collapsed: false,
        items: [],
      },
    ],
  },
];

export default doc;
