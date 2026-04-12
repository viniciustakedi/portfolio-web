import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./flashcards.css";

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

export const metadata: Metadata = {
  title: "Flashcards | Language journal",
  description: "Vocabulary paths — same calm focus as the Pomodoro timer.",
};

export default function FlashcardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${dmSerif.variable} ${inter.variable} flash-root`}>
      <div className="flash-inner">{children}</div>
    </div>
  );
}
