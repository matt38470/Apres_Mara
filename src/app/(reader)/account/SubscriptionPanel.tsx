"use client";

import { useState } from "react";

interface SubscriptionPanelProps {
  hasPremium: boolean;
  premiumSince?: string | null;
  chaptersUnlocked: number[];
}

// Date limite early access : 15 octobre 2026
const EARLY_ACCESS_DEADLINE = new Date("2026-10-15T00:00:00");
const isEarlyAccess = new Date() < EARLY_ACCESS_DEADLINE;
const VIP_PRICE = isEarlyAccess ? "2,99\u00a0\u20ac" : "4,99\u00a0\u20ac";

export default function SubscriptionPanel({
  hasPremium,
  premiumSince,
  chaptersUnlocked,
}: SubscriptionPanelProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex flex-col gap-4">

      {/* Plan actuel */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500 dark:text-neutral-400">Acc\u00e8s actuel</span>
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-600 dark:text-amber-300">
          {hasPremium ? "VIP \u00b7 Chapitres 1\u201310" : "Chapitres 1\u20113 \u00b7 Gratuit"}
        </span>
      </div>

      {/* Date d'achat si premium */}
      {hasPremium && premiumSince && (
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Acc\u00e8s VIP actif depuis le{" "}
          {new Date(premiumSince).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          .
        </p>
      )}

      {/* Chapitres d\u00e9bloqu\u00e9s */}
      {chaptersUnlocked.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {chaptersUnlocked.map((ch) => (
            <span
              key={ch}
              className="rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400"
            >
              Chapitre {ch}
            </span>
          ))}
        </div>
      )}

      <div className="h-px bg-black/10 dark:bg-white/10" />

      {/* Offre gratuite */}
      <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Chapitres 1 \u00e0 3
            </span>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Acc\u00e8s gratuit, pour toujours.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            Gratuit
          </span>
        </div>
      </div>

      {/* Offre VIP */}
      {!hasPremium && (
        <>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
            D\u00e9bloquer la suite
          </p>

          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            className="w-full rounded-xl border border-amber-500/50 bg-amber-500/[0.06] hover:bg-amber-500/10 p-4 text-left transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    VIP \u2014 Chapitres 4 \u00e0 10
                  </span>
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-600 dark:text-amber-300">
                    {isEarlyAccess ? "Early access" : "Disponible"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Acc\u00e8s permanent aux chapitres 4 \u00e0 10 d\u00e8s leur sortie.
                </p>
                {isEarlyAccess && (
                  <p className="mt-1.5 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                    Prix normal\u00a0: 4,99\u00a0\u20ac d\u00e8s le 15\u00a0octobre\u00a02026
                  </p>
                )}
              </div>
              <span className="shrink-0 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {VIP_PRICE}
              </span>
            </div>
          </button>

          {/* Confirmation paiement */}
          {showConfirm && (
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 flex flex-col gap-3">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Tu vas \u00eatre redirig\u00e9(e) vers la page de paiement pour\u00a0:
                <strong className="block mt-1">
                  VIP \u2014 Chapitres 4 \u00e0 10 \u2014 {VIP_PRICE}
                  {isEarlyAccess && " (early access)"}
                </strong>
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:border-amber-400/30 transition"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // TODO: rediriger vers Stripe Checkout
                    alert("Paiement Stripe \u00e0 connecter.");
                    setShowConfirm(false);
                  }}
                  className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] bg-amber-500 hover:bg-amber-600 text-white transition"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}
        </>
      )}

    </div>
  );
}
