"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useGameStore } from "@/src/store/gameStore";

export default function ReaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const { settings, updateSettings } = useGameStore();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = resolvedTheme;

  return (
    <div className="relative flex items-center gap-2">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md border border-neutral-300 bg-[#fdfaf3] px-3 py-2 text-sm font-bold text-neutral-800 transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
      >
        Aa
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 flex w-64 flex-col gap-4 rounded-xl border border-neutral-200 bg-[#fdfaf3] p-4 shadow-2xl dark:border-white/10 dark:bg-[#0d1317]">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-500">
              Luminosité
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex-1 rounded border py-2 ${
                  currentTheme === "light"
                    ? "border-[#9e2a2b] bg-[#9e2a2b]/10 text-[#9e2a2b]" // Rouge sang séché pour l'actif en thème clair
                    : "border-neutral-300 text-neutral-600 dark:border-white/10 dark:text-neutral-400"
                }`}
              >
                ☀️ Clair
              </button>

              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex-1 rounded border py-2 ${
                  currentTheme === "dark"
                    ? "border-[#ffba08] bg-[#ffba08]/10 text-[#ffba08]" // Jaune néon pour l'actif en thème sombre
                    : "border-neutral-300 text-neutral-600 dark:border-white/10 dark:text-neutral-400"
                }`}
              >
                🌙 Sombre
              </button>
            </div>
          </div>

          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-500">
              Typographie
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => updateSettings({ fontFamily: "sans" })}
                className={`flex-1 rounded border py-2 font-sans ${
                  settings.fontFamily === "sans"
                    ? "border-[#9e2a2b] bg-[#9e2a2b]/10 text-[#9e2a2b] dark:border-[#ffba08] dark:bg-[#ffba08]/10 dark:text-[#ffba08]"
                    : "border-neutral-300 text-neutral-600 dark:border-white/10 dark:text-neutral-400"
                }`}
              >
                Moderne
              </button>

              <button
                type="button"
                onClick={() => updateSettings({ fontFamily: "serif" })}
                className={`flex-1 rounded border py-2 font-serif ${
                  settings.fontFamily === "serif"
                    ? "border-[#9e2a2b] bg-[#9e2a2b]/10 text-[#9e2a2b] dark:border-[#ffba08] dark:bg-[#ffba08]/10 dark:text-[#ffba08]"
                    : "border-neutral-300 text-neutral-600 dark:border-white/10 dark:text-neutral-400"
                }`}
              >
                Classique
              </button>
            </div>
          </div>

          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-neutral-500">
              Taille
            </span>

            <div className="flex gap-2 text-neutral-600 dark:text-neutral-400">
              <button
                type="button"
                onClick={() =>
                  updateSettings({ fontSize: Math.max(14, settings.fontSize - 2) })
                }
                className="flex-1 rounded border border-neutral-300 py-2 hover:bg-neutral-200 dark:border-white/10 dark:hover:bg-white/10"
              >
                A-
              </button>

              <div className="flex flex-1 items-center justify-center py-2 text-center font-mono text-sm">
                {settings.fontSize}px
              </div>

              <button
                type="button"
                onClick={() =>
                  updateSettings({ fontSize: Math.min(26, settings.fontSize + 2) })
                }
                className="flex-1 rounded border border-neutral-300 py-2 hover:bg-neutral-200 dark:border-white/10 dark:hover:bg-white/10"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}