import styled from "styled-components";
import theme from "../../theme";

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${theme.palette.translucientLight};
  border: 1px solid ${theme.palette.white};
  padding: ${theme.spacing.medium} ${theme.spacing.medium}
    ${theme.spacing.xLarge} ${theme.spacing.medium};
`;
