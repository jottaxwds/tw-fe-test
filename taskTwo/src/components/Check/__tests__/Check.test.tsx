import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Check from "../Check";

describe("Check", () => {
  const defaultProps = {
    displayValue: "My Check",
    value: "my-check",
    id: "check-test",
    name: "check-test",
    onChange: () => {},
  };

  it("Should show as not-checked if `isChecked` is not given", () => {
    render(<Check {...defaultProps} />);
    const input = screen.getByTestId("check-input");
    expect(input).not.toBeChecked();
  });

  it("Should show as checked if `isChecked` is given to `true`", () => {
    render(<Check {...defaultProps} isChecked />);
    const input = screen.getByTestId("check-input");
    expect(input).toBeChecked();
  });

  it("Should check input if, not prev.checked its label is clicked", () => {
    render(<Check {...defaultProps} />);
    const label = screen.getByLabelText(defaultProps.displayValue);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => userEvent.click(label));
    const input = screen.getByTestId("check-input");
    expect(input).toBeChecked();
  });

  it("Should un-check input if, prev.checked its label is clicked", () => {
    render(<Check {...defaultProps} isChecked />);
    const label = screen.getByLabelText(defaultProps.displayValue);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => userEvent.click(label));
    const input = screen.getByTestId("check-input");
    expect(input).not.toBeChecked();
  });

  it("Should call `onChange` when is clicked", () => {
    const onChangeMock = jest.fn();
    render(<Check {...defaultProps} onChange={onChangeMock} />);
    const label = screen.getByLabelText(defaultProps.displayValue);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => userEvent.click(label));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    const { id, value } = defaultProps;
    expect(onChangeMock).toHaveBeenCalledWith({ id, value, checked: true });
  });
});
