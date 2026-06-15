import { notFound, redirect } from "next/navigation";
import { getScene } from "@/src/content/gameContent";
import SceneReaderClient from "@/src/components/SceneReaderClient";
import { createClient } from "@/src/lib/supabase/server";

type PageProps = {
  params: {
    chapterNumber: string;
    unitNumber: string;
  };
};

const FREE_CHAPTERS = [1, 2, 3];

export default async function ReadPage({ params }: PageProps) {
  const chapterNumber = Number(params.chapterNumber);
  const unitNumber = params.unitNumber;
  const currentPath = `/read/${chapterNumber}/${unitNumber}`;

  if (Number.isNaN(chapterNumber)) {
    notFound();
  }

  const scene = getScene(chapterNumber, unitNumber);
  if (!scene) {
    notFound();
  }

  // Chapitres gratuits → pas de vérification
  if (!FREE_CHAPTERS.includes(chapterNumber)) {
    const supabase = await createClient();

    // 1. Utilisateur connecté ?
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect(
        `/auth/connexion?redirect=${encodeURIComponent(currentPath)}`
      );
    }

    // 2. Utilisateur premium ?
    const { data: entitlement } = await supabase
      .from("user_entitlements")
      .select("has_premium")
      .eq("user_id", user.id)
      .single();

    if (!entitlement?.has_premium) {
      redirect(
        `/abonnement?chapter=${chapterNumber}&redirect=${encodeURIComponent(currentPath)}`
      );
    }
  }

  return <SceneReaderClient scene={scene} />;
}
