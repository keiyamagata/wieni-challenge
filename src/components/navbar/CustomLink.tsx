import { NavLink } from "react-router-dom";

type CustomLinkProps = {
  path: string;
  name: string;
  onClick?: () => void;
};

export const CustomLink = ({ path, name, onClick }: CustomLinkProps) => {
  const navbarStyles = {
    default:
      "container mx-auto block rounded w-full py-2 pl-3 pr-4 text-neutral-900 underline-offset-8 hover:underline focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-gray-50 md:border-0 md:p-0 md:hover:bg-transparent dark:border-gray-700 dark:text-pampas dark:hover:text-pampas md:dark:hover:bg-transparent md:dark:hover:text-pampas",
    active:
      "container mx-auto block rounded w-full py-2 pl-3 pr-4 text-neutral-900 dark:text-pampas underline underline-offset-8 focus:outline-none focus:ring-2 focus:ring-neutral-900 md:bg-transparent md:p-0 md:text-gray-900 md:underline dark:text-pampas dark:md:text-pampas",
  };

  return (
    <NavLink
      data-testid={`navbar-link--${name.toLowerCase()}`}
      to={path}
      className={({ isActive }) =>
        isActive ? navbarStyles.active : navbarStyles.default
      }
      onClick={onClick}
      aria-current="page"
    >
      {name}
    </NavLink>
  );
};
