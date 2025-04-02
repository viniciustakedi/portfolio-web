"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button
        onClick={() => handleLanguageChange("pt")}
        style={{ marginLeft: "10px" }}
      >
        Português
      </button>
    </div>
  );
};

export default LanguageSwitcher;
