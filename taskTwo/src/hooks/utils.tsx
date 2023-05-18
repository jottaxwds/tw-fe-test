import { Meal } from "../context/types";
import { DataEntity } from "../services/types";

export const mealFormatter = (item: DataEntity) => {
  const ingredients = [];
  for (let i = 0; i < 21; i++) {
    ingredients.push({
      name: item[`strIngredient${i + 1}`],
      measure: item[`strMeasure${i + 1}`],
    });
  }
  const meal = {
    id: item.idMeal,
    area: item.area,
    category: item.category,
    title: item.strMeal,
    youtube: item.strYoutube,
    source: item.strSource,
    thumbImg: item.strMealThumb,
    instructions: item.strInstructions,
    ingredients,
  };
  return meal;
};

export const buildMealFromData = (data: DataEntity[]) => {
  const mealsFormatted = data.reduce(
    (output, item) => [...output, mealFormatter(item)],
    [] as Meal[]
  );
  return mealsFormatted;
};
