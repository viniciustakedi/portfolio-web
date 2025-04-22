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
import { useTranslation } from "react-i18next";
import { sendPortfolioMessage } from "@/requests/post";
import { useSnackbar } from "notistack";

type ContactMeFormValues = {
  email: string;
  name: string;
  message: string;
};

const ContactMe: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [emailWasSent, setEmailWasSent] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const { t } = useTranslation("contactMe");

  const resolver: Resolver<ContactMeFormValues> = async (values) => {
    const errors: Record<string, { type: string; message: string }> = {};

    if (!values.email) {
      errors.email = {
        type: "required",
        message: t("form.input.email.errors.required"),
      };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = {
        type: "pattern",
        message: t("form.input.email.errors.invalidFormat"),
      };
    }

    if (!values.name) {
      errors.name = {
        type: "required",
        message: t("form.input.name.errors.required"),
      };
    }

    if (!values.message) {
      errors.message = {
        type: "required",
        message: t("form.input.message.errors.required"),
      };
    } else if (values.message.length < 10) {
      errors.message = {
        type: "minLength",
        message: t("form.input.message.errors.minLength"),
      };
    }

    return {
      values: Object.keys(errors).length === 0 ? values : {},
      errors,
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactMeFormValues>({ resolver });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    const response = await sendPortfolioMessage(data);
    enqueueSnackbar(response);

    setEmailWasSent(true);
    setIsLoading(false);
  });

  return (
    <section
      id="contact"
      className="contact__me__section padding__global pb-20 relative"
    >
      <div className="title__contact__me">
        <Title className="font-extralight text-center z-10">
          <Strong>{t("title.part1")}</Strong>
          {t("title.part2")}
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
          placeholder={t("form.input.email.placeholder")}
          variant="outline"
          {...register("email")}
        />
        {errors?.email && (
          <p className="error__message">{errors.email.message}</p>
        )}
        <Input
          width="md:w-1/2 w-full"
          type="text"
          placeholder={t("form.input.name.placeholder")}
          variant="outline"
          {...register("name")}
        />
        {errors?.name && (
          <p className="error__message">{errors.name.message}</p>
        )}
        <TextArea
          width="md:w-1/2 w-full"
          placeholder={t("form.input.message.placeholder")}
          variant="outline"
          {...register("message")}
        />
        {errors?.message && (
          <p className="error__message">{errors.message.message}</p>
        )}
        <Button
          variant="filled"
          width="md:w-1/2 w-full"
          disabled={isLoading || emailWasSent}
        >
          {!isLoading && !emailWasSent ? (
            t("form.input.submitButton.text")
          ) : emailWasSent ? (
            t("form.input.submitButton.success")
          ) : (
            <span className="spinner mr-2 text-white">
              {t("form.input.submitButton.loading")}
            </span>
          )}
        </Button>
      </form>
      <BlurBg bottom="bottom-0" left="left-0" />
      <BlurBg bottom="bottom-1/12" left="left-11/12" />
    </section>
  );
};

export default ContactMe;
