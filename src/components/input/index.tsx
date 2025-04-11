import React from "react";
import "./styles.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  variant: "outline" | "filled";
  type: "email" | "text" | "password" | "textArea";
  width?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  variant: "outline" | "filled";
  type: "email" | "text" | "password" | "textArea";
  width?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  variant,
  type,
  width,
  ...rest
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`input ${variant} ${width}`}
      {...rest}
    />
  );
};

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  variant,
  width,
  ...rest
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`input__text__area ${variant} ${width}`}
      cols={33}
      rows={5}
      {...rest}
    />
  );
};

export { Input, TextArea };

export default Input;
