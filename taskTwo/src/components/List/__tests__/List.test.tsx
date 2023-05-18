/* eslint-disable testing-library/no-unnecessary-act */
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { Meal } from "../../../context/types";
import { mealsExample } from "../../../testData";
import List from "../List";

describe("List", () => {
  const defaultProps = {
    items: mealsExample as Meal[],
    isLoading: false,
  };

  it("Should show Loading item when given `isLoading` is set to `true`", () => {
    render(<List {...defaultProps} isLoading />);
    expect(screen.getByTestId("loading-item")).toBeInTheDocument();
  });

  it("Should NOT show Loading item when given `isLoading` is set to `false`", () => {
    render(<List {...defaultProps} />);
    expect(screen.queryByTestId("loading-item")).not.toBeInTheDocument();
  });

  it("Should NOT show Loading item when not given a `isLoading` value", () => {
    render(<List items={mealsExample as Meal[]} />);
    expect(screen.queryByTestId("loading-item")).not.toBeInTheDocument();
  });

  it("Should NOT show no-items item when `isLoading` is set to `true` and `items` are empty", () => {
    render(<List items={[]} isLoading />);
    expect(screen.queryByTestId("no-items")).not.toBeInTheDocument();
  });

  it("Should show no-items item when `isLoading` is set to `false` and theres not `items` length", () => {
    render(<List {...defaultProps} items={[]} />);
    expect(screen.getByTestId("no-items")).toBeInTheDocument();
  });

  it("Should show a paginated list `items` based on given `itemsPerPage` when `isLoading` is set to `false`", () => {
    render(<List {...defaultProps} itemsPerPage={3} />);
    expect(
      screen.getAllByTestId((testId) => testId.startsWith("list-item"))
    ).toHaveLength(3);
  });

  it("Should show PREV pagination button as disabled if current page is first", () => {
    render(<List {...defaultProps} itemsPerPage={3} />);
    const prev = screen.getByText("PREV");
    expect(prev).toHaveAttribute("disabled");
  });

  it("Should paginate next when NEXT pagination button is not disabled & clicked", () => {
    render(<List {...defaultProps} itemsPerPage={3} />);
    const next = screen.getByText("NEXT");
    const currentItemIds = JSON.stringify(
      screen
        .getAllByTestId((testId) => testId.startsWith("list-item"))
        .map((item) => item.getAttribute("data-testid"))
    );
    expect(screen.getByTestId("pagination-info")).toHaveTextContent(
      "Page 1 of 4"
    );
    act(() => userEvent.click(next));
    const nextPageItemIds = JSON.stringify(
      screen
        .getAllByTestId((testId) => testId.startsWith("list-item"))
        .map((item) => item.getAttribute("data-testid"))
    );
    expect(!currentItemIds.includes(nextPageItemIds)).toBeTruthy();
    expect(screen.getByTestId("pagination-info")).toHaveTextContent(
      "Page 2 of 4"
    );
  });

  it("Should NOT show PREV pagination button as disabled if current page is first", () => {
    render(<List {...defaultProps} itemsPerPage={3} />);
    const next = screen.getByText("NEXT");
    act(() => userEvent.click(next));
    const prev = screen.getByText("PREV");
    expect(prev).not.toHaveAttribute("disabled");
  });

  it("Should paginate back when PREV pagination button is not disabled & clicked", () => {
    render(<List {...defaultProps} itemsPerPage={3} />);
    const next = screen.getByText("NEXT");
    act(() => userEvent.click(next));
    expect(screen.getByTestId("pagination-info")).toHaveTextContent(
      "Page 2 of 4"
    );
    const currentItemIds = JSON.stringify(
      screen
        .getAllByTestId((testId) => testId.startsWith("list-item"))
        .map((item) => item.getAttribute("data-testid"))
    );
    const prev = screen.getByText("PREV");
    act(() => userEvent.click(prev));
    const nextPageItemIds = JSON.stringify(
      screen
        .getAllByTestId((testId) => testId.startsWith("list-item"))
        .map((item) => item.getAttribute("data-testid"))
    );
    expect(!currentItemIds.includes(nextPageItemIds)).toBeTruthy();
    expect(screen.getByTestId("pagination-info")).toHaveTextContent(
      "Page 1 of 4"
    );
  });

  it("Should show NEXT pagination button as disabled if current page is the last page", () => {
    render(<List {...defaultProps} itemsPerPage={3} />);
    const next = screen.getByText("NEXT");
    act(() => userEvent.click(next));
    act(() => userEvent.click(next));
    act(() => userEvent.click(next));
    act(() => userEvent.click(next));
    expect(screen.getByTestId("pagination-info")).toHaveTextContent(
      "Page 4 of 4"
    );
    expect(next).toHaveAttribute("disabled");
  });
});
