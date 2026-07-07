"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGameStore } from "@/src/store/gameStore";
import { useIsPremium } from "@/src/hooks/useIsPremium";

const CHAPTERS = [
  {
    number: 1,
    title: "La Routine",
    subtitle: "San Telmo · Nuit",
    teaser: "Une enquête simple sur un vol de corps dans les bas-fonds. Découverte de l'univers moite de San Telmo.",
    premium: false,
    firstUnit: "1.1.1",
  },
  {
    number: 2,
    title: "La Pression",
    subtitle: "Le Cartel réclame son dû",
    teaser: "L'enquête révèle un cadavre dont l'âme a été arrachée vivante. La jauge de Dette s'enclenche.",
    premium: false,
    firstUnit: "2.1.1",
  },
  {
    number: 3,
    title: "Le Piège",
    subtitle: "Cliffhanger · Fin de la partie gratuite",
    teaser: "Vous coincez le suspect — mais il porte l'âme de quelqu'un que vous connaissez. Doigt sur la détente.",
    premium: false,
    firstUnit: "3.1.1",
  },
  {
    number: 4,
    title: "L'Engrenage — I",
    subtitle: "Résolution du cliffhanger",
    teaser: "La vérité sur qui vous avez failli tuer vous plonge dans un complot qui dépasse les bas-fonds.",
    premium: true,
    firstUnit: "4.1.1",
  },
  {
    number: 5,
    title: "L'Engrenage — II",
    subtitle: "Les alliances se forment",
    teaser: "Gestion complexe des alliances. Les élites de la ville entrent en scène.",
    premium: true,
    firstUnit: "5.1.1",
  },
  {
    number: 6,
    title: "L'Engrenage — III",
    subtitle: "Les quartiers riches · La dette",
    teaser: "L'accès au cœur du roman. Les origines de l'Extraction commencent à remonter à la surface.",
    premium: true,
    firstUnit: "6.1.1",
  },
  {
    number: 7,
    title: "L'Engrenage — IV",
    subtitle: "Secrets et trahisons",
    teaser: "Chaque choix resserre l'étau. Corruption, loyauté, vérité cachée — il va falloir trancher.",
    premium: true,
    firstUnit: "7.1.1",
  },
  {
    number: 8,
    title: "L'Engrenage — V",
    subtitle: "La chute approche",
    teaser: "Les jauges atteignent leur point critique. Ce que vous avez sacrifié commence à peser.",
    premium: true,
    firstUnit: "8.1.1",
  },
  {
    number: 9,
    title: "L'Engrenage — VI",
    subtitle: "Avant le climax",
    teaser: "Dernière chance de reconstruire ou d'achever ce que vous avez commencé.",
    premium: true,
    firstUnit: "9.1.1",
  },
  {
    number: 10,
    title: "Le Choix de l'Âme",
    subtitle: "Climax · Tome 1",
    teaser: "Qui sauver ? Bilan des jauges. Des fins radicalement différentes — et les enjeux du Tome 2.",
    premium: true,
    firstUnit: "10.1.1",
  },
];

type ChapterStatus = "available" | "in-progress" | "done" | "locked" | "locked-premium";

function useChapterStatuses(isPremiumUnlocked: boolean) {
  const store = useGameStore();
  const currentUnitId: string = store.currentUnitId ?? "1.1.1";
  const choiceHistory: Array<{ chapterNumber: number }> = store.choiceHistory ?? [];

  return useMemo(() => {
    const currentChapter = parseInt(currentUnitId.split(".")[0], 10) || 1;
    const startedChapters = new Set(choiceHistory.map((e) => e.chapterNumber));

    return CHAPTERS.map((ch) => {
      if (ch.number < currentChapter) {
        return { ...ch, status: "done" as ChapterStatus };
      }

      if (ch.number === currentChapter) {
        if (ch.premium && !isPremiumUnlocked) {
          return { ...ch, status: "locked-premium" as ChapterStatus };
        }
        const neverStarted = !startedChapters.has(ch.number) && currentUnitId === ch.firstUnit;
        return {
          ...ch,
          status: neverStarted ? ("available" as ChapterStatus) : ("in-progress" as ChapterStatus),
        };
      }

      if (ch.premium && !isPremiumUnlocked) {
        return { ...ch, status: "locked-premium" as ChapterStatus };
      }
      return { ...ch, status: "locked" as ChapterStatus };
    });
  }, [currentUnitId, choiceHistory, isPremiumUnlocked]);
}

const STATUS_CONFIG: Record<
  ChapterStatus,
  { badge: string | null; badgeClass: string; btnLabel: string; btnClass: string; disabled?: boolean }
> = {
  available: {
    badge: null,
    badgeClass: "",
    btnLabel: "Commencer",
    btnClass: "bg-amber-500 text-white hover:bg-amber-600",
  },
  "in-progress": {
    badge: "En cours",
    badgeClass: "border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300",
    btnLabel: "Continuer",
    btnClass: "bg-amber-500 text-white hover:bg-amber-600",
  },
  done: {
    badge: "Terminé",
    badgeClass: "border border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400",
    btnLabel: "Relire",
    btnClass:
      "border border-black/15 bg-white/80 text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:bg-white/10",
  },
  locked: {
    badge: "🔒 À venir",
    badgeClass:
      "border border-neutral-300/40 bg-neutral-100/60 text-neutral-400 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-neutral-500",
    btnLabel: "Verrouillé",
    btnClass:
      "border border-black/10 bg-neutral-100/60 text-neutral-400 cursor-not-allowed dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-neutral-600",
    disabled: true,
  },
  "locked-premium": {
    badge: "🔒 Premium",
    badgeClass:
      "border border-amber-500/30 bg-amber-500/[0.08] text-amber-600 dark:text-amber-400",
    btnLabel: "Débloquer",
    btnClass:
      "border border-amber-500/40 bg-amber-500/5 text-amber-600 hover:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/10",
  },
};

export default function LibraryPage() {
  const router = useRouter();
  const store = useGameStore();
  const currentUnitId: string = store.currentUnitId ?? "1.1.1";
  const resumeChapter = parseInt(currentUnitId.split(".")[0], 10) || 1;

  const { isPremium, loading: premiumLoading } = useIsPremium();
  const chapters = useChapterStatuses(isPremium);

  function handleChapterAction(ch: (typeof chapters)[number]) {
    if (ch.status === "locked") return;
    if (ch.status === "locked-premium") {
      router.push("/abonnement");
      return;
    }
    if (ch.status === "done") {
      router.push(`/read/${ch.number}/${ch.firstUnit}`);
      return;
    }
    if (ch.status === "in-progress") {
      router.push(`/read/${resumeChapter}/${currentUnitId}`);
      return;
    }
    router.push(`/read/${ch.number}/${ch.firstUnit}`);
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] dark:bg-[#0c0d10]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-[#101216]/90">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 md:px-6">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9e2a2b] dark:text-[#dc2f02]">
              Le Cartel des Âmes
            </div>
            <h1 className="mt-0.5 text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">
              Bibliothèque
            </h1>
          </div>
          <Link
            href={`/read/${resumeChapter}/${currentUnitId}`}
            className="rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-amber-600"
          >
            ↗ Reprendre
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-8 md:px-6">
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 dark:border-amber-500/20 dark:bg-amber-500/[0.04]">
          <div className="flex-1">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              En cours
            </div>
            <p className="mt-0.5 text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Chapitre {resumeChapter} · Unité {currentUnitId}
            </p>
          </div>
          <Link
            href={`/read/${resumeChapter}/${currentUnitId}`}
            className="shrink-0 rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-amber-600"
          >
            Reprendre
          </Link>
        </div>

        {premiumLoading ? (
          <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-20 animate-pulse rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {chapters.map((ch, i) => {
              const cfg = STATUS_CONFIG[ch.status];
              const isSeqLocked = ch.status === "locked";
              const isPremLocked = ch.status === "locked-premium";

              return (
                <motion.article
                  key={ch.number}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.28 }}
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition ${
                    isSeqLocked
                      ? "border-black/[0.06] bg-white/30 opacity-50 dark:border-white/[0.06] dark:bg-white/[0.01]"
                      : "border-black/10 bg-white/70 hover:border-amber-500/20 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-amber-500/20"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums ${
                      isSeqLocked
                        ? "bg-neutral-200/60 text-neutral-400 dark:bg-white/[0.04] dark:text-neutral-600"
                        : ch.status === "done"
                        ? "bg-green-500/15 text-green-700 dark:text-green-400"
                        : isPremLocked
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                    }`}
                  >
                    {ch.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-neutral-950 dark:text-white">
                        {ch.title}
                      </span>
                      {cfg.badge && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] ${cfg.badgeClass}`}
                        >
                          {cfg.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                      {ch.subtitle}
                    </p>
                    {!isSeqLocked && !isPremLocked && (
                      <p className="mt-1.5 line-clamp-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {ch.teaser}
                      </p>
                    )}
                    {isPremLocked && (
                      <p className="mt-1.5 text-sm italic text-neutral-400 dark:text-neutral-500">
                        Chapitre réservé aux abonnés
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleChapterAction(ch)}
                    disabled={cfg.disabled}
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${cfg.btnClass}`}
                  >
                    {cfg.btnLabel}
                  </button>
                </motion.article>
              );
            })}
          </div>
        )}
      </main>

      <footer className="mx-auto max-w-3xl px-5 pb-16 pt-6 md:px-6">
        {!isPremium && !premiumLoading && (
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-6 text-center dark:border-amber-500/15">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-400">
              Accès complet
            </div>
            <h2 className="mt-2 text-lg font-semibold text-neutral-950 dark:text-white">
              Débloquez les 7 chapitres restants
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
              Un abonnement unique pour suivre Vance jusqu'au bout de sa nuit — et de ses choix.
            </p>
            <Link
              href="/abonnement"
              className="mt-5 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-md transition hover:bg-amber-600"
            >
              Voir l'abonnement
            </Link>
          </div>
        )}
      </footer>
    </div>
  );
}
