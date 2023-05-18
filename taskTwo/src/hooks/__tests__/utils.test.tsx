import { DataEntity } from "../../services/types";
import { rawData } from "../../testData";
import { buildMealFromData, mealFormatter } from "../utils";

describe("Hooks -> utils", () => {
  describe("buildMealFromData", () => {
    it("Should return array of well formatted Meal from given array of DataEntity", () => {
      const input = [rawData.meals[0]] as DataEntity[];
      const output = buildMealFromData(input);
      const mealKeys = [
        "id",
        "area",
        "category",
        "title",
        "youtube",
        "source",
        "thumbImg",
        "instructions",
        "ingredients",
      ];
      expect(output).toHaveLength(1);
      const keys = Object.keys(output[0]);
      expect(
        JSON.stringify(keys).includes(JSON.stringify(mealKeys))
      ).toBeTruthy();
      expect(output[0].ingredients).toHaveLength(21);
    });
  });
  describe("mealFormatter", () => {
    it("Should return well formated meal from given DataEntity", () => {
      const input = rawData.meals[0] as DataEntity;
      const output = mealFormatter(input);
      const mealKeys = [
        "id",
        "area",
        "category",
        "title",
        "youtube",
        "source",
        "thumbImg",
        "instructions",
        "ingredients",
      ];
      const keys = Object.keys(output);
      expect(
        JSON.stringify(keys).includes(JSON.stringify(mealKeys))
      ).toBeTruthy();
      expect(output.ingredients).toHaveLength(21);
    });
  });
});
