import Link from "next/link";
import { LanguageSelector } from "@/components/flashcards/LanguageSelector";

export default function FlashcardsPage() {
  return (
    <>
      <Link href="/" className="flash-back">
        ← Portfolio
      </Link>
      <h1 className="flash-title">Choose your language</h1>
      <p className="flash-sub">
        A small journal-style deck: warm paper cards, flip to study, and your progress stays on this device only.
      </p>
      <LanguageSelector />
    </>
  );
}
