export type FilterType = "c" | "a" | "i" | "";
export type Filter = {
  type: FilterType;
  value: string;
};

export type Ingredient = {
  name: string;
  measure: string;
};

export type Meal = {
  id: string;
  area: string;
  category: string;
  ingredients: Ingredient[];
  instructions: string;
  thumbImg: string;
  title: string;
  source: string;
  youtube: string;
};

export type CachedMeal = {
  type: FilterType;
  value: string;
  meals: Meal[];
};

export type State = {
  cachedMeals: CachedMeal[];
  globalError: boolean;
  filter: Filter;
  randomMeal: Meal;
};

export enum ActionType {
  CLEAR_FILTER = "CLEAR_FILTER",
  SET_FILTER = "SET_FILTER",
  UPDATE_MEALS = "UPDATE_MEALS",
  UPDATE_RANDOM_MEAL = "UPDATE_RANDOM_MEAL",
}

export type ActionPayload = {
  meals?: Meal[];
  filter?: Filter;
  randomMeal?: Meal;
};

export interface Action {
  type: ActionType;
  payload?: ActionPayload;
}
