import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Detail from "../Detail";

describe("Detail view", () => {
  it("Shows loading content when is loading meal details ", () => {
    render(<Detail />);
    expect(screen.getByTestId("detail-loading")).toBeInTheDocument();
  });
  it("Shows error content when error happens loading meal details", () => {});
  it("Shows meal details content when loaded without errors", () => {});
});
