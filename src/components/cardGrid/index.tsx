import { Card } from "../card";
import { Recipe } from "../../types";

export const CardGrid = ({ items }: { items: Recipe[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card
          key={item.name}
          category={item.category}
          garnish={item.garnish}
          glass={item.glass}
          ingredients={item.ingredients}
          name={item.name}
          preparation={item.preparation}
        />
      ))}
    </div>
  );
};
