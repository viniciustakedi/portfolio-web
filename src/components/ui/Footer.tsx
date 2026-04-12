"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Vinicius Takedi. All rights reserved.
        </p>
        <p className="text-muted text-xs tracking-widest uppercase">
          {t("centeredText", { defaultValue: "Crafted with intentionality" })}
        </p>
      </div>
    </footer>
  );
}
