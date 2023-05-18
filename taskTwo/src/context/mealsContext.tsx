import React from "react";
import {
  Action,
  ActionPayload,
  ActionType,
  CachedMeal,
  Filter,
  Meal,
  State,
} from "./types";

const initialState = {
  cachedMeals: [],
  randomMeal: {} as Meal,
  globalError: false,
  filter: { type: "", value: "" } as Filter,
};

const MealsContext = React.createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

const filteredMealsAreCached = (cachedMeals: CachedMeal[], filter: Filter) =>
  cachedMeals.length &&
  cachedMeals.some(
    ({ value, type, meals }) =>
      value === filter.value && type === filter.type && meals.length
  );

function reducer(state: State, action: Action) {
  const { type, payload } = action;
  const {
    meals = [],
    randomMeal = {} as Meal,
    filter = { type: "" as const, value: "" } as Filter,
  } = payload as ActionPayload;

  switch (type) {
    case ActionType.SET_FILTER:
      return { ...state, filter };
    case ActionType.CLEAR_FILTER:
      return { ...state, filter: { type: "" as const, value: "" } };
    case ActionType.UPDATE_MEALS:
      const { cachedMeals, filter: stateFilter } = state;
      if (filteredMealsAreCached(cachedMeals, stateFilter)) {
        return { ...state };
      }
      return {
        ...state,
        cachedMeals: [
          ...state.cachedMeals,
          {
            type: state.filter.type,
            value: state.filter.value,
            meals,
          },
        ],
      };
    case ActionType.UPDATE_RANDOM_MEAL:
      return { ...state, randomMeal };
    default:
      return { ...state };
  }
}
function MealsProvider({ children }: { children: any }) {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    {
      ...initialState,
    }
  );

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return (
    <MealsContext.Provider value={[state, dispatch]}>
      {children}
    </MealsContext.Provider>
  );
}

export { MealsContext, MealsProvider };
