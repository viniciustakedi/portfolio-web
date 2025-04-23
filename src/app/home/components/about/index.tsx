"use client";
import { useTranslation } from "react-i18next";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";

import { Strong, Title, Text } from "@/components/text";
import BlurBg from "@/components/blur-bg";

import MemojiTitle from "@/assets/images/about/memoji.png";
import ImageOne from "@/assets/images/about/about-me-one.png";
import ImageTwo from "@/assets/images/about/about-me-two.png";
import ImageThree from "@/assets/images/about/about-me-three.png";
import ImageFour from "@/assets/images/about/about-me-four.png";
import ImageFive from "@/assets/images/about/about-me-five.png";

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
      <div className="about__images">
        {/* Image 1 */}
        <div className="image__1">
          <div className="text__about_1">
            <div
              className="text text__about__tag"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t("textOne.partOne")),
              }}
            />
            <div
              className="text text__about__tag mt-5 md:flex hidden justify-end items-end"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t("textOne.partTwo")),
              }}
            />
          </div>
          <Image src={ImageOne} alt="image__1" className="about__image__1" />
          <div
            className="text text__about__tag flex md:hidden w-full justify-end items-end"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(t("textOne.partTwo")),
            }}
          />
        </div>

        {/* Image 2 */}
        <div className="image__2 md:mt-0 mt-10">
          <div className="text__about_2">
            <div
              className="text text__about__tag md:text-left text-center"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t("textTwo")),
              }}
            />
          </div>
          <Image src={ImageTwo} alt="image__2" className="about__image__2" />
        </div>

        {/* Image 3 */}
        <div className="image__3">
          <div className="text__about_3">
            <div
              className="text text__about__tag text-center"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t("textThree")),
              }}
            />
          </div>
          <Image src={ImageThree} alt="image__3" className="about__image__3" />
        </div>

        {/* Image 4 */}
        <div className="image__4 md:mt-0 mt-10">
          <div className="text__about_4">
            <div
              className="text text__about__tag md:text-left text-center"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t("textFour")),
              }}
            />
          </div>
          <Image src={ImageFour} alt="image__2" className="about__image__4" />
        </div>

        {/* Image 5 */}
        <div className="image__5">
          <div className="text__about_5">
            <div
              className="text text__about__tag text-center"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t("textFive")),
              }}
            />
          </div>
          <Image src={ImageFive} alt="image__5" className="about__image__5" />
        </div>
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
