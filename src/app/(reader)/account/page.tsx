import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";

async function signOut() {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut({ scope: "local" });
  redirect("/");
}

export default async function AccountPage({
  searchParams,
}: {
  searchParams?: Promise<{ message?: string }>;
}) {
  const params = await searchParams;
  const message = params?.message;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/connexion?redirect=/account");
  }

  const { data: entitlement } = await supabase
    .from("user_entitlements")
    .select("has_premium, premium_since")
    .eq("user_id", user.id)
    .maybeSingle();

  const { data: progress } = await supabase
    .from("user_progress")
    .select("chapter, unit_number")
    .eq("user_id", user.id)
    .maybeSingle();

  const hasPremium = entitlement?.has_premium ?? false;
  const premiumSince = entitlement?.premium_since
    ? new Date(entitlement.premium_since).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const resumeUrl = progress
    ? `/read/${progress.chapter}/${progress.unit_number}`
    : "/read/1/1.1.1";

  // Première scène de chaque chapitre
  const chapterStarts: Record<number, string> = {
    1: "1.1.1",
    2: "2.1.1",
    3: "3.1.1",
  };

  return (
    <main
      className="mx-auto flex min-h-screen max-w-lg flex-col px-6 py-16"
      style={{ color: "var(--foreground)" }}
    >
      <div className="mb-10">
        <Link
          href="/"
          className="mb-8 inline-block text-sm opacity-40 hover:opacity-70 transition-opacity"
        >
          ← Accueil
        </Link>
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          Mon compte
        </h1>
      </div>

      {message && (
        <div
          className="mb-6 rounded-xl px-4 py-3 text-sm"
          style={{
            backgroundColor: "rgba(224,159,62,0.1)",
            color: "var(--accent-neon)",
          }}
        >
          {message}
        </div>
      )}

      <div className="flex flex-col gap-5">

        {/* Informations */}
        <div
          className="rounded-2xl p-6 space-y-4"
          style={{
            border: "1px solid rgba(128,128,128,0.15)",
            backgroundColor: "rgba(128,128,128,0.04)",
          }}
        >
          <h2 className="text-xs font-bold uppercase tracking-widest opacity-40">
            Informations
          </h2>
          <div>
            <p className="text-xs opacity-40 mb-1">Email</p>
            <p className="text-sm">{user.email}</p>
          </div>
          <div>
            <p className="text-xs opacity-40 mb-1">Membre depuis</p>
            <p className="text-sm">
              {new Date(user.created_at).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Accès premium */}
        <div
          className="rounded-2xl p-6"
          style={{
            border: hasPremium
              ? "1px solid rgba(224,159,62,0.4)"
              : "1px solid rgba(128,128,128,0.15)",
            backgroundColor: hasPremium
              ? "rgba(224,159,62,0.06)"
              : "rgba(128,128,128,0.04)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold uppercase tracking-widest opacity-40">Accès</h2>
            <span
              className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
              style={{
                backgroundColor: hasPremium ? "var(--accent-neon)" : "rgba(128,128,128,0.15)",
                color: hasPremium ? "#0d1317" : "inherit",
              }}
            >
              {hasPremium ? "Premium" : "Gratuit"}
            </span>
          </div>
          {hasPremium ? (
            <div className="space-y-2">
              <p className="text-sm">✓ Accès complet à tous les chapitres</p>
              {premiumSince && (
                <p className="text-xs opacity-40">Activé le {premiumSince}</p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm opacity-60">Tu as accès aux chapitres 1 à 3 gratuitement.</p>
              <Link
                href="/abonnement"
                className="inline-block rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--accent-neon)", color: "#0d1317" }}
              >
                Débloquer l’accès complet
              </Link>
            </div>
          )}
        </div>

        {/* Lecture */}
        <div
          className="rounded-2xl p-6 space-y-3"
          style={{
            border: "1px solid rgba(128,128,128,0.15)",
            backgroundColor: "rgba(128,128,128,0.04)",
          }}
        >
          <h2 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Lecture</h2>

          {/* Continuer / Commencer */}
          <Link
            href={resumeUrl}
            className="flex flex-col gap-1 rounded-xl px-4 py-3 text-sm transition-all hover:opacity-70"
            style={{ border: "1px solid rgba(128,128,128,0.15)" }}
          >
            <div className="flex items-center justify-between">
              <span>{progress ? "Continuer la lecture" : "Commencer la lecture"}</span>
              <span className="opacity-40">→</span>
            </div>
            {progress && (
              <span className="text-xs opacity-40">
                Chapitre {progress.chapter} · Scène {progress.unit_number}
              </span>
            )}
          </Link>

          {/* Reprendre depuis le début du chapitre en cours */}
          {progress && (
            <Link
              href={`/read/${progress.chapter}/${chapterStarts[progress.chapter] ?? "1.1.1"}`}
              className="flex flex-col gap-1 rounded-xl px-4 py-3 text-sm transition-all hover:opacity-70"
              style={{ border: "1px solid rgba(128,128,128,0.15)" }}
            >
              <div className="flex items-center justify-between">
                <span>Reprendre depuis le début du chapitre {progress.chapter}</span>
                <span className="opacity-40">→</span>
              </div>
              <span className="text-xs opacity-40">Repart de la scène {chapterStarts[progress.chapter] ?? "1.1.1"}</span>
            </Link>
          )}

          {/* Recommencer depuis le début */}
          {progress && (
            <Link
              href="/read/1/1.1.1"
              className="flex flex-col gap-1 rounded-xl px-4 py-3 text-sm transition-all hover:opacity-70"
              style={{ border: "1px solid rgba(128,128,128,0.15)" }}
            >
              <div className="flex items-center justify-between">
                <span>Recommencer depuis le début</span>
                <span className="opacity-40">→</span>
              </div>
              <span className="text-xs opacity-40">Chapitre 1 · Scène 1.1.1</span>
            </Link>
          )}
        </div>

        {/* Déconnexion */}
        <div
          className="rounded-2xl p-6"
          style={{
            border: "1px solid rgba(128,128,128,0.15)",
            backgroundColor: "rgba(128,128,128,0.04)",
          }}
        >
          <form action={signOut}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all hover:opacity-70 text-left"
              style={{
                border: "1px solid rgba(158,42,43,0.3)",
                color: "var(--accent-blood)",
              }}
            >
              Se déconnecter
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
