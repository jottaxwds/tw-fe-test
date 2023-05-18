import styled from "styled-components";
import theme from "../../theme";

export const Info = styled.div`
  width: 100%;
  ${theme.typography.sectionHeading};
  text-align: center;
  background: ${theme.palette.darkBrown};
  color: white;
`;

export const TopBar = styled.nav`
  background: ${theme.palette.white};
  ${theme.typography.sectionHeading};
  color: ${theme.palette.lightBrown};
  padding: ${theme.spacing.smallMedium};
`;
