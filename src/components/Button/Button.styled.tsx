import styled from "styled-components";

export const StyledButton = styled.button<{
  variant: string;
  margin: boolean;
}>`
  color: ${({ variant }) => (variant === "contained" ? "#f2f2f2" : "#646cff")};
  background: ${({ variant }) =>
    variant === "contained" ? "#646cff" : "none"};
  margin: ${({ margin }) => (margin ? "1rem 0" : "0")};
  width: ${({ margin }) => (margin ? "100%" : "")};
  padding: 0.8rem 1.8rem;
  font-size: 2rem;
  font-weight: 500;
  font-family: inherit;
  border: 1px solid
    ${({ variant }) => (variant === "contained" ? "transparent" : "#646cff")};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    background: ${({ variant }) =>
      variant === "contained" ? "transparent" : "#646cff"};
    color: ${({ variant }) =>
      variant === "contained" ? "#646cff" : "#f2f2f2"};
    border: 1px solid
      ${({ variant }) => (variant === "contained" ? "#646cff" : "transparent")};
  }
`;
