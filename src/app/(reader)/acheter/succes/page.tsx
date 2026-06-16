import Link from "next/link";

export default function SuccesPage() {
  return (
    <main
      className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-16 text-center"
      style={{ color: "var(--foreground)" }}
    >
      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
        style={{ backgroundColor: "rgba(224,159,62,0.15)", color: "var(--accent-neon)" }}
      >
        ✓
      </div>
      <h1
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "var(--font-merriweather)" }}
      >
        Accès activé !
      </h1>
      <p className="text-base opacity-60 mb-8 max-w-sm">
        Merci pour votre soutien. Votre accès complet est maintenant disponible.
      </p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link
          href="/read/1/1.1.1"
          className="rounded-xl py-3 text-sm font-bold uppercase tracking-widest text-center transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--accent-neon)", color: "#0d1317" }}
        >
          Continuer la lecture
        </Link>
        <Link
          href="/account"
          className="rounded-xl py-3 text-sm text-center transition-opacity hover:opacity-70"
          style={{ border: "1px solid rgba(128,128,128,0.2)" }}
        >
          Mon compte
        </Link>
      </div>
    </main>
  );
}
