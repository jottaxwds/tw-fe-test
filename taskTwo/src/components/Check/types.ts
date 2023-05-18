export type CheckOption = {
  name: string;
  displayValue: string;
  value: string;
};

export type CheckChangeEventArg = {
  id: string;
  value: string;
  checked: boolean;
};

export type CheckGroupChangeEventArgs =
  | { id: string; value: string }
  | undefined;

export type CheckGroupProps = {
  label: string;
  options: CheckOption[];
  value: string;
  onCheckChange: (args?: CheckGroupChangeEventArgs) => void;
};
