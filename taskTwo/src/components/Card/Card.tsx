import Button from "../Button/Button";
import * as S from "./styles";

type CardProps = {
  id: string;
  title: string;
  content: JSX.Element;
  backgroundURL: string;
  actionDisplayValue: string;
};

const Card = ({
  id,
  title,
  content,
  backgroundURL,
  actionDisplayValue,
}: CardProps) => (
  <S.Card backgroundURL={backgroundURL}>
    <S.Overlay />
    <S.Body>
      <S.Title>{title}</S.Title>
      <S.Separator />
      <S.Content>{content}</S.Content>
    </S.Body>
    <S.ActionBar>
      <Button
        variant="link"
        hRef={`/detail/${id}`}
        displayValue={actionDisplayValue}
      />
    </S.ActionBar>
  </S.Card>
);

export default Card;
