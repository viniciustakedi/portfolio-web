import Link from "next/link";
import { notFound } from "next/navigation";
import { CardSession } from "@/components/flashcards/CardSession";
import type { LangKey, PathKey } from "@/lib/flashcards-progress";

export default async function FlashcardsSessionPage({
  params,
}: {
  params: Promise<{ language: string; path: string }>;
}) {
  const { language: lang, path: pathSeg } = await params;
  if (lang !== "en" && lang !== "es") notFound();
  if (pathSeg !== "beginner" && pathSeg !== "intermediate" && pathSeg !== "advanced") {
    notFound();
  }

  const language = lang as LangKey;
  const path = pathSeg as PathKey;
  const pathTitle = pathSeg.charAt(0).toUpperCase() + pathSeg.slice(1);

  return (
    <>
      <Link href={`/flashcards/${language}`} className="flash-back">
        ← Path map
      </Link>
      <h1 className="flash-title">{pathTitle}</h1>
      <CardSession language={language} path={path} />
    </>
  );
}
