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
    <article className="flex rounded-lg border border-neutral-200 bg-white/50 p-4 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="block space-y-2">
        <h2 className="textColor text-2xl font-bold">{name}</h2>
        <span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600 last:mr-0">
          {category}
        </span>

        <h3 className="textColor text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredients.map((ingredient) => (
            <li className="textColor">{`${ingredient.amount} ${ingredient.unit} ${ingredient.ingredient}`}</li>
          ))}
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
