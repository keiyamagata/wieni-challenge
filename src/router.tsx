import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main";

import { Homepage, Recipes } from "./pages";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    element: <Homepage />,
  },
  {
    path: "/recipes",
    name: "Recipes",
    element: <Recipes />,
  },
];

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {ROUTES.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};
