"use server";

import { createClient } from "@/src/lib/supabase/server";

export async function saveProgress(
  chapterNumber: number,
  unitNumber: string
): Promise<void> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Utilisateur non connecté → on ignore silencieusement
  if (!user) return;

  await supabase.from("user_progress").upsert(
    {
      user_id: user.id,
      chapter: chapterNumber,
      unit_number: unitNumber,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
}
