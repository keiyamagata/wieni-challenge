import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router";

import { Logo } from "../logo";
import { CustomLink } from "./CustomLink";
import { HamburgerIcon, XIcon, DarkModeIcon, LightModeIcon } from "./icons";
import { useDarkMode } from "../../hooks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTheme, handleSetTheme } = useDarkMode();

  const handleToggleMenu = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  const handleToggleTheme = () => {
    if (activeTheme === "dark") {
      handleSetTheme("light");
    } else {
      handleSetTheme("dark");
    }
  };

  return (
    <header className="px-2 py-6 dark:bg-gray-900 sm:px-4 md:pt-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="z-10 mr-6 flex flex-1" aria-current="page">
          <Logo />
          <span className="sr-only">Wieni</span>
        </Link>

        <div className="flex items-center gap-1 md:gap-4">
          <button
            type="button"
            className="z-10 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleToggleTheme}
          >
            <span className="sr-only">{`Switch to ${
              activeTheme === "dark" ? "light" : "dark"
            } mode`}</span>
            {activeTheme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
          </button>

          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="z-10 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-label="menu"
            aria-haspopup="menu"
            aria-controls="navigation"
            aria-expanded={isOpen}
            onClick={handleToggleMenu}
          >
            <span className="sr-only">{`${
              isOpen ? "Close" : "Open"
            } main menu`}</span>
            <div aria-hidden="true">
              {isOpen ? <XIcon /> : <HamburgerIcon />}
            </div>
          </button>
          <nav
            id="navigation"
            role="navigation"
            className={`relative w-full md:w-auto ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            <ul className="fixed left-0 top-0 mt-4 flex h-dvh w-full flex-col justify-center gap-1 bg-gray-900 text-right text-3xl md:relative md:mt-0 md:h-auto md:flex-row md:space-x-8 md:text-sm md:font-medium">
              {ROUTES.map((route) => (
                <CustomLink
                  path={route.path}
                  name={route.name}
                  onClick={handleCloseMenu}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
