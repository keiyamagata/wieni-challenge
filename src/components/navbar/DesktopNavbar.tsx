import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router";

type DesktopNavbarProps = {
  navbarStyles: { default: string; active: string };
};

export const DesktopNavbar = ({ navbarStyles }: DesktopNavbarProps) => {
  return (
    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
        <li>
          <NavLink
            data-testid="navbar-link--home"
            to={ROUTES.HOME}
            className={({ isActive }) =>
              isActive ? navbarStyles.active : navbarStyles.default
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            data-testid="navbar-link--recipes"
            to={ROUTES.RECIPES}
            className={({ isActive }) =>
              isActive ? navbarStyles.active : navbarStyles.default
            }
          >
            Recipes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
