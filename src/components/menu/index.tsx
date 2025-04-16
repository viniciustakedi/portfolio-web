"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import {
  FaBars,
  FaCheck,
  FaGithubAlt,
  FaLanguage,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

import {
  LabelByLanguage,
  languagesMap,
  LanguagesSupported,
} from "../../../config/i18n/languages-config";

import "./styles.css";

interface MenuItem {
  label: string;
  link: string;
}

const Menu: React.FC = () => {
  const [currentLink, setCurrentLink] = React.useState<string>("#");
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const [isSwitcherOpen, setIsSwitcherOpen] = React.useState<boolean>(false);
  const switcherRef = React.useRef<HTMLDivElement | null>(null);

  const [currentLang, setCurrentLang] = React.useState<LanguagesSupported>(
    LanguagesSupported.en
  );

  React.useEffect(() => {
    const storedLang = localStorage.getItem(
      "preferredLanguage"
    ) as LanguagesSupported;

    if (storedLang && languagesMap.some((lang) => lang.value === storedLang)) {
      setCurrentLang(storedLang);
    }
  }, []);

  const { i18n, t } = useTranslation("menu");

  const handleLanguageChange = (lng: LanguagesSupported) => {
    i18n.changeLanguage(lng);

    setIsSwitcherOpen(false);
    setCurrentLang(lng);

    localStorage.setItem("preferredLanguage", lng);
  };

  React.useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
      isSwitcherOpen &&
      switcherRef.current &&
      !switcherRef.current.contains(e.target as Node)
      ) {
      setIsSwitcherOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSwitcherOpen]);

  const menuItems: MenuItem[] = [
    { label: t("nav_option_one"), link: "#work" },
    { label: t("nav_option_two"), link: "#about" },
    { label: t("nav_option_three"), link: "#contact" },
  ];

  const handleMenuAction = (link: string) => {
    setIsMenuOpen((state) => !state);
    setCurrentLink(link);
  };

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
              onClick={(event) => {
                event.preventDefault();
                handleMenuAction(item.link);
              }}
            >
              {item.label}
              {currentLink === item.link && <span className="underline"></span>}
            </Link>
          </li>
        ))}
        <div className="flex md:hidden icons">
          <div
            className="social__circle relative"
            onClick={() => setIsSwitcherOpen((state) => !state)}
          >
            <FaLanguage className="icon" />
            {isSwitcherOpen && (
              <div className="switcher">
                {languagesMap.map(
                  (e: {
                    value: LanguagesSupported;
                    label: LabelByLanguage;
                  }) => {
                    return (
                      <p
                        key={e.value}
                        className="swicher__option"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleLanguageChange(e.value);
                        }}
                      >
                        {e.label}
                        {currentLang === e.value && (
                          <FaCheck className="icon__lang__option" />
                        )}
                      </p>
                    );
                  }
                )}
              </div>
            )}
          </div>
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
        <div
          className="social__circle relative"
          onClick={() => setIsSwitcherOpen((state) => !state)}
        >
          <FaLanguage className="icon" />
          {isSwitcherOpen && (
            <div className="switcher" ref={switcherRef}>
              {languagesMap.map(
                (e: { value: LanguagesSupported; label: LabelByLanguage }) => {
                  return (
                    <p
                      key={e.value}
                      className="swicher__option"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleLanguageChange(e.value);
                      }}
                    >
                      {e.label}
                      {currentLang === e.value && (
                        <FaCheck className="icon__lang__option" />
                      )}
                    </p>
                  );
                }
              )}
            </div>
          )}
        </div>
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
