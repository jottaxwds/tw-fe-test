import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";

describe("Button", () => {
  it("Should show given `displayValue`", () => {
    render(<Button displayValue="Hi!" onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Hi!");
  });

  it("Should call given `onClick` when is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button displayValue="Hi!" onClick={onClickMock} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith();
  });
});
