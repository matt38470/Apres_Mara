"use client";

import { useState } from "react";

type Plan = "gratuit" | "chapitre" | "serie";

interface SubscriptionPanelProps {
  plan: Plan;
  chaptersUnlocked: number[];
}

const PLANS = [
  {
    id: "gratuit" as Plan,
    label: "Gratuit",
    price: "0 €",
    description: "Accès au chapitre 1 complet.",
    badge: null,
  },
  {
    id: "chapitre" as Plan,
    label: "Chapitre 2",
    price: "4,99 €",
    description: "Accès permanent au chapitre 2.",
    badge: "Disponible",
  },
  {
    id: "serie" as Plan,
    label: "Série complète",
    price: "14,99 €",
    description: "Accès à tous les chapitres à venir.",
    badge: "Meilleure offre",
  },
];

export default function SubscriptionPanel({ plan, chaptersUnlocked }: SubscriptionPanelProps) {
  const [selected, setSelected] = useState<Plan | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleSelect(id: Plan) {
    if (id === plan) return;
    setSelected(id);
    setShowConfirm(true);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Plan actuel */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500 dark:text-neutral-400">Accès actuel</span>
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-600 dark:text-amber-300">
          {plan === "gratuit" ? "Chapitre 1 · Gratuit" : plan === "chapitre" ? "Chapitre 2 débloqué" : "Série complète"}
        </span>
      </div>

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

      {/* Offres */}
      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
        Débloquer la suite
      </p>

      <div className="flex flex-col gap-3">
        {PLANS.filter((p) => p.id !== "gratuit").map((p) => {
          const isOwned = plan === "serie" || (plan === "chapitre" && p.id === "chapitre");
          return (
            <button
              key={p.id}
              type="button"
              disabled={isOwned}
              onClick={() => handleSelect(p.id)}
              className={`w-full rounded-xl border p-4 text-left transition-all ${
                isOwned
                  ? "border-amber-500/30 bg-amber-500/[0.06] opacity-70 cursor-default"
                  : "border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-amber-500/40 hover:bg-amber-500/[0.04] cursor-pointer"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {p.label}
                    </span>
                    {isOwned && (
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-600 dark:text-amber-300">
                        Déjà débloqué
                      </span>
                    )}
                    {p.badge && !isOwned && (
                      <span className="rounded-full border border-black/10 dark:border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase text-neutral-500 dark:text-neutral-400">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {p.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  {p.price}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modale confirmation (placeholder — à brancher sur Stripe) */}
      {showConfirm && selected && (
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 flex flex-col gap-3">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Tu vas être redirigé(e) vers la page de paiement pour :
            <strong className="block mt-1">
              {PLANS.find((p) => p.id === selected)?.label} — {PLANS.find((p) => p.id === selected)?.price}
            </strong>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => { setShowConfirm(false); setSelected(null); }}
              className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:border-amber-400/30 transition"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={() => {
                // TODO: rediriger vers Stripe Checkout
                alert("Paiement Stripe à connecter.");
                setShowConfirm(false);
                setSelected(null);
              }}
              className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] bg-amber-500 hover:bg-amber-600 text-white transition"
            >
              Continuer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
