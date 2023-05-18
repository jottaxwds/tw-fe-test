import React from "react";
import CheckGroup from "../../components/Check/CheckGroup";
import { CheckGroupChangeEventArgs } from "../../components/Check/types";
import Search from "../../components/Search/Search";
import { Filter } from "../../context/types";
import useFilter from "../../hooks/useFilter";
import * as S from "./styles";

const filterOptions = [
  { name: "c", displayValue: "Category", value: "c" },
  { name: "i", displayValue: "Ingredient", value: "i" },
  { name: "a", displayValue: "Area", value: "a" },
];

const Filters = () => {
  const { filter, updateFilter } = useFilter();
  const [filterState, setFilterState] = React.useState(filter);

  React.useEffect(() => {
    const { type, value } = filter;
    const { type: sType, value: sValue } = filterState;
    if (type === sType && value === sValue) {
      return;
    }
    setFilterState({ type, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleOnFilterValueChange = (newSearchValue: string) => {
    setFilterState({ ...filterState, value: newSearchValue });
  };

  const handleOnFilterTypeChange = (
    checkedFilter: CheckGroupChangeEventArgs | undefined
  ) => {
    setFilterState({
      ...filterState,
      type: checkedFilter !== undefined ? checkedFilter.value : "",
    } as Filter);
  };

  const handleOnSearch = () => {
    updateFilter(filterState);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleOnSearch();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <S.Filters>
      <Search
        ctaDisplayValue="Search"
        placeholder="search for a meal..."
        onSearch={handleOnSearch}
        onSearchChange={handleOnFilterValueChange}
        value={filter?.value ?? ""}
      />
      <CheckGroup
        label={"by"}
        options={filterOptions}
        onCheckChange={handleOnFilterTypeChange}
        value={filter?.type ?? ""}
      />
    </S.Filters>
  );
};

export default Filters;
