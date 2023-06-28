import { DefaultTheme } from "vitepress";
import handsOn from "./sidebar-hands-on";
import doc from "./sidebar-doc";

const sidebar: DefaultTheme.Sidebar = {
  "/doc/": doc,
  "/hands-on/": handsOn,
};

export default sidebar;
