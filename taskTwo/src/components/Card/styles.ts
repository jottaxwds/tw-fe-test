import styled from "styled-components";
import theme from "../../theme";

export const ActionBar = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Body = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.medium};
`;

export const Card = styled.div<{ backgroundURL?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.small};
  background: ${({ backgroundURL }) =>
    backgroundURL ? `url('${backgroundURL}')` : "none"};
  background-size: cover;
  color: white;
  border: 1px solid ${theme.palette.white};
`;

// TODO: work on the 4th line, centered ellipsis
export const Content = styled.div`
  position: relative;
  text-align: center;
  color: ${theme.palette.white};
  ${theme.typography.text};
  & > * {
    margin: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.overlay};
`;

export const Title = styled.h3`
  ${theme.typography.sectionHeading};
  text-align: center;
  color: ${theme.palette.white};
  margin-bottom: ${theme.spacing.medium};
  margin-top: ${theme.spacing.small};
`;

export const Separator = styled.hr`
  width: 40px;
  height: 1px;
  color: ${theme.palette.white};
  background: ${theme.palette.white};
  margin: 0;
  padding: 0;
  border: none;
  margin-bottom: ${theme.spacing.medium};
`;
