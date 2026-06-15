import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/src/lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export async function POST(request: Request) {
  const supabase = await createClient();

  // Vérifier que l'utilisateur est connecté
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non connecté" }, { status: 401 });
  }

  const { redirect } = await request.json();
  const origin = new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
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
