"use client";

import { useState } from "react";
import { createClient } from "@/src/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ConnexionContent() {
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
        setError("Erreur lors de l'inscription\u00a0: " + error.message);
      } else {
        setMessage("Un email de confirmation t'a \u00e9t\u00e9 envoy\u00e9. V\u00e9rifie ta bo\u00eete mail.");
      }
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#f7f5f0] dark:bg-[#0c0d10]">
      <div className="w-full max-w-md">

        {/* En-tête */}
        <div className="text-center mb-10">
          <Link
            href="/"
            className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.24em] text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            &#8592; Retour
          </Link>

          <div className="text-[10px] font-bold uppercase tracking-[0.36em] text-amber-600 dark:text-amber-400 mb-2">
            Carnet de Traqueur
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Le Cartel des \u00c2mes
          </h1>

          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {mode === "login"
              ? "Acc\u00e8de \u00e0 ton dossier traqueur"
              : "Ouvre un nouveau dossier"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-8 border-b border-black/10 dark:border-white/10">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => { setMode(m); setError(null); setMessage(null); }}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all border-b-2 -mb-px ${
                mode === m
                  ? "border-amber-500 text-amber-600 dark:text-amber-400"
                  : "border-transparent text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              }`}
            >
              {m === "login" ? "Connexion" : "Cr\u00e9er un compte"}
            </button>
          ))}
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              className="w-full px-4 py-3 rounded-xl text-sm bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none transition-all focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              Mot de passe
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              className="w-full px-4 py-3 rounded-xl text-sm bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none transition-all focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          {error && (
            <p className="text-sm px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

          {message && (
            <p className="text-sm px-4 py-3 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full text-sm font-bold uppercase tracking-[0.18em] mt-2 transition-all bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white disabled:opacity-60 disabled:cursor-wait"
          >
            {loading
              ? "..."
              : mode === "login"
              ? "Se connecter"
              : "Cr\u00e9er le compte"}
          </button>
        </form>

        {mode === "login" && (
          <p className="text-center text-xs mt-6 text-neutral-400">
            Mot de passe oubli\u00e9\u00a0? Contacte-nous.
          </p>
        )}

      </div>
    </main>
  );
}
