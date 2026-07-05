"use client";

import { useState } from "react";
import { createClient } from "@/src/lib/supabase/client";

export default function ChangePasswordForm() {
  const supabase = createClient();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (newPassword.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setLoading(false);

    if (error) {
      setError("Erreur : " + error.message);
    } else {
      setSuccess(true);
      setNewPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
          Nouveau mot de passe
        </label>
        <input
          type="password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl text-sm bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none transition-all focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl text-sm bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none transition-all focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
        />
      </div>

      {error && (
        <p className="text-sm px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {success && (
        <p className="text-sm px-4 py-3 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300">
          Mot de passe mis à jour avec succès.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-full text-sm font-bold uppercase tracking-[0.18em] transition-all bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white disabled:opacity-60 disabled:cursor-wait"
      >
        {loading ? "Mise à jour…" : "Mettre à jour"}
      </button>
    </form>
  );
}
