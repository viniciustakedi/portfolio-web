import React from "react";
import "./styles.css";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return <p className={`text ${className}`}>{children}</p>;
};
