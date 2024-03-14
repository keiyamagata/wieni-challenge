import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main";

import { Homepage, NotFound, Recipes } from "./pages";

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
  {
    path: "/recipes/:pageNumber",
    name: "Recipes",
    element: <Recipes />,
  },
  {
    path: "*",
    name: "",
    element: <NotFound />,
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
