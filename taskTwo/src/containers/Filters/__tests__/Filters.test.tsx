import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Filter } from "../../../context/types";
import useFilter from "../../../hooks/useFilter";
import Filters from "../Filters";

jest.mock("../../../hooks/useFilter", () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockImplementation(() => ({ filter: {}, updateValue: jest.fn() })),
}));

describe("Filters container", () => {
  const mockUseFilter = (
    filter = { type: "", value: "" } as Filter,
    updateFilter = jest.fn()
  ) => {
    const mockedUseFilter = useFilter as jest.MockedFunction<typeof useFilter>;
    mockedUseFilter.mockReturnValueOnce({
      filter,
      updateFilter,
    });
  };

  it("Should show empty search value if not provided by hook", () => {
    mockUseFilter();
    render(<Filters />);
    expect(screen.getByTestId("search-input")).toHaveValue("");
  });

  it("Should show unchecked `Check` if filter type is not provided by hook", () => {
    mockUseFilter();
    render(<Filters />);
    const [categoryCheck, ingredientCheck, areaCheck] =
      screen.getAllByTestId("check-input");
    expect(categoryCheck).not.toBeChecked();
    expect(ingredientCheck).not.toBeChecked();
    expect(areaCheck).not.toBeChecked();
  });

  it("Should show search value provided by hook", () => {
    mockUseFilter({ type: "", value: "Food" });
    render(<Filters />);
    expect(screen.getByTestId("search-input")).toHaveValue("Food");
  });

  it("Should check right `Check` from `CheckGroup` if provided by hook", () => {
    mockUseFilter({ type: "a", value: "Food" });
    render(<Filters />);
    const [categoryCheck, ingredientCheck, areaCheck] =
      screen.getAllByTestId("check-input");
    expect(categoryCheck).not.toBeChecked();
    expect(ingredientCheck).not.toBeChecked();
    expect(areaCheck).toBeChecked();
  });

  it("Should call `updateFilter` when `search` button is clicked", () => {
    const mockUpdateFilter = jest.fn();
    mockUseFilter({ type: "i", value: "tomatoe" }, mockUpdateFilter);
    render(<Filters />);
    const search = screen.getByRole("button");
    userEvent.click(search);
    expect(mockUpdateFilter).toHaveBeenCalled();
  });

  it("Should call `updateFilter` `Enter` key is pressed", () => {
    const mockUpdateFilter = jest.fn();
    mockUseFilter({ type: "i", value: "tomatoe" }, mockUpdateFilter);
    render(<Filters />);
    userEvent.keyboard("{enter}");
    expect(mockUpdateFilter).toHaveBeenCalled();
  });
});
