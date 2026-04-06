"use client";

import { useTranslation } from "react-i18next";
import TextReveal from "@/components/ui/TextReveal";
import DOMPurify from "isomorphic-dompurify";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/utils";
import { AboutPhotoCarousel } from "@/components/sections/AboutPhotoCarousel";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <section id="about" className="relative section-padding border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-24">
          <span className="text-accent font-display text-xl tracking-tighter">01</span>
          <div className="text-4xl md:text-6xl font-display uppercase tracking-tighter flex gap-2">
            <TextReveal as="span">{t("title.part1")}</TextReveal> <span className="text-accent italic">{t("title.part2")}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-24">
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:flex-1 lg:min-w-0 flex flex-col order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:flex-1 lg:min-h-[22rem] min-h-0">
              <AboutPhotoCarousel className="absolute inset-0 flex flex-col p-3 sm:p-4 border border-border/50 bg-background/40 backdrop-blur-[2px]" />
            </div>
          </motion.aside>

          <div className="lg:flex-1 lg:min-w-0 flex flex-col justify-center space-y-12 order-1 lg:order-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="prose prose-invert prose-p:text-lg prose-p:text-muted prose-p:leading-relaxed prose-strong:text-foreground prose-strong:font-medium max-w-none"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(t("textOne.partOne") + " " + t("textOne.partTwo")),
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(t("textTwo")),
                }}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="pl-8 border-l-2 border-accent/30 py-2"
            >
              <div
                className="text-xl font-display italic text-foreground mb-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(t("textThree")),
                }}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="prose prose-invert prose-p:text-lg prose-p:text-muted prose-p:leading-relaxed prose-strong:text-foreground prose-strong:font-medium max-w-none"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(t("textFour")),
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(t("textFive")),
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
