import styled from "styled-components";
import theme from "../../theme";

export const Button = styled.button<{ disabled: boolean }>`
    padding: ${theme.spacing.xSmall} ${theme.spacing.small};
    background ${theme.palette.transparent};
    border: 1px solid ${theme.palette.white};
    ${theme.typography.cta};
    background: ${theme.palette.transparent};
    &&& { 
        color: ${({ disabled }) =>
          disabled ? theme.palette.subdued : "inherit"};
    }
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    &:hover {
        background: ${({ disabled }) =>
          disabled
            ? theme.palette.transparent
            : theme.palette.translucientDark};
    }
    &:active {
        background: ${theme.palette.translucientLight};
    }
`;

export const AnchorButton = styled.a`
    padding: ${theme.spacing.xSmall} ${theme.spacing.small};
    background ${theme.palette.transparent};
    border: 1px solid ${theme.palette.white};
    ${theme.typography.cta};
    background: ${theme.palette.transparent};
    color: inherit;
    cursor: "pointer";
    text-decoration: none;
    &:hover {
        background: ${theme.palette.translucientDark}
    }
    &:active {
        background: ${theme.palette.translucientLight};
    }
`;
