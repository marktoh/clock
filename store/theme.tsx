import Sun from "../src/assets/icons/Sun";
import Moon from "../src/assets/icons/Moon";
import System from "../src/assets/icons/System";
import { ButtonType } from "../src/components/theme-bar/helper";

const themeButtons: ButtonType[] = [
  {
    text: "Light",
    callback: () => (localStorage.theme = "light"),
    icon: <Sun />,
  },
  {
    text: "Dark",
    callback: () => (localStorage.theme = "dark"),
    icon: <Moon />,
  },
  {
    text: "OS",
    callback: () => localStorage.removeItem("theme"),
    icon: <System />,
  },
];

export { themeButtons };
