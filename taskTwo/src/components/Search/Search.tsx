import React from "react";
import Button from "../Button/Button";
import * as S from "./styles";

type SearchProps = {
  ctaDisplayValue: string;
  placeholder: string;
  onSearchChange?: (newSearchValue: string) => void;
  onSearch: (searchValue: string) => void;
  value?: string;
};

const Search = ({
  ctaDisplayValue,
  placeholder,
  onSearchChange,
  onSearch,
  value,
}: SearchProps) => {
  const [searchValue, setSearchValue] = React.useState(value ?? "");

  React.useEffect(() => {
    if (!value || value === undefined) {
      setSearchValue("");
      return;
    }
    setSearchValue(value);
  }, [value]);

  const handleOnSearchChange = ({
    target: { value: newSearchValue },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(newSearchValue);
    onSearchChange?.(newSearchValue);
  };

  const handleOnSearch = () => {
    onSearch(searchValue);
  };

  return (
    <S.Search>
      <S.Input
        type="text"
        name="search"
        placeholder={placeholder}
        id="search"
        data-testid="search-input"
        value={searchValue}
        onChange={handleOnSearchChange}
      />
      <Button displayValue={ctaDisplayValue} onClick={() => handleOnSearch()} />
    </S.Search>
  );
};
export default Search;
