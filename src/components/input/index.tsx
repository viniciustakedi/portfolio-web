import React from "react";
import "./styles.css";

interface InputProps {
  placeholder: string;
  variant: "outline" | "filled";
  type: "email" | "text" | "password" | "textArea";
  width?: string;
  onChange?: () => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  variant,
  type,
  onChange,
  width,
}) => {
  if (type === "textArea") {
    return (
      <textarea
        placeholder={placeholder}
        className={`input__text__area ${variant} ${width}`}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`input ${variant} ${width}`}
      onChange={onChange}
    />
  );
};

export default Input;
