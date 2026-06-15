"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const FEATURES_FREE = [
  "Chapitres 1 à 3",
  "Sauvegardes automatiques",
  "Mode nuit inclus",
];

const FEATURES_PREMIUM = [
  "Chapitres 1 à 3 inclus",
  "Accès aux chapitres 4, 5, 6…",
  "Tous les embranchements narratifs",
  "Archives et documents secrets",
  "Sauvegardes automatiques",
  "Mode nuit inclus",
];

export default function AbonnementPage() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";
  const chapter = searchParams.get("chapter");

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      {/* Fond flouté */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/95 via-white/70 to-white/20 dark:from-[#050505] dark:via-[#0a0a0a]/80 dark:to-transparent" />
        <img
          src="/images/scenes/scene_thomas_Bureau.jpg"
          alt="Ambiance Après Mara"
          className="h-full w-full scale-105 object-cover opacity-20 blur-[3px] dark:opacity-30"
        />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-grow flex-col items-center justify-center px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full"
        >
          {/* Accroche contextuelle */}
          {chapter && (
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-orange-500 dark:text-orange-400">
              Le chapitre {chapter} est réservé aux abonnés
            </p>
          )}

          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-orange-600 dark:text-orange-400">
            Après Mara
          </span>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-neutral-950 md:text-6xl dark:text-white">
            Continue l'enquête
          </h1>
          <p className="mx-auto mb-14 max-w-xl text-lg font-light leading-relaxed text-neutral-600 dark:text-gray-400">
            Les chapitres 1 à 3 sont gratuits. Pour aller plus loin dans le dossier,
            débloque l'accès complet à l'histoire.
          </p>

          {/* Cartes */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">

            {/* Carte Gratuit */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col rounded-2xl border p-8 text-left"
              style={{
                borderColor: "rgba(128,128,128,0.2)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-neutral-400">
                Gratuit
              </p>
              <p className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
                0 €
              </p>
              <ul className="mb-8 flex-grow space-y-3 text-sm text-neutral-600 dark:text-gray-400">
                {FEATURES_FREE.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-neutral-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/lire"
                className="block w-full rounded-full border py-3 text-center text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-neutral-100 dark:hover:bg-white/10"
                style={{ borderColor: "rgba(128,128,128,0.3)" }}
              >
                Commencer à lire
              </Link>
            </motion.div>

            {/* Carte Premium */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative flex flex-col rounded-2xl p-8 text-left shadow-xl"
              style={{ backgroundColor: "var(--accent-neon)" }}
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-700 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow">
                Accès complet
              </span>

              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange-900">
                Premium
              </p>
              <div className="mb-6 flex items-end gap-2">
                <p className="text-3xl font-bold text-neutral-950">4,99 €</p>
                <p className="mb-1 text-sm text-orange-900">une seule fois</p>
              </div>

              <ul className="mb-8 flex-grow space-y-3 text-sm text-neutral-900">
                {FEATURES_PREMIUM.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Ce bouton sera remplacé par un lien Stripe au prochain step */}
              <button
                disabled
                className="block w-full cursor-not-allowed rounded-full bg-neutral-950 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white opacity-80"
              >
                Payer 4,99 € — bientôt disponible
              </button>
            </motion.div>
          </div>

          {/* Lien retour */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-sm text-neutral-400"
          >
            Déjà un compte ?{" "}
            <Link
              href={`/auth/connexion?redirect=${encodeURIComponent(redirect)}`}
              className="underline underline-offset-2 hover:text-orange-500 transition-colors"
            >
              Se connecter
            </Link>
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
