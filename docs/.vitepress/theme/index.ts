import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Archive from "./Archive.vue";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(Archive),
    });
  },
};
