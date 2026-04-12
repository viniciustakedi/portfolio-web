"use client";

import Link from "next/link";
import { motion } from "motion/react";
import TextReveal from "@/components/ui/TextReveal";
import { fadeUp } from "@/lib/utils";

const tools = [
  {
    name: "Pomodoro",
    description: "A minimal, focused timer to maximize productivity and manage work intervals.",
    href: "/pomodoro",
    tags: ["Utility", "Focus"],
  },
  {
    name: "Shorten URL",
    description: "A fast, reliable URL shortener service built for quick sharing.",
    href: "/shorten-url",
    tags: ["Utility", "Network"],
  },
  {
    name: "Flashcards",
    description: "Language journal with tactile cards, paths, and local progress — English & Spanish.",
    href: "/flashcards",
    tags: ["Learning", "Language"],
  },
];

export default function Lab() {
  return (
    <section id="tools" className="relative section-padding border-t border-border bg-muted/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-20">
          <span className="text-accent font-display text-xl tracking-tighter">03</span>
          <div className="text-4xl md:text-6xl font-display uppercase tracking-tighter flex gap-2">
            <TextReveal as="span">The</TextReveal> <span className="text-accent italic">Lab</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
            >
              <Link href={tool.href} className="group block h-full p-8 md:p-12 border border-border bg-background hover:bg-muted/5 transition-colors duration-500 relative overflow-hidden">
                {/* Decorative Japanese-inspired lines */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent/20 group-hover:border-accent/50 transition-colors duration-500 m-4" />
                
                <div className="flex flex-col h-full justify-between gap-12 relative z-10">
                  <div>
                    <h3 className="text-3xl font-display uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-muted leading-relaxed font-light">
                      {tool.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-3">
                      {tool.tags.map(tag => (
                        <span key={tag} className="text-xs uppercase tracking-widest text-muted border border-border px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-accent font-light opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
