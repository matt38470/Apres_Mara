"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { GaugeState, ChoiceHistoryEntry } from "@/src/store/gameStore";

const ARCHIVES_DB: Record<
  string,
  {
    id: string;
    name: string;
    role: string;
    status: string;
    tag: "TECH" | "HUMAIN" | "RISQUE";
    image: string;
    details: string[];
  }
> = {
  thomas_dossier: {
    id: "thomas_dossier",
    name: "THOMAS",
    role: "Analyste de données",
    status: "SUJET D'OBSERVATION",
    tag: "HUMAIN",
    image: "ThomasBureau",
    details: [
      "Employé depuis 8 ans au pôle supervision.",
      "Profil psychologique : méthodique, tendance à l'isolement en situation de crise.",
    ],
  },
  samirdossier: {
    id: "samirdossier",
    name: "SAMIR HADJ",
    role: "Direction Technique RFT",
    status: "ALLIÉ POTENTIEL",
    tag: "HUMAIN",
    image: "samirdossier",
    details: [
      "Rencontré en formation interministérielle.",
      "Expert en structures de charge.",
    ],
  },
  cartesixnoeuds: {
    id: "cartesixnoeuds",
    name: "CARTE – SIX NŒUDS",
    role: "Topologie du réseau",
    status: "DOCUMENT PARTIEL",
    tag: "TECH",
    image: "None",
    details: [
      "Cartographie incomplète des zones sensibles.",
      "Document utile pour anticiper les ruptures de flux.",
    ],
  },
  serveur_n4_rules: {
    id: "serveur_n4_rules",
    name: "SERVEUR N4 / RULES",
    role: "Règles de supervision",
    status: "ACCÈS FRAGMENTAIRE",
    tag: "RISQUE",
    image: "serveur_n4_rules",
    details: [
      "Contient des règles d'alerte et seuils de déclenchement.",
      "Peut révéler les angles morts du système.",
    ],
  },
};

const LOCKED_TEASERS = [
  { id: "cellule-13", name: "CELLULE-13", tag: "RISQUE" },
  { id: "rapport-sigma", name: "RAPPORT SIGMA", tag: "TECH" },
  { id: "contact-hassan", name: "CONTACT HASSAN", tag: "HUMAIN" },
];

const CHARACTER_DB = [
  {
    id: "thomas",
    name: "Thomas",
    role: "Analyste de données",
    status: "Sous tension",
    image: "char_thomas",
    relation: "Conscience interne du récit.",
    details: "Méthodique, fatigué, déjà légèrement en décalage avec l'institution.",
  },
  {
    id: "samir",
    name: "Samir Hadj",
    role: "Direction Technique RFT",
    status: "Confiance moyenne",
    image: "char_samir",
    relation: "Peut devenir relais ou point de rupture.",
    details: "Pragmatique, technique, plus lucide que la moyenne sur les dérives du système.",
  },
  {
    id: "mehdi",
    name: "Mehdi",
    role: "Contact secondaire",
    status: "À préciser",
    image: "None",
    relation: "Présence périphérique encore peu lisible.",
    details: "Fiche à enrichir dans les prochains chapitres.",
  },
  {
    id: "hassan",
    name: "Hassan",
    role: "Contact externe",
    status: "Non confirmé",
    image: "None",
    relation: "Figure de bordure, encore lointaine.",
    details: "Apparaîtra plus clairement au fil des décisions et déverrouillages.",
  },
];

interface ArchivesModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedArchives: string[];
  unlockedCharacters: string[];
  newArchives: string[];
  newCharacters: string[];
  markArchivesSeen: () => void;
  markCharactersSeen: () => void;
  choiceHistory: ChoiceHistoryEntry[];
  gauges: GaugeState;
  notes: string[];
  currentUnitId: string;
  onRestart: () => void;
}

type DeskTab = "dashboard" | "archives" | "historique" | "personnages";

function gaugeTone(value: number) {
  if (value >= 75) return "text-red-500";
  if (value <= 25) return "text-orange-500";
  return "text-neutral-600 dark:text-neutral-400";
}

function formatGaugeDelta(key: string, value?: number) {
  if (!value) return null;

  const labels: Record<string, string> = {
    dette: "Dette",
    ancrage: "Ancrage",
    humanite: "Humanité",
  };

  return `${value > 0 ? "+" : ""}${value} ${labels[key] ?? key}`;
}

export default function ArchivesModal({
  isOpen,
  onClose,
  unlockedArchives,
  unlockedCharacters,
  newArchives,
  newCharacters,
  markArchivesSeen,
  markCharactersSeen,
  choiceHistory,
  gauges,
  notes,
  currentUnitId,
  onRestart,
}: ArchivesModalProps) {
  const visibleCharacters = useMemo(() => {
    return CHARACTER_DB.filter((character) =>
      unlockedCharacters.includes(character.id)
    );
  }, [unlockedCharacters]);

  const [activeTab, setActiveTab] = useState<DeskTab>("dashboard");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    if (activeTab === "archives" && newArchives.length > 0) {
      markArchivesSeen();
    }

    if (activeTab === "personnages" && newCharacters.length > 0) {
      markCharactersSeen();
    }
  }, [
    activeTab,
    isOpen,
    newArchives.length,
    newCharacters.length,
    markArchivesSeen,
    markCharactersSeen,
  ]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!isOpen && (e.key === "d" || e.key === "D")) {
        return;
      }
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const unlockedArchiveData = useMemo(() => {
    return unlockedArchives.map((id) => ARCHIVES_DB[id]).filter(Boolean);
  }, [unlockedArchives]);

  const systemStatus = useMemo(() => {
    const values = Object.values(gauges);
    const critical = values.filter((v) => v >= 75 || v <= 25).length;

    if (critical >= 3) return "Instable";
    if (critical >= 1) return "Sous tension";
    return "Nominal";
  }, [gauges]);

  const latestEntries = [...choiceHistory].slice(-8).reverse();

  const tabs: { id: DeskTab; label: string }[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "archives", label: "Archives" },
    { id: "historique", label: "Historique" },
    { id: "personnages", label: "Personnages" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le bureau NW-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[101] h-screen w-full max-w-[980px] border-l border-black/10 bg-[#f7f5f0] text-neutral-900 shadow-2xl dark:border-white/10 dark:bg-[#0c0d10] dark:text-neutral-100"
          >
            <div className="flex h-full flex-col">
              <header className="border-b border-black/10 bg-white/70 px-5 py-4 md:px-6 dark:border-white/10 dark:bg-[#101216]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-orange-600 dark:text-orange-400">
                      Bureau NW-7
                    </div>
                    <h2 className="mt-1 text-lg font-semibold tracking-tight text-neutral-950 dark:text-white md:text-xl">
                      Console personnelle de Thomas
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Incident NW-7 · Statut : {systemStatus}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onRestart}
                      className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-600 transition hover:bg-red-500/15 dark:text-red-300 dark:hover:bg-red-500/20"
                    >
                      Recommencer
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-black/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 transition hover:border-orange-400/40 hover:text-orange-600 dark:border-white/10 dark:text-neutral-300 dark:hover:text-orange-300"
                    >
                      Fermer
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tabs.map((tab) => {
                    const badgeCount =
                      tab.id === "archives"
                        ? newArchives.length
                        : tab.id === "personnages"
                        ? newCharacters.length
                        : 0;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${
                          activeTab === tab.id
                            ? "bg-orange-500 text-white"
                            : "border border-black/10 bg-white/80 text-neutral-700 hover:border-orange-400/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-300"
                        }`}
                      >
                        {tab.label}

                        {badgeCount > 0 && (
                          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1.5 text-[10px] font-bold text-white shadow-md">
                            {badgeCount}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </header>

              <div className="flex-1 overflow-y-auto bg-transparent px-5 py-5 md:px-6">
                {activeTab === "dashboard" && (
                  <div className="space-y-6">
                    <section className="rounded-2xl border border-black/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                            Tableau de bord NW-7
                          </div>
                          <h3 className="mt-1 text-lg font-semibold text-neutral-950 dark:text-white">
                            Incident en cours d'analyse
                          </h3>
                        </div>

                        <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-300">
                          {systemStatus}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {([
                          ["Dette", gauges.dette],
                          ["Ancrage", gauges.ancrage],
                          ["Humanité", gauges.humanite],
                        ] as [string, number][]).map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-xl border border-black/10 bg-black/[0.03] p-3 dark:border-white/10 dark:bg-black/20"
                          >
                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                              {label}
                            </div>
                            <div className={`mt-2 text-2xl font-semibold ${gaugeTone(value)}`}>
                              {value}%
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl border border-black/10 bg-black/[0.03] p-3 dark:border-white/10 dark:bg-black/20">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                          Progression
                        </div>
                        <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                          Unité actuelle :{" "}
                          <span className="font-semibold text-neutral-950 dark:text-white">
                            {currentUnitId}
                          </span>
                        </div>
                      </div>
                    </section>

                    <section className="rounded-2xl border border-black/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                        Notes système
                      </div>
                      <div className="mt-4 space-y-3">
                        {notes.map((note, index) => (
                          <div
                            key={index}
                            className="rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm leading-relaxed text-neutral-700 dark:border-white/10 dark:bg-black/20 dark:text-neutral-300"
                          >
                            {note}
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === "archives" && (
                  <div className="space-y-6">
                    <section>
                      <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                        Documents débloqués
                      </div>

                      {unlockedArchiveData.length === 0 ? (
                        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 text-sm italic text-neutral-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
                          Aucun dossier déverrouillé pour le moment.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {unlockedArchiveData.map((data) => (
                            <div
                              key={data.id}
                              className="flex overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
                            >
                              <div className="w-28 shrink-0 border-r border-black/10 bg-black/[0.04] dark:border-white/10 dark:bg-black/30">
                                {data.image !== "None" ? (
                                  <img
                                    src={`/images/archives/${data.image}.jpg`}
                                    alt={data.name}
                                    className="h-52 w-full bg-black/[0.04] object-contain p-2 transition duration-300 dark:bg-black/30"
                                  />
                                ) : (
                                  <div className="flex h-full min-h-28 items-center justify-center text-2xl text-neutral-500 dark:text-neutral-600">
                                    ?
                                  </div>
                                )}
                              </div>

                              <div className="flex-1 p-4">
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                  <h3 className="font-semibold tracking-wide text-neutral-950 dark:text-white">
                                    {data.name}
                                  </h3>
                                  <span className="rounded-full border border-orange-500/30 px-2 py-1 text-[10px] font-bold uppercase text-orange-600 dark:text-orange-300">
                                    {data.tag}
                                  </span>
                                </div>

                                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                                  {data.role}
                                </p>

                                <div className="mt-3 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-2 py-1 text-[10px] font-bold uppercase text-red-600 dark:text-red-300">
                                  {data.status}
                                </div>

                                <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                  {data.details.map((detail, i) => (
                                    <li key={i} className="flex gap-2">
                                      <span className="text-orange-500 dark:text-orange-400">▪</span>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>

                    <section>
                      <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                        Réservé · chapitres suivants
                      </div>

                      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        {LOCKED_TEASERS.map((item) => (
                          <div
                            key={item.id}
                            className="rounded-2xl border border-dashed border-black/10 bg-white/50 p-4 opacity-70 dark:border-white/10 dark:bg-white/[0.02]"
                          >
                            <div className="text-sm font-semibold tracking-wide text-neutral-800 dark:text-neutral-300">
                              {item.name}
                            </div>
                            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                              {item.tag} · Réservé
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === "historique" && (
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                      Historique des décisions
                    </div>

                    {latestEntries.length === 0 ? (
                      <div className="rounded-2xl border border-black/10 bg-white/70 p-6 text-sm italic text-neutral-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
                        Aucune décision enregistrée pour le moment.
                      </div>
                    ) : (
                      latestEntries.map((entry) => {
                        const gaugeEffects = entry.gaugeChanges
                          ? Object.entries(entry.gaugeChanges)
                              .map(([key, val]) => formatGaugeDelta(key, val))
                              .filter(Boolean)
                          : [];

                        return (
                          <article
                            key={`${entry.choiceId}-${entry.unitId}`}
                            className="rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="text-sm font-semibold text-neutral-950 dark:text-white">
                                {entry.sceneTitle}
                              </div>
                              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                                {entry.timeLabel} · {entry.location}
                              </div>
                            </div>

                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                              {entry.choiceLabel}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {entry.mentalTone && (
                                <span className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300">
                                  {entry.mentalTone}
                                </span>
                              )}

                              {entry.mentalStateSnapshot && (
                                <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-300">
                                  {entry.mentalStateSnapshot}
                                </span>
                              )}
                            </div>

                            {gaugeEffects.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {gaugeEffects.map((effect, i) => (
                                  <span
                                    key={i}
                                    className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[10px] font-semibold text-orange-600 dark:text-orange-300"
                                  >
                                    {effect}
                                  </span>
                                ))}
                              </div>
                            )}
                          </article>
                        );
                      })
                    )}
                  </div>
                )}

                {activeTab === "personnages" && (
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                      Personnages / Contacts
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {visibleCharacters.length === 0 ? (
                        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 text-sm italic text-neutral-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
                          Aucun personnage identifié pour le moment.
                        </div>
                      ) : (
                        visibleCharacters.map((character) => {
                          const isNew = newCharacters.includes(character.id);

                          return (
                            <div
                              key={character.id}
                              className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
                            >
                              <div className="flex">
                                <div className="group relative w-80 min-h-52 shrink-0 border-r border-black/10 bg-black/[0.04] dark:border-white/10 dark:bg-black/40">
                                  {character.image !== "None" ? (
                                    <>
                                      <a
                                        href={`/images/characters/${character.image}.jpg`}
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full"
                                        title={`Télécharger ${character.name}`}
                                      >
                                        <img
                                          src={`/images/characters/${character.image}.jpg`}
                                          alt={character.name}
                                          className="h-52 w-full transform bg-black/[0.04] object-contain p-2 grayscale transition duration-300 group-hover:scale-[1.02] group-hover:grayscale-0 dark:bg-black/30"
                                        />
                                      </a>

                                      <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-md bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white/80 opacity-0 transition group-hover:opacity-100">
                                        Télécharger
                                      </div>
                                    </>
                                  ) : (
                                    <div className="flex h-full min-h-52 items-center justify-center text-2xl text-neutral-500 dark:text-neutral-600">
                                      ?
                                    </div>
                                  )}
                                </div>

                                <div className="flex-1 p-4">
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-neutral-950 dark:text-white">
                                      {character.name}
                                    </h3>
                                    {isNew && (
                                      <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-[10px] font-bold uppercase text-orange-600 dark:text-orange-300">
                                        Nouveau
                                      </span>
                                    )}
                                  </div>

                                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                                    {character.role}
                                  </p>

                                  <div className="mt-3 inline-block rounded-full border border-black/10 px-2 py-1 text-[10px] font-bold uppercase text-neutral-600 dark:border-white/10 dark:text-neutral-300">
                                    {character.status}
                                  </div>

                                  <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                                    {character.details}
                                  </p>

                                  <p className="mt-3 text-xs text-orange-600 dark:text-orange-300">
                                    {character.relation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
