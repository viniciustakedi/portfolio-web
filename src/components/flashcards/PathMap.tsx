"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getFlashcardPaths } from "@/requests/get";
import type { IFlashcardPath } from "@/requests/get";
import {
  getPathProgress,
  isPathUnlocked,
  type LangKey,
  type PathKey,
} from "@/lib/flashcards-progress";

function pathKeyFromLevel(level: string): PathKey | null {
  if (level === "beginner" || level === "intermediate" || level === "advanced") {
    return level;
  }
  return null;
}

export function PathMap({ language }: { language: LangKey }) {
  const [paths, setPaths] = useState<IFlashcardPath[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [, bump] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getFlashcardPaths(language);
        if (!cancelled) setPaths(data);
      } catch (err) {
        console.error("Flashcard paths request failed:", err);
        if (!cancelled) {
          setError(
            "Could not load paths. In development the API defaults to http://localhost:8080 — make sure it is running and seeded, or set NEXT_PUBLIC_PORTFOLIO_API_URL."
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "flashcards_progress" || e.key === null) bump((n) => n + 1);
    };
    const onLocal = () => bump((n) => n + 1);
    window.addEventListener("storage", onStorage);
    window.addEventListener("flashcards-progress-updated", onLocal);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("flashcards-progress-updated", onLocal);
    };
  }, []);

  if (error) {
    return <p className="flash-sub">{error}</p>;
  }

  if (paths.length === 0) {
    return <p className="flash-sub">Loading map…</p>;
  }

  const sorted = [...paths].sort((a, b) => a.order - b.order);

  return (
    <div className="flash-map-wrap">
      <svg className="flash-map-svg" viewBox="0 0 48 320" preserveAspectRatio="none" aria-hidden>
        <path
          className="flash-map-path-line flash-map-path-active"
          d="M 24 8 C 38 48, 10 88, 24 128 C 38 168, 10 208, 24 248 C 38 288, 10 312, 24 312"
        />
      </svg>
      {sorted.map((p) => {
        const pk = pathKeyFromLevel(p.level);
        if (!pk) return null;
        const unlocked = isPathUnlocked(language, pk);
        const prog = getPathProgress(language, pk);
        const href = `/flashcards/${language}/${pk}`;
        const inner = (
          <>
            <div className="flash-node-icon">{p.icon}</div>
            <h2 className="flash-node-title">{p.title}</h2>
            <p className="flash-node-desc">{p.description}</p>
            <div className="flash-node-meta">
              {p.totalCards} cards
              {prog.known.length > 0 && ` · ${prog.known.length} known`}
            </div>
            {!unlocked && <div className="flash-node-lock">Locked — keep studying the previous path</div>}
          </>
        );
        return (
          <div key={p.id} className={`flash-node ${!unlocked ? "locked" : ""}`}>
            <div className="flash-node-dot" />
            {unlocked ? (
              <Link href={href} className="flash-node-card">
                {inner}
              </Link>
            ) : (
              <div className="flash-node-card">{inner}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
