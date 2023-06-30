import { DefaultTheme } from "vitepress";
import notebook from "./sidebar-notebook";

const sidebar: DefaultTheme.Sidebar = {
  "/notebook/": notebook,
};

export default sidebar;
