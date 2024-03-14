import { lazy } from "react";

export const Homepage = lazy(() => import("./homepage"));
export const Recipes = lazy(() => import("./recipes"));

export { NotFound } from "./not-found";
