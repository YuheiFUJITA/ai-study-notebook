import { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  { text: "ノートブック", link: "/notebook/" },
  {
    text: "貢献",
    items: [
      {
        text: "ノートの提案",
        link: "https://github.com/YuheiFUJITA/ai-study-notebook/issues/new?template=request.yml",
      },
      {
        text: "ノートの修正",
        link: "https://github.com/YuheiFUJITA/ai-study-notebook/issues/new?template=fix.yml",
      },
    ],
  },
];

export default nav;
