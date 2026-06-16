"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/src/store/gameStore";
import { useEffect, useState } from "react";

const JAUGES = [
  {
    nom: "Dette",
    couleur: "text-red-400",
    dot: "bg-red-400",
    description:
      "Le cartel compte. Chaque faveur refusée, chaque délai alourdit la balance. Quand la dette déborde, vos proches en paient le prix.",
  },
  {
    nom: "Réputation",
    couleur: "text-amber-400",
    dot: "bg-amber-400",
    description:
      "Les bas-fonds de San Telmo ont une mémoire longue. Trahir un témoin, soudoyer un officier — ça se sait. Ça se retourne contre vous.",
  },
  {
    nom: "Stabilité mentale",
    couleur: "text-sky-400",
    dot: "bg-sky-400",
    description:
      "Vous avez vu des choses que la plupart des gens ne verront jamais. Chaque vérité arrachée à l'ombre coûte quelque chose.",
  },
  {
    nom: "Intégrité morale",
    couleur: "text-emerald-400",
    dot: "bg-emerald-400",
    description:
      "Jusqu'où êtes-vous prêt à aller\u00a0? Corruption, mensonge, sacrifice d'un innocent. Chaque compromis laisse une trace permanente.",
  },
  {
    nom: "Attachement",
    couleur: "text-violet-400",
    dot: "bg-violet-400",
    description:
      "Votre conjoint(e) est en stase. C'est votre ancre et votre point faible. Plus vous vous en rapprochez, plus le cartel s'en approche aussi.",
  },
];

export default function ReglesPage() {
  const router = useRouter();
  const { currentUnitId, choiceHistory, resetGame } = useGameStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasRunInProgress =
    mounted &&
    choiceHistory.length > 0 &&
    !!currentUnitId &&
    currentUnitId !== "1.1.1";

  const handleContinue = () => router.push(`/read/1/${currentUnitId}`);
  const handleStartFresh = () => router.push("/read/1/1.1.1");
  const handleReset = () => { resetGame(); router.replace("/read/1/1.1.1"); };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 py-16 text-white selection:bg-amber-500/30 md:px-12">
      <div className="w-full max-w-3xl">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-amber-500">
            Le Cartel des Âmes
          </span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Comment jouer
          </h1>
          <p className="max-w-xl text-base font-light leading-relaxed text-neutral-400">
            Ce roman est interactif. À chaque carrefour, vous choisissez — et vos choix
            modifient cinq jauges discrètes qui façonnent votre parcours et déterminent
            la fin que vous méritez.
          </p>
        </motion.div>

        {/* Séparateur */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Jauges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 space-y-5"
        >
          {JAUGES.map((j, i) => (
            <motion.div
              key={j.nom}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
              className="flex gap-5 rounded-xl border border-white/8 bg-white/4 p-5"
            >
              <span className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${j.dot}`} />
              <div>
                <h3 className={`mb-1 text-sm font-bold uppercase tracking-widest ${j.couleur}`}>
                  {j.nom}
                </h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400">
                  {j.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note de ton */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12 max-w-xl text-sm italic leading-relaxed text-neutral-500"
        >
          Les jauges ne s'affichent pas à l'écran. Vous les sentirez peser
          dans les dialogues, dans les portes qui se ferment, dans les silences
          de ceux qui vous observent.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-start gap-4"
        >
          {mounted && hasRunInProgress ? (
            <>
              <button
                type="button"
                onClick={handleContinue}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-neutral-950 shadow-lg transition-colors hover:bg-amber-400"
              >
                Reprendre l'enquête
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs uppercase tracking-widest text-neutral-600 transition-colors hover:text-neutral-400"
              >
                Recommencer depuis le début
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleStartFresh}
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-neutral-950 shadow-lg transition-colors hover:bg-amber-400"
            >
              Commencer l'enquête
            </button>
          )}
        </motion.div>

      </div>
    </div>
  );
}
