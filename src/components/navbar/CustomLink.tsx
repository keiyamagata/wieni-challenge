import { NavLink } from "react-router-dom";

type CustomLinkProps = {
  path: string;
  name: string;
  onClick?: () => void;
};

export const CustomLink = ({ path, name, onClick }: CustomLinkProps) => {
  const navbarStyles = {
    default:
      "textColor container mx-auto block rounded w-full py-2 pl-3 pr-4 underline-offset-8 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-50 md:border-0 md:p-0 md:hover:bg-transparent dark:border-indigo-700 md:dark:hover:bg-transparent",
    active:
      "textColor container mx-auto block rounded w-full py-2 pl-3 pr-4 underline underline-offset-8 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:bg-transparent md:p-0 md:underline",
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
