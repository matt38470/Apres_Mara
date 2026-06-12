import type { MentalState } from "@/src/store/gameStore";
import type { DeskJournalEntry } from "@/src/types/narrative";

type JournalTone = NonNullable<DeskJournalEntry["tone"]>;

export type MentalStateConfig = {
  label: string;
  quickNote: string;
  journalTone: JournalTone;
  statusLabel: string;
  blockedChoiceThemes: string[];
  narrativeCue: string;
};

// IMPORTANT : Les clés ici DOIVENT correspondre exactement 
// au type MentalState ("lucide", "stable", "tourmente", "visionnaire", "fracture")
export const MENTAL_STATE_CONFIG: Record<MentalState, MentalStateConfig> = {
  lucide: {
    label: "Lucide",
    quickNote: "Esprit clair : détachement émotionnel maintenu.",
    journalTone: "lucid",
    statusLabel: "Impassible",
    blockedChoiceThemes: [],
    narrativeCue: "Vance analyse la situation avec la froideur d'un professionnel habitué à la mort.",
  },

  stable: {
    label: "Stable",
    quickNote: "État contrôlé : la fatigue se fait sentir mais la raison domine.",
    journalTone: "lucid", // Ou "focused" selon vos préférences
    statusLabel: "Concentré",
    blockedChoiceThemes: [],
    narrativeCue: "Malgré l'urgence, Vance parvient à garder les idées claires.",
  },

  tourmente: {
    label: "Tourmenté",
    quickNote: "Faille émotionnelle : les souvenirs d'Anna parasitent l'enquête.",
    journalTone: "anxious",
    statusLabel: "À vif",
    blockedChoiceThemes: ["froideur", "détachement clinique", "cynisme absolu"],
    narrativeCue: "La frontière entre le travail et la douleur personnelle commence à s'estomper.",
  },

  visionnaire: {
    label: "Visionnaire",
    quickNote: "Décrochage du réel : perceptions accrues, rationalité compromise.",
    journalTone: "focused", // Ou un nouveau ton si vous le créez, ex: "feverish"
    statusLabel: "Halluciné",
    blockedChoiceThemes: ["logique pure", "diplomatie standard"],
    narrativeCue: "Les murs de San Telmo semblent respirer. Vance perçoit les échos des âmes plutôt que la réalité matérielle.",
  },

  fracture: {
    label: "Fracture",
    quickNote: "Effondrement mental : perte totale des repères.",
    journalTone: "cold",
    statusLabel: "Brisé",
    blockedChoiceThemes: ["négociation", "raisonnement", "empathie"],
    narrativeCue: "Vance ne voit plus qu'un monde de cadavres vides et d'âmes hurlantes.",
  },
};

export function getMentalStateConfig(state: MentalState): MentalStateConfig {
  // Sécurité supplémentaire : si l'état n'existe pas, on renvoie "stable" par défaut
  // Cela évitera les plantages d'écran blanc à l'avenir !
  return MENTAL_STATE_CONFIG[state] || MENTAL_STATE_CONFIG["stable"];
}