import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  it("Should navigate to right details path of the meal when link is clicked", () => {
    render(
      <Card
        id={"1"}
        title={"Title"}
        content={<></>}
        actionDisplayValue={"show more"}
        backgroundURL=""
      />
    );
    const actionButton = screen.getByRole("link");
    expect(actionButton).toHaveAttribute("href", "/detail/1");
  });
});
