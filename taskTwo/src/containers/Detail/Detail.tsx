import { snakeCase } from "lodash";
import React from "react";
import Youtube from "react-youtube";
import { Ingredient as IngredientType, Meal } from "../../context/types";
import * as S from "./styles";
import { getYouTubeIdFromUrl } from "./utils";

const youtubeVideoConfig = {
  height: "330",
  playerVars: {
    autoplay: 0,
  },
};

const Detail = ({ meal }: { meal: Meal }) => {
  const ingredientsList = React.useCallback(
    (ingredients: IngredientType[]) =>
      ingredients.length ? (
        ingredients
          .filter(
            ({ name, measure }) =>
              name &&
              name !== "" &&
              name !== undefined &&
              measure &&
              measure !== "" &&
              measure !== undefined
          )
          .map(({ name, measure }) => (
            <S.Ingredient key={snakeCase(`${name}-${measure}`)}>
              <strong>{measure}</strong>
              {` ${name}`}
            </S.Ingredient>
          ))
      ) : (
        <></>
      ),
    []
  );

  return (
    <>
      <S.Heading>
        <S.Preview backgroundImageURL={meal.thumbImg}></S.Preview>
        <S.Ingredients>
          <S.Title>{meal.title}</S.Title>
          <S.IngredientsList data-testid={"ingredients-list"}>
            {ingredientsList(meal.ingredients)}
          </S.IngredientsList>
        </S.Ingredients>
      </S.Heading>
      <S.Main>
        <S.DummyAside />
        <S.Article data-testid={"instructions"}>
          <Youtube
            videoId={getYouTubeIdFromUrl(meal.youtube)}
            opts={youtubeVideoConfig}
          />
          {meal.instructions.split(/\r\n|\r|\n/).map((p, index) => (
            <p key={`p-${meal.id}-${index}`}>{p}</p>
          ))}
        </S.Article>
      </S.Main>
    </>
  );
};

export default Detail;
