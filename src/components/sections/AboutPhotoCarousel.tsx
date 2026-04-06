"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { aboutLifePhotos } from "@/assets/images/about/life-photos";

const CAROUSEL_INTERVAL_MS = 7000;

export function AboutPhotoCarousel({ className }: { className?: string }) {
  const { t } = useTranslation("about");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (aboutLifePhotos.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % aboutLifePhotos.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={`select-none ${className ?? ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={t("carousel.label")}
      aria-live="polite"
    >
      <div className="relative flex-1 min-h-0 overflow-hidden bg-muted/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            <Image
              src={aboutLifePhotos[index]!}
              alt={t("carousel.photoAlt", { n: index + 1, total: aboutLifePhotos.length })}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="object-cover grayscale-[25%] hover:grayscale-0 transition-[filter] duration-700 ease-out select-none [-webkit-user-drag:none] [user-drag:none]"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {aboutLifePhotos.length > 1 && (
        <div className="flex justify-center gap-1.5 pt-3 shrink-0" aria-hidden>
          {aboutLifePhotos.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-accent" : "w-1.5 bg-muted-foreground/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
