"use client";

import { useRouter } from "next/navigation";
import { useGameStore } from "@/src/store/gameStore";

type Props = {
  progress: { chapter: number; unit_number: string } | null;
  resumeUrl: string;
  chapterStartUrl: string;
  currentChapter: number;
};

export default function RestartButtons({
  progress,
  resumeUrl,
  chapterStartUrl,
  currentChapter,
}: Props) {
  const router = useRouter();
  const { resetGame, resetChapter } = useGameStore();

  return (
    <div className="flex flex-col gap-3">

      {/* Continuer / Commencer */}
      <button
        onClick={() => router.push(resumeUrl)}
        className="flex flex-col gap-1 rounded-xl px-4 py-3 text-sm transition-all hover:opacity-70 text-left w-full"
        style={{ border: "1px solid rgba(128,128,128,0.15)" }}
      >
        <div className="flex items-center justify-between">
          <span>{progress ? "Continuer la lecture" : "Commencer la lecture"}</span>
          <span className="opacity-40">→</span>
        </div>
        {progress && (
          <span className="text-xs opacity-40">
            Chapitre {progress.chapter} · Scène {progress.unit_number}
          </span>
        )}
      </button>

      {/* Reprendre depuis le début du chapitre — masqué au chapitre 1 */}
      {progress && currentChapter > 1 && (
        <button
          onClick={() => {
            resetChapter(currentChapter);
            router.push(chapterStartUrl);
          }}
          className="flex flex-col gap-1 rounded-xl px-4 py-3 text-sm transition-all hover:opacity-70 text-left w-full"
          style={{ border: "1px solid rgba(128,128,128,0.15)" }}
        >
          <div className="flex items-center justify-between">
            <span>Reprendre depuis le début du chapitre {currentChapter}</span>
            <span className="opacity-40">→</span>
          </div>
          <span className="text-xs opacity-40">
            Efface les choix du chapitre {currentChapter}
          </span>
        </button>
      )}

      {/* Recommencer depuis le début */}
      {progress && (
        <button
          onClick={() => {
            resetGame();
            router.push("/read/1/1.1.1");
          }}
          className="flex flex-col gap-1 rounded-xl px-4 py-3 text-sm transition-all hover:opacity-70 text-left w-full"
          style={{ border: "1px solid rgba(158,42,43,0.2)", color: "var(--accent-blood)" }}
        >
          <div className="flex items-center justify-between">
            <span>Recommencer depuis le début</span>
            <span className="opacity-40">→</span>
          </div>
          <span className="text-xs opacity-40">Efface tous les choix et remet les jauges à zéro</span>
        </button>
      )}

    </div>
  );
}
