import styled from "styled-components";
import theme from "./../../theme";

export const CheckGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GroupLabel = styled.label`
  color: ${theme.palette.white};
  margin-right: ${theme.spacing.small};
  ${theme.typography.text};
`;

export const Label = styled.label`
  &:hover {
    background: ${theme.palette.translucientDark};
  }
`;

export const Wrapper = styled.div`
  label {
    cursor: pointer;
    margin: 0;
    ${theme.typography.cta}
    border: 1px solid white;
    color: ${theme.palette.white};
    background: ${theme.palette.transparent};
    padding: ${theme.spacing.xSmall} ${theme.spacing.small};
  }
  input:checked + label {
    background: ${theme.palette.accent};
    color: ${theme.palette.dark};
  }
`;
