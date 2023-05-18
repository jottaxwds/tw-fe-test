import styled from "styled-components";
import theme from "../../theme";

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("./images/background.jpg");
  position: relative;
`;

export const TopBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30px;
  background: ${theme.palette.lightBrown};
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.overlay};
`;

export const Heading = styled.section`
  position: relative;
  z-index: 2;
  padding: ${theme.spacing.xxxxLarge};
  text-align: center;
  color: ${theme.palette.white};
`;

export const Title = styled.h1`
  ${theme.typography.heading};
  width: 100%;
  margin-top: 0;
  margin-bottom: ${theme.spacing.medium};
`;

export const SubTitle = styled.h2`
  ${theme.typography.subHeading};
  width: 100%;
  max-width: 480px;
  margin: auto;
`;

export const FilterSection = styled.section`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  width: 100%;
  flex: 1;
  padding-bottom: ${theme.spacing.smallMedium};

  & > div {
    flex: 1;
  }

  & > div:first-child {
    width: 300px;
    flex: none;
    margin-right: ${theme.spacing.small};
  }
`;

export const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${theme.palette.lightestBrown};
`;
