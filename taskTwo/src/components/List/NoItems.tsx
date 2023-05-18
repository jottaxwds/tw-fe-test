import * as S from "./styles";

const NoItems = ({ colSpan = 0 }) => (
  <S.NoItems data-testid={"no-items"}>...No items found...</S.NoItems>
);

export default NoItems;
