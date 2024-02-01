import { FC } from "react";
/**
 * On page load or when changing themes, best to add inline in `head` to avoid FOUC
 */
const toggleTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

/**
 * Runs when component is loaded
 */
const init = () => {
  localStorage.removeItem("theme");
  toggleTheme();
};

type ButtonType = {
  text?: string;
  callback: () => void;
  icon: JSX.Element;
};
const Button: FC<ButtonType> = ({ callback, icon }) => {
  function handleClick() {
    callback();
    toggleTheme();
  }
  return (
    <button
      className=" flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-slate-600 rounded px-3 py-1"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export { init, toggleTheme, Button, type ButtonType };
