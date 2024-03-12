import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [activeTheme, setActiveTheme] = useState<string>("light");

  const handleSetTheme = (theme: "dark" | "light") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setActiveTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setActiveTheme("light");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      handleSetTheme("dark");
    } else {
      handleSetTheme("light");
    }
  }, []);

  return { activeTheme, handleSetTheme };
};
