"use client";

import { useState } from "react";
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
  "Accès prioritaire aux chapitres 4+ dès leur sortie",
  "Tous les embranchements narratifs",
  "Archives et documents secrets",
  "Scène exclusive à choisir — Chapitre 6 · La dette",
  "Sauvegardes automatiques",
  "Mode nuit inclus",
];

export default function AbonnementContent() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";
  const chapter = searchParams.get("chapter");
  const paymentStatus = searchParams.get("payment");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ redirect }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = `/auth/connexion?redirect=${encodeURIComponent(`/abonnement?redirect=${redirect}`)}`;
          return;
        }
        throw new Error(data.error ?? "Erreur inconnue");
      }

      window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-950 text-white selection:bg-amber-500/30">

      {/* Fond — même ambiance que la page d'accueil */}
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

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-grow flex-col items-center justify-center px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full"
        >

          {/* Feedbacks paiement */}
          {paymentStatus === "success" && (
            <div className="mx-auto mb-8 max-w-md rounded-xl border border-amber-500/30 bg-amber-500/10 px-6 py-4 text-sm font-medium text-amber-300">
              ✅ Paiement confirmé ! Ton accès prérelease est activé.
            </div>
          )}
          {paymentStatus === "cancelled" && (
            <div className="mx-auto mb-8 max-w-md rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-4 text-sm font-medium text-red-400">
              Paiement annulé. Tu peux réessayer quand tu veux.
            </div>
          )}

          {/* Accroche narrative — uniquement hors contexte feedback paiement */}
          {paymentStatus !== "success" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="mx-auto mb-14 max-w-xl"
            >
              <span className="mb-6 block text-xs font-bold uppercase tracking-[0.45em] text-amber-500">
                Après Mara
              </span>
              <blockquote className="mb-8 border-l-2 border-amber-500/40 pl-5 text-left">
                <p className="text-base font-light italic leading-relaxed text-neutral-300">
                  &laquo; Mara n'est pas morte comme tu le crois, Victor. &raquo;
                </p>
                <p className="mt-3 text-base font-light italic leading-relaxed text-neutral-300">
                  &laquo; Et la fillette qui la porte t'a déjà regardé dans les yeux. &raquo;
                </p>
                <footer className="mt-3 text-xs text-neutral-600">
                  Anna — Chapitre 3, scène finale
                </footer>
              </blockquote>
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                La suite est en cours d'écriture.
              </h1>
              <p className="text-lg font-light leading-relaxed text-neutral-400">
                Soutenez le projet maintenant et accédez aux prochains chapitres
                dès leur sortie — en avant-première, avant tout le monde.
              </p>
            </motion.div>
          )}

          {chapter && paymentStatus !== "success" && (
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-amber-400">
              Le chapitre {chapter} sera disponible dès sa sortie
            </p>
          )}

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            {/* Carte Gratuit */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-left"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-neutral-400">Gratuit</p>
              <p className="mb-6 text-3xl font-bold text-white">0 €</p>
              <ul className="mb-8 flex-grow space-y-3 text-sm text-neutral-400">
                {FEATURES_FREE.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-neutral-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/lire"
                className="block w-full rounded-full border border-white/20 py-3 text-center text-sm font-semibold uppercase tracking-widest text-neutral-300 transition-colors hover:border-white/40 hover:text-white"
              >
                Commencer à lire
              </Link>
            </motion.div>

            {/* Carte Prérelease */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative flex flex-col rounded-2xl bg-amber-500 p-8 text-left shadow-xl shadow-amber-500/20"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-700 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow">
                Offre Early Adopter
              </span>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-amber-900">Prérelease</p>
              <div className="mb-1 flex items-end gap-2">
                <p className="text-3xl font-bold text-neutral-950">2,99 €</p>
                <p className="mb-1 text-sm text-amber-900">une seule fois</p>
              </div>
              <p className="mb-6 text-xs text-amber-900/70">Prix réservé aux premiers lecteurs</p>
              <ul className="mb-8 flex-grow space-y-3 text-sm text-neutral-900">
                {FEATURES_PREMIUM.map((f) => {
                  const isExclusive = f.includes("Scène exclusive");
                  return (
                    <li key={f} className={`flex items-start gap-2 ${isExclusive ? "font-semibold" : ""}`}>
                      <span className={`mt-0.5 shrink-0 font-bold ${isExclusive ? "text-amber-800" : ""}`}>
                        {isExclusive ? "★" : "✓"}
                      </span>
                      {f}
                    </li>
                  );
                })}
              </ul>
              {error && (
                <p className="mb-3 rounded-lg bg-black/15 px-3 py-2 text-xs text-white">
                  {error}
                </p>
              )}
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="block w-full rounded-full bg-neutral-950 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white transition-opacity disabled:cursor-wait disabled:opacity-60"
              >
                {loading ? "Redirection..." : "Soutenir — 2,99 €"}
              </button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-sm text-neutral-500"
          >
            Déjà un compte ?{" "}
            <Link
              href={`/auth/connexion?redirect=${encodeURIComponent(redirect)}`}
              className="text-neutral-300 underline underline-offset-2 transition-colors hover:text-amber-400"
            >
              Se connecter
            </Link>
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
