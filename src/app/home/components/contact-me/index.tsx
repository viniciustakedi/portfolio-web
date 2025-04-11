"use client";
import { Strong, Title } from "@/components/text";
import React from "react";
import Image from "next/image";
import MemojiTitle from "@/assets/images/contact-me/memoji.png";

import "./styles.css";
import Input from "@/components/input";
import Button from "@/components/button";
import BlurBg from "@/components/blur-bg";

const ContactMe: React.FC = () => {
  // TO-DO: Add form validator

  return (
    <section
      id="contact"
      className="contact__me__section padding__global pb-20 relative"
    >
      <div className="title__contact__me">
        <Title className="font-extralight text-center z-10">
          <Strong>Contact</Strong> me!
        </Title>
        <Image
          src={MemojiTitle}
          alt="memoji__takedi"
          className="memoji__title__contact__me"
        />
      </div>
      <form action="post" className="form__contact__me">
        <Input
          width="md:w-1/2 w-full"
          type="email"
          placeholder="Your best email"
          variant="outline"
        />
        <Input
          width="md:w-1/2 w-full"
          type="text"
          placeholder="Your name"
          variant="outline"
        />
        <Input
          width="md:w-1/2 w-full"
          type="textArea"
          placeholder="Your message..."
          variant="outline"
        />
        <Button variant="filled" width="md:w-1/2 w-full">
          Send!
        </Button>
      </form>
      <BlurBg bottom="bottom-0" left="left-0" />
      <BlurBg bottom="bottom-1/12" left="left-11/12" />
    </section>
  );
};

export default ContactMe;
