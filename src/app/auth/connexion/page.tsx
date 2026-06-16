"use client";

import { useState } from "react";
import { createClient } from "@/src/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ConnexionPage() {
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Email ou mot de passe incorrect.");
      } else {
        router.push(redirect);
        router.refresh();
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
      });
      if (error) {
        setError("Erreur lors de l'inscription : " + error.message);
      } else {
        setMessage("Un email de confirmation t'a été envoyé. Vérifie ta boîte mail.");
      }
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>

      <div className="w-full max-w-md">

        {/* Titre */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6 text-sm opacity-50 hover:opacity-80 transition-opacity">
            ← Retour
          </Link>
          <h1 className="font-serif text-3xl mb-2" style={{ fontFamily: "var(--font-merriweather)" }}>
            Après Mara
          </h1>
          <p className="text-sm opacity-60">
            {mode === "login" ? "Connecte-toi pour continuer ta lecture" : "Crée ton compte"}
          </p>
        </div>

        {/* Onglets login / inscription */}
        <div className="flex mb-8 border-b" style={{ borderColor: "rgba(var(--foreground), 0.15)" }}>
          <button
            onClick={() => { setMode("login"); setError(null); setMessage(null); }}
            className="flex-1 py-2 text-sm transition-all"
            style={{
              borderBottom: mode === "login" ? "2px solid var(--accent-neon)" : "2px solid transparent",
              color: mode === "login" ? "var(--accent-neon)" : "inherit",
              opacity: mode === "login" ? 1 : 0.5,
            }}
          >
            Connexion
          </button>
          <button
            onClick={() => { setMode("signup"); setError(null); setMessage(null); }}
            className="flex-1 py-2 text-sm transition-all"
            style={{
              borderBottom: mode === "signup" ? "2px solid var(--accent-neon)" : "2px solid transparent",
              color: mode === "signup" ? "var(--accent-neon)" : "inherit",
              opacity: mode === "signup" ? 1 : 0.5,
            }}
          >
            Créer un compte
          </button>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-widest opacity-50">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              className="w-full px-4 py-3 rounded text-sm outline-none transition-all"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(128,128,128,0.3)",
                color: "var(--foreground)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent-neon)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(128,128,128,0.3)")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-widest opacity-50">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded text-sm outline-none transition-all"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(128,128,128,0.3)",
                color: "var(--foreground)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent-neon)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(128,128,128,0.3)")}
            />
          </div>

          {/* Messages d'erreur / confirmation */}
          {error && (
            <p className="text-sm px-3 py-2 rounded" style={{ color: "var(--accent-blood)", backgroundColor: "rgba(158,42,43,0.08)" }}>
              {error}
            </p>
          )}
          {message && (
            <p className="text-sm px-3 py-2 rounded" style={{ color: "var(--accent-neon)", backgroundColor: "rgba(224,159,62,0.08)" }}>
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded text-sm font-medium tracking-wide transition-all mt-2"
            style={{
              backgroundColor: "var(--accent-neon)",
              color: "#0d1317",
              opacity: loading ? 0.6 : 1,
              cursor: loading ? "wait" : "pointer",
            }}
          >
            {loading ? "..." : mode === "login" ? "Se connecter" : "Créer le compte"}
          </button>
        </form>

        {/* Lien mot de passe oublié */}
        {mode === "login" && (
          <p className="text-center text-xs mt-6 opacity-40">
            Mot de passe oublié ? Contacte-nous.
          </p>
        )}
      </div>
    </main>
  );
}