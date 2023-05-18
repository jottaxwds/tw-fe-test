import React from "react";
import { useParams } from "react-router-dom";
import { Meal } from "../context/types";
import { getMealById } from "../services/meals";
import { mealFormatter } from "./utils";

const useMealDetail = () => {
  const { mealId = "" } = useParams();
  const [isLoadingMealInfo, setIsLoadingMealInfo] = React.useState(true);
  const [meal, setMeal] = React.useState<Meal | null>(null);

  const loadMeal = React.useCallback(async (id: string) => {
    const { meal: mealInfo, error } = await getMealById(id);
    if (mealInfo === null || error) {
      return;
    }
    const mealDetail = mealFormatter(mealInfo);
    setMeal(mealDetail);
  }, []);

  React.useEffect(() => {
    if (!mealId) {
      return;
    }
    setIsLoadingMealInfo(true);
    loadMeal(mealId);
    setIsLoadingMealInfo(false);
  }, [loadMeal, mealId]);

  return { isLoadingMealInfo, meal };
};

export default useMealDetail;
