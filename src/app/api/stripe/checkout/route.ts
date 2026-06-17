import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/src/lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

/**
 * Logique de sélection du price :
 *  - Si STRIPE_PRICE_ID_VIP est défini  => offre Early Adopter à 2,99€ (actuelle)
 *  - Sinon                               => offre Standard à 4,99€ (septembre)
 * Pour basculer en septembre : retirer STRIPE_PRICE_ID_VIP de Vercel (ou le vider).
 */
function getActivePriceId(): string {
  const vip = process.env.STRIPE_PRICE_ID_VIP;
  const standard = process.env.STRIPE_PRICE_ID_STANDARD;

  if (vip && vip.trim() !== "") return vip;
  if (standard && standard.trim() !== "") return standard;

  throw new Error("Aucun STRIPE_PRICE_ID configuré dans les variables d'environnement.");
}

export async function POST(request: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non connecté" }, { status: 401 });
  }

  let priceId: string;
  try {
    priceId = getActivePriceId();
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Configuration Stripe manquante." },
      { status: 500 }
    );
  }

  const { redirect } = await request.json();
  const origin = new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata: {
      user_id: user.id,
    },
    success_url: `${origin}${redirect ?? "/"}?payment=success`,
    cancel_url: `${origin}/abonnement?payment=cancelled`,
    customer_email: user.email,
  });

  return NextResponse.json({ url: session.url });
}
