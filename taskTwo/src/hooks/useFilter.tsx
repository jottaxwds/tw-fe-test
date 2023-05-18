import React from "react";
import { useSearchParams } from "react-router-dom";
import { MealsContext } from "../context/mealsContext";
import { ActionType, Filter, FilterType } from "../context/types";

const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ filter }, dispatch] = React.useContext(MealsContext);

  const validFilterTypes = ["a", "c", "i", ""];

  const updateURLFilterFromContextFilter = ({
    type: filterType,
    value: filterValue,
  }: Filter) => {
    const type = searchParams.get("type") ?? "";
    const value = searchParams.get("value") ?? "";
    if (type === filterType && value === filterValue) {
      return;
    }
    setSearchParams({
      ...(filterType && { type: filterType }),
      ...(filterValue && { value: filterValue }),
    });
  };

  const updateFilter = (filter: Filter) => {
    dispatch({ type: ActionType.SET_FILTER, payload: { filter } });
    updateURLFilterFromContextFilter(filter);
  };

  const updateFilterFromURL = () => {
    const type = searchParams.get("type") ?? "";
    const value = searchParams.get("value") ?? "";
    const newFilter = { ...filter };
    if (type !== filter.type && validFilterTypes.includes(type)) {
      newFilter.type = type as FilterType;
    }
    if (value !== filter.value) {
      newFilter.value = value;
    }
    updateFilter(newFilter);
  };

  React.useEffect(() => {
    updateFilterFromURL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { updateFilter, filter };
};

export default useFilter;
