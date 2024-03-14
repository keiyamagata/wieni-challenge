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
            className="z-10 inline-flex items-center rounded-lg p-2 text-sm text-neutral-900 hover:bg-neutral-300 hover:ring-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 md:hidden dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
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
          <nav
            id="navigation"
            role="navigation"
            className={clsx(
              "relative w-full md:w-auto",
              isOpen ? "block" : "hidden md:block"
            )}
          >
            <ul className="fixed left-0 top-0 flex h-dvh w-full flex-col justify-center gap-1 bg-transparent text-right text-3xl md:relative md:mt-0 md:h-auto md:flex-row md:space-x-8 md:text-sm md:font-medium">
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
