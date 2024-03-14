import type { Recipe } from "../../types";

export const Card = ({
  category,
  garnish,
  glass,
  ingredients,
  name,
  preparation,
}: Recipe) => {
  return (
    <article className="flex rounded-lg border border-neutral-500 bg-white/50 p-4 dark:border-neutral-500 dark:bg-neutral-900">
      <div className="block space-y-2">
        <h2 className="textColor text-2xl font-bold">{name}</h2>
        <span className="mr-1 inline-block rounded bg-pink-100 px-2 py-1 text-xs font-semibold uppercase text-pink-700 last:mr-0 dark:bg-pink-700 dark:text-pink-100">
          {category ?? "Cocktail"}
        </span>

        <h3 className="textColor text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredients.map((ing) => {
            const ingredient =
              ing.special ?? `${ing.amount} ${ing.unit} ${ing.ingredient}`;
            return (
              <li key={ingredient} className="textColor">
                {ingredient}
              </li>
            );
          })}
          {garnish && <li className="textColor">Garnish: {garnish}</li>}
        </ul>

        <h3 className="textColor text-lg font-bold">Preparation</h3>
        <div className="text-sm">
          {glass && <p className="textColor pb-3">Glass: {glass}</p>}
          <p className="textColor italic">{preparation}</p>
        </div>
      </div>
    </article>
  );
};
