export type PathKey = "beginner" | "intermediate" | "advanced";
export type LangKey = "en" | "es";

export interface PathProgress {
  seen: string[];
  known: string[];
  lastStudied?: string;
}

export interface FlashcardsProgressRoot {
  [lang: string]: Partial<Record<PathKey, PathProgress>>;
}

const STORAGE_KEY = "flashcards_progress";

function readRoot(): FlashcardsProgressRoot {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as FlashcardsProgressRoot;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeRoot(root: FlashcardsProgressRoot) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(root));
}

export function getPathProgress(lang: LangKey, path: PathKey): PathProgress {
  const root = readRoot();
  const langBlock = root[lang];
  const slot = langBlock?.[path];
  return (
    slot ?? {
      seen: [],
      known: [],
    }
  );
}

export function mergePathProgress(
  lang: LangKey,
  path: PathKey,
  patch: Partial<PathProgress>
) {
  const root = readRoot();
  if (!root[lang]) root[lang] = {};
  const cur = getPathProgress(lang, path);
  const seen = patch.seen ?? cur.seen;
  const known = patch.known ?? cur.known;
  const lastStudied = patch.lastStudied ?? cur.lastStudied;
  root[lang]![path] = {
    seen: [...new Set(seen)],
    known: [...new Set(known)],
    lastStudied,
  };
  writeRoot(root);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("flashcards-progress-updated"));
  }
}

/** Sequential unlock: intermediate after 3 known in beginner; advanced after 3 known in intermediate. */
export function isPathUnlocked(lang: LangKey, path: PathKey): boolean {
  if (path === "beginner") return true;
  if (path === "intermediate") {
    const b = getPathProgress(lang, "beginner");
    return b.known.length >= 3;
  }
  const i = getPathProgress(lang, "intermediate");
  return i.known.length >= 3;
}
