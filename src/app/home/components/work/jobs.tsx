"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import DOMPurify from "isomorphic-dompurify";
import { FaSadTear } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Strong, Text, Title } from "@/components/text";
import { getJobs, IJobContent } from "@/requests/get";
import Tooltip from "@/components/tooltip";

import { LanguagesSupported } from "../../../../../config/i18n/languages-config";
import { StacksPng, StackKey } from "./stacks";

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
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const { i18n, t } = useTranslation("work");
  const currentLanguage = i18n.language;

  const {
    data: jobs,
    error,
    isLoading,
  } = useQuery<IJobContent[]>({
    queryKey: ["jobsContent"],
    queryFn: getJobs,
  });

  const jobContent = jobs?.[currentJob];

  React.useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentJob((prevJob) => (prevJob + 1) % (jobs?.length || 1));
    }, 30 * 1000);

    return () => clearInterval(timer);
  }, [isHovered, jobs]);

  if (isLoading) {
    return (
      <section id="jobs" className="jobs__content relative">
        <div className="flex flex-col gap-4 justify-start items-start w-full h-[50vh] border-2 border-[#3B82F6] rounded-xl py-10 px-10">
          <div className="animate-pulse flex flex-row gap-4 justify-between items-center w-full">
            <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="flex flex-row gap-4 justify-between items-start w-full pt-8">
            <div className="animate-pulse flex flex-row gap-4 justify-start items-start w-full h-full">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>
            <div className="animate-pulse flex flex-col gap-4 justify-start items-start w-full">
              <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
              <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
              <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
              <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
              <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!jobContent || !jobs || error) {
    return (
      <section id="jobs" className="jobs__content relative">
        <div className="flex flex-col gap-4 justify-center items-center w-full h-[50vh] border-2 border-[#3B82F6] rounded-xl py-10 px-10">
          <FaSadTear className="text-[#323232] text-6xl mb-5" />
          <Text>{t("job.error.loadingContentTitle")}</Text>
          <Text>{t("job.error.loadingContentDescription")}</Text>
        </div>
      </section>
    );
  }

  return (
    <section
      id="jobs"
      className="jobs__content relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="title__period__job">
        <div className="title__job">
          <Title>
            <Strong>{jobContent.companyName}</Strong>
          </Title>
          <Text className="absolute w-auto min-w-[10rem] md:top-11 top-8 left-0">
            {jobContent.title}
          </Text>
          <Text
            className={`absolute
              ${jobContent.companyName.length > 15 ? "md:top-12" : "md:top-16"}
              ${
                jobContent.companyName.length < 10
                  ? "left-0 min-w-[14rem]"
                  : "right-0"
              }
              top-12 flex xl:hidden`}
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
            src={jobContent.companyImageUrl}
            unoptimized
            alt={`image_about_company_${jobContent.companyName}`}
            className="job__photo"
            width={1200}
            height={1200}
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
                <Tooltip key={e} text={e}>
                  <Image
                    key={e}
                    src={StacksPng[e as StackKey]}
                    alt={`image__about__tech__${e}`}
                    className="job__stack__logo"
                  />
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div className="job__amount__reference">
        {jobs.map((e, i) => {
          return (
            <Link
              key={i}
              href="#jobs"
              className="menu__link"
              onClick={(event) => {
                event.preventDefault();
                const element = document.querySelector("#jobs");
                const offset = 100;

                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }

                setCurrentJob(i);
                setIsHovered(true);
              }}
            >
              <div className={currentJob === i ? "dot__active" : "dot"} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Jobs;
