"use client";

import { useCallback, useRef, useState } from "react";
import type { IFlashcard } from "@/requests/get";

function typeLabel(t: string): string {
  return t.replace(/_/g, " ");
}

export function FlashCard({
  card,
  onSwipeLeft,
  onSwipeRight,
}: {
  card: IFlashcard;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const toggle = useCallback(() => setFlipped((f) => !f), []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    const threshold = 72;
    if (dx > threshold) onSwipeRight?.();
    else if (dx < -threshold) onSwipeLeft?.();
  };

  const examples = card.examples.slice(0, 2);

  return (
    <div
      className="flash-card-scene"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={`flash-card-inner ${flipped ? "is-flipped" : ""}`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={flipped ? "Show front of card" : "Show back of card"}
      >
        <div className="flash-card-face flash-card-front">
          <span className="flash-type-badge">{typeLabel(card.type)}</span>
          <div className="flash-card-word-center">
            <h2 className="flash-card-word">{card.word}</h2>
          </div>
          <p className="flash-card-hint">Tap to reveal · Swipe right: known · left: skip</p>
        </div>
        <div className="flash-card-face flash-card-back">
          <p className="flash-card-translation">{card.translation}</p>
          <p className="flash-card-body-text">{card.description}</p>
          {examples.length > 0 && (
            <ul className="flash-card-examples">
              {examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          )}
          <p className="flash-card-hint">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
}
