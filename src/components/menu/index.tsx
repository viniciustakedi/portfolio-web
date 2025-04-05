"use client";
import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { FaBars, FaGithubAlt, FaLinkedin, FaTimes } from "react-icons/fa";
import Link from "next/link";

interface MenuItem {
  label: string;
  link: string;
}

const Menu: React.FC = () => {
  const [currentLink, setCurrentLink] = React.useState<string>("#");
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const { t } = useTranslation("menu");

  const menuItems: MenuItem[] = [
    { label: t("nav_option_one"), link: "#" },
    { label: t("nav_option_two"), link: "#about" },
    { label: t("nav_option_three"), link: "#contact" },
  ];

  const handleMenuAction = (link: string) => {
    setIsMenuOpen(state => !state)
    setCurrentLink(link)
  }

  return (
    <nav className="menu">
      <div className="logo">
        <h1 className="md:text-4xl text-2xl font-black text-[#323232]">
          TAKEDI
        </h1>
        <div className="menu__icon">
          {isMenuOpen ? (
            <FaTimes
              className="icon__menu__handle"
              onClick={() => setIsMenuOpen((state) => !state)}
            />
          ) : (
            <FaBars
              className="icon__menu__handle"
              onClick={() => setIsMenuOpen((state) => !state)}
            />
          )}
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen ? "flex menu__list" : "md:flex hidden menu__list"
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu__item ${
              currentLink === item.link ? "font-semibold" : " font-normal "
            }`}
          >
            <Link
              href={item.link}
              className="menu__link"
              onClick={() => handleMenuAction(item.link)}
            >
              {item.label}
              {currentLink === item.link && <span className="underline"></span>}
            </Link>
          </li>
        ))}
        <div className="flex md:hidden icons">
          <div className="social__circle">
            <Link href="https://github.com/viniciustakedi" target="_blank">
              <FaGithubAlt className="icon" />
            </Link>
          </div>
          <div className="social__circle">
            <Link
              href="https://www.linkedin.com/in/vinicius-takedi/"
              target="_blank"
            >
              <FaLinkedin className="icon" />
            </Link>
          </div>
        </div>
      </ul>
      <div className="md:flex hidden icons">
        <div className="social__circle">
          <Link href="https://github.com/viniciustakedi" target="_blank">
            <FaGithubAlt className="icon" />
          </Link>
        </div>
        <div className="social__circle">
          <Link
            href="https://www.linkedin.com/in/vinicius-takedi/"
            target="_blank"
          >
            <FaLinkedin className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
