import { rest } from "msw";

import cocktails from "../data/cocktails.json";

export const popularRecipes = rest.get(
  "/api/recipes/popular",
  (req, res, { json }) => {
    return res(
      json({
        data: cocktails.slice(0, 5),
      })
    );
  }
);
