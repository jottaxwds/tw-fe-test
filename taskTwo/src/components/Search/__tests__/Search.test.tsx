/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../Search";

describe("Search", () => {
  it("Should show empty search value if not provided", () => {
    render(
      <Search
        placeholder="search for a meal"
        ctaDisplayValue="Search"
        onSearch={() => {}}
      />
    );
    const input = screen.getByTestId("search-input");
    expect(input).toHaveValue("");
  });

  it("Should show given `value`", () => {
    render(
      <Search
        placeholder="search for a meal"
        ctaDisplayValue="Search"
        onSearch={() => {}}
        value="spaghetti"
      />
    );
    const input = screen.getByTestId("search-input");
    expect(input).toHaveValue("spaghetti");
  });

  it("Should update shown value when changed", () => {
    render(
      <Search
        placeholder="search for a meal"
        ctaDisplayValue="Search"
        onSearch={() => {}}
      />
    );
    const input = screen.getByTestId("search-input");
    act(() => userEvent.type(input, "spaghetti"));
    expect(input).toHaveValue("spaghetti");
  });

  it("Should call `onSearchChange` when value is changed", () => {
    const onSearchChangeMock = jest.fn();
    render(
      <Search
        placeholder="search for a meal"
        ctaDisplayValue="Search"
        onSearch={() => {}}
        onSearchChange={onSearchChangeMock}
      />
    );
    const input = screen.getByTestId("search-input");
    act(() => userEvent.type(input, "spaghetti"));
    expect(onSearchChangeMock).toHaveBeenCalledTimes(9);
    expect(onSearchChangeMock).toHaveBeenCalledWith("spaghetti");
  });

  it("Should call `onSearch` when `SearchButton` is clicked", () => {
    const onSearchMock = jest.fn();
    render(
      <Search
        placeholder="search for a meal"
        ctaDisplayValue="Search"
        onSearch={onSearchMock}
      />
    );
    const input = screen.getByTestId("search-input");
    act(() => userEvent.type(input, "spaghetti"));
    const cta = screen.getByRole("button");
    act(() => userEvent.click(cta));
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith("spaghetti");
  });
});
