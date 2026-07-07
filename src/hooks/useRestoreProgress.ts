"use client";
import { useEffect } from "react";
import { createClient } from "@/src/lib/supabase/client";
import { useGameStore } from "@/src/store/gameStore";

export function useRestoreProgress() {
  const setCurrentUnitId = useGameStore((s) => s.setCurrentUnitId);

  useEffect(() => {
    async function restore() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data: progress } = await supabase
        .from("user_progress")
        .select("unit_number")
        .eq("user_id", user.id)
        .maybeSingle();

      if (progress?.unit_number) {
        setCurrentUnitId(progress.unit_number);
      }
    }
    restore();
  }, [setCurrentUnitId]);
}
