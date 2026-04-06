import Link from "next/link";
import { notFound } from "next/navigation";
import { PathMap } from "@/components/flashcards/PathMap";
import type { LangKey } from "@/lib/flashcards-progress";

export default async function FlashcardsLanguagePage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language: lang } = await params;
  if (lang !== "en" && lang !== "es") notFound();

  const language = lang as LangKey;
  const label = language === "en" ? "English" : "Español";

  return (
    <>
      <Link href="/flashcards" className="flash-back">
        ← Languages
      </Link>
      <h1 className="flash-title">{label} paths</h1>
      <p className="flash-sub">Follow the trail from beginner to advanced. Locked steps open as you mark cards known.</p>
      <PathMap language={language} />
    </>
  );
}
