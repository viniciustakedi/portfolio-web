"use client";
import { FaGithubAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Title, Strong, Text } from "@/components/text";
import Button from "@/components/button";

import ProfilePhoto from "../../../../assets/images/work/profile-photo.jpg";

import "./styles.css";

const Work: React.FC = () => {
  const { t } = useTranslation("work");

  return (
    <section id="#" className="work__section padding__global">
      <div className="first__content">
        <div className="main__content">
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
            <Text className="lg:text-left text-center">
              {t("shortSummary")}
            </Text>
          </div>
          <div className="contact__options">
            <div className="button__contact">
              <Button variant="outline" width="w-full">
                Contact Me
              </Button>
            </div>
            <div className="social__medias__icons">
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
          </div>
        </div>
        <div className="photo">
          <Image
            src={ProfilePhoto}
            alt="Vinicius Takedi"
            className="photo__circle"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
