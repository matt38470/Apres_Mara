"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SubscriptionPanelProps {
  hasPremium: boolean;
  premiumSince?: string | null;
  chaptersUnlocked: number[];
}

// Date limite early access : 15 octobre 2026
const EARLY_ACCESS_DEADLINE = new Date("2026-10-15T00:00:00");
const isEarlyAccess = new Date() < EARLY_ACCESS_DEADLINE;
const VIP_PRICE = isEarlyAccess ? "2,99 €" : "4,99 €";

export default function SubscriptionPanel({
  hasPremium,
  premiumSince,
  chaptersUnlocked,
}: SubscriptionPanelProps) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "vip" }),
      });
      const data = await res.json();
      if (data.url) {
        router.push(data.url);
      } else {
        setError(data.error ?? "Une erreur est survenue.");
        setLoading(false);
      }
    } catch {
      setError("Impossible de contacter le serveur de paiement.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Plan actuel */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500 dark:text-neutral-400">Accès actuel</span>
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-600 dark:text-amber-300">
          {hasPremium ? "VIP · Chapitres 1–10" : "Chapitres 1‑3 · Gratuit"}
        </span>
      </div>

      {/* Date d'achat si premium */}
      {hasPremium && premiumSince && (
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Accès VIP actif depuis le{" "}
          {new Date(premiumSince).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          .
        </p>
      )}

      {/* Chapitres débloqués */}
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
              Chapitres 1 à 3
            </span>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Accès gratuit, pour toujours.
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
            Débloquer la suite
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
                    VIP — Chapitres 4 à 10
                  </span>
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-600 dark:text-amber-300">
                    {isEarlyAccess ? "Early access" : "Disponible"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Accès permanent aux chapitres 4 à 10 dès leur sortie.
                </p>
                {isEarlyAccess && (
                  <p className="mt-1.5 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                    Prix normal : 4,99 € dès le 15 octobre 2026
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
                Tu vas être redirigé(e) vers la page de paiement pour :
                <strong className="block mt-1">
                  VIP — Chapitres 4 à 10 — {VIP_PRICE}
                  {isEarlyAccess && " (early access)"}
                </strong>
              </p>
              {error && (
                <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
              )}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => { setShowConfirm(false); setError(null); }}
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:border-amber-400/30 transition disabled:opacity-50"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] bg-amber-500 hover:bg-amber-600 text-white transition disabled:opacity-60 disabled:cursor-wait"
                >
                  {loading ? "Chargement..." : "Continuer"}
                </button>
              </div>
            </div>
          )}
        </>
      )}

    </div>
  );
}
