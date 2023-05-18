import React from "react";
import { useSearchParams } from "react-router-dom";
import { MealsContext } from "../context/mealsContext";
import { ActionType, Filter, FilterType, Meal } from "../context/types";
import { getFilteredMeals, getRandomMeal } from "../services/meals";
import { buildMealFromData, mealFormatter } from "./utils";

const useMeals = () => {
  const [{ cachedMeals, randomMeal, filter }, dispatch] =
    React.useContext(MealsContext);

  const [isLoadingMeals, setIsLoadingMeals] = React.useState(true);
  const [meals, setMeals] = React.useState<Meal[]>([]);
  const [searchParams] = useSearchParams();

  const loadRandomMeal = async () => {
    const [newRandomMeal] = await getRandomMeal();
    dispatch({
      type: ActionType.UPDATE_RANDOM_MEAL,
      payload: {
        randomMeal:
          newRandomMeal !== undefined
            ? (mealFormatter(newRandomMeal) as Meal)
            : ({} as Meal),
      },
    });
  };

  const filteredMealsAreCached = React.useMemo(
    () =>
      cachedMeals.some(
        ({ value, type, meals }) =>
          value === filter.value && type === filter.type && meals.length
      ),
    [cachedMeals, filter.type, filter.value]
  );

  const updateMeals = async (filter: Filter) => {
    setIsLoadingMeals(true);
    const { meals, error } = await getFilteredMeals(filter);
    if (error) {
      setIsLoadingMeals(false);
      return;
    }
    dispatch({
      type: ActionType.UPDATE_MEALS,
      payload: {
        meals: meals.length
          ? (buildMealFromData(meals) as Meal[])
          : ([] as Meal[]),
      },
    });
    setIsLoadingMeals(false);
  };

  const loadMeals = React.useCallback(async () => {
    if (filteredMealsAreCached) {
      return;
    }
    await updateMeals(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, filteredMealsAreCached]);

  const firstLoad = async () => {
    const filter: Filter = {
      type: (searchParams.get("type") ?? "") as FilterType,
      value: searchParams.get("value") ?? "",
    };
    await updateMeals(filter);
  };

  React.useEffect(() => {
    loadRandomMeal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    firstLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  React.useEffect(() => {
    if (isLoadingMeals) {
      return;
    }
    loadMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, loadMeals]);

  React.useEffect(() => {
    const filteredMeals = cachedMeals.length
      ? cachedMeals.reduce((output, { type, value, meals }) => {
          const newOutput = [...output];
          const { type: filterType, value: filterValue } = filter;
          if (filterType === type && filterValue === value) {
            newOutput.push(...meals);
          }
          return newOutput;
        }, [] as Meal[])
      : [];

    setMeals(filteredMeals);
  }, [cachedMeals, filter]);
  return { randomMeal, meals, isLoadingMeals };
};

export default useMeals;
