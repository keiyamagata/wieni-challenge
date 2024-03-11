import { NavLink } from "react-router-dom";

type CustomLinkProps = {
  path: string;
  name: string;
  onClick?: () => void;
};

export const CustomLink = ({ path, name, onClick }: CustomLinkProps) => {
  const navbarStyles = {
    default:
      "container mx-auto block w-full rounded py-2 pl-3 pr-4 text-gray-700 underline-offset-8 hover:underline focus:border-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-500 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
    active:
      "container mx-auto block w-full py-2 pl-3 pr-4 text-white underline underline-offset-8 md:bg-transparent md:p-0 md:text-gray-900 md:underline dark:text-white dark:md:text-white",
  };

  return (
    <NavLink
      data-testid={`navbar-link--${name.toLowerCase()}`}
      to={path}
      className={({ isActive }) =>
        isActive ? navbarStyles.active : navbarStyles.default
      }
      onClick={onClick}
    >
      {name}
    </NavLink>
  );
};
