"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoverPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-white selection:bg-amber-500/30">

      {/* Fond atmosphérique — ruelle pavée sous la pluie */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
        <img
          src="https://picsum.photos/seed/santelmo-noir/1400/900"
          alt=""
          aria-hidden="true"
          width="1400"
          height="900"
          loading="eager"
          className="h-full w-full object-cover opacity-25 blur-[1px] saturate-0"
        />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-grow flex-col items-start justify-center px-6 py-16 md:px-10">

        {/* Surtitre */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 block text-xs font-bold uppercase tracking-[0.45em] text-amber-500"
        >
          Roman interactif &nbsp;·&nbsp; Tome 1
        </motion.span>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="mb-10 text-6xl font-bold leading-none tracking-tight text-white md:text-8xl"
        >
          Après
          <br />
          <span className="text-amber-400">Mara</span>
        </motion.h1>

        {/* Accroche */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="mb-12 max-w-xl space-y-5"
        >
          <p className="text-lg font-light leading-relaxed text-neutral-300">
            San Telmo, futur proche. Les consciences s'arrachent, se fractionnent,
            se vendent. Mourir n'est plus une fin —{" "}
            <span className="font-semibold text-white">c'est devenir une matière première</span>.
          </p>

          <p className="text-lg font-light leading-relaxed text-neutral-300">
            Victor Vance enquête pour le Cartel. Une nuit au bord des quais,
            une voix d'enfant sort d'une gorge d'adulte — et un bracelet rouge
            dans sa poche lui rappelle qu'il a déjà enterré quelqu'un
            qui n'aurait peut-être pas dû l'être.
          </p>

          <p className="text-lg font-light italic leading-relaxed text-neutral-400">
            Sa fille a disparu. Certaines traces refusent de mourir.
            Jusqu'où irez-vous pour savoir ce qu'il reste d'elle ?
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/lire"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-neutral-950 shadow-lg transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            Commencer l'enquête
          </Link>
          <Link
            href="/regles"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-neutral-300 transition-colors hover:border-white/50 hover:text-white"
          >
            Comment jouer
          </Link>
        </motion.div>

        {/* Indicateur chapitres gratuits */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 text-xs font-medium tracking-widest text-neutral-500 uppercase"
        >
          3 chapitres gratuits &nbsp;·&nbsp; Prérelease — soutenez la suite
        </motion.p>

      </main>
    </div>
  );
}
