"use client";

import { useRouter } from "next/navigation";

const options = [
  { lang: "en" as const, name: "English", flag: "🇬🇧", hint: "Phrasal verbs & idioms" },
  { lang: "es" as const, name: "Español", flag: "🇪🇸", hint: "Falsos amigos & matices" },
];

export function LanguageSelector() {
  const router = useRouter();

  return (
    <div className="flash-lang-grid">
      {options.map((o) => (
        <button
          key={o.lang}
          type="button"
          className="flash-lang-card"
          onClick={() => router.push(`/flashcards/${o.lang}`)}
        >
          <div className="flash-lang-flag" aria-hidden>
            {o.flag}
          </div>
          <h2 className="flash-lang-name">{o.name}</h2>
          <p className="flash-lang-hint">{o.hint}</p>
        </button>
      ))}
    </div>
  );
}
