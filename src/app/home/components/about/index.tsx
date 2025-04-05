"use client";
import { Strong, Title } from "@/components/text";
import React from "react";
import Image from "next/image";
import MemojiTitle from "@/assets/images/about/memoji.png";
import "./styles.css";

const About: React.FC = () => {
  return (
    <section id="#about" className="about__section padding__global pb-20">
      <div className="title__who__is">
        <Title className="font-extralight text-center z-10">
          <Strong>Who</Strong> is Vinicius Takedi<Strong>?</Strong>
        </Title>
        <Image
          src={MemojiTitle}
          alt="memoji__takedi"
          className="memoji__title__about"
        />
      </div>
    </section>
  );
};

export default About;
