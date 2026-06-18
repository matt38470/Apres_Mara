"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useGameStore } from "@/src/store/gameStore";
import type { NarrativeUnit, Condition } from "@/src/types/narrative";
import { saveProgress } from "@/src/actions/saveProgress";

export default function SceneReaderClient({ scene }: { scene: NarrativeUnit }) {
  const router = useRouter();

  const {
    applyChoice,
    addChoiceToHistory,
    addArchives,
    addCharacters,
    settings,
    gauges,
    mentalState,
    setCurrentUnitId,
    chosenPathByUnit,
    setChosenPath,
  } = useGameStore();

  useEffect(() => {
    const unlockArchives = scene.deskUpdate?.unlockArchives ?? [];
    const unlockCharacters = (scene.deskUpdate?.unlockCharacters ?? []).map((c) => c.id);
    if (unlockArchives.length > 0) addArchives(unlockArchives);
    if (unlockCharacters.length > 0) addCharacters(unlockCharacters);
  }, [scene.id, scene.deskUpdate, addArchives, addCharacters]);

  useEffect(() => {
    setCurrentUnitId(scene.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scene.id, setCurrentUnitId]);

  const getFontClass = () => {
    switch (settings.fontFamily) {
      case "serif": return "font-serif";
      case "mono": return "font-mono tracking-tight";
      case "sans":
      default: return "font-sans";
    }
  };

  const checkChoiceConditions = (conditions?: Condition[]): boolean => {
    if (!conditions || conditions.length === 0) return true;
    return conditions.every((cond) => {
      let current: unknown;
      if (cond.key === "mentalState") {
        current = mentalState;
      } else if (cond.key === "dette" || cond.key === "ancrage" || cond.key === "humanite") {
        current = gauges[cond.key];
      } else if (cond.key === "archives") {
        current = [];
      } else {
        return true;
      }
      switch (cond.operator) {
        case "eq": return current === cond.value;
        case "neq": return current !== cond.value;
        case "gte": {
          const target = typeof cond.value === "number" ? cond.value : Number(cond.value);
          return typeof current === "number" && current >= target;
        }
        case "lte": {
          const target = typeof cond.value === "number" ? cond.value : Number(cond.value);
          return typeof current === "number" && current <= target;
        }
        case "includes": return Array.isArray(current) && current.includes(cond.value);
        default: return true;
      }
    });
  };

  const resolveNextUnitUrl = (nextUnitId: string) => {
    if (nextUnitId.startsWith("ch1-u")) {
      const numPart = nextUnitId.split("-u")[1];
      const num = parseInt(numPart, 10);
      return `/read/1/1.${num}`;
    }
    const nextChapterNumber = nextUnitId.split(".")[0];
    return `/read/${nextChapterNumber}/${nextUnitId}`;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={getFontClass()}
      >
        {scene.imagePrompt && scene.imagePrompt !== "None" && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-black/10 bg-white/40 shadow-md dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src={`/images/scenes/${scene.imagePrompt}.jpg`}
              alt={scene.title}
              className="max-h-80 w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        )}

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-500 dark:text-amber-400">
              {scene.location ?? "Incident NW-7"}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {scene.title}
            </h1>
          </div>
          {scene.timeLabel && (
            <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:border-white/10 dark:text-neutral-400">
              {scene.timeLabel}
            </span>
          )}
        </div>

        <div className="mb-12 space-y-6 text-neutral-800 dark:text-neutral-200">
          {scene.textBlocks.map((block, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: block }} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          {scene.choices.map((choice) => {
            const available = checkChoiceConditions(choice.conditions);
            const lockedChoiceId = chosenPathByUnit[scene.id];
            const sceneAlreadyResolved = !!lockedChoiceId;
            const alreadyChosen = lockedChoiceId === choice.id;
            const disabled = !available || (sceneAlreadyResolved && !alreadyChosen);

            return (
              <button
                key={choice.id}
                type="button"
                disabled={disabled}
                onClick={async () => {
                  if (disabled) return;

                  const nextUrl = resolveNextUnitUrl(choice.nextUnitId);

                  if (sceneAlreadyResolved) {
                    if (alreadyChosen) router.push(nextUrl);
                    return;
                  }

                  applyChoice(choice.effects, choice.unlockArchive, choice.id);
                  setChosenPath(scene.id, choice.id);

                  const state = useGameStore.getState();
                  const hasGaugeChange =
                    !!choice.effects &&
                    Object.values(choice.effects).some(
                      (value) => typeof value === "number" && value !== 0
                    );
                  const hasArchiveUnlock = !!choice.unlockArchive;

                  if (hasGaugeChange || hasArchiveUnlock) {
                    addChoiceToHistory({
                      choiceId: choice.id,
                      unitId: scene.id,
                      chapterNumber: scene.chapterNumber,
                      unitNumber: scene.unitNumber,
                      sceneTitle: scene.title,
                      location: scene.location,
                      timeLabel: scene.timeLabel,
                      choiceLabel: choice.label,
                      otherOptions: scene.choices
                        .filter((c) => c.id !== choice.id)
                        .map((c) => c.label),
                      gaugesSnapshot: state.gauges,
                      gaugeChanges: choice.effects,
                      mentalStateSnapshot: state.mentalState,
                    });
                  }

                  const nextChapter = parseInt(choice.nextUnitId.split(".")[0], 10);
                  const nextUnit = choice.nextUnitId;

                  await saveProgress(nextChapter, nextUnit);

                  setTimeout(() => {
                    router.push(nextUrl);
                  }, hasGaugeChange || hasArchiveUnlock ? 800 : 0);
                }}
                className={`inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-bold uppercase tracking-widest shadow-lg transition-colors ${
                  alreadyChosen
                    ? "bg-emerald-500 text-white hover:bg-emerald-400"
                    : !disabled
                    ? "bg-amber-500 text-neutral-950 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
                    : "cursor-not-allowed bg-neutral-800 text-neutral-500 opacity-60"
                }`}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span>{choice.label}</span>
                  {alreadyChosen ? (
                    <span className="text-xs font-medium normal-case tracking-normal opacity-80">Choix déjà validé</span>
                  ) : choice.hint ? (
                    <span className="text-xs font-medium normal-case tracking-normal opacity-80">{choice.hint}</span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
