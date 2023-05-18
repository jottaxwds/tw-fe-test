import { render, screen } from "@testing-library/react";
import { Meal } from "../../../context/types";
import { mealsExample } from "../../../testData";
import Detail from "../Detail";

describe("Detail container", () => {
  it("Should show ingredients list matching snapshot", () => {
    render(<Detail meal={mealsExample[0] as Meal} />);
    expect(screen.getByTestId("ingredients-list")).toMatchSnapshot();
  });

  it("Should show instructions matching snapshot", () => {
    render(<Detail meal={mealsExample[0] as Meal} />);
    expect(screen.getByTestId("instructions")).toMatchSnapshot();
  });

  it("Should show empty ingredients list if not provided in the meal", () => {
    render(<Detail meal={{ ...(mealsExample[0] as Meal), ingredients: [] }} />);
    expect(screen.getByTestId("ingredients-list")).toBeEmptyDOMElement();
  });
});
