import type { AccessLevel, EntitlementKey } from "./access";

export type GaugeKey =
  | "dette"       // Remplace "alerte/charge" (Ressource externe)
  | "ancrage"     // Remplace "integrite/cohesion" (Santé mentale)
  | "humanite";   // Remplace "preparation/discretion" (Polarité morale : Cynisme vs Empathie)

export interface GaugeEffects {
  dette?: number;
  ancrage?: number;
  humanite?: number;
}

export type StateEffect = {
  key: GaugeKey;
  delta: number;
};

export type ConditionKey = GaugeKey | "mentalState" | "archives";

export type Condition = {
  key: ConditionKey;
  operator: "eq" | "neq" | "gte" | "lte" | "includes";
  value: string | number | boolean;
};

export type Unlock = {
  type: "memory" | "archive" | "history";
  id: string;
};

export interface DeskJournalEntry {
  summary: string;
  tone?: "lucid" | "anxious" | "cold" | "focused";
  tags?: string[];
}

export interface DeskCharacterUnlock {
  id: string;
  note?: string;
}

export interface DeskUpdate {
  systemNotes?: string[];
  journalEntry?: DeskJournalEntry;
  unlockArchives?: string[];
  unlockCharacters?: DeskCharacterUnlock[];
}

export type NarrativeChoice = {
  id: string;
  label: string;
  hint?: string;
  nextUnitId: string;
  effects?: GaugeEffects;
  conditions?: Condition[];
  unlockArchive?: string;
  journalNote?: string;
  systemNote?: string;
  unlockCharacterId?: string;
};

export type NarrativeUnit = {
  id: string;
  chapterId: string;
  chapterNumber: number;
  unitNumber: string;
  title: string;
  location: string;
  timeLabel: string;
  accessLevel: AccessLevel;
  countdownVisible?: boolean;
  countdownLabel?: string;
  textBlocks: string[];
  imagePrompt?: string;
  choices: NarrativeChoice[];
  unlocks?: Unlock[];
  deskUpdate?: DeskUpdate;
};

export type Chapter = {
  id: string;
  chapterNumber: number;
  title: string;
  accessLevel: AccessLevel;
  requiredEntitlement?: EntitlementKey;
  teaser?: string;
  unitIds: string[];
};
