import { useEffect, useState } from "react";

import { Card, Pagination, Spinner } from "../../components";
import { Recipe } from "../../types";
import { useFetch, usePagination } from "../../hooks";

const Recipes = () => {
  const [cocktails, setCocktails] = useState<Recipe[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const { page, goToNextPage, goToPreviousPage } = usePagination();
  const pageLimit = 8;

  const url = `/api/recipes/all?limit=${pageLimit}&offset=${
    (page - 1) * pageLimit
  }`;

  const { isLoading, data, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setCocktails(data.data);
      setTotalPages(Math.ceil(data.total / pageLimit));
    }
  }, [page, data]);

  return (
    <main className="space-y-3 rounded-xl border border-neutral-500 bg-white/25 p-5 dark:border-0 dark:bg-transparent">
      <h1 className="pb-8 text-center text-4xl font-bold dark:text-pampas">
        Cocktail Recipes
      </h1>

      <Pagination
        totalPages={totalPages}
        page={page}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />

      <section>
        {isLoading && (
          <div>
            <Spinner />
          </div>
        )}
        {!isLoading && !error ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          </div>
        ) : (
          <span>An error occured</span>
        )}
      </section>
    </main>
  );
};

export default Recipes;
