/* eslint-disable testing-library/no-unnecessary-act */
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { httpGet } from "../services/utils";
import { rawData } from "../testData";

jest.mock("../services/utils", () => ({
  ...jest.requireActual("../services/utils"),
  httpGet: jest.fn(),
}));

describe("App", () => {
  beforeEach(() => {
    (httpGet as jest.Mock).mockImplementation(() =>
      Promise.resolve({ meals: [...rawData.meals.slice(0, 5)] })
    );
  });

  it("Should apply filter values from URL params", async () => {
    const queryParams = {
      type: "c",
      value: "Gourmet",
    };
    const searchParams = new URLSearchParams(queryParams);
    const mockUrl = `/?${searchParams.toString()}`;

    const location = new URL(`http://localhost${mockUrl}`);
    Object.defineProperty(window, "location", {
      value: location,
      writable: true,
    });

    render(<App />);
    await waitFor(() => {
      const searchFilter = screen.getByTestId("search-input");
      expect(searchFilter).toHaveValue("Gourmet");
    });
    const [categoryCheck, ingredientCheck, areaCheck] =
      screen.getAllByTestId("check-input");
    expect(categoryCheck).toBeChecked();
    expect(ingredientCheck).not.toBeChecked();
    expect(areaCheck).not.toBeChecked();
  });

  it("Should load random meals and meals based on search params at first", async () => {
    jest.clearAllMocks();
    const queryParams = {
      type: "c",
      value: "Gourmet",
    };
    const searchParams = new URLSearchParams(queryParams);
    const mockUrl = `/?${searchParams.toString()}`;

    const location = new URL(`http://localhost${mockUrl}`);
    Object.defineProperty(window, "location", {
      value: location,
      writable: true,
    });

    render(<App />);
    expect(httpGet).toHaveBeenCalledTimes(2);
    expect(httpGet).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/random.php",
      {}
    );
    expect(httpGet).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Gourmet",
      {}
    );
  });

  it("Should show Home view with `/` path", async () => {
    const location = new URL(`http://localhost/`);
    Object.defineProperty(window, "location", {
      value: location,
      writable: true,
    });

    render(<App />);
    expect(screen.getByTestId("home-view")).toBeInTheDocument();
  });
});
