import { createClient } from "@/src/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import RestartButtons from "./RestartButtons";
import DeleteAccountButton from "./DeleteAccountButton";

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth/connexion?redirect=/account");

  // Récupère la progression depuis Supabase
  const { data: progress } = await supabase
    .from("reader_progress")
    .select("chapter, unit_number")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const currentChapter = progress?.chapter ?? 1;
  const resumeUrl = progress
    ? `/read/${progress.chapter}/${progress.unit_number}`
    : "/read/1/1.1.1";
  const chapterStartUrl = `/read/${currentChapter}/start`;

  const { message } = await searchParams;

  const memberSince = new Date(user.created_at).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen px-4 py-16 bg-[#f7f5f0] dark:bg-[#0c0d10]">
      <div className="mx-auto w-full max-w-md flex flex-col gap-8">

        {/* Header */}
        <div className="text-center">
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
            Dossier traqueur
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {user.email}
          </p>
        </div>

        {/* Message flash */}
        {message && (
          <p className="text-sm px-4 py-3 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-center">
            {message}
          </p>
        )}

        {/* Infos compte */}
        <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-5 flex flex-col gap-3">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400 mb-1">
            Informations
          </h2>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-500 dark:text-neutral-400">Email</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">{user.email}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-500 dark:text-neutral-400">Membre depuis</span>
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">{memberSince}</span>
          </div>
          {progress && (
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500 dark:text-neutral-400">Progression</span>
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                Chapitre {progress.chapter} · Scène {progress.unit_number}
              </span>
            </div>
          )}
        </section>

        {/* Lecture */}
        <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-5 flex flex-col gap-3">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400 mb-1">
            Lecture
          </h2>
          <RestartButtons
            progress={progress ?? null}
            resumeUrl={resumeUrl}
            chapterStartUrl={chapterStartUrl}
            currentChapter={currentChapter}
          />
        </section>

        {/* Déconnexion */}
        <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-5 flex flex-col gap-3">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400 mb-1">
            Session
          </h2>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="w-full rounded-full border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm font-bold uppercase tracking-[0.18em] transition-all hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-300"
            >
              Se déconnecter
            </button>
          </form>
        </section>

        {/* Zone danger */}
        <section className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-5 flex flex-col gap-3">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.24em] text-red-400 mb-1">
            Zone dangereuse
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            La suppression du compte est définitive et irréversible.
          </p>
          <DeleteAccountButton />
        </section>

      </div>
    </main>
  );
}
