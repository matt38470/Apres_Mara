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
    barre: "bg-red-400",
    exemple: 80,
    description:
      "Le cartel tient les comptes. Chaque faveur refusée, chaque délai alourdit la balance. Quand la dette déborde, vos proches en paient le prix — pas vous.",
  },
  {
    nom: "Ancrage",
    couleur: "text-violet-400",
    dot: "bg-violet-400",
    barre: "bg-violet-400",
    exemple: 100,
    description:
      "Votre conjoint(e) est en stase. C'est ce qui vous maintient debout et ce qui vous rend vulnérable. Plus l'Ancrage faiblit, moins vous avez de raison de rentrer vivant.",
  },
  {
    nom: "Humanité",
    couleur: "text-amber-400",
    dot: "bg-amber-400",
    barre: "bg-amber-400",
    exemple: 50,
    description:
      "Ce qu'il vous reste d'empathie, de principes, de dégoût face à la corruption. Vance peut survivre sans. Mais l'état psychologique qui s'affiche à l'écran ne mentira pas.",
  },
];

export default function ReglesPage() {
  const router = useRouter();
  const { currentUnitId, choiceHistory, resetGame } = useGameStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const hasRunInProgress =
    mounted && choiceHistory.length > 0 && !!currentUnitId && currentUnitId !== "1.1.1";

  const handleContinue = () => router.push(`/read/1/${currentUnitId}`);
  const handleStartFresh = () => router.push("/read/1/1.1.1");
  const handleReset = () => { resetGame(); router.replace("/read/1/1.1.1"); };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 py-16 text-white selection:bg-amber-500/30 md:px-12">
      <div className="w-full max-w-2xl">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-amber-500">
            Le Cartel des Âmes
          </span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Comment jouer
          </h1>
          <p className="max-w-xl text-base font-light leading-relaxed text-neutral-400">
            Vous êtes Vance. Détective privé dans les bas-fonds de San Telmo.
            À chaque carrefour, vous choisissez — et trois jauges enregistrent
            silencieusement ce que vous devenez.
          </p>
        </motion.div>

        <div className="my-8 h-px w-full bg-white/10" />

        {/* Jauges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 space-y-4"
        >
          {JAUGES.map((j, i) => (
            <motion.div
              key={j.nom}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/8 bg-white/4 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className={`text-sm font-bold uppercase tracking-widest ${j.couleur}`}>
                  {j.nom}
                </h3>
                <span className="text-xs font-mono text-neutral-500">{j.exemple} / 100</span>
              </div>
              {/* Barre d'exemple */}
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${j.barre} transition-all`}
                  style={{ width: `${j.exemple}%` }}
                />
              </div>
              <p className="text-sm font-light leading-relaxed text-neutral-400">
                {j.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* État psychologique */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mb-10 rounded-xl border border-white/8 bg-white/4 p-5"
        >
          <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-neutral-400">
            État psychologique
          </h3>
          <p className="text-sm font-light leading-relaxed text-neutral-400">
            Un label dérivé de la combinaison de vos trois jauges s'affiche en permanence
            sous vos statistiques. <span className="italic text-neutral-300">Impassible. Fragile. Cynique. À bout.</span>{" "}
            Il ne juge pas — il constate. C'est souvent la seule chose honnête que Vance
            se dise à lui-même.
          </p>
        </motion.div>

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
                Reprendre l’enquête
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
              Commencer l’enquête
            </button>
          )}
        </motion.div>

      </div>
    </div>
  );
}
