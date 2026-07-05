"use client";

import { createClient } from "@/src/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignOutButton() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className="w-full rounded-full border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm font-bold uppercase tracking-[0.18em] transition-all hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-300 disabled:opacity-50"
    >
      {loading ? "Déconnexion..." : "Se déconnecter"}
    </button>
  );
}
