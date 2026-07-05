"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/src/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";

type Section = "infos" | "securite";

export default function AccountContent() {
  const supabase = createClient();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>("infos");

  // Mot de passe
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdError, setPwdError] = useState<string | null>(null);
  const [pwdSuccess, setPwdSuccess] = useState(false);

  // Déconnexion
  const [signOutLoading, setSignOutLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/auth/connexion?redirect=%2Faccount");
      } else {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, []);

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setPwdError(null);
    setPwdSuccess(false);

    if (newPassword !== confirmPassword) {
      setPwdError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (newPassword.length < 6) {
      setPwdError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setPwdLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setPwdLoading(false);

    if (error) {
      setPwdError("Erreur : " + error.message);
    } else {
      setPwdSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  }

  async function handleSignOut() {
    setSignOutLoading(true);
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f7f5f0] dark:bg-[#0c0d10]">
        <div className="text-sm text-neutral-400 animate-pulse">Chargement…</div>
      </main>
    );
  }

  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const tabs: { id: Section; label: string }[] = [
    { id: "infos", label: "Mon compte" },
    { id: "securite", label: "Sécurité" },
  ];

  return (
    <main className="min-h-screen px-4 py-12 bg-[#f7f5f0] dark:bg-[#0c0d10]">
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-block mb-6 text-xs font-bold uppercase tracking-[0.24em] text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            ← Retour
          </Link>

          <div className="text-[10px] font-bold uppercase tracking-[0.36em] text-amber-600 dark:text-amber-400 mb-2">
            Carnet de Traqueur
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Mon compte
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Dossier Vance · Le Cartel des Âmes
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-8 border-b border-black/10 dark:border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveSection(tab.id)}
              className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all border-b-2 -mb-px ${
                activeSection === tab.id
                  ? "border-amber-500 text-amber-600 dark:text-amber-400"
                  : "border-transparent text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section : Infos */}
        {activeSection === "infos" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500 mb-4">
                Informations
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    Email
                  </div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {user?.email}
                  </div>
                </div>

                {createdAt && (
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                      Membre depuis
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">
                      {createdAt}
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    Identifiant
                  </div>
                  <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 break-all">
                    {user?.id}
                  </div>
                </div>
              </div>
            </div>

            {/* Déconnexion */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500 mb-4">
                Session
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                disabled={signOutLoading}
                className="w-full py-3 rounded-full text-sm font-bold uppercase tracking-[0.18em] transition-all border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:border-red-400/40 hover:text-red-600 dark:hover:text-red-400 disabled:opacity-50 disabled:cursor-wait"
              >
                {signOutLoading ? "Déconnexion…" : "Se déconnecter"}
              </button>
            </div>
          </div>
        )}

        {/* Section : Sécurité */}
        {activeSection === "securite" && (
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500 mb-6">
              Changer le mot de passe
            </div>

            <form onSubmit={handlePasswordChange} className="flex flex-col gap-5">
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

              {pwdError && (
                <p className="text-sm px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400">
                  {pwdError}
                </p>
              )}

              {pwdSuccess && (
                <p className="text-sm px-4 py-3 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300">
                  Mot de passe mis à jour avec succès.
                </p>
              )}

              <button
                type="submit"
                disabled={pwdLoading}
                className="w-full py-3 rounded-full text-sm font-bold uppercase tracking-[0.18em] mt-2 transition-all bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white disabled:opacity-60 disabled:cursor-wait"
              >
                {pwdLoading ? "Mise à jour…" : "Mettre à jour"}
              </button>
            </form>
          </div>
        )}

      </div>
    </main>
  );
}
