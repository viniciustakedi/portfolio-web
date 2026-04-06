"use client";

import { useTranslation } from "react-i18next";
import TextReveal from "@/components/ui/TextReveal";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/lib/utils";

import ProfilePhoto from "@/assets/images/work/profile-photo.webp";

export default function Hero() {
  const { t } = useTranslation("work");

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-16">
      {/* Abstract Japanese-inspired circular accent (Sun motif, restrained) */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center h-full z-10">
        <div className="order-2 lg:order-1 col-span-1 lg:col-span-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
              className="text-accent font-medium tracking-widest uppercase text-sm"
            >
              {t("title.part6")} · {t("title.part8")}
            </motion.p>
          </div>

          <div className="mb-8">
            <h1 className="font-display leading-[0.85] tracking-tighter uppercase text-[15vw] md:text-[10vw] text-foreground">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="block"
                >
                  VINICIUS
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="block text-accent italic pr-4"
                >
                  TAKEDI
                </motion.span>
              </span>
            </h1>
          </div>

          <div className="max-w-xl">
            <TextReveal as="p" className="text-muted text-lg md:text-xl leading-relaxed font-light" delay={0.6}>
              {t("shortSummary")}
            </TextReveal>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-6"
          >
            <Link href="#work" className="group flex items-center gap-4 text-sm uppercase tracking-widest font-semibold pb-2 border-b border-border hover:border-accent transition-colors">
              <span>View Work</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right side portrait - heavily stylized, editorial crop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "grayscale(100%)" }}
          animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 col-span-1 lg:col-span-4 flex justify-center lg:justify-end relative w-full shrink-0"
        >
          <div className="relative w-full max-w-[min(100%,280px)] sm:max-w-[320px] lg:max-w-[400px] aspect-[3/4] overflow-hidden rounded-sm group">
            {/* Ink-like overlay blending */}
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply" />
            <div className="absolute inset-0 border border-border/50 z-20 m-4 pointer-events-none" />
            <Image
              src={ProfilePhoto}
              alt="Vinicius Takedi"
              className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
              fill
              priority
            />
            {/* Japanese vertical text motif (decorative, 'Software Engineer' / 'Creator') */}
            <div className="absolute left-6 bottom-8 z-20 opacity-50 mix-blend-difference hidden xl:block">
              <p className="writing-vertical-rl text-xs tracking-[0.3em] font-light text-foreground rotate-180">
                SOFTWARE ENGINEER
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4 text-xs font-light tracking-widest text-muted"
      >
        <span className="w-12 h-[1px] bg-muted/50 block" />
        SCROLL
      </motion.div>
    </section>
  );
}
