"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/src/store/gameStore';
import Gauge from '@/src/components/Gauge';
import ArchivesModal from '@/src/components/ArchivesModal';
import { getUnitPathById } from '@/src/lib/narrative/units';
import type { NarrativeUnit, NarrativeChoice } from '@/src/types/narrative';

export default function UnitRenderer({ unit }: { unit: NarrativeUnit }) {
  const router = useRouter();
  const {
    gauges,
    archives,
    applyChoice,
    choiceHistory,
    unlockedCharacters,
    newArchives,
    newCharacters,
    markArchivesSeen,
    markCharactersSeen,
    resetGame,
    currentUnitId,
    quickNote,
  } = useGameStore();
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [unit.id]);

  const handleChoice = (choice: NarrativeChoice) => {
    if (choice.effects) {
      applyChoice(choice.effects, choice.unlockArchive);
    }
    const nextPath = getUnitPathById(choice.nextUnitId);
    router.push(nextPath);
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-neutral-200 font-sans pb-24 selection:bg-amber-500/30">

      {/* Gauges header */}
      <header className="sticky top-0 bg-[#101216]/95 backdrop-blur-md border-b border-white/10 p-3 z-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-x-2 gap-y-3">
            <Gauge
              idKey="dette"
              label="Dette"
              value={gauges.dette}
              colorTheme="red"
              description="Le poids des obligations accumulées"
            />
            <Gauge
              idKey="ancrage"
              label="Ancrage"
              value={gauges.ancrage}
              colorTheme="green"
              description="La stabilité mentale de Thomas"
            />
            <Gauge
              idKey="humanite"
              label="Humanité"
              value={gauges.humanite}
              colorTheme="orange"
              description="La capacité d'empathie et de connexion"
            />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 md:px-8 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {/* Scene label */}
            <p className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.3em] mb-5">
              SCÈNE — {unit.title}
              {unit.timeLabel ? <span className="text-neutral-500"> · {unit.timeLabel}</span> : null}
            </p>

            {/* Narrative text */}
            <div className="text-[1.0625rem] md:text-[1.125rem] leading-[1.85] text-neutral-300 mb-14 space-y-6">
              {unit.textBlocks.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            {/* Choice buttons — solid amber, same style as homepage CTA */}
            <div className="flex flex-col gap-3">
              {unit.choices.map((choice, index) => (
                <motion.button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="group w-full text-left rounded-full bg-amber-500 px-6 py-4 font-bold text-black transition-colors duration-200 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d10]"
                >
                  <span className="block font-bold uppercase tracking-[0.12em] text-sm">
                    {choice.label}
                  </span>
                  {choice.hint && (
                    <span className="mt-0.5 block text-xs font-medium normal-case tracking-normal text-black/60">
                      {choice.hint}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Archives FAB */}
      <button
        onClick={() => setIsArchiveOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-[#1c1b19] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500 shadow-xl transition hover:border-amber-500/30 hover:bg-[#22211f]"
      >
        Dossiers
        {(archives?.length || 0) > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
            {archives?.length}
          </span>
        )}
      </button>

      <ArchivesModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        unlockedArchives={archives}
        unlockedCharacters={unlockedCharacters}
        newArchives={newArchives}
        newCharacters={newCharacters}
        markArchivesSeen={markArchivesSeen}
        markCharactersSeen={markCharactersSeen}
        choiceHistory={choiceHistory}
        gauges={gauges}
        notes={quickNote ? [quickNote] : []}
        currentUnitId={currentUnitId}
        onRestart={resetGame}
      />
    </div>
  );
}
