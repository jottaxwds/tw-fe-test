import { Meal } from "../../context/types";

export type ListProps = {
  items: Meal[];
  itemsPerPage?: number;
  isLoading?: boolean;
};
