import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./flashcards.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-flash-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-flash-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flashcards | Language journal",
  description: "Handcrafted vocabulary paths — English phrasal verbs and Spanish nuances.",
};

export default function FlashcardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${caveat.variable} ${plusJakarta.variable} flash-root`}>
      <div className="flash-inner">{children}</div>
    </div>
  );
}
