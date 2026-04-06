"use client";
import { useTranslation } from "react-i18next";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";

import { Strong, Title } from "@/components/text";
import BlurBg from "@/components/blur-bg";
import { AboutPhotoCarousel } from "@/components/sections/AboutPhotoCarousel";

import MemojiTitle from "@/assets/images/about/memoji.png";

import "./styles.css";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <section id="about" className="about__section padding__global">
      <div className="title__who__is">
        <Title className="font-extralight text-center z-10">
          <Strong>{t("title.part1")}</Strong>
          {t("title.part2")}
          <Strong>{t("title.part3")}</Strong>
        </Title>
        <Image
          src={MemojiTitle}
          alt="memoji__takedi"
          className="memoji__title__about"
        />
      </div>
      <div className="about__images w-full max-w-3xl mx-auto gap-12 flex flex-col">
        <div className="relative w-full aspect-[4/5] max-h-[min(70vh,32rem)] mx-auto">
          <AboutPhotoCarousel className="absolute inset-0 flex flex-col p-3 border border-border/50 bg-background/40" />
        </div>

        <div className="text__about_1 w-full">
          <div
            className="text text__about__tag"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(t("textOne.partOne")),
            }}
          />
          <div
            className="text text__about__tag mt-5"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(t("textOne.partTwo")),
            }}
          />
        </div>

        <div
          className="text text__about__tag"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(t("textTwo")),
          }}
        />

        <div
          className="text text__about__tag text-center"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(t("textThree")),
          }}
        />

        <div
          className="text text__about__tag"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(t("textFour")),
          }}
        />

        <div
          className="text text__about__tag text-center"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(t("textFive")),
          }}
        />
      </div>
      <BlurBg bottom="bottom-0" left="left-9/12" />
      <BlurBg bottom="bottom-2/12" left="left-7/12" />
      <BlurBg top="top-5/12" left="left-1/12" />
      <BlurBg top="top-3/12" left="left-4/6" />
      <BlurBg top="top-20" left="left-1/6" />
    </section>
  );
};

export default About;
