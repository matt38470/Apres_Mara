import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

// Client admin avec service role pour bypasser RLS
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature invalide:", err);
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.user_id;
    const plan = session.metadata?.plan;

    if (!userId) {
      console.error("user_id manquant dans les metadata");
      return NextResponse.json({ error: "user_id manquant" }, { status: 400 });
    }

    const isVip = plan === "vip";

    const { error } = await supabaseAdmin
      .from("user_entitlements")
      .upsert(
        {
          user_id: userId,
          has_premium: true,
          is_vip: isVip,
          premium_since: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );

    if (error) {
      console.error("Erreur Supabase:", error);
      return NextResponse.json({ error: "Erreur BDD" }, { status: 500 });
    }

    console.log(`Accès premium activé pour ${userId} (plan: ${plan})`);
  }

  return NextResponse.json({ received: true });
}
