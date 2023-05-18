import DetailContent from "../../containers/Detail/Detail";
import useMealDetail from "../../hooks/useMealDetail";

import * as S from "./styles";

const Detail = () => {
  const { isLoadingMealInfo, meal } = useMealDetail();
  return (
    <>
      <S.TopBar>Only Quality Food</S.TopBar>
      {isLoadingMealInfo ? (
        <S.Info data-testid={"detail-loading"}> Loading ... </S.Info>
      ) : (
        <></>
      )}
      {meal !== null ? (
        <DetailContent meal={meal} />
      ) : (
        <div data-testid={"detail-error"}>Error!</div>
      )}
    </>
  );
};

export default Detail;
