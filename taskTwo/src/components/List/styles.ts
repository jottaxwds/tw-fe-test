import styled from "styled-components";
import theme from "../../theme";

export const NoItems = styled.li`
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  height: 243px;
`;

export const List = styled.div``;

export const LoadingItem = styled.li`
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  height: 243px;
}
`;

export const Body = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: ${theme.spacing.smallMedium};
  list-style: none;
  max-width: 769px;
  margin: auto;
  padding: ${theme.spacing.xLarge};
`;

export const Pagination = styled.div`
  margin: auto auto ${theme.spacing.mediumLarge};
  width: 100%;
  max-width: calc(769px - 2 * ${theme.spacing.medium});
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;
  &&& {
    & button:not(:disabled),
    & span {
      color: ${theme.palette.dark};
    }
  }
`;

export const Count = styled.span`
  padding: 0 ${theme.spacing.xSmall};
  ${theme.typography.text};
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  grid-column: span 1;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;
export const Image = styled.div<{ backgroundImage: string }>`
  height: 145px;
  width: 100%;
  background-color: ${theme.palette.subdued};
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  background-size: cover;
  background-position: center center;
`;
export const Title = styled.h3`
  ${theme.typography.smallHeadings};
  padding: ${theme.spacing.xSmall} ${theme.spacing.small};
  width: auto;
  text-align: center;
  color: ${theme.palette.white};
  margin: 0 auto;
  flex: 1;
`;

export const TitleWrapper = styled.div`
  background: ${theme.palette.lightBrown};
  flex: 1;
`;
