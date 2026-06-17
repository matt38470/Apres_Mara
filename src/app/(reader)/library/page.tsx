"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGameStore } from "@/src/store/gameStore";

// ─── Catalogue des 10 chapitres ─────────────────────────────────────────────
const CHAPTERS = [
  {
    number: 1,
    title: "La pente",
    subtitle: "Nuit · Bureau de Vance",
    teaser: "Thomas regarde l'écran depuis plusieurs minutes. Quelque chose dans la courbe résiste.",
    premium: false,
    firstUnit: "1.1.1",
  },
  {
    number: 2,
    title: "La nuit",
    subtitle: "01:07 – 06:30 · A14 → Maison familiale",
    teaser: "Thomas quitte le bureau. La nuit devient une zone intermédiaire entre les données et la parole.",
    premium: false,
    firstUnit: "2.1.1",
  },
  {
    number: 3,
    title: "Le matin",
    subtitle: "06:30 – 09:00 · Maison",
    teaser: "Le soleil se lève sur une maison qui ne sait pas encore ce qu'elle contient.",
    premium: false,
    firstUnit: "3.1.1",
  },
  {
    number: 4,
    title: "Le retour",
    subtitle: "09:00 – 12:00 · Canopée",
    teaser: "Vance retourne dans l'immeuble Sterling. Quelqu'un l'attendait.",
    premium: true,
    firstUnit: "4.1.1",
  },
  {
    number: 5,
    title: "Le silence",
    subtitle: "12:00 – 15:00 · Clinique du Cartel",
    teaser: "La salle d'attente a ses propres règles. Il faut savoir les lire.",
    premium: true,
    firstUnit: "5.1.1",
  },
  {
    number: 6,
    title: "La dette",
    subtitle: "15:00 – 18:00 · San Telmo",
    teaser: "Le Cartel envoie un message. Pas par écrit.",
    premium: true,
    firstUnit: "6.1.1",
  },
  {
    number: 7,
    title: "Le témoin",
    subtitle: "18:00 – 21:00",
    teaser: "Quelqu'un a vu quelque chose. Mais témoigner a un prix.",
    premium: true,
    firstUnit: "7.1.1",
  },
  {
    number: 8,
    title: "La fracture",
    subtitle: "21:00 – 00:00",
    teaser: "Il y a des vérités qu'on ne peut pas mettre dans un rapport.",
    premium: true,
    firstUnit: "8.1.1",
  },
  {
    number: 9,
    title: "Le dernier choix",
    subtitle: "00:00 – 03:00",
    teaser: "Tout converge. Vance doit décider ce qu'il protège vraiment.",
    premium: true,
    firstUnit: "9.1.1",
  },
  {
    number: 10,
    title: "Après Mara",
    subtitle: "Épilogue",
    teaser: "Ce qui reste quand l'enquête est close. Ce qui ne peut pas l'être.",
    premium: true,
    firstUnit: "10.1.1",
  },
];

type ChapterStatus = "available" | "in-progress" | "done" | "locked";

function useChapterStatuses() {
  const { currentUnitId, choiceHistory } = useGameStore();

  return useMemo(() => {
    const currentChapter = parseInt(currentUnitId.split(".")[0], 10) || 1;
    const startedChapters = new Set(choiceHistory.map((e) => e.chapterNumber));

    return CHAPTERS.map((ch) => {
      if (ch.premium) return { ...ch, status: "locked" as ChapterStatus };

      if (ch.number < currentChapter) return { ...ch, status: "done" as ChapterStatus };
      if (ch.number === currentChapter) {
        const hasStarted = startedChapters.has(ch.number);
        const isAtVeryStart = currentUnitId === ch.firstUnit && !hasStarted;
        return {
          ...ch,
          status: isAtVeryStart
            ? ("available" as ChapterStatus)
            : ("in-progress" as ChapterStatus),
        };
      }
      return { ...ch, status: "available" as ChapterStatus };
    });
  }, [currentUnitId, choiceHistory]);
}

const STATUS_CONFIG = {
  available: {
    badge: null,
    badgeClass: "",
    btnLabel: "Commencer",
    btnClass:
      "bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400",
  },
  "in-progress": {
    badge: "En cours",
    badgeClass:
      "border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300",
    btnLabel: "Continuer",
    btnClass:
      "bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400",
  },
  done: {
    badge: "Terminé",
    badgeClass:
      "border border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400",
    btnLabel: "Relire",
    btnClass:
      "border border-black/15 bg-white/80 text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 dark:hover:bg-white/10",
  },
  locked: {
    badge: "🔒 Premium",
    badgeClass:
      "border border-neutral-400/30 bg-neutral-100/80 text-neutral-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400",
    btnLabel: "Débloquer",
    btnClass:
      "border border-amber-500/40 bg-amber-500/5 text-amber-600 hover:bg-amber-500/10 dark:text-amber-400 dark:hover:bg-amber-500/10",
  },
} satisfies Record<
  ChapterStatus,
  { badge: string | null; badgeClass: string; btnLabel: string; btnClass: string }
>;

export default function LibraryPage() {
  const router = useRouter();
  const chapters = useChapterStatuses();
  const { currentUnitId } = useGameStore();

  const resumeChapter = parseInt(currentUnitId.split(".")[0], 10) || 1;
  const resumeUnit = currentUnitId;

  function handleChapterAction(ch: (typeof chapters)[number]) {
    if (ch.status === "locked") {
      router.push("/abonnement");
      return;
    }
    if (ch.status === "done") {
      router.push(`/read/${ch.number}/${ch.firstUnit}`);
      return;
    }
    if (ch.status === "in-progress") {
      router.push(`/read/${resumeChapter}/${resumeUnit}`);
    } else {
      router.push(`/read/${ch.number}/${ch.firstUnit}`);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] dark:bg-[#0c0d10]">
      {/* Header */}
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
            href={`/read/${resumeChapter}/${resumeUnit}`}
            className="rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-amber-600"
          >
            ↗ Reprendre
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-8 md:px-6">
        {/* Bandeau Reprendre */}
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 dark:border-amber-500/20 dark:bg-amber-500/[0.04]">
          <div className="flex-1">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              En cours
            </div>
            <p className="mt-0.5 text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Chapitre {resumeChapter} · Unité {resumeUnit}
            </p>
          </div>
          <Link
            href={`/read/${resumeChapter}/${resumeUnit}`}
            className="shrink-0 rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-amber-600"
          >
            Reprendre
          </Link>
        </div>

        {/* Liste des chapitres */}
        <div className="space-y-3">
          {chapters.map((ch, i) => {
            const cfg = STATUS_CONFIG[ch.status];
            const isLocked = ch.status === "locked";

            return (
              <motion.article
                key={ch.number}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.28 }}
                className={`flex items-center gap-4 rounded-2xl border p-4 transition ${
                  isLocked
                    ? "border-black/8 bg-white/40 opacity-60 dark:border-white/8 dark:bg-white/[0.015]"
                    : "border-black/10 bg-white/70 hover:border-amber-500/20 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-amber-500/20"
                }`}
              >
                {/* Numéro */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums ${
                    isLocked
                      ? "bg-neutral-200/80 text-neutral-400 dark:bg-white/5 dark:text-neutral-500"
                      : ch.status === "done"
                      ? "bg-green-500/15 text-green-700 dark:text-green-400"
                      : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                  }`}
                >
                  {ch.number}
                </div>

                {/* Infos */}
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
                  {!isLocked && (
                    <p className="mt-1.5 line-clamp-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {ch.teaser}
                    </p>
                  )}
                </div>

                {/* Bouton */}
                <button
                  type="button"
                  onClick={() => handleChapterAction(ch)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${cfg.btnClass}`}
                >
                  {cfg.btnLabel}
                </button>
              </motion.article>
            );
          })}
        </div>
      </main>

      {/* Footer CTA abonnement */}
      <footer className="mx-auto max-w-3xl px-5 pb-16 pt-6 md:px-6">
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
      </footer>
    </div>
  );
}
