import React from "react";
import "./styles.css";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <p className={`text ${className}`} {...rest}>
      {children}
    </p>
  );
};
