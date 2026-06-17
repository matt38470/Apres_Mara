"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ReaderMenu from "./ReaderMenu";
import Gauge from "./Gauge";
import ArchivesModal from "./ArchivesModal";
import { useGameStore } from "@/src/store/gameStore";
import { getMentalStateConfig } from "@/mentalStateConfig";

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

  const [isDeskOpen, setIsDeskOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const readingFontClass =
    settings.fontFamily === "serif"
      ? "font-serif"
      : settings.fontFamily === "mono"
      ? "font-mono tracking-tight"
      : "font-sans";

  const currentMentalConfig = useMemo(() => {
    return getMentalStateConfig(mentalState);
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
              Dossier Vance
            </div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Lecture en cours · Chapitre 1
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Lien bibliothèque */}
            <Link
              href="/library"
              className="rounded-full border border-black/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 transition hover:border-amber-400/40 hover:text-amber-600 dark:border-white/10 dark:text-neutral-300 dark:hover:text-amber-300"
            >
              Bibliothèque
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
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500">
            <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
              San Telmo
            </span>
            <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
              Polar Interactif
            </span>
          </div>

          <article
            className={`max-w-2xl ${readingFontClass}`}
            style={{
              fontSize: `${settings.fontSize}px`,
              lineHeight: 1.9,
            }}
          >
            {children}
          </article>
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
                  description="La pression financière du Cartel."
                />
                <Gauge
                  idKey="ancrage"
                  label="Ancrage"
                  value={gauges.ancrage}
                  colorTheme="green"
                  description="Santé mentale et lucidité."
                />
                <Gauge
                  idKey="humanite"
                  label="Humanité"
                  value={gauges.humanite}
                  colorTheme="orange"
                  description="Cynisme (faible) vs Empathie (élevée)."
                />
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-sm leading-relaxed text-neutral-600 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
              <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                <span>Psychologie</span>
                <span className="text-green-700 dark:text-green-500">{currentMentalConfig.statusLabel}</span>
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
