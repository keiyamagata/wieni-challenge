import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ROUTES } from "../../router";

import { Logo } from "../logo";
import { CustomLink } from "./CustomLink";
import { HamburgerIcon, CloseIcon } from "./icons";
import { DarkModeButton } from "./DarkModeButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className="px-2 py-6 sm:px-4 md:pt-12 dark:bg-neutral-950">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="z-20 mr-6 flex flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <Logo />
          <span className="sr-only">Wieni</span>
        </Link>

        <div className="z-10 flex items-center gap-2 md:gap-8">
          <DarkModeButton />

          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="menuButton md:hidden"
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
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </div>
          </button>

          <nav id="navigation" role="navigation" className="w-full md:w-auto">
            <ul
              className={clsx(
                "absolute left-0 flex h-dvh w-full flex-col justify-center gap-1 bg-pampas text-right text-3xl transition-all duration-500 ease-in-out md:relative md:mt-0 md:h-auto md:flex-row md:space-x-8 md:bg-transparent md:text-sm md:font-medium dark:bg-neutral-950 md:dark:bg-transparent",
                isOpen
                  ? "top-0 opacity-100"
                  : "-top-full opacity-0 md:opacity-100"
              )}
            >
              {ROUTES.slice(0, 2).map((route) => (
                <li key={route.name}>
                  <CustomLink
                    path={route.path}
                    name={route.name}
                    onClick={handleCloseMenu}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
