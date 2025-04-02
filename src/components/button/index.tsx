import React from "react";
import "./styles.css";

interface ButtonProps {
  variant: "outline" | "filled";
  width?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  width,
}) => {
  return (
    <button className={`button ${variant} ${width}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
