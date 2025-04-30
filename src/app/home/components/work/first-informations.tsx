"use client";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Title, Strong, Text } from "@/components/text";
import Button from "@/components/button";

import ProfilePhoto from "../../../../assets/images/work/profile-photo.webp";
import "./styles.css";
import BlurBg from "@/components/blur-bg";
import Tooltip from "@/components/tooltip";

const FirstInformations: React.FC = () => {
  const { t } = useTranslation("work");

  return (
    <div className="first__content relative">
      <div className="main__content z-10">
        <div className="lg:block lg:title hidden">
          <Title className="font-extralight">{t("title.part1")}</Title>
          <Title className="font-extralight">
            {t("title.part2")} <Strong>{t("title.part3")}</Strong>
            {t("title.part4")}
          </Title>
          <Title className="font-extralight">
            {t("title.part5")} <Strong>{t("title.part6")}</Strong>
          </Title>
          <Title className="font-extralight">
            {t("title.part7")} <Strong>{t("title.part8")}</Strong>
          </Title>
        </div>
        <div className="lg:hidden title__mobile">
          <Title className="font-extralight text-center">
            {t("title.part1")}
          </Title>
          <Title className="font-extralight text-center">
            {t("title.part2")}
            <Strong>{t("title.part3")}</Strong>
            {t("title.part4")} {t("title.part5")}
            <Strong>{t("title.part6")}</Strong> {t("title.part7")}
            <Strong>{t("title.part8")}</Strong>
          </Title>
        </div>
        <div className="short__summary">
          <Text className="lg:text-left text-center">{t("shortSummary")}</Text>
        </div>
        <div className="contact__options">
          <div className="button__contact">
            <Link href="#contact">
              <Button variant="outline" width="w-full">
                {t("contactButtonLabel")}
              </Button>
            </Link>
          </div>
          <div className="social__medias__icons">
            <Tooltip text={t("iconsTooltip.github")}>
              <div className="social__circle">
                <Link href="https://github.com/viniciustakedi" target="_blank">
                  <FaGithubAlt className="icon" />
                </Link>
              </div>
            </Tooltip>
            <Tooltip text={t("iconsTooltip.linkedin")}>
              <div className="social__circle">
                <Link
                  href="https://www.linkedin.com/in/vinicius-takedi/"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </Link>
              </div>
            </Tooltip>
            {/* <Tooltip text={t("iconsTooltip.instagram")}>
              <div className="social__circle">
                <Link href="https://www.instagram.com/7akedi" target="_blank">
                  <FaInstagram className="icon" />
                </Link>
              </div>
            </Tooltip> */}
          </div>
        </div>
      </div>
      <div className="photo z-10 left">
        <Image
          src={ProfilePhoto}
          alt="Vinicius Takedi"
          className="photo__circle"
        />
      </div>
      <BlurBg bottom="bottom-4/6" left="left-11/12" />
      <BlurBg top="top-2/6" right="right-full" />
      <BlurBg top="top-5/6" left="left-4/6" />
    </div>
  );
};

export default FirstInformations;
