import { Outlet, useOutlet } from "react-router-dom";
import { Navbar } from "../components";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const outlet = useOutlet();

  return (
    <div
      className="h-full overflow-auto bg-pampas dark:bg-neutral-900"
      data-testid="main"
    >
      <Navbar />
      <div className="px-4 py-6 sm:px-4">
        <div className="container mx-auto">
          {outlet ? <Outlet /> : children}
        </div>
      </div>
    </div>
  );
};
