"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { getFlashcards, type IFlashcard } from "@/requests/get";
import {
  getPathProgress,
  isPathUnlocked,
  mergePathProgress,
  type LangKey,
  type PathKey,
} from "@/lib/flashcards-progress";
import { FlashCard } from "./FlashCard";
import { ProgressBar } from "./ProgressBar";

export function CardSession({ language, path }: { language: LangKey; path: PathKey }) {
  const [cards, setCards] = useState<IFlashcard[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [sessionKnown, setSessionKnown] = useState<string[]>([]);
  const [sessionSeen, setSessionSeen] = useState<string[]>([]);
  const knownRef = useRef<string[]>([]);
  const seenRef = useRef<string[]>([]);
  const [gate, setGate] = useState<"check" | "ok" | "locked">("check");

  useEffect(() => {
    setGate(isPathUnlocked(language, path) ? "ok" : "locked");
  }, [language, path]);

  useEffect(() => {
    knownRef.current = sessionKnown;
    seenRef.current = sessionSeen;
  }, [sessionKnown, sessionSeen]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await getFlashcards({ language, path, limit: 100, skip: 0 });
        if (cancelled) return;
        setCards(res.cards);
      } catch {
        if (!cancelled) setLoadError("Could not load cards. Is the API running?");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [language, path]);

  const total = cards.length;
  const current = cards[index];
  const progressVal = total === 0 ? 0 : index;

  const advance = useCallback(
    (knownAdd: string[], seenAdd: string[]) => {
      const nextK = knownAdd.length ? [...knownRef.current, ...knownAdd] : [...knownRef.current];
      const nextS = seenAdd.length ? [...seenRef.current, ...seenAdd] : [...seenRef.current];
      knownRef.current = nextK;
      seenRef.current = nextS;
      setSessionKnown(nextK);
      setSessionSeen(nextS);

      const prev = getPathProgress(language, path);
      mergePathProgress(language, path, {
        seen: [...new Set([...prev.seen, ...nextS])],
        known: [...new Set([...prev.known, ...nextK])],
        lastStudied: new Date().toISOString(),
      });

      setIndex((i) => {
        if (i + 1 >= total) {
          setDone(true);
          return i;
        }
        return i + 1;
      });
    },
    [language, path, total]
  );

  const onKnown = useCallback(() => {
    if (!current) return;
    advance([current.id], [current.id]);
  }, [current, advance]);

  const onStillLearning = useCallback(() => {
    if (!current) return;
    advance([], [current.id]);
  }, [current, advance]);

  const goPrevCard = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNextCard = useCallback(() => {
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  const summaryKnown = useMemo(() => sessionKnown.length, [sessionKnown]);

  if (gate === "check") {
    return (
      <p className="flash-sub" style={{ marginTop: "1rem" }}>
        Checking access…
      </p>
    );
  }

  if (gate === "locked") {
    return (
      <>
        <p className="flash-sub">This path is still locked. Mark enough cards as known on the previous path to open it.</p>
        <Link href={`/flashcards/${language}`} className="flash-back">
          ← Back to map
        </Link>
      </>
    );
  }

  if (loading) {
    return (
      <p className="flash-sub" style={{ marginTop: "2rem" }}>
        Loading your deck…
      </p>
    );
  }

  if (loadError) {
    return (
      <>
        <p className="flash-sub">{loadError}</p>
        <Link href={`/flashcards/${language}`} className="flash-back">
          ← Back to paths
        </Link>
      </>
    );
  }

  if (total === 0) {
    return (
      <>
        <p className="flash-sub">No cards for this path yet.</p>
        <Link href={`/flashcards/${language}`} className="flash-back">
          ← Back to paths
        </Link>
      </>
    );
  }

  if (done) {
    return (
      <>
        <Confetti />
        <div className="flash-summary">
          <p className="flash-summary-score">
            {summaryKnown} / {total}
          </p>
          <p className="flash-summary-sub">cards marked known this session</p>
          <Link href={`/flashcards/${language}`} className="flash-btn flash-btn-secondary flash-btn-link">
            Back to map
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <ProgressBar value={progressVal} max={total} />
      <p className="flash-session-meta">
        Card {index + 1} of {total}
      </p>
      {current && (
        <FlashCard
          key={current.id}
          card={current}
          onSwipeLeft={onStillLearning}
          onSwipeRight={onKnown}
        />
      )}
      <div className="flash-controls" role="group" aria-label="Card controls">
        <button
          type="button"
          className="flash-nav-btn flash-control-prev"
          onClick={goPrevCard}
          disabled={index <= 0}
          aria-label="Previous card"
        >
          <ChevronLeft size={22} strokeWidth={2} aria-hidden />
        </button>
        <button type="button" className="flash-btn flash-btn-known flash-control-known" onClick={onKnown}>
          <Check size={18} strokeWidth={2.5} aria-hidden />
          Known
        </button>
        <button
          type="button"
          className="flash-btn flash-btn-still flash-control-still"
          onClick={onStillLearning}
        >
          <X size={18} strokeWidth={2.5} aria-hidden />
          Still learning
        </button>
        <button
          type="button"
          className="flash-nav-btn flash-control-next"
          onClick={goNextCard}
          disabled={index >= total - 1}
          aria-label="Next card"
        >
          <ChevronRight size={22} strokeWidth={2} aria-hidden />
        </button>
      </div>
    </>
  );
}

function Confetti() {
  const pieces = useMemo(() => {
    const colors = ["#C96442", "#4A7C6F", "#5A6A8A", "#1A1A1A", "#A89888"];
    return Array.from({ length: 36 }, (_, i) => ({
      key: i,
      x: `${Math.random() * 100}%`,
      d: `${Math.random() * 0.4}s`,
      c: colors[i % colors.length],
    }));
  }, []);

  return (
    <div className="flash-confetti" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.key}
          style={
            {
              "--x": p.x,
              "--d": p.d,
              "--c": p.c,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
