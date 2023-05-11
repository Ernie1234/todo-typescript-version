import * as React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  btnType: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  btnText: string;
  variant: string;
  margin?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  btnType,
  btnText,
  variant,
  onClick,
}) => {
  return (
    <StyledButton type={btnType} margin variant={variant} onClick={onClick}>
      {btnText}
    </StyledButton>
  );
};

export default Button;
