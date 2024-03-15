import { useEffect, useState } from "react";

import { CardGrid, Pagination } from "../../components";
import { Recipe } from "../../types";
import { useFetch, usePagination } from "../../hooks";
import { Error, Loading } from "../../screens";

const Recipes = () => {
  const [cocktails, setCocktails] = useState<Recipe[]>([]);
  const [totalPages, setTotalPages] = useState(0);
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
  }, [data]);

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
        {isLoading && <Loading length={8} />}
        {error && <Error />}
        {!isLoading && !error && <CardGrid items={cocktails} />}
      </section>
    </main>
  );
};

export default Recipes;
