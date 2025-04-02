import React from "react";
import "./styles.css";

interface StrongProps {
  children: React.ReactNode;
}

export const Strong: React.FC<StrongProps> = ({ children }) => {
  return <strong className="font-bold">{children}</strong>;
};
