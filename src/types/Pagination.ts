import { Recipe } from "./Recipe";

export type UsePaginationProps = {
  items: Recipe[];
  pageLimit: number;
};

export type PaginationProps = UsePaginationProps & {
  setPageItems: (data: Recipe[]) => void;
};
