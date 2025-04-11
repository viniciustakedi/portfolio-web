"use client";
import { Strong, Title } from "@/components/text";
import React from "react";
import Image from "next/image";
import MemojiTitle from "@/assets/images/contact-me/memoji.png";

import { Input, TextArea } from "@/components/input";
import Button from "@/components/button";
import BlurBg from "@/components/blur-bg";
import { Resolver, useForm } from "react-hook-form";
import "./styles.css";

type ContactMeFormValues = {
  email: string;
  name: string;
  message: string;
};

const resolver: Resolver<ContactMeFormValues> = async (values) => {
  const errors: Record<string, { type: string; message: string }> = {};

  if (!values.email) {
    errors.email = {
      type: "required",
      message: "Email is required.",
    };
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = {
      type: "pattern",
      message: "Invalid email format.",
    };
  }

  if (!values.name) {
    errors.name = {
      type: "required",
      message: "Name is required.",
    };
  }

  if (!values.message) {
    errors.message = {
      type: "required",
      message: "Message is required.",
    };
  } else if (values.message.length < 10) {
    errors.message = {
      type: "minLength",
      message: "Message must be at least 10 characters long.",
    };
  }

  if (!values.name) {
    errors.name = {
      type: "required",
      message: "Name is required.",
    };
  }

  if (!values.message) {
    errors.message = {
      type: "required",
      message: "Message is required.",
    };
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};

const ContactMe: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactMeFormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

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
      <form action="post" onSubmit={onSubmit} className="form__contact__me">
        <Input
          width="md:w-1/2 w-full"
          type="email"
          placeholder="Your best email"
          variant="outline"
          {...register("email")}
        />
        {errors?.email && (
          <p className="error__message">{errors.email.message}</p>
        )}
        <Input
          width="md:w-1/2 w-full"
          type="text"
          placeholder="Your name"
          variant="outline"
          {...register("name")}
        />
        {errors?.name && (
          <p className="error__message">{errors.name.message}</p>
        )}
        <TextArea
          width="md:w-1/2 w-full"
          type="textArea"
          placeholder="Your message..."
          variant="outline"
          {...register("message")}
        />
        {errors?.message && (
          <p className="error__message">{errors.message.message}</p>
        )}
        <Button
          variant="filled"
          width="md:w-1/2 w-full"
        >
          Send!
        </Button>
      </form>
      <BlurBg bottom="bottom-0" left="left-0" />
      <BlurBg bottom="bottom-1/12" left="left-11/12" />
    </section>
  );
};

export default ContactMe;
