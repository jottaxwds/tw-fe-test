/* eslint-disable testing-library/no-unnecessary-act */
import { act, renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MealsProvider } from "../../context/mealsContext";
import { httpGet } from "../../services/utils";
import { rawData } from "../../testData";
import useMealDetail from "../useMealDetail";

jest.mock("../../services/utils", () => ({
  ...jest.requireActual("../../services/utils"),
  httpGet: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ mealId: "2" }),
}));

describe("useMealDetail", () => {
  beforeEach(() => {
    (httpGet as jest.Mock).mockImplementation(() =>
      Promise.resolve({ meals: [rawData.meals[0]] })
    );
  });

  it("Should call for meal details when mealId is given by path param", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => {
      return (
        <MemoryRouter>
          <MealsProvider>{children}</MealsProvider>
        </MemoryRouter>
      );
    };
    await act(async () => {
      renderHook(() => useMealDetail(), { wrapper });
    });
    expect(httpGet).toHaveBeenCalled();
  });
});
