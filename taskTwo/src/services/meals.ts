import { Filter } from "../context/types";
import { DataEntity } from "./types";
import { httpGet } from "./utils";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

type MealsAPIResponse = {
  meals: DataEntity[];
};

interface Meals extends MealsAPIResponse {
  error: boolean;
}

const fetchMeals = async (url: string): Promise<Meals> => {
  try {
    const { meals } = await httpGet<MealsAPIResponse>(`${url}`, {});
    if (meals === undefined || !meals?.length) {
      return { meals: [], error: true };
    }
    return { meals, error: false };
  } catch (error) {
    console.error("services -> meals: getAllMeals() ERROR:", error);
    return { meals: [], error: true };
  }
};

const getFilteredMealsURL = ({ type, value }: Filter) => {
  const filterValue = value.replace(/ /g, "_");
  return `${BASE_URL}filter.php?${type}=${filterValue}`;
};

const getFilteredMeals = async (filter: Filter) => {
  const allMealsURL = `${BASE_URL}search.php?s=${filter.value}`;
  let URL =
    filter !== undefined && filter?.type !== ""
      ? getFilteredMealsURL(filter)
      : allMealsURL;
  const response = await fetchMeals(URL);
  return response;
};

const getRandomMeal = async () => {
  const randomMealURL = `${BASE_URL}random.php`;
  const { meals: randomMeals } = await fetchMeals(randomMealURL);
  return randomMeals;
};

const getMealById = async (id: string) => {
  const mealByIdURL = `${BASE_URL}lookup.php?i=${id}`;
  const { meals, error } = await fetchMeals(mealByIdURL);
  return { meal: meals[0] ?? {}, error };
};

export { getFilteredMeals, getRandomMeal, getMealById };
