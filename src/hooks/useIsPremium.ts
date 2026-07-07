"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/src/lib/supabase/client";

/**
 * Lit has_premium depuis Supabase pour l'user connecté.
 * Retourne { isPremium, loading }.
 */
export function useIsPremium() {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function fetchPremium() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsPremium(false);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("user_entitlements")
        .select("has_premium")
        .eq("user_id", user.id)
        .single();

      setIsPremium(data?.has_premium === true);
      setLoading(false);
    }

    fetchPremium();
  }, []);

  return { isPremium, loading };
}
