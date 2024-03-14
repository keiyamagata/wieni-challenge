import { useEffect, useState } from "react";
import { Card, Skeleton } from "../../components";
import { useFetch } from "../../hooks";
import { Recipe } from "../../types";

const Homepage = () => {
  const [cocktails, setCocktails] = useState<Recipe[]>([]);
  const { isLoading, data, error } = useFetch("/api/recipes/popular");

  useEffect(() => {
    if (data) {
      setCocktails(data.data);
    }
  }, [data]);

  return (
    <main>
      <section className="mb-4 space-y-3 rounded-xl border border-gray-200 bg-white/25 p-5 text-sm dark:border-0 dark:bg-transparent">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex min-h-28 items-center justify-center rounded-lg border border-green-600 bg-green-100 text-green-800 lg:col-span-2 dark:bg-green-800">
            <h1 className="text-4xl font-bold dark:text-pampas">
              Popular Cocktails
            </h1>
          </div>
          {isLoading && (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
          {!isLoading && !error ? (
            cocktails.map((cocktail) => (
              <Card
                key={cocktail.name}
                category={cocktail.category}
                garnish={cocktail.garnish}
                glass={cocktail.glass}
                ingredients={cocktail.ingredients}
                name={cocktail.name}
                preparation={cocktail.preparation}
              />
            ))
          ) : (
            <span>An error occured</span>
          )}
          <div className="group flex min-h-28 items-center justify-center rounded-lg border border-orange-600 bg-orange-100 shadow-xl dark:bg-orange-600">
            <span className="cursor-default text-6xl transition duration-100 group-hover:rotate-12 lg:text-9xl">
              😋
            </span>
            <span className="cursor-default text-6xl transition duration-100 group-hover:rotate-12 lg:text-9xl">
              🍹
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
