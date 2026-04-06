"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaGithubAlt } from "react-icons/fa";

import {
  LabelByLanguage,
  languagesMap,
  LanguagesSupported,
} from "../../../config/i18n/languages-config";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguagesSupported>(LanguagesSupported.en);
  const { i18n } = useTranslation("menu");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage") as LanguagesSupported;
    if (storedLang && languagesMap.some((lang) => lang.value === storedLang)) {
      setCurrentLang(storedLang);
    }
  }, []);

  const handleLanguageChange = (lng: LanguagesSupported) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    localStorage.setItem("preferredLanguage", lng);
    setLangMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="group">
          <span className="font-display font-bold text-2xl tracking-tighter group-hover:text-accent transition-colors">
            TAKEDI.
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="#work" className="hover:text-accent transition-colors">Work</Link></li>
            <li><Link href="#tools" className="hover:text-accent transition-colors">Lab</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            <ThemeToggle />
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="hover:text-accent transition-colors flex items-center justify-center w-8 h-8 rounded-full"
                aria-label="Change Language"
              >
                <span className="font-bold text-sm uppercase">{currentLang}</span>
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-background border border-border rounded-md shadow-lg overflow-hidden flex flex-col z-50">
                  {languagesMap.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => handleLanguageChange(lang.value)}
                      className="px-4 py-2 text-sm text-left hover:bg-muted/20 hover:text-accent transition-colors flex items-center justify-between"
                    >
                      {lang.label}
                      {currentLang === lang.value && <span className="w-2 h-2 rounded-full bg-accent"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="https://github.com/viniciustakedi" target="_blank" className="hover:text-accent transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7.1a5.8 5.8 0 0 0-1.7-3.8 5.4 5.4 0 0 0-.1-3.7s-1.4-.4-4.5 1.7a14.7 14.7 0 0 0-8 0c-3.1-2.1-4.5-1.7-4.5-1.7a5.4 5.4 0 0 0-.1 3.8 5.8 5.8 0 0 0-1.7 3.8c0 5.7 3.36 6.75 6.5 7.1a4.8 4.8 0 0 0-1 3.02v4"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/viniciustakedi/" target="_blank" className="hover:text-accent transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
