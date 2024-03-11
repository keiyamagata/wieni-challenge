import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router";

import { Logo } from "../logo";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { CustomLink } from "./CustomLink";
import { XIcon } from "./icons/XIcon";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className="px-2 py-6 sm:px-4 md:pt-12 dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="z-10 mr-6 flex flex-1" aria-current="page">
          <Logo />
          <span className="sr-only">Wieni</span>
        </Link>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="z-10 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="menu"
          aria-haspopup="menu"
          aria-controls="navigation"
          aria-expanded={isOpen}
          onClick={handleToggleMenu}
        >
          <span className="sr-only">{`${
            isOpen ? "Close" : "Open"
          } main menu`}</span>
          <div aria-hidden="true">{isOpen ? <XIcon /> : <HamburgerIcon />}</div>
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
    </header>
  );
};
