"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useGameStore } from "@/src/store/gameStore";

interface GaugeProps {
  idKey: "dette" | "ancrage" | "humanite";
  label: string;
  value: number;
  colorTheme: "red" | "orange" | "green";
  description: string;
}

export default function Gauge({
  idKey,
  label,
  value,
  colorTheme,
  description,
}: GaugeProps) {
  const { lastEffects } = useGameStore();
  const [showFeedback, setShowFeedback] = useState(false);
  const [impactValue, setImpactValue] = useState<number | null>(null);

  useEffect(() => {
    if (lastEffects && lastEffects[idKey] !== undefined) {
      setImpactValue(lastEffects[idKey] ?? null);
      setShowFeedback(true);

      const timer = setTimeout(() => {
        setShowFeedback(false);
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, [lastEffects, idKey]);

  const colorMap = {
    red: {
      bar: "bg-[#9e2a2b] dark:bg-[#dc2f02]",
      text: "text-[#9e2a2b] dark:text-[#dc2f02]",
      ring: "ring-[#9e2a2b]/30",
    },
    green: {
      bar: "bg-[#283618] dark:bg-[#606c38]",
      text: "text-[#283618] dark:text-[#606c38]",
      ring: "ring-[#283618]/30",
    },
    orange: {
      bar: "bg-[#e09f3e] dark:bg-[#ffba08]",
      text: "text-[#e09f3e] dark:text-[#ffba08]",
      ring: "ring-[#e09f3e]/30",
    },
  };

  const theme = colorMap[colorTheme];
  const isCritical = value >= 75 || value <= 25;

  return (
    <div className="group relative w-full cursor-default">
      <div
        className={`rounded-xl border border-black/10 bg-white/70 px-3 py-2 transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] ${
          showFeedback ? `ring-1 ${theme.ring}` : ""
        }`}
      >
        <div className="mb-1.5 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <span
              className={`block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 transition-colors duration-300 dark:text-neutral-400 ${
                isCritical ? theme.text : ""
              }`}
            >
              {label}
            </span>
          </div>

          <div className="relative h-4 min-w-[42px] text-right">
            <AnimatePresence mode="wait">
              {showFeedback && impactValue !== null ? (
                <motion.span
                  key="feedback"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className={`absolute right-0 top-0 text-[11px] font-bold ${
                    impactValue > 0 ? theme.text : "text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {impactValue > 0 ? "+" : ""}
                  {impactValue}
                </motion.span>
              ) : (
                <motion.span
                  key="value"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`absolute right-0 top-0 text-[11px] font-semibold ${
                    isCritical ? theme.text : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {value}%
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="relative h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
          <motion.div
            className={`h-full rounded-full ${theme.bar}`}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
        </div>

        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[10px] text-neutral-400 dark:text-neutral-500">0</span>
          <span className="text-[10px] text-neutral-400 dark:text-neutral-500">100</span>
        </div>
      </div>

      <div className="pointer-events-none invisible absolute left-1/2 top-full z-[120] mt-2 w-48 -translate-x-1/2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-center text-[11px] leading-relaxed text-neutral-700 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 dark:border-neutral-800 dark:bg-[#141414] dark:text-neutral-200">
        {description}
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white dark:border-neutral-800 dark:bg-[#141414]" />
      </div>
    </div>
  );
}