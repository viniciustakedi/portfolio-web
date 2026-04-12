"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./styles.css";

// ── Google Fonts via next/font (tree-shaken, no extra network request) ──
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// ── Types ────────────────────────────────────────────────────────────────
type Mode = "pomodoro" | "short" | "long";
type Theme = "light" | "dark";
interface Settings {
  pomodoro: number;
  short: number;
  long: number;
}

// ── Constants ────────────────────────────────────────────────────────────
const RING_R = 126;
const CIRCUMFERENCE = 2 * Math.PI * RING_R; // ≈ 791.68
const CYCLE_LENGTH = 4;
const DEFAULTS: Settings = { pomodoro: 25, short: 5, long: 15 };

const LABELS: Record<Mode, string> = {
  pomodoro: "Focus Time",
  short: "Short Break",
  long: "Long Break",
};

const MODE_TITLES: Record<Mode, string> = {
  pomodoro: "Pomodoro",
  short: "Short Break",
  long: "Long Break",
};

const ACCENT: Record<Theme, Record<Mode, string>> = {
  light: { pomodoro: "#C96442", short: "#4A7C6F", long: "#5A6A8A" },
  dark: { pomodoro: "#D4724E", short: "#5A9B8A", long: "#6B7FAA" },
};

// ── Pure helpers ─────────────────────────────────────────────────────────
function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

function fmtTime(seconds: number): string {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function playChime(): void {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Pleasant ascending C5 → E5 → G5 major triad
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.22;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.21, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.15);
      osc.start(t);
      osc.stop(t + 1.15);
    });
  } catch {
    // Audio may be blocked by browser policy — fail silently
  }
}

// ── Sun / Moon SVG icons ─────────────────────────────────────────────────
function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

// ════════════════════════════════════════════════════════════════════════
//  COMPONENT
// ════════════════════════════════════════════════════════════════════════
export default function PomodoroClient() {
  // ── React state (drives renders) ──────────────────────────────────────
  const [mode, setModeState] = useState<Mode>("pomodoro");
  const [timeLeft, setTimeLeftState] = useState(DEFAULTS.pomodoro * 60);
  const [totalTime, setTotalTime] = useState(DEFAULTS.pomodoro * 60);
  const [running, setRunning] = useState(false);
  const [completedInCycle, setCompletedState] = useState(0);
  const [settings, setSettingsState] = useState<Settings>({ ...DEFAULTS });
  const [theme, setThemeState] = useState<Theme>("light");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // Settings panel draft inputs
  const [draftPomo, setDraftPomo] = useState(DEFAULTS.pomodoro);
  const [draftShort, setDraftShort] = useState(DEFAULTS.short);
  const [draftLong, setDraftLong] = useState(DEFAULTS.long);

  // ── Refs (always-current values safe to read inside setInterval) ───────
  const modeR = useRef<Mode>("pomodoro");
  const timeLeftR = useRef(DEFAULTS.pomodoro * 60);
  const settingsR = useRef<Settings>({ ...DEFAULTS });
  const completedR = useRef(0);
  const themeR = useRef<Theme>("light");
  const tickerR = useRef<ReturnType<typeof setInterval> | null>(null);
  const favCanvasR = useRef<HTMLCanvasElement | null>(null);

  // ── Stable setters (update both ref and state atomically) ─────────────
  const setMode = useCallback((m: Mode) => {
    modeR.current = m;
    setModeState(m);
  }, []);

  const setTimeLeft = useCallback((n: number) => {
    timeLeftR.current = n;
    setTimeLeftState(n);
  }, []);

  const setCompleted = useCallback((n: number) => {
    completedR.current = n;
    setCompletedState(n);
  }, []);

  const setSettings = useCallback((s: Settings) => {
    settingsR.current = s;
    setSettingsState(s);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    themeR.current = t;
    setThemeState(t);
  }, []);

  // ── Persistence helpers ───────────────────────────────────────────────
  const persistSettings = useCallback((s: Settings) => {
    localStorage.setItem("pomodoro_settings", JSON.stringify(s));
  }, []);

  const persistState = useCallback((n: number) => {
    localStorage.setItem(
      "pomodoro_state",
      JSON.stringify({ completedInCycle: n })
    );
  }, []);

  // ── applyMode: switch mode + reset timer (no start) ───────────────────
  const applyMode = useCallback(
    (m: Mode) => {
      const duration = settingsR.current[m] * 60;
      setMode(m);
      setTimeLeft(duration);
      setTotalTime(duration);
    },
    [setMode, setTimeLeft]
  );

  // ── handleSessionEnd: called from inside setInterval ──────────────────
  // Safe because it only reads refs and calls stable setters/callbacks.
  const handleSessionEnd = useCallback(() => {
    playChime();
    setRunning(false);

    if (modeR.current === "pomodoro") {
      const next = completedR.current + 1;
      if (next >= CYCLE_LENGTH) {
        setCompleted(0);
        persistState(0);
        setNotice(
          "Excellent work! You completed a full cycle — enjoy a long break."
        );
        applyMode("long");
      } else {
        setCompleted(next);
        persistState(next);
        setNotice(
          `Pomodoro ${next} of ${CYCLE_LENGTH} done! Take a short break.`
        );
        applyMode("short");
      }
    } else {
      setNotice("Break over — ready for your next Pomodoro?");
      applyMode("pomodoro");
    }
  }, [applyMode, setCompleted, persistState]);

  // ── Timer control ─────────────────────────────────────────────────────
  const stopTimer = useCallback(() => {
    if (tickerR.current) {
      clearInterval(tickerR.current);
      tickerR.current = null;
    }
    setRunning(false);
  }, []);

  const startTimer = useCallback(() => {
    if (tickerR.current) return;
    setRunning(true);
    setNotice(null);
    tickerR.current = setInterval(() => {
      if (timeLeftR.current <= 1) {
        clearInterval(tickerR.current!);
        tickerR.current = null;
        timeLeftR.current = 0;
        setTimeLeftState(0);
        handleSessionEnd();
      } else {
        timeLeftR.current--;
        setTimeLeftState(timeLeftR.current);
      }
    }, 1000);
  }, [handleSessionEnd]);

  const pauseTimer = useCallback(() => {
    if (!tickerR.current) return;
    clearInterval(tickerR.current);
    tickerR.current = null;
    setRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    stopTimer();
    const duration = settingsR.current[modeR.current] * 60;
    setTimeLeft(duration);
    setTotalTime(duration);
    setNotice(null);
  }, [stopTimer, setTimeLeft]);

  const handleTabClick = useCallback(
    (m: Mode) => {
      if (m === modeR.current) return;
      stopTimer();
      setNotice(null);
      applyMode(m);
    },
    [stopTimer, applyMode]
  );

  // ── Settings panel ────────────────────────────────────────────────────
  const openSettings = useCallback(() => {
    setDraftPomo(settingsR.current.pomodoro);
    setDraftShort(settingsR.current.short);
    setDraftLong(settingsR.current.long);
    setSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  const applySettings = useCallback(() => {
    const next: Settings = {
      pomodoro: clamp(draftPomo || DEFAULTS.pomodoro, 1, 90),
      short: clamp(draftShort || DEFAULTS.short, 1, 90),
      long: clamp(draftLong || DEFAULTS.long, 1, 90),
    };
    setSettings(next);
    persistSettings(next);
    stopTimer();
    const duration = next[modeR.current] * 60;
    setTimeLeft(duration);
    setTotalTime(duration);
    setNotice(null);
    setSettingsOpen(false);
  }, [draftPomo, draftShort, draftLong, setSettings, persistSettings, stopTimer, setTimeLeft]);

  // ── Theme toggle ──────────────────────────────────────────────────────
  const toggleTheme = useCallback(() => {
    const next: Theme = themeR.current === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("pomodoro_theme", next);
  }, [setTheme]);

  // ── Load from localStorage on mount ──────────────────────────────────
  useEffect(() => {
    // Settings
    try {
      const raw = localStorage.getItem("pomodoro_settings");
      if (raw) {
        const s = JSON.parse(raw) as Partial<Settings>;
        const loaded: Settings = {
          pomodoro: clamp(parseInt(String(s.pomodoro)) || DEFAULTS.pomodoro, 1, 90),
          short: clamp(parseInt(String(s.short)) || DEFAULTS.short, 1, 90),
          long: clamp(parseInt(String(s.long)) || DEFAULTS.long, 1, 90),
        };
        setSettings(loaded);
        setDraftPomo(loaded.pomodoro);
        setDraftShort(loaded.short);
        setDraftLong(loaded.long);
        // Rebase the initial timer to the loaded Pomodoro duration
        setTimeLeft(loaded.pomodoro * 60);
        setTotalTime(loaded.pomodoro * 60);
      }
    } catch { /* corrupted storage — use defaults */ }

    // Completed pomodoros (cycle progress)
    try {
      const raw = localStorage.getItem("pomodoro_state");
      if (raw) {
        const st = JSON.parse(raw) as { completedInCycle?: number };
        if (typeof st.completedInCycle === "number") {
          setCompleted(clamp(st.completedInCycle, 0, CYCLE_LENGTH - 1));
        }
      }
    } catch { /* ignore */ }

    // Theme (saved preference > system preference)
    const saved = localStorage.getItem("pomodoro_theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    // Create the off-screen canvas for the favicon
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 32;
    favCanvasR.current = canvas;

    // Cleanup interval on unmount
    return () => {
      if (tickerR.current) clearInterval(tickerR.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Update document.title every second ────────────────────────────────
  useEffect(() => {
    document.title = `${fmtTime(timeLeft)} · ${MODE_TITLES[mode]}`;
  }, [timeLeft, mode]);

  // ── Update canvas favicon ─────────────────────────────────────────────
  useEffect(() => {
    const canvas = favCanvasR.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const color = ACCENT[theme][mode];
    const trackColor = theme === "dark" ? "#333" : "#DDD";
    const ratio = totalTime > 0 ? timeLeft / totalTime : 1;

    ctx.clearRect(0, 0, 32, 32);

    // Background track
    ctx.beginPath();
    ctx.arc(16, 16, 11, 0, Math.PI * 2);
    ctx.strokeStyle = trackColor;
    ctx.lineWidth = 5;
    ctx.stroke();

    // Progress arc
    if (ratio > 0.005) {
      ctx.beginPath();
      ctx.arc(16, 16, 11, -Math.PI / 2, -Math.PI / 2 + ratio * Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    // Upsert the <link rel="icon"> element
    let link = document.querySelector(
      "link[rel~='icon']"
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = canvas.toDataURL("image/png");
  }, [timeLeft, totalTime, mode, theme]);

  // ── Keyboard shortcuts ────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && settingsOpen) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [settingsOpen]);

  // ── Derived render values ─────────────────────────────────────────────
  const ratio = totalTime > 0 ? timeLeft / totalTime : 1;
  const ringOffset = CIRCUMFERENCE * (1 - ratio);
  const timeStr = fmtTime(timeLeft);
  const btnText = running ? "Pause" : timeLeft > 0 && timeLeft < totalTime ? "Resume" : "Start";

  const cycleText =
    mode === "pomodoro"
      ? `Cycle ${completedInCycle + 1} of ${CYCLE_LENGTH}`
      : mode === "short"
      ? `${completedInCycle} of ${CYCLE_LENGTH} complete · Short Break`
      : "Long Break · Cycle complete!";

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div
      className={`pom-root ${dmSerif.variable} ${inter.variable}`}
      data-theme={theme}
      data-mode={mode}
    >
      <div className="pom-app">
        {/* ── Header ── */}
        <header className="pom-header">
          <span className="pom-logo">Pomodoro</span>
          <div className="pom-header-btns">
            <button
              className="pom-icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="pom-icon-btn"
              onClick={openSettings}
              aria-label="Settings"
              title="Settings"
            >
              <GearIcon />
            </button>
          </div>
        </header>

        {/* ── Card ── */}
        <main className="pom-card">
          {/* Mode tabs */}
          <nav className="pom-tabs" role="tablist" aria-label="Timer mode">
            {(["pomodoro", "short", "long"] as Mode[]).map((m) => (
              <button
                key={m}
                className={`pom-tab${mode === m ? " active" : ""}`}
                role="tab"
                aria-selected={mode === m}
                onClick={() => handleTabClick(m)}
              >
                {m === "pomodoro"
                  ? "Pomodoro"
                  : m === "short"
                  ? "Short Break"
                  : "Long Break"}
              </button>
            ))}
          </nav>

          {/* Session notice */}
          {notice && (
            <div className="pom-notice" role="status" aria-live="polite">
              {notice}
            </div>
          )}

          {/* Timer ring */}
          <div className="pom-timer-wrapper" aria-label="Countdown timer">
            <svg
              className="pom-ring"
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle className="pom-ring-track" cx="150" cy="150" r={RING_R} />
              <circle
                className="pom-ring-fill"
                cx="150"
                cy="150"
                r={RING_R}
                transform="rotate(-90 150 150)"
                style={{
                  strokeDasharray: CIRCUMFERENCE,
                  strokeDashoffset: ringOffset,
                }}
              />
            </svg>
            <div className="pom-timer-center">
              <span className="pom-time" aria-live="off">
                {timeStr}
              </span>
              <span className="pom-mode-sub">{LABELS[mode]}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="pom-controls">
            <button
              className="pom-btn-start"
              onClick={() => (running ? pauseTimer() : startTimer())}
              aria-label={running ? "Pause timer" : "Start timer"}
            >
              {btnText}
            </button>
            <button
              className="pom-btn-reset"
              onClick={resetTimer}
              aria-label="Reset timer"
            >
              ↺&thinsp;Reset
            </button>
          </div>

          {/* Cycle indicator */}
          <div className="pom-cycle-area">
            <span className="pom-cycle-label">{cycleText}</span>
            <div
              className="pom-dots"
              role="img"
              aria-label={`${completedInCycle} of ${CYCLE_LENGTH} sessions complete`}
            >
              {Array.from({ length: CYCLE_LENGTH }, (_, i) => (
                <span
                  key={i}
                  className={[
                    "pom-dot",
                    i < completedInCycle ? "done" : "",
                    mode === "pomodoro" && running && i === completedInCycle
                      ? "current"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ── Settings overlay ── */}
      <div
        className={`pom-overlay${settingsOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Settings"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeSettings();
        }}
      >
        <div className="pom-settings-card">
          <div className="pom-settings-hd">
            <h2 className="pom-settings-title">Settings</h2>
            <button
              className="pom-close-btn"
              onClick={closeSettings}
              aria-label="Close settings"
            >
              ×
            </button>
          </div>

          <div className="pom-field">
            <label htmlFor="sPomo">Pomodoro duration (minutes)</label>
            <input
              type="number"
              id="sPomo"
              min={1}
              max={90}
              value={draftPomo}
              onChange={(e) => setDraftPomo(parseInt(e.target.value) || 1)}
              onKeyDown={(e) => e.key === "Enter" && applySettings()}
            />
          </div>
          <div className="pom-field">
            <label htmlFor="sShort">Short Break (minutes)</label>
            <input
              type="number"
              id="sShort"
              min={1}
              max={90}
              value={draftShort}
              onChange={(e) => setDraftShort(parseInt(e.target.value) || 1)}
              onKeyDown={(e) => e.key === "Enter" && applySettings()}
            />
          </div>
          <div className="pom-field">
            <label htmlFor="sLong">Long Break (minutes)</label>
            <input
              type="number"
              id="sLong"
              min={1}
              max={90}
              value={draftLong}
              onChange={(e) => setDraftLong(parseInt(e.target.value) || 1)}
              onKeyDown={(e) => e.key === "Enter" && applySettings()}
            />
          </div>

          <button className="pom-btn-save" onClick={applySettings}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
