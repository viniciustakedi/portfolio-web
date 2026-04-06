"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, ChevronRight, Lock } from "lucide-react";
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
    return <p className="flash-sub">Loading your path…</p>;
  }

  const sorted = [...paths].sort((a, b) => a.order - b.order);
  const lastIndex = sorted.length - 1;

  return (
    <div className="flash-path" role="list" aria-label="Learning path units">
      <p className="flash-path-intro">Tap a unit to study. Complete earlier units to unlock the next.</p>
      {sorted.map((p, index) => {
        const pk = pathKeyFromLevel(p.level);
        if (!pk) return null;
        const unlocked = isPathUnlocked(language, pk);
        const prog = getPathProgress(language, pk);
        const href = `/flashcards/${language}/${pk}`;
        const total = Math.max(1, p.totalCards);
        const knownCount = prog.known.length;
        const pct = Math.min(100, (knownCount / total) * 100);
        const isComplete = knownCount >= total && total > 0;

        const panel = (
          <div className="flash-path-panel-main">
            <div className="flash-path-panel-top">
              <span className="flash-path-panel-label">
                {pk.charAt(0).toUpperCase() + pk.slice(1)} level
              </span>
              <h2 className="flash-path-panel-title">{p.title}</h2>
              <p className="flash-path-panel-desc">{p.description}</p>
            </div>
            {unlocked ? (
              <div className="flash-path-panel-foot">
                <div className="flash-path-panel-progress">
                  <div className="flash-path-panel-progress-label">
                    {isComplete ? (
                      <span className="flash-path-done">
                        <CheckCircle2 size={15} strokeWidth={2.25} aria-hidden />
                        Completed
                      </span>
                    ) : (
                      <>
                        <span>{knownCount}</span>
                        <span className="flash-path-panel-progress-of"> / {p.totalCards} known</span>
                      </>
                    )}
                  </div>
                  <div className="flash-path-panel-bar" role="presentation">
                    <div className="flash-path-panel-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <span className="flash-path-panel-cta">
                  {isComplete ? "Review" : knownCount > 0 ? "Continue" : "Start"}
                  <ChevronRight size={18} strokeWidth={2.25} aria-hidden />
                </span>
              </div>
            ) : (
              <div className="flash-path-panel-foot flash-path-panel-foot-locked">
                <Lock size={16} strokeWidth={2.25} aria-hidden />
                <span>Finish the previous unit to unlock</span>
              </div>
            )}
          </div>
        );

        return (
          <div key={p.id} className="flash-path-unit" role="listitem">
            <div className="flash-path-rail" aria-hidden>
              {index > 0 && <div className="flash-path-rail-line flash-path-rail-line--up" />}
              <div className={`flash-path-bubble ${unlocked ? "is-unlocked" : "is-locked"}`}>
                <span className="flash-path-bubble-emoji">{p.icon}</span>
                {!unlocked && (
                  <span className="flash-path-bubble-lock">
                    <Lock size={14} strokeWidth={2.5} aria-hidden />
                  </span>
                )}
              </div>
              {index < lastIndex && <div className="flash-path-rail-line flash-path-rail-line--down" />}
            </div>
            {unlocked ? (
              <Link href={href} className="flash-path-panel">
                {panel}
              </Link>
            ) : (
              <div className="flash-path-panel flash-path-panel--disabled">{panel}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
