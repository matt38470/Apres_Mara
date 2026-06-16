"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const VIP_DEADLINE = new Date("2025-08-31T23:59:59+02:00");

function useCountdown(deadline: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function update() {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  return timeLeft;
}

export default function AcheterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<"vip" | "standard" | null>(null);
  const countdown = useCountdown(VIP_DEADLINE);
  const vipExpired = VIP_DEADLINE.getTime() < Date.now();

  async function handleCheckout(plan: "vip" | "standard") {
    setLoading(plan);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else if (res.status === 401) {
        router.push("/auth/connexion?redirect=/acheter");
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <main
      className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-16"
      style={{ color: "var(--foreground)" }}
    >
      <div className="mb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-3">Après Mara</p>
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          Accès complet
        </h1>
        <p className="text-base opacity-60 max-w-md mx-auto">
          Débloquez l’intégralité de l’histoire et soutenez la rédaction de la suite.
        </p>
      </div>

      <div className="flex flex-col gap-6">

        {/* Offre VIP */}
        {!vipExpired && (
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              border: "1px solid rgba(224,159,62,0.5)",
              backgroundColor: "rgba(224,159,62,0.06)",
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: "var(--accent-neon)", color: "#0d1317" }}
                  >
                    Offre VIP
                  </span>
                  <span className="text-xs opacity-40">Jusqu’au 31 août</span>
                </div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-merriweather)" }}>
                  2,99 €
                </h2>
                <p className="text-xs opacity-40 mt-1">paiement unique</p>
              </div>

              {/* Countdown */}
              <div className="text-right">
                <p className="text-xs opacity-40 mb-2 uppercase tracking-widest">Offre expire dans</p>
                <div className="flex gap-2">
                  {[
                    { v: countdown.days, l: "j" },
                    { v: countdown.hours, l: "h" },
                    { v: countdown.minutes, l: "m" },
                    { v: countdown.seconds, l: "s" },
                  ].map(({ v, l }) => (
                    <div key={l} className="flex flex-col items-center">
                      <span
                        className="rounded-lg px-2 py-1 text-sm font-bold tabular-nums min-w-[2rem] text-center"
                        style={{ backgroundColor: "rgba(224,159,62,0.15)" }}
                      >
                        {String(v).padStart(2, "0")}
                      </span>
                      <span className="text-xs opacity-40 mt-1">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <span style={{ color: "var(--accent-neon)" }}>✓</span>
                Accès complet à tous les chapitres
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "var(--accent-neon)" }}>✓</span>
                Statut VIP visible sur votre compte
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "var(--accent-neon)" }}>✓</span>
                Accès anticipé aux nouveaux chapitres avant publication
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "var(--accent-neon)" }}>✓</span>
                Participation à la rédaction d’une scène (chapitre 4 ou 5)
              </li>
              <li className="flex items-center gap-2 opacity-50">
                <span>→</span>
                Prix passera à 4,99 € le 1er septembre
              </li>
            </ul>

            <button
              onClick={() => handleCheckout("vip")}
              disabled={loading !== null}
              className="w-full rounded-xl py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-80 disabled:opacity-50"
              style={{ backgroundColor: "var(--accent-neon)", color: "#0d1317" }}
            >
              {loading === "vip" ? "Redirection..." : "Obtenir l’accès VIP — 2,99 €"}
            </button>
          </div>
        )}

        {/* Offre Standard */}
        <div
          className="rounded-2xl p-8"
          style={{
            border: "1px solid rgba(128,128,128,0.15)",
            backgroundColor: "rgba(128,128,128,0.04)",
          }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-merriweather)" }}>
              4,99 €
            </h2>
            <p className="text-xs opacity-40">paiement unique</p>
          </div>

          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center gap-2">
              <span className="opacity-60">✓</span>
              Accès complet à tous les chapitres
            </li>
          </ul>

          <button
            onClick={() => handleCheckout("standard")}
            disabled={loading !== null}
            className="w-full rounded-xl py-3 text-sm font-semibold uppercase tracking-widest transition-all hover:opacity-70 disabled:opacity-50"
            style={{ border: "1px solid rgba(128,128,128,0.3)" }}
          >
            {loading === "standard" ? "Redirection..." : "Obtenir l’accès — 4,99 €"}
          </button>
        </div>

      </div>

      <p className="mt-8 text-center text-xs opacity-30">
        Paiement sécurisé par Stripe. Aucun abonnement — paiement unique.
      </p>
    </main>
  );
}
