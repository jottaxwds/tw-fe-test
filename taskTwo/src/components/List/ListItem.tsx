import * as S from "./styles";

type ListItemProps = {
  id: string;
  title: string;
  thumbImg: string;
};

const ListItem = ({ id, title, thumbImg }: ListItemProps) => (
  <S.ListItem data-testid={`list-item-${id}`}>
    <S.Link href={`/detail/${id}`} title={title}>
      <S.Image backgroundImage={thumbImg} />
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
    </S.Link>
  </S.ListItem>
);

export default ListItem;
