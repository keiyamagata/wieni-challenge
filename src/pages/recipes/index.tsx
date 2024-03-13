import { useEffect, useState } from "react";
import { Card } from "components/card";
import { Recipe } from "../../types";

const Recipes = () => {
  const [cocktails, setCocktails] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/api/recipes/all?limit=8&offset=16")
      .then((res) => res.json())
      .then(({ data }) => setCocktails(data));
  }, []);

  return (
    <main className="space-y-3 rounded-xl border border-neutral-200 bg-white/25 p-5 dark:border-0 dark:bg-transparent">
      <h1 className="pb-8 text-center text-4xl font-bold dark:text-pampas">
        Cocktail Recipes
      </h1>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cocktails.map((cocktail) => (
          <Card
            key={cocktail.name}
            category={cocktail.category}
            garnish={cocktail.garnish}
            glass={cocktail.glass}
            ingredients={cocktail.ingredients}
            name={cocktail.name}
            preparation={cocktail.preparation}
          />
        ))}
      </section>
    </main>
  );
};

export default Recipes;
