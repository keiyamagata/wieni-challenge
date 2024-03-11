import { useState } from "react";
import { ROUTES } from "../../router";
import { CustomLink } from "./CustomLink";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { XIcon } from "./icons/XIcon";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        id="menu-button"
        className="z-10 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-haspopup="true"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? <XIcon /> : <HamburgerIcon />}
      </button>
      <nav
        id="mobile-menu"
        className={`absolute left-0 top-0 flex h-dvh w-full items-center justify-center bg-gray-900 px-2 py-6 sm:px-4 md:hidden md:pt-12 ${
          isOpen ? "block" : "hidden"
        }`}
        aria-label="menu"
      >
        <ul
          id="mobile-menu"
          className="mt-4 flex w-full flex-col gap-2 text-right"
          aria-labelledby="menu-button"
          role="menu"
        >
          {ROUTES.map((route) => (
            <li key={route.name}>
              <CustomLink
                path={route.path}
                name={route.name}
                onClick={() => setIsOpen(false)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
