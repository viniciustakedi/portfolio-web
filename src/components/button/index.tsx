import React from "react";
import "./styles.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "outline" | "filled";
  width?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  width,
  ...rest
}) => {
  return (
    <button className={`button ${variant} ${width}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
