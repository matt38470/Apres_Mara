import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/src/lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia" as any,
});

const PRICE_IDS = {
  vip: process.env.STRIPE_PRICE_ID_VIP!,
  standard: process.env.STRIPE_PRICE_ID_STANDARD!,
};

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { plan } = await req.json() as { plan: "vip" | "standard" };
  const priceId = PRICE_IDS[plan];

  if (!priceId) {
    return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
  }

  const baseUrl = req.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user.email,
    metadata: {
      user_id: user.id,
      plan,
    },
    success_url: `${baseUrl}/acheter/succes?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/acheter`,
    locale: "fr",
  });

  return NextResponse.json({ url: session.url });
}
