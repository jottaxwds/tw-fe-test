import * as S from "./styles";

type ButtonProps = {
  displayValue: string;
  isDisabled?: boolean;
  onClick?: () => void;
  variant?: "link" | "button";
  hRef?: string;
};

const Button = ({
  displayValue,
  onClick,
  isDisabled = false,
  variant = "button",
  hRef = "",
}: ButtonProps) =>
  variant === "link" ? (
    <S.AnchorButton href={hRef}>{displayValue}</S.AnchorButton>
  ) : (
    <S.Button role="button" disabled={isDisabled} onClick={() => onClick?.()}>
      {displayValue}
    </S.Button>
  );

export default Button;
