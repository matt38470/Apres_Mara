import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GaugeEffects } from "@/src/types/narrative";
import { getMentalStateConfig } from "@/mentalStateConfig";

export interface GaugeState {
  dette: number;      // ex: commence à 80 (forte pression)
  ancrage: number;    // ex: commence à 100 (esprit sain)
  humanite: number;   // ex: 50 (neutre)
}

export type MentalState =
  | "lucide"
  | "tourmente"
  | "visionnaire"
  | "pression"
  | "fracture"
  | "stable"

export interface ChoiceHistoryEntry {
  choiceId: string;
  unitId: string;
  chapterNumber: number;
  unitNumber: string;
  sceneTitle: string;
  location: string;
  timeLabel: string;
  choiceLabel: string;
  otherOptions?: string[];
  gaugesSnapshot: GaugeState;
  gaugeChanges?: GaugeEffects;
  mentalStateSnapshot?: MentalState;
  mentalTone?: "lucid" | "anxious" | "cold" | "focused";
}

export interface GameState {
  gauges: GaugeState;
  currentUnitId: string;
  mentalState: MentalState;
  quickNote: string;
  archives: string[];
  settings: {
    soundEnabled: boolean;
    textSpeed: number;
    fontSize: number;
    fontFamily: "sans" | "serif" | "mono";
  };
  lastEffects: GaugeEffects | null;
  madeChoices: string[];
  choiceHistory: ChoiceHistoryEntry[];
  unlockedCharacters: string[];
  newArchives: string[];
  newCharacters: string[];
  chosenPathByUnit: Record<string, string>;

  setChosenPath: (unitId: string, choiceId: string) => void;
  applyChoice: (effects?: GaugeEffects, newArchive?: string, choiceId?: string) => void;
  addChoiceToHistory: (entry: ChoiceHistoryEntry) => void;
  clearLastEffects: () => void;
  resetGame: () => void;
  updateSettings: (newSettings: Partial<GameState["settings"]>) => void;
  setCurrentUnitId: (unitId: string) => void;
  addArchives: (archiveIds: string[]) => void;
  addCharacters: (characterIds: string[]) => void;
  markArchivesSeen: () => void;
  markCharactersSeen: () => void;
}

const initialGauges: GaugeState = {
  dette: 80,
  ancrage: 100,
  humanite: 50,
};

const initialArchives: string[] = [];
const initialChoices: string[] = [];
const initialUnlockedCharacters: string[] = [];
const initialNewArchives: string[] = [];
const initialNewCharacters: string[] = [];

function clampGauge(value: number) {
  return Math.min(100, Math.max(0, value));
}

function computeMentalState(gauges: GaugeState): MentalState {
  const { ancrage } = gauges;

  
  if (ancrage < 10 ) {
    return "visionnaire";
  }

  if (ancrage < 30 ) {
    return "visionnaire";
  }

  if (ancrage < 50 ) {
    return "tourmente";
  }

  if (ancrage <= 80 ) {
    return "stable";
  }

  return "lucide";
  };

function getQuickNoteFromMentalState(state: MentalState): string {
  return getMentalStateConfig(state).quickNote;
}

const initialMentalState = computeMentalState(initialGauges);
const initialQuickNote = getQuickNoteFromMentalState(initialMentalState);

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      unlockedCharacters: initialUnlockedCharacters,
      newArchives: initialNewArchives,
      newCharacters: initialNewCharacters,
      gauges: initialGauges,
      currentUnitId: "1.1.1",
      mentalState: initialMentalState,
      quickNote: initialQuickNote,
      archives: initialArchives,
      settings: {
        soundEnabled: true,
        textSpeed: 50,
        fontSize: 18,
        fontFamily: "sans",
      },
      lastEffects: null,
      madeChoices: initialChoices,
      choiceHistory: [],
      chosenPathByUnit: {},

      setChosenPath: (unitId, choiceId) =>
        set((state) => ({
          chosenPathByUnit: {
            ...state.chosenPathByUnit,
            [unitId]: choiceId,
          },
        })),

      applyChoice: (effects, newArchive, choiceId) =>
        set((state) => {
          if (choiceId && state.madeChoices.includes(choiceId)) {
            return state;
          }

          const updatedArchives =
            newArchive && !state.archives.includes(newArchive)
              ? [...state.archives, newArchive]
              : state.archives;

          const updatedChoices = choiceId
            ? [...state.madeChoices, choiceId]
            : state.madeChoices;

          const nextGauges: GaugeState = {
            dette: clampGauge(state.gauges.dette + (effects?.dette || 0)),
            ancrage: clampGauge(state.gauges.ancrage + (effects?.ancrage || 0)),
            humanite: clampGauge(state.gauges.humanite + (effects?.humanite || 0)),
          };

          const nextMentalState = computeMentalState(nextGauges);
          const nextQuickNote = getQuickNoteFromMentalState(nextMentalState);

          return {
            archives: updatedArchives,
            madeChoices: updatedChoices,
            lastEffects: effects || null,
            gauges: nextGauges,
            mentalState: nextMentalState,
            quickNote: nextQuickNote,
          };
        }),

      addArchives: (archiveIds) =>
        set((state) => {
          const fresh = archiveIds.filter((id) => !state.archives.includes(id));
          if (fresh.length === 0) return state;

          return {
            archives: [...state.archives, ...fresh],
            newArchives: [...state.newArchives, ...fresh],
          };
        }),

      addCharacters: (characterIds) =>
        set((state) => {
          const fresh = characterIds.filter((id) => !state.unlockedCharacters.includes(id));
          if (fresh.length === 0) return state;

          return {
            unlockedCharacters: [...state.unlockedCharacters, ...fresh],
            newCharacters: [...state.newCharacters, ...fresh],
          };
        }),

      markArchivesSeen: () => set({ newArchives: [] }),
      markCharactersSeen: () => set({ newCharacters: [] }),

      addChoiceToHistory: (entry) =>
        set((state) => ({
          choiceHistory: [...state.choiceHistory, entry],
        })),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      setCurrentUnitId: (unitId) => set({ currentUnitId: unitId }),

      clearLastEffects: () => set({ lastEffects: null }),

      resetGame: () =>
        set((state) => ({
          unlockedCharacters: [],
          newArchives: [],
          newCharacters: [],
          gauges: initialGauges,
          currentUnitId: "1.1.1",
          mentalState: initialMentalState,
          quickNote: initialQuickNote,
          archives: [],
          madeChoices: [],
          lastEffects: null,
          choiceHistory: [],
          chosenPathByUnit: {},
          settings: state.settings,
        })),
    }),
    {
      name: "game-storage",
    }
  )
);