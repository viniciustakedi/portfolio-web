"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import ContactFormModal from "@/components/contact/ContactFormModal";

export default function Contact() {
  const { t } = useTranslation("contactMe");
  const [formOpen, setFormOpen] = React.useState(false);

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-24 py-32 md:py-48 border-t border-border overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
    >
      {/* Background elegant noise/circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      <div className="text-center w-full max-w-4xl z-10">
        <TextReveal
          as="h2"
          className="text-sm font-medium tracking-[0.3em] text-accent uppercase mb-8"
        >
          {`${t("title.part1")} ${t("title.part2")}`}
        </TextReveal>

        <button
          type="button"
          onClick={() => setFormOpen(true)}
          className="block w-full text-[8vw] md:text-[6vw] font-display leading-none tracking-tighter hover:text-accent transition-colors duration-500 mb-16 uppercase cursor-pointer bg-transparent border-none text-foreground"
        >
          <span className="italic pr-4">Let&apos;s</span> Build
        </button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <MagneticButton>
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors duration-500 bg-transparent text-foreground cursor-pointer"
            >
              <span className="text-sm tracking-widest uppercase font-medium group-hover:text-accent transition-colors">
                Email
              </span>
            </button>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="https://www.linkedin.com/in/viniciustakedi/"
              target="_blank"
              className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors duration-500"
            >
              <span className="text-sm tracking-widest uppercase font-medium group-hover:text-accent transition-colors">
                LinkedIn
              </span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="https://github.com/viniciustakedi"
              target="_blank"
              className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors duration-500"
            >
              <span className="text-sm tracking-widest uppercase font-medium group-hover:text-accent transition-colors">
                GitHub
              </span>
            </Link>
          </MagneticButton>
        </div>
      </div>

      <ContactFormModal open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
}
