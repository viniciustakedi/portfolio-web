"use client";
import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

interface MenuItem {
  label: string;
  link: string;
}

const Menu: React.FC = () => {
  const { t } = useTranslation("menu");

  const menuItems: MenuItem[] = [
    { label: t("nav_option_one"), link: "#" },
    { label: t("nav_option_two"), link: "#about" },
    { label: t("nav_option_three"), link: "#contact" },
  ];

  return (
    <nav className="menu">
      <div className="logo">
        <h1 className="text-4xl font-black">TAKEDI</h1>
      </div>
      <ul className="menu__list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu__item">
            <a href={item.link} className="menu__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="icons">
        <h1 className="text-4xl font-black">TAKEDI</h1>
      </div>
    </nav>
  );
};

export default Menu;
