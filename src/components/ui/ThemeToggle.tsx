"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

const btn =
  "flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex h-9 items-center gap-0.5 rounded-md border border-border bg-background/50 p-0.5"
        aria-hidden
      >
        <span className="h-8 w-8 rounded-sm bg-muted/20" />
        <span className="h-8 w-8 rounded-sm bg-muted/20" />
        <span className="h-8 w-8 rounded-sm bg-muted/20" />
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-0.5 rounded-md border border-border bg-background/50 p-0.5"
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        className={cn(btn, theme === "system" && "bg-secondary text-foreground")}
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
        title="Match system"
      >
        <Monitor className="h-4 w-4" aria-hidden />
      </button>
      <button
        type="button"
        className={cn(btn, theme === "light" && "bg-secondary text-foreground")}
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        title="Light"
      >
        <Sun className="h-4 w-4" aria-hidden />
      </button>
      <button
        type="button"
        className={cn(btn, theme === "dark" && "bg-secondary text-foreground")}
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        title="Dark"
      >
        <Moon className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
