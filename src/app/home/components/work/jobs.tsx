"use client";
import React from "react";
import Image from "next/image";
import { Strong, Text, Title } from "@/components/text";
import DOMPurify from "isomorphic-dompurify";

import Job0 from "../../../../assets/images/work/job0.jpg";

interface IJobContent {
  title: string;
  companyName: string;
  content: string;
  startDate: string;
  location: string;
  stacks: string[];
  exitDate?: string;
}

const jobsContent: IJobContent[] = [
  {
    title: "Software Engineer",
    companyName: "Idea Maker",
    content: `
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining <strong>essentially</strong> unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <br/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was <strong>popularised in the 1960s</strong> with the release of Letraset shdsa. survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
    `,
    startDate: "2024-05-07",
    location: "On-site",
    stacks: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Web Developer",
    companyName: "Digigrow",
    content: "Building responsive websites.",
    startDate: "2020-01-01",
    exitDate: "2021-01-01",
    location: "On-site",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
];

function formatDateToMonthYear(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return ""; // Handle invalid date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return date.toLocaleDateString("en-US", options);
}

const Jobs: React.FC = () => {
  const jobContent = jobsContent[0];

  return (
    <div className="jobs__content">
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
            {formatDateToMonthYear(jobContent.startDate)} -{" "}
            {jobContent.exitDate
              ? formatDateToMonthYear(jobContent.exitDate)
              : "Present"}
          </Text>
        </div>
        <div className="period__job">
          <Title className="font-light">
            {formatDateToMonthYear(jobContent.startDate)} -{" "}
            {jobContent.exitDate
              ? formatDateToMonthYear(jobContent.exitDate)
              : "Present"}
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
          <Text>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jobContent.content),
              }}
            />
          </Text>
          <div className="stacks"></div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
