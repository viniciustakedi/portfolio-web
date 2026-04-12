"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children, as: Tag = "h2", className = "", delay = 0
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll(".word");

    gsap.fromTo(words,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.06,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  const wrappedWords = children.split(" ").map((word, i) => (
    <span key={i} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}>
      <span className="word" style={{ display: "inline-block" }}>{word}</span>
    </span>
  ));

  return <Tag ref={ref as any} className={className}>{wrappedWords}</Tag>;
}
