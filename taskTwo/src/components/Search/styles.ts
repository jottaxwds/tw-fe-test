import styled from "styled-components";
import theme from "../../theme";

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  padding: ${theme.spacing.medium} ${theme.spacing.medium}
    ${theme.spacing.xLarge} ${theme.spacing.medium};
  && > input {
    flex-grow: 1;
  }

  && > button {
    padding: ${theme.spacing.small} ${theme.spacing.medium};
  }
`;

export const Input = styled.input`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  background: ${theme.palette.transparent};
  color: ${theme.palette.white};
  border: 1px solid ${theme.palette.white};
  ${theme.typography.cta};

  &::placeholder {
    color: ${theme.palette.white};
  }
`;
