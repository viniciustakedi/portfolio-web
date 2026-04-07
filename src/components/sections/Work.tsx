"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp } from "@/lib/utils";

import { getJobs, IJobContent } from "@/requests/get";
import TextReveal from "@/components/ui/TextReveal";
import { LanguagesSupported } from "../../../config/i18n/languages-config";
import { StacksPng, StackKey } from "@/app/home/components/work/stacks";

function formatDateToMonthYear(dateString: string, lang: LanguagesSupported): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  let localeDateString = "en-US";
  if (lang === LanguagesSupported.pt) {
    localeDateString = "pt-BR";
  }
  return date.toLocaleDateString(localeDateString, options);
}

export default function Work() {
  const { i18n, t } = useTranslation("work");
  const currentLanguage = i18n.language as LanguagesSupported;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const {
    data: jobs,
    error,
    isLoading,
  } = useQuery<IJobContent[]>({
    queryKey: ["jobsContent"],
    queryFn: getJobs,
  });

  return (
    <section id="work" className="relative section-padding border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-20 flex-row sm:flex-col">
          <span className="text-accent font-display text-xl tracking-tighter">02</span>
          <div className="text-4xl md:text-6xl font-display uppercase tracking-tighter flex flex-row sm:flex-col gap-2">
            <TextReveal as="span">Selected</TextReveal> <span className="text-accent italic">Experience</span>
          </div>
        </div>

        {isLoading && (
          <div className="w-full flex flex-col gap-8 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-muted/10 border border-border/50 rounded-sm w-full" />
            ))}
          </div>
        )}

        {error && (
          <div className="w-full p-12 border border-destructive/50 text-destructive text-center">
            <p className="font-display text-xl">{t("job.error.loadingContentTitle")}</p>
            <p className="text-sm mt-2">{t("job.error.loadingContentDescription")}</p>
          </div>
        )}

        {jobs && jobs.length > 0 && (
          <div className="flex flex-col border-t border-border">
            {jobs.map((job, index) => {
              const isExpanded = expandedIndex === index;
              const startDate = formatDateToMonthYear(job.startDate, currentLanguage);
              const endDate = job.exitDate 
                ? formatDateToMonthYear(job.exitDate, currentLanguage) 
                : t("job.noneDateText");

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={index}
                  className={`group border-b border-border transition-colors duration-500 ${isExpanded ? 'bg-muted/5' : 'hover:bg-muted/5'}`}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full flex flex-col md:flex-row md:items-center justify-between py-8 px-4 md:px-8 text-left gap-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                      <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight group-hover:text-accent transition-colors">
                        {job.companyName}
                      </h3>
                      <span className="text-muted text-sm tracking-widest uppercase md:border-l md:border-border md:pl-8">
                        {job.title}
                      </span>
                    </div>
                    <div className="text-muted text-sm font-mono tracking-widest">
                      {startDate} — {endDate}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-8 pb-12 pt-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
                          {/* Image Column */}
                          <div className="col-span-1 lg:col-span-4">
                            <div className="relative aspect-video w-full border border-border overflow-hidden rounded-sm">
                              <Image
                                src={job.companyImageUrl}
                                alt={job.companyName}
                                fill
                                className="object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                                unoptimized
                              />
                            </div>
                          </div>

                          {/* Content Column */}
                          <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
                            <div
                              className="prose prose-invert prose-p:text-muted prose-p:leading-relaxed max-w-none text-base md:text-lg"
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(job.content[currentLanguage] || job.content.en),
                              }}
                            />

                            <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                              {job.stacks.map((stack) => (
                                <div key={stack} className="flex items-center gap-2 px-3 py-1.5 border border-border/50 rounded-full bg-background">
                                  <div className="relative w-4 h-4">
                                    <Image
                                      src={StacksPng[stack as StackKey]}
                                      alt={stack}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <span className="text-xs tracking-wider uppercase text-muted font-medium">{stack}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
