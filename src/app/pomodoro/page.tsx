import type { Metadata } from "next";
import PomodoroClient from "./PomodoroClient";

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description:
    "A beautiful, focused Pomodoro timer with cycle tracking, custom durations, and light/dark themes.",
};

export default function PomodoroPage() {
  return <PomodoroClient />;
}
