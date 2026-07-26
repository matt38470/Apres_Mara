"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ReaderMenu from "./ReaderMenu";
import Gauge from "./Gauge";
import ArchivesModal from "./ArchivesModal";
import { useGameStore } from "@/src/store/gameStore";
import { getMentalStateConfig } from "@/mentalStateConfig";
import { useRestoreProgress } from "@/src/hooks/useRestoreProgress";

export default function LayoutClientHUD({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    gauges,
    mentalState,
    archives,
    unlockedCharacters,
    newArchives,
    newCharacters,
    settings,
    choiceHistory,
    currentUnitId,
    markArchivesSeen,
    markCharactersSeen,
    resetGame,
  } = useGameStore();

  useRestoreProgress();

  const [isDeskOpen, setIsDeskOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentChapterNumber = useMemo(() => {
    const parsed = parseInt(currentUnitId?.split(".")[0] ?? "1", 10);
    return Number.isNaN(parsed) ? 1 : parsed;
  }, [currentUnitId]);

  const readingFontClass =
    settings.fontFamily === "serif"
      ? "font-serif"
      : settings.fontFamily === "mono"
      ? "font-mono tracking-tight"
      : "font-sans";

  const currentMentalConfig = useMemo(() => {
    return getMentalStateConfig(mentalState);
  }, [mentalState]);

  const mentalStatusColor = useMemo(() => {
    switch (mentalState) {
      case "lucide": return "text-green-600 dark:text-green-400";
      case "stable": return "text-sky-600 dark:text-sky-400";
      case "tourmente": return "text-amber-600 dark:text-amber-400";
      case "visionnaire": return "text-purple-600 dark:text-purple-400";
      case "fracture": return "text-red-600 dark:text-red-400";
      default: return "text-neutral-500";
    }
  }, [mentalState]);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-40 w-full border-b border-black/10 bg-white/75 backdrop-blur-md dark:border-white/10 dark:bg-[#0b0b0c]/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9e2a2b] dark:text-[#dc2f02]">
              Après Mara
            </div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Lecture en cours · Chapitre {currentChapterNumber}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/library"
              className="rounded-full border border-black/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 transition hover:border-amber-400/40 hover:text-amber-600 dark:border-white/10 dark:text-neutral-300 dark:hover:text-amber-300"
            >
              Sommaire
            </Link>

            <button
              type="button"
              onClick={() => setIsDeskOpen(true)}
              className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700 transition hover:bg-orange-500/15 dark:text-orange-300"
            >
              Carnet de Traqueur
            </button>

            <ReaderMenu />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl gap-10 px-4 pb-16 pt-28 md:px-6">
        <main className="min-w-0 flex-1">
          {children}
        </main>

        <aside className="hidden w-56 shrink-0 xl:block">
          <div className="sticky top-28 space-y-4">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                État personnel
              </div>
              <div className="space-y-2">
                <Gauge
                  idKey="dette"
                  label="Dette"
                  value={gauges.dette}
                  colorTheme="red"
                  description="Pression accumulée. Quand elle déborde, les conséquences s'étendent."
                />
                <Gauge
                  idKey="ancrage"
                  label="Ancrage"
                  value={gauges.ancrage}
                  colorTheme="green"
                  description="Ce qui vous maintient lucide. Faible = obsession."
                />
                <Gauge
                  idKey="humanite"
                  label="Humanité"
                  value={gauges.humanite}
                  colorTheme="orange"
                  description="Cynisme (faible) vs empathie (élevée)."
                />
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-sm leading-relaxed text-neutral-600 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
              <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                <span>Psychologie</span>
                <span className={mentalStatusColor}>{currentMentalConfig.statusLabel}</span>
              </div>
              {currentMentalConfig.quickNote}
            </div>

            {currentMentalConfig.narrativeCue && (
              <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-xs italic leading-relaxed text-neutral-500 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-500">
                &ldquo;{currentMentalConfig.narrativeCue}&rdquo;
              </div>
            )}
          </div>
        </aside>
      </div>

      <ArchivesModal
        isOpen={isDeskOpen}
        onClose={() => setIsDeskOpen(false)}
        unlockedArchives={archives}
        unlockedCharacters={unlockedCharacters}
        newArchives={newArchives}
        newCharacters={newCharacters}
        markArchivesSeen={markArchivesSeen}
        markCharactersSeen={markCharactersSeen}
        choiceHistory={choiceHistory}
        gauges={gauges}
        notes={[currentMentalConfig.quickNote]}
        currentUnitId={currentUnitId}
        onRestart={resetGame}
      />
    </div>
  );
}
