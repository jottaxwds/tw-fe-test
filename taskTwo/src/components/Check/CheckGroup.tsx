import { snakeCase } from "lodash";
import React from "react";
import Check from "./Check";
import { CheckChangeEventArg, CheckGroupProps, CheckOption } from "./types";

import * as S from "./styles";

const CheckGroup = ({
  label,
  options,
  value,
  onCheckChange,
}: CheckGroupProps) => {
  const [selectedCheck, setSelectedCheck] = React.useState(value);

  React.useEffect(() => {
    if (!value || value === selectedCheck) {
      return;
    }
    setSelectedCheck(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleOnCheckChange = ({
    id,
    value: newValue,
    checked,
  }: CheckChangeEventArg) => {
    if (!checked) {
      setSelectedCheck("");
      onCheckChange();
      return;
    }
    setSelectedCheck(newValue);
    onCheckChange({ id, value: newValue });
  };

  return (
    <S.CheckGroup>
      <S.GroupLabel>{label}</S.GroupLabel>
      {options.map(({ name, displayValue, value: checkValue }: CheckOption) => (
        <Check
          key={`${snakeCase(name)}-${snakeCase(value)}`}
          id={name}
          name={name}
          displayValue={displayValue}
          isChecked={checkValue === selectedCheck}
          onChange={handleOnCheckChange}
          value={checkValue}
        />
      ))}
    </S.CheckGroup>
  );
};

export default CheckGroup;
