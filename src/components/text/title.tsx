import React from "react";
import "./styles.css";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`title ${className}`}>{children}</h1>;
};
