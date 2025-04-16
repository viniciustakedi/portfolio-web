"use client";
import React from "react";
// import { useTranslation } from "react-i18next";
import { FaGithubAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
import { Text } from "../text";

import "./styles.css";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="footer">
      <div className="logo__footer">
        <h1 className="md:text-4xl text-2xl font-black text-[#323232]">
          TAKEDI
        </h1>
      </div>
      <Text className="text-center">{t("centeredText")}</Text>
      <div className="social__circles">
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
        <div className="social__circle">
          <Link href="https://www.instagram.com/7akedi" target="_blank">
            <FaInstagram className="icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
