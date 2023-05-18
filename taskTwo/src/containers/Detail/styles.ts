import styled from "styled-components";
import theme from "../../theme";

export const DetailContainer = styled.div`
  background: ${theme.palette.lightBrown};
  height: 100%;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Preview = styled.div<{ backgroundImageURL: string }>`
  display: flex;
  background-color: ${theme.palette.subdued};
  background-image: url("${({ backgroundImageURL }) => backgroundImageURL}");
  background-size: cover;
  background-position: center center;
  width: 300px;
`;
export const Title = styled.h2`
  color: ${theme.palette.accent};
  ${theme.typography.detailsHeading};
  margin: 0;
  margin-bottom: ${theme.spacing.small};
`;
export const Ingredients = styled.div`
  background: ${theme.palette.darkBrown};
  flex: 1;
  padding: ${theme.spacing.medium} ${theme.spacing.mediumLarge};
`;
export const IngredientsList = styled.ul`
  list-style: none;
  ${theme.typography.text};
  margin: 0;
  padding: 0;
`;
export const Ingredient = styled.li`
  margin-bottom: ${theme.spacing.xxSmall};
`;

export const Main = styled.main`
  background: ${theme.palette.lightBrown};
  ${theme.typography.text};
  display: flex;
  flex-direction: row;
`;

export const DummyAside = styled.aside`
  width: 300px;
`;

export const Article = styled.article`
  flex: 1;
  padding: ${theme.spacing.medium} ${theme.spacing.mediumLarge};
`;
