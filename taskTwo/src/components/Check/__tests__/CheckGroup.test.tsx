/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckGroup from "../CheckGroup";

const options = [
  { name: "option1", displayValue: "Option 1", value: "op1" },
  { name: "option2", displayValue: "Option 2", value: "op2" },
  { name: "option3", displayValue: "Option 3", value: "op3" },
  { name: "option4", displayValue: "Option 4", value: "op4" },
];

describe("CheckGroup", () => {
  const defaultProps = {
    options,
    value: "",
    label: "Group",
    onCheckChange: () => {},
  };

  it("Should show right number of checks by given options", () => {
    render(<CheckGroup {...defaultProps} />);
    const inputs = screen.getAllByTestId("check-input");
    expect(inputs).toHaveLength(4);
  });

  it("Should show all checks unchecked if given `value` is empty", () => {
    render(<CheckGroup {...defaultProps} value={""} />);
    const [one, two, three, four] = screen.getAllByTestId("check-input");
    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
    expect(three).not.toBeChecked();
    expect(four).not.toBeChecked();
  });

  it("Should show as `checked` the `Check` that matches given `value`", () => {
    render(<CheckGroup {...defaultProps} value={"op2"} />);
    const [one, two, three, four] = screen.getAllByTestId("check-input");
    expect(one).not.toBeChecked();
    expect(two).toBeChecked();
    expect(three).not.toBeChecked();
    expect(four).not.toBeChecked();
  });

  it("Should update the checked `Check` when given `value` changes", () => {
    const { rerender } = render(<CheckGroup {...defaultProps} value={"op2"} />);
    const [one, two, three, four] = screen.getAllByTestId("check-input");
    expect(one).not.toBeChecked();
    expect(two).toBeChecked();
    expect(three).not.toBeChecked();
    expect(four).not.toBeChecked();
    rerender(<CheckGroup {...defaultProps} value={"op1"} />);
    const [newOne, newTwo, newThree, newFour] =
      screen.getAllByTestId("check-input");
    expect(newOne).toBeChecked();
    expect(newTwo).not.toBeChecked();
    expect(newThree).not.toBeChecked();
    expect(newFour).not.toBeChecked();
  });

  it("Should keep checked only the last that was clicked/checked", () => {
    render(<CheckGroup {...defaultProps} value={"op2"} />);
    let [one, two, three, four] = screen.getAllByTestId("check-input");
    expect(one).not.toBeChecked();
    expect(two).toBeChecked();
    expect(three).not.toBeChecked();
    expect(four).not.toBeChecked();
    const checkThree = screen.getByLabelText("Option 3");
    act(() => userEvent.click(checkThree));
    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
    expect(three).toBeChecked();
    expect(four).not.toBeChecked();
  });

  it("Should call `onCheckChange` passing last check checked data when a check is clicked", () => {
    const onCheckChangeMock = jest.fn();
    render(<CheckGroup {...defaultProps} onCheckChange={onCheckChangeMock} />);
    const checkThree = screen.getByLabelText("Option 3");
    act(() => userEvent.click(checkThree));
    expect(onCheckChangeMock).toHaveBeenCalledTimes(1);
    const [, , { name: id, value }] = options;
    expect(onCheckChangeMock).toHaveBeenCalledWith({ id, value });
  });

  it("Should call `onCheckChange` passing `undefined` when check is clicked & unchecked", () => {
    const onCheckChangeMock = jest.fn();
    render(
      <CheckGroup
        {...defaultProps}
        onCheckChange={onCheckChangeMock}
        value={"op3"}
      />
    );
    const checkThree = screen.getByLabelText("Option 3");
    act(() => userEvent.click(checkThree));
    expect(onCheckChangeMock).toHaveBeenCalledTimes(1);
    expect(onCheckChangeMock).toHaveBeenCalledWith();
  });
});
