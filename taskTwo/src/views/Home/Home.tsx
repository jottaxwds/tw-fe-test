import { snakeCase } from "lodash";
import React from "react";
import Card from "../../components/Card/Card";
import List from "../../components/List/List";
import Filters from "../../containers/Filters/Filters";
import useMeals from "../../hooks/useMeals";
import * as S from "./styles";

const Home = () => {
  const { randomMeal, meals, isLoadingMeals } = useMeals();

  const cardContentPreview = React.useMemo(() => {
    if (!randomMeal?.ingredients?.length) {
      return <></>;
    }
    const { ingredients } = randomMeal;
    const ingredientsList = (
      <>
        {[...Array(3)].map((_, index) => (
          <p
            key={snakeCase(
              `${ingredients[index].measure}-${ingredients[index].name}`
            )}
          >{`${ingredients[index].measure} ${ingredients[index].name}`}</p>
        ))}
      </>
    );
    return (
      <>
        <p>Add Ingredients:</p>
        {ingredientsList}
        <p>...</p>
      </>
    );
  }, [randomMeal]);

  return (
    <>
      <S.HomeContainer data-testid={"home-view"}>
        <S.Overlay />
        <S.TopBar />
        <S.Heading>
          <S.Title>Only Quality Food</S.Title>
          <S.SubTitle>
            Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </S.SubTitle>
        </S.Heading>
        <S.FilterSection>
          <Card
            id={randomMeal.id}
            actionDisplayValue="more"
            backgroundURL={randomMeal.thumbImg}
            content={cardContentPreview}
            title={randomMeal.title}
          />
          <Filters />
        </S.FilterSection>
      </S.HomeContainer>
      <S.ListSection>
        <List items={meals} isLoading={isLoadingMeals} />
      </S.ListSection>
    </>
  );
};

export default Home;
