"use client";

import { useTranslation } from "react-i18next";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";

import { Strong, Text, Title } from "@/components/text";
import { getJobs, IJobContent } from "@/requests/get";
import { useQuery } from "@tanstack/react-query";
import BlurBg from "@/components/blur-bg";

import { StacksPng, StackKey } from "./stacks";
import Job0 from "../../../../assets/images/work/job0.jpg";
import { LanguagesSupported } from "../../../../../config/i18n/languages-config";

function formatDateToMonthYear(
  dateString: string,
  lang: LanguagesSupported
): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  let localeDateString = "en-US";

  if (lang === LanguagesSupported.pt) {
    localeDateString = "pt-BR";
  }

  return date.toLocaleDateString(localeDateString, options);
}

const Jobs: React.FC = () => {
  const [currentJob, setCurrentJob] = React.useState<number>(0);

  const { i18n, t } = useTranslation("work");
  const currentLanguage = i18n.language;

  const {
    data: jobs,
    // isLoading,
    error,
  } = useQuery<IJobContent[]>({ queryKey: ["jobsContent"], queryFn: getJobs });

  const jobContent = jobs?.[currentJob];

  if (error) return <div>Error loading jobs content</div>;
  if (!jobContent || !jobs) {
    return <></>;
  }

  return (
    <div className="jobs__content relative">
      <div className="title__period__job">
        <div className="title__job">
          <Title>
            <Strong>{jobContent.companyName}</Strong>
          </Title>
          <Text className="absolute md:top-11 top-8 left-0">
            {jobContent.title}
          </Text>
          <Text
            className={`absolute ${
              jobContent.companyName.length > 15 ? "md:top-12" : "md:top-16"
            } top-12 right-0 flex xl:hidden`}
          >
            {" "}
            {formatDateToMonthYear(
              jobContent.startDate,
              currentLanguage as LanguagesSupported
            )}{" "}
            -{" "}
            {jobContent.exitDate
              ? formatDateToMonthYear(
                  jobContent.exitDate,
                  currentLanguage as LanguagesSupported
                )
              : t("job.noneDateText")}
          </Text>
        </div>
        <div className="period__job">
          <Title className="font-light">
            {formatDateToMonthYear(
              jobContent.startDate,
              currentLanguage as LanguagesSupported
            )}{" "}
            -{" "}
            {jobContent.exitDate
              ? formatDateToMonthYear(
                  jobContent.exitDate,
                  currentLanguage as LanguagesSupported
                )
              : t("job.noneDateText")}
          </Title>
        </div>
      </div>
      <div className="job__infomation">
        <div className="job__image">
          <Image
            src={Job0}
            alt={`image_about_company_${jobContent.companyName}`}
            className="job__photo"
          />
        </div>
        <div className="job__information__content">
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                jobContent.content[currentLanguage as LanguagesSupported]
              ),
            }}
          />
          <div className="stacks">
            {jobContent.stacks.map((e) => {
              return (
                <Image
                  key={e}
                  src={StacksPng[e as StackKey]}
                  alt={`image__about__tech__${e}`}
                  className="job__stack__logo"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="job__amount__reference">
        {jobs.map((e, i) => {
          return (
            <div
              key={i}
              className={currentJob === i ? "dot__active" : "dot"}
              onClick={() => setCurrentJob(i)}
            />
          );
        })}
      </div>
      <BlurBg bottom="bottom-0" left="left-1/2" />
    </div>
  );
};

export default Jobs;
