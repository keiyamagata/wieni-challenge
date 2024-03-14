import { DarkModeIcon, LightModeIcon } from "./icons";
import { useDarkMode } from "../../hooks";

export const DarkModeButton = () => {
  const { activeTheme, handleSetTheme } = useDarkMode();

  const handleToggleTheme = () => {
    if (activeTheme === "dark") {
      handleSetTheme("light");
    } else {
      handleSetTheme("dark");
    }
  };

  return (
    <button
      type="button"
      className="z-10 inline-flex items-center rounded-lg p-2 text-sm text-neutral-900 hover:bg-neutral-300 hover:ring-neutral-900 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:hover:bg-neutral-700 dark:focus:ring-pink-500"
      onClick={handleToggleTheme}
    >
      <span className="sr-only">{`Switch to ${
        activeTheme === "dark" ? "light" : "dark"
      } mode`}</span>
      {activeTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};
