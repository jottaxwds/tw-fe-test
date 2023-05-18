import { rawData as data } from "../../testData";
import { getFilteredMeals, getMealById, getRandomMeal } from "../meals";

import { httpGet } from "../utils";

jest.mock("../utils", () => ({
  ...jest.requireActual("../../services/meals"),
  httpGet: jest.fn(),
}));

describe("meals service", () => {
  it("Should NOT return error if received data is not undefined", async () => {
    (httpGet as jest.Mock).mockImplementation(() =>
      Promise.resolve({ meals: [...data.meals.slice(0, 5)] })
    );
    const { meals, error } = await getFilteredMeals({ type: "", value: "" });
    expect(error).toBeFalsy();
    expect(meals).toHaveLength(5);
  });

  it("Should provide right URL based on given filter", async () => {
    (httpGet as jest.Mock).mockImplementation(() =>
      Promise.resolve({ meals: [...data.meals.slice(0, 5)] })
    );
    await getFilteredMeals({ type: "c", value: "cool sea food" });
    expect(httpGet).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=cool_sea_food",
      {}
    );
  });

  it("Should provide right URL for RandomMeal fetching", async () => {
    (httpGet as jest.Mock).mockImplementation(() =>
      Promise.resolve({ meals: [...data.meals.slice(0, 5)] })
    );
    await getRandomMeal();
    expect(httpGet).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/random.php",
      {}
    );
  });

  it("Should provide right URL for MealById fetching", async () => {
    (httpGet as jest.Mock).mockImplementation(() =>
      Promise.resolve({ meals: [...data.meals.slice(0, 5)] })
    );
    await getMealById("123");
    expect(httpGet).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=123",
      {}
    );
  });

  it("Should provide {} as meal if MealById fetching do not give meals results", async () => {
    (httpGet as jest.Mock).mockImplementation(() =>
      Promise.resolve({ meals: [] })
    );
    const { meal } = await getMealById("123");
    expect(httpGet).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=123",
      {}
    );
    expect(Object.keys(meal)).toHaveLength(0);
  });

  describe("Fetch meals handling", () => {
    it("Should return error if received data is undefined", async () => {
      (httpGet as jest.Mock).mockImplementation(() => Promise.resolve({}));
      const { meals, error } = await getFilteredMeals({ type: "", value: "" });
      expect(error).toBeTruthy();
      expect(meals).toHaveLength(0);
    });

    it("Should return error if server returns error", async () => {
      // To supress console errors on test logs
      jest.spyOn(console, "error").mockImplementation(() => {});
      (httpGet as jest.Mock).mockImplementation(() => Promise.reject());
      const { meals, error } = await getFilteredMeals({ type: "", value: "" });
      expect(error).toBeTruthy();
      expect(meals).toHaveLength(0);
    });

    it("Should call console error if server returns an error", async () => {
      (httpGet as jest.Mock).mockImplementation(() => Promise.reject());
      const consoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      await getFilteredMeals({ type: "", value: "" });
      expect(consoleError).toHaveBeenCalledTimes(1);
    });
  });
});
