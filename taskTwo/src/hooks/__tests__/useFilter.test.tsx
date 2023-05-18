import { act, renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MealsProvider } from "../../context/mealsContext";
import useFilter from "../useFilter";

describe("useFilter", () => {
  it("Should update filter values by given url params", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => {
      return (
        <MemoryRouter initialEntries={["?type=i&value=tomatoes"]}>
          <MealsProvider>{children}</MealsProvider>
        </MemoryRouter>
      );
    };
    const { result } = renderHook(() => useFilter(), { wrapper });
    expect(result.current.filter.type).toEqual("i");
    expect(result.current.filter.value).toEqual("tomatoes");
  });

  it("Should not update filter values by given url params if not present", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => {
      return (
        <MemoryRouter>
          <MealsProvider>{children}</MealsProvider>
        </MemoryRouter>
      );
    };
    const { result } = renderHook(() => useFilter(), { wrapper });
    expect(result.current.filter.type).toEqual("");
    expect(result.current.filter.value).toEqual("");
  });

  it("Updates filter context values when calling `updateFilter`", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => {
      return (
        <MemoryRouter initialEntries={["?type=i&value=tomatoes"]}>
          <MealsProvider>{children}</MealsProvider>
        </MemoryRouter>
      );
    };
    const { result } = renderHook(() => useFilter(), { wrapper });
    act(() => result.current.updateFilter({ type: "c", value: "Gourmet" }));
    expect(result.current.filter.type).toEqual("c");
    expect(result.current.filter.value).toEqual("Gourmet");
  });
});
