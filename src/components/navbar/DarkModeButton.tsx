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
    <button type="button" className="menuButton" onClick={handleToggleTheme}>
      <span className="sr-only">{`Switch to ${
        activeTheme === "dark" ? "light" : "dark"
      } mode`}</span>
      {activeTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};
