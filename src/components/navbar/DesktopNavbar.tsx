import { ROUTES } from "../../router";
import { CustomLink } from "./CustomLink";

export const DesktopNavbar = () => {
  return (
    <nav id="desktop-menu" className="hidden w-full md:block md:w-auto">
      <ul className="mt-0 flex flex-row space-x-8 text-sm font-medium">
        {ROUTES.map((route) => (
          <li key={route.name}>
            <CustomLink path={route.path} name={route.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
