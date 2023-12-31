import markdownItPlantuml from "markdown-it-plantuml";
import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import nav from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ai-study-notebook/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://github.com/YuheiFUJITA.png",
      },
    ],
    [
      "script",
      {
        async: "true",
        src: "https://www.googletagmanager.com/gtag/js?id=G-HCCL187WLM",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-HCCL187WLM');",
    ],
  ],
  lang: "ja-JP",
  title: "AI Study Notebook",
  description: "Let's study AI.",
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownItPlantuml);
    },
  },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://github.com/YuheiFUJITA.png",
    nav,
    sidebar,
    outline: {
      label: "目次",
      level: "deep",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/YuheiFUJITA/ai-study-notebook",
      },
    ],
    footer: {
      copyright: "Copyright 2023 fujita.dev",
    },
    editLink: {
      pattern:
        "https://github.com/YuheiFUJITA/ai-study-notebook/commits/main/docs/:path",
      text: "GitHubで更新履歴を見る",
    },
    lastUpdatedText: "最終更新日",
    docFooter: {
      prev: "前へ",
      next: "次へ",
    },
    search: {
      provider: "local",
    },
  },
  vite: {
    server: {
      host: true,
    },
  },
});
